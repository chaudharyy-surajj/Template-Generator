import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#22d3ee22,transparent_35%),radial-gradient(circle_at_80%_10%,#a855f722,transparent_30%),radial-gradient(circle_at_50%_90%,#f59e0b22,transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20 space-y-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-200">
              <Sparkles className="h-4 w-4" /> Templates
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Ship your SaaS in hours, not weeks.</h1>
            <p className="text-lg text-slate-200">
              Templates is a production-ready Next.js + Express boilerplate with auth, billing, admin, docs, and a polished template library so you can focus on your product—not plumbing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" href="/register">
                Launch now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="btn-secondary" href="/templates">Browse templates</Link>
              <Link className="btn-secondary" href="/login">I already have an account</Link>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <div className="flex items-center gap-2 text-emerald-200"><ShieldCheck className="h-4 w-4" /> Secure</div>
                <p className="mt-1 text-slate-300">JWT + RBAC + rate limiting</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <div className="flex items-center gap-2 text-amber-200"><Zap className="h-4 w-4" /> Monetize</div>
                <p className="mt-1 text-slate-300">Stripe subscriptions + webhooks</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <div className="flex items-center gap-2 text-cyan-200"><ArrowRight className="h-4 w-4" /> Move fast</div>
                <p className="mt-1 text-slate-300">Admin, templates, docs included</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span className="font-semibold text-white">Starter stack</span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">Optimized</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Next.js 14 + TypeScript + App Router</li>
              <li>Tailwind CSS tokens, ready for shadcn/ui</li>
              <li>Express API with JWT auth, zod validation, Prisma</li>
              <li>Stripe subscriptions with webhook handlers</li>
              <li>Admin RBAC, dashboard shell, API docs</li>
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-200">Performance</p>
                <p className="text-lg font-semibold text-white">Edge-ready, cached assets</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-xs uppercase tracking-wide text-amber-200">DX</p>
                <p className="text-lg font-semibold text-white">Type-safe end-to-end</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
