import Stripe from "stripe";
import { prisma } from "./prisma";
import { env } from "../config/env";

const stripe = new Stripe(env.stripeSecretKey || "", { apiVersion: "2024-04-10" });

export const listPlans = async () => {
  return prisma.plan.findMany({});
};

export const getCurrentSubscription = async (userId: string) => {
  return prisma.subscription.findFirst({ where: { userId }, include: { plan: true } });
};

export const createCheckoutSession = async (userId: string, planId: string, successUrl: string, cancelUrl: string) => {
  const plan = await prisma.plan.findUnique({ where: { id: planId } });
  if (!plan) throw new Error("Plan not found");

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [{ price: plan.stripePriceId, quantity: 1 }],
    client_reference_id: userId
  });

  return session.url;
};

export const cancelSubscription = async (subscriptionId: string) => {
  await stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: true });
  return true;
};
