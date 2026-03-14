"use client";

import { Sidebar } from "@/components/Sidebar";
import { PlanCard } from "@/components/PlanCard";
import { useAuth } from "@/context/auth-context";

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    features: ["Basic analytics", "Community support", "1 project"],
    cta: "Stay on Free"
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["Unlimited projects", "Email support", "Stripe billing"],
    cta: "Upgrade"
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["SAML SSO", "Dedicated support", "Audit logs"],
    cta: "Contact sales"
  }
];

export default function BillingPage() {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar role={user?.role} />
      <div className="flex-1 space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Billing</h1>
          <p className="text-sm text-slate-400">Manage your subscription and payment details.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map(plan => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              cta={plan.cta}
              onSelect={() => alert(`Checkout for ${plan.name} plan. Wire up to Stripe session API.`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
