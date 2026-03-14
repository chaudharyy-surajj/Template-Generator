import { Request, Response } from "express";
import { prisma } from "../services/prisma";

export const listUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true, createdAt: true } });
  return res.json(users);
};

export const listSubscriptions = async (_req: Request, res: Response) => {
  const subs = await prisma.subscription.findMany({ include: { plan: true, user: { select: { email: true } } } });
  return res.json(subs);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.user.delete({ where: { id } });
  return res.status(204).send();
};
