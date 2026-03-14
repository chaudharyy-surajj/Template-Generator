import { ReactNode } from "react";

export const DashboardCard = ({ title, value, children }: { title: string; value?: string; children?: ReactNode }) => (
  <div className="card space-y-2">
    <div className="text-sm font-semibold text-slate-400">{title}</div>
    {value && <div className="text-3xl font-bold text-white">{value}</div>}
    {children}
  </div>
);
