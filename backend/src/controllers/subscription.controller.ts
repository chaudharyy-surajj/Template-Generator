import { Request, Response } from "express";
import { cancelSubscription, createCheckoutSession, getCurrentSubscription, listPlans } from "../services/subscription.service";
import { env } from "../config/env";
import { z } from "zod";

const createSchema = z.object({
  body: z.object({ planId: z.string().uuid() })
});

export const getPlans = async (_req: Request, res: Response) => {
  const plans = await listPlans();
  return res.json(plans);
};

export const currentSubscription = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  const subscription = await getCurrentSubscription(req.user.id);
  return res.json(subscription);
};

export const createSubscription = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  const parsed = createSchema.safeParse(req);
  if (!parsed.success) return res.status(400).json({ issues: parsed.error.issues });

  const url = await createCheckoutSession(
    req.user.id,
    parsed.data.body.planId,
    `${env.frontendUrl}/dashboard?checkout=success`,
    `${env.frontendUrl}/billing?checkout=cancel`
  );
  return res.json({ url });
};

export const cancel = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  const schema = z.object({ body: z.object({ stripeSubscriptionId: z.string() }) });
  const parsed = schema.safeParse(req);
  if (!parsed.success) return res.status(400).json({ issues: parsed.error.issues });

  await cancelSubscription(parsed.data.body.stripeSubscriptionId);
  return res.status(200).json({ message: "Subscription canceled" });
};
