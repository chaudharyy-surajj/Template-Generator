import { Request, Response } from "express";
import { loginUser, registerUser, getProfile } from "../services/auth.service";
import { z } from "zod";
import { env } from "../config/env";
import type { CookieOptions } from "express";

const authSchema = {
  register: z.object({
    body: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(8)
    })
  }),
  login: z.object({
    body: z.object({ email: z.string().email(), password: z.string().min(8) })
  }),
  reset: z.object({
    body: z.object({ email: z.string().email() })
  })
};

const isLocal = env.frontendUrl.includes("localhost") || env.frontendUrl.includes("127.0.0.1");
const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: isLocal ? "lax" : "none",
  secure: !isLocal
};

export const register = async (req: Request, res: Response) => {
  const parsed = authSchema.register.safeParse(req);
  if (!parsed.success) return res.status(400).json({ issues: parsed.error.issues });

  try {
    const { user, token } = await registerUser(parsed.data.body.name, parsed.data.body.email, parsed.data.body.password);
    res.cookie("token", token, cookieOptions);
    return res.status(201).json({ id: user.id, email: user.email, name: user.name, role: user.role });
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  const parsed = authSchema.login.safeParse(req);
  if (!parsed.success) return res.status(400).json({ issues: parsed.error.issues });

  try {
    const { user, token } = await loginUser(parsed.data.body.email, parsed.data.body.password);
    res.cookie("token", token, cookieOptions);
    return res.status(200).json({ id: user.id, email: user.email, name: user.name, role: user.role });
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
};

export const me = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  const profile = await getProfile(req.user.id);
  return res.json(profile);
};

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie("token", cookieOptions);
  return res.status(200).json({ message: "Logged out" });
};

export const resetPassword = async (req: Request, res: Response) => {
  const parsed = authSchema.reset.safeParse(req);
  if (!parsed.success) return res.status(400).json({ issues: parsed.error.issues });
  // Hook up with email provider
  return res.status(200).json({ message: "Password reset email queued" });
};
