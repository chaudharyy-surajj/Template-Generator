"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-6 py-3">
      <div className="flex items-center gap-6">
        <Link aria-label="Go to home" href="/" className="flex items-center gap-3 rounded-md px-1 py-0.5 transition hover:-translate-y-0.5 hover:bg-slate-800/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-gradient-to-br from-primary-500 via-blue-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-primary-900/30">
            T
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-slate-100">Templates</div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Build Faster</div>
          </div>
        </Link>
        <div className="hidden items-center gap-2 text-sm font-medium text-slate-200 sm:flex">
          <Link className="rounded-lg border border-slate-800 px-3 py-1.5 transition hover:border-primary-400 hover:text-primary-100" href="/templates">
            Templates
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        {user ? (
          <>
            <span className="text-slate-300">{user.email}</span>
            <button className="btn-secondary" onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link className="btn-secondary" href="/login">Login</Link>
            <Link className="btn-primary" href="/register">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
};
