import { Request, Response } from "express";
import { prisma } from "../services/prisma";
import { z } from "zod";

const updateSchema = z.object({
  body: z.object({ name: z.string().min(2), email: z.string().email() })
});

export const getProfile = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: { id: true, name: true, email: true, role: true, createdAt: true }
  });
  return res.json(user);
};

export const updateProfile = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  const parsed = updateSchema.safeParse(req);
  if (!parsed.success) return res.status(400).json({ issues: parsed.error.issues });

  const updated = await prisma.user.update({
    where: { id: req.user.id },
    data: parsed.data.body,
    select: { id: true, name: true, email: true, role: true }
  });
  return res.json(updated);
};

export const deleteAccount = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  await prisma.user.delete({ where: { id: req.user.id } });
  res.clearCookie("token");
  return res.status(204).send();
};
