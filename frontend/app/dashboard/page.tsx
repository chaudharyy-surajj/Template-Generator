"use client";

import { useAuth } from "@/context/auth-context";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";

const metrics = [
  { title: "MRR", value: "$8.2k" },
  { title: "Active Users", value: "1,204" },
  { title: "Churn", value: "2.3%" },
  { title: "Uptime", value: "99.9%" }
];

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) return <p className="p-6 text-slate-300">Loading...</p>;
  if (!user) return <p className="p-6 text-slate-300">Please login to access the dashboard.</p>;

  return (
    <div className="flex">
      <Sidebar role={user.role} />
      <div className="flex-1 space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-slate-400">Welcome back, {user.name}.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map(metric => (
            <DashboardCard key={metric.title} title={metric.title} value={metric.value} />
          ))}
        </div>
        <div className="card">
          <div className="text-sm font-semibold text-slate-300">Getting started</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
            <li>Set your API keys in the backend and frontend env files.</li>
            <li>Run database migrations with Prisma to create user, plan, and subscription tables.</li>
            <li>Update Stripe price IDs in the backend plan seeds.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
