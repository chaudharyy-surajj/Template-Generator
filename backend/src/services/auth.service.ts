import { prisma } from "./prisma";
import { comparePassword, hashPassword } from "../utils/password";
import { signToken } from "../utils/jwt";
import { Role } from "../types/common";

export const registerUser = async (name: string, email: string, password: string) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error("Email already in use");

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({ data: { name, email, password: hashed } });
  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  return { user, token };
};

export const getProfile = async (id: string) => {
  return prisma.user.findUnique({ where: { id }, select: { id: true, email: true, name: true, role: true, createdAt: true } });
};

export const ensureAdminSeed = async () => {
  const adminEmail = "admin@saas.dev";
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (existing) return existing;

  const password = await hashPassword("password123");
  return prisma.user.create({ data: { email: adminEmail, name: "Admin", password, role: "ADMIN" as Role } });
};
