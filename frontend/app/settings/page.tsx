"use client";

import { useAuth } from "@/context/auth-context";
import { Sidebar } from "@/components/Sidebar";
import { FormEvent, useState } from "react";

export default function SettingsPage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Hook up to PUT /users/profile
    alert("Profile update stub. Connect to backend.");
  };

  return (
    <div className="flex">
      <Sidebar role={user?.role} />
      <div className="flex-1 space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-sm text-slate-400">Manage profile and account preferences.</p>
        </div>
        <form className="card space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm text-slate-300">Name</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="btn-primary" type="submit">Save changes</button>
        </form>
      </div>
    </div>
  );
}
