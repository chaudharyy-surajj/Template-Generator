"use client";

import { Sidebar } from "@/components/Sidebar";
import { useAuth } from "@/context/auth-context";

const users = [
  { id: "1", email: "alice@example.com", role: "ADMIN" },
  { id: "2", email: "bob@example.com", role: "USER" }
];

export default function AdminPage() {
  const { user } = useAuth();

  if (user?.role !== "ADMIN") {
    return <p className="p-6 text-slate-300">Admin access required.</p>;
  }

  return (
    <div className="flex">
      <Sidebar role={user.role} />
      <div className="flex-1 space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin</h1>
          <p className="text-sm text-slate-400">Manage users and subscriptions.</p>
        </div>
        <div className="card">
          <div className="mb-3 text-sm font-semibold text-slate-300">Users</div>
          <div className="divide-y divide-slate-800 text-sm text-slate-200">
            {users.map(u => (
              <div key={u.id} className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">{u.email}</div>
                  <div className="text-xs text-slate-400">Role: {u.role}</div>
                </div>
                <button className="btn-secondary">Deactivate</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
