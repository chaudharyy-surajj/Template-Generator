"use client";

import { ReactNode, useMemo, useState } from "react";
import { Check, Copy, Layers, Sparkles, LayoutTemplate, MousePointer2, PlayCircle } from "lucide-react";

type CodeTab = "html" | "css" | "react";

interface TemplateCode {
  html: string;
  css: string;
  react: string;
}

type TemplatePreview = (() => ReactNode) | ReactNode;

interface TemplateExample {
  id: string;
  name: string;
  description?: string;
  summary: string;
  language: string;
  tags: string[];
  code: TemplateCode | string;
  preview: TemplatePreview;
}

interface TemplateSection {
  id: string;
  title: string;
  accent: string;
  description: string;
  templates: TemplateExample[];
}

interface NormalizedTemplateExample extends Omit<TemplateExample, "code" | "preview" | "description"> {
  description: string;
  code: TemplateCode;
  preview: () => ReactNode;
}

interface NormalizedTemplateSection extends Omit<TemplateSection, "templates"> {
  templates: NormalizedTemplateExample[];
}

const createPreview = (title: string, subtitle: string, _badge?: string, _gradient?: string) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-slate-300">{subtitle}</p>
  </div>
);

const templateSections: TemplateSection[] = [
  {
    id: "authentication",
    title: "Authentication Templates",
    accent: "from-purple-500 to-indigo-500",
    description: "User authentication and access control systems",
    templates: [
      {
        id: "email-password-login",
        name: "Email & Password Login System",
        summary: "Secure sign-in with email and password.",
        language: "tsx",
        tags: ["Auth", "Login"],
        code: `export function EmailPasswordLoginSystem() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-violet-500/25 p-6 text-white shadow-2xl shadow-violet-900/20 transition-all duration-300 hover:shadow-violet-800/30 overflow-hidden relative group" style={{ backdropFilter: "blur(20px)", background: "linear-gradient(135deg, rgba(15, 10, 40, 0.92), rgba(10, 8, 30, 0.95))" }}>
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Welcome back</p>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.13),transparent_55%)] pointer-events-none" />
      <h3 className="relative mt-2 text-2xl font-semibold">Sign in to your workspace</h3>
      <p className="mt-1 text-sm text-slate-300">Use your email and password to continue.</p>
      <form className="mt-5 space-y-3">
        <label className="block text-sm text-slate-200">
          Email
          <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all duration-200 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20" placeholder="you@company.com" type="email" />
        </label>
        <label className="block text-sm text-slate-200">
          Password
          <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all duration-200 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20" placeholder="••••••••" type="password" />
        </label>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <label className="flex items-center gap-2">
            <input className="h-4 w-4 accent-emerald-400" type="checkbox" />
            Remember me
          </label>
          <button className="text-emerald-200" type="button">Forgot password?</button>
        </div>
        <button className="mt-4 w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] bg-gradient-to-br from-violet-600 to-indigo-600" type="button">Sign in</button>
      </form>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-violet-500/25 p-6 text-white shadow-2xl shadow-violet-900/20 transition-all duration-300 hover:shadow-violet-800/30 overflow-hidden relative group" style={{ backdropFilter: "blur(20px)", background: "linear-gradient(135deg, rgba(15, 10, 40, 0.92), rgba(10, 8, 30, 0.95))" }}>
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Welcome back</p>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.13),transparent_55%)] pointer-events-none" />
            <h3 className="relative mt-2 text-2xl font-semibold">Sign in to your workspace</h3>
            <p className="mt-1 text-sm text-slate-300">Use your email and password to continue.</p>
            <form className="mt-5 space-y-3">
              <label className="block text-sm text-slate-200">
                Email
                <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all duration-200 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20" placeholder="you@company.com" type="email" />
              </label>
              <label className="block text-sm text-slate-200">
                Password
                <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all duration-200 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20" placeholder="••••••••" type="password" />
              </label>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2">
                  <input className="h-4 w-4 accent-emerald-400" type="checkbox" />
                  Remember me
                </label>
                <button className="text-emerald-200" type="button">Forgot password?</button>
              </div>
              <button className="mt-4 w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] bg-gradient-to-br from-violet-600 to-indigo-600" type="button">Sign in</button>
            </form>
          </div>
        )
      },
      {
        id: "jwt-auth",
        name: "JWT Authentication Boilerplate",
        summary: "Token-based auth with refresh support.",
        language: "tsx",
        tags: ["Auth", "JWT"],
        code: `export function JWTAuthBoilerplate() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-[linear-gradient(135deg,rgba(15,12,45,0.95),rgba(10,8,30,0.98))] p-6 text-white shadow-xl shadow-indigo-900/10 transition-all duration-300 relative overflow-hidden group">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Security</p>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
        <h3 className="mt-1 text-xl font-semibold">JWT Authentication</h3>
        </div>
        <span className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs text-green-300 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Active</span>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-900/20">
          <p className="text-xs text-slate-400">Access token</p>
          <p className="mt-1 font-mono text-xs text-slate-100">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-900/20">
          <p className="text-xs text-slate-400">Refresh token</p>
          <p className="mt-1 font-mono text-xs text-slate-100">rfr_89f2c8d0b7b6</p>
        </div>
      </div>
      <button className="btn-secondary mt-4 w-full" type="button">Rotate tokens</button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-indigo-500/30 bg-[linear-gradient(135deg,rgba(15,12,45,0.95),rgba(10,8,30,0.98))] p-6 text-white shadow-xl shadow-indigo-900/10 transition-all duration-300 relative overflow-hidden group">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Security</p>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
                <h3 className="mt-1 text-xl font-semibold">JWT Authentication</h3>
              </div>
              <span className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs text-green-300 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Active</span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-900/20">
                <p className="text-xs text-slate-400">Access token</p>
                <p className="mt-1 font-mono text-xs text-slate-100">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-900/20">
                <p className="text-xs text-slate-400">Refresh token</p>
                <p className="mt-1 font-mono text-xs text-slate-100">rfr_89f2c8d0b7b6</p>
              </div>
            </div>
            <button className="btn-secondary mt-4 w-full" type="button">Rotate tokens</button>
          </div>
        )
      },
      {
        id: "oauth-login",
        name: "OAuth Login (Google & GitHub)",
        summary: "OAuth sign-in with provider buttons.",
        language: "tsx",
        tags: ["Auth", "OAuth"],
        code: `export function OAuthLogin() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,10,35,0.95),rgba(10,5,25,0.98))] p-6 text-white shadow-2xl relative overflow-hidden group">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_55%)] pointer-events-none" />
      <h3 className="relative text-xl font-semibold text-center">Continue with OAuth</h3>
      <p className="relative mt-1 text-sm text-slate-300 text-center">Choose a provider to sign in instantly.</p>
      <div className="mt-4 space-y-3">
        <button className="relative w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">Continue with Google</button>
        <button className="relative w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">Continue with GitHub</button>
      </div>
      <div className="relative my-4 flex items-center gap-3 text-xs text-slate-500">
        <span className="h-px flex-1 bg-slate-800" />
        or use email
        <span className="h-px flex-1 bg-slate-800" />
      </div>
      <button className="relative mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] bg-gradient-to-br from-violet-600 to-indigo-600" type="button">Use email instead</button>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,10,35,0.95),rgba(10,5,25,0.98))] p-6 text-white shadow-2xl relative overflow-hidden group">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_55%)] pointer-events-none" />
            <h3 className="relative text-xl font-semibold text-center">Continue with OAuth</h3>
            <p className="relative mt-1 text-sm text-slate-300 text-center">Choose a provider to sign in instantly.</p>
            <div className="mt-4 space-y-3">
              <button className="relative w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">Continue with Google</button>
              <button className="relative w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">Continue with GitHub</button>
            </div>
            <div className="relative my-4 flex items-center gap-3 text-xs text-slate-500">
              <span className="h-px flex-1 bg-slate-800" />
              or use email
              <span className="h-px flex-1 bg-slate-800" />
            </div>
            <button className="relative mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] bg-gradient-to-br from-violet-600 to-indigo-600" type="button">Use email instead</button>
          </div>
        )
      },
      {
        id: "password-reset",
        name: "Password Reset Flow",
        summary: "Password reset with success state.",
        language: "tsx",
        tags: ["Auth", "Reset"],
        code: `export function PasswordResetFlow() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-emerald-500/20 bg-[linear-gradient(135deg,rgba(5,20,20,0.97),rgba(8,30,25,0.97))] p-6 text-center text-white shadow-2xl shadow-emerald-900/10 relative overflow-hidden group">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />
      <p className="relative text-xs uppercase tracking-[0.2em] text-emerald-400">Password reset</p>
      <h3 className="relative mt-2 text-2xl font-semibold">Reset your password</h3>
      <p className="relative mt-1 text-sm text-slate-300">We will send a reset link to your inbox.</p>
      <form className="mt-4 space-y-3">
        <input className="relative w-full rounded-xl border border-emerald-500/20 bg-white/5 px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20" placeholder="you@company.com" type="email" />
        <button className="btn-primary w-full" type="button">Send reset link</button>
      </form>
      <p className="relative mt-3 text-xs text-slate-400">Did not get an email? Check spam or try again.</p>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-emerald-500/20 bg-[linear-gradient(135deg,rgba(5,20,20,0.97),rgba(8,30,25,0.97))] p-6 text-center text-white shadow-2xl shadow-emerald-900/10 relative overflow-hidden group">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-emerald-400">Password reset</p>
            <h3 className="relative mt-2 text-2xl font-semibold">Reset your password</h3>
            <p className="relative mt-1 text-sm text-slate-300">We will send a reset link to your inbox.</p>
            <form className="mt-4 space-y-3">
              <input className="relative w-full rounded-xl border border-emerald-500/20 bg-white/5 px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20" placeholder="you@company.com" type="email" />
              <button className="btn-primary w-full" type="button">Send reset link</button>
            </form>
            <p className="relative mt-3 text-xs text-slate-400">Did not get an email? Check spam or try again.</p>
          </div>
        )
      },
      {
        id: "email-verification",
        name: "Email Verification System",
        summary: "Verify user email with secure links.",
        language: "tsx",
        tags: ["Auth", "Verify"],
        code: `export function EmailVerificationSystem() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-indigo-500/20 bg-[linear-gradient(135deg,rgba(12,8,40,0.97),rgba(10,10,35,0.97))] p-6 text-center text-white shadow-2xl shadow-indigo-900/20 relative overflow-hidden group">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_55%)] pointer-events-none" />
      <p className="relative text-xs uppercase tracking-[0.2em] text-indigo-400">Verify email</p>
      <h3 className="relative mt-2 text-2xl font-semibold">Check your inbox</h3>
      <p className="mt-1 text-sm text-slate-300">We sent a verification link to your email.</p>
      <div className="relative mt-4 rounded-xl border border-indigo-500/20 bg-white/5 p-4 text-sm">
        <p className="text-slate-200">you@company.com</p>
        <p className="mt-1 text-xs text-slate-400">Link expires in 15 minutes.</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button className="flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] bg-gradient-to-br from-violet-600 to-indigo-600">Open email app</button>
        <button className="flex-1 rounded-xl border border-indigo-500/30 px-4 bg-indigo-500/10 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/20">Resend link</button>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-indigo-500/20 bg-[linear-gradient(135deg,rgba(12,8,40,0.97),rgba(10,10,35,0.97))] p-6 text-center text-white shadow-2xl shadow-indigo-900/20 relative overflow-hidden group">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_55%)] pointer-events-none" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-indigo-400">Verify email</p>
            <h3 className="relative mt-2 text-2xl font-semibold">Check your inbox</h3>
            <p className="mt-1 text-sm text-slate-300">We sent a verification link to your email.</p>
            <div className="relative mt-4 rounded-xl border border-indigo-500/20 bg-white/5 p-4 text-sm">
              <p className="text-slate-200">you@company.com</p>
              <p className="mt-1 text-xs text-slate-400">Link expires in 15 minutes.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] bg-gradient-to-br from-violet-600 to-indigo-600">Open email app</button>
              <button className="flex-1 rounded-xl border border-indigo-500/30 px-4 bg-indigo-500/10 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/20">Resend link</button>
            </div>
          </div>
        )
      },
      {
        id: "mfa-otp",
        name: "Multi-Factor Authentication (OTP)",
        summary: "OTP entry and verification screen.",
        language: "tsx",
        tags: ["Auth", "MFA"],
        code: `export function MultiFactorAuthenticationOTP() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-purple-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Security step</p>
      <h3 className="mt-2 text-2xl font-semibold">Enter your 6-digit code</h3>
      <p className="mt-1 text-sm text-slate-300">We sent a code to your authenticator app.</p>
      <div className="mt-4 grid grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          <input key={idx} maxLength={1} className="h-14 rounded-xl border border-purple-500/30 bg-purple-500/5 text-center text-xl font-bold text-white outline-none transition-all duration-200 focus:border-purple-400/80 focus:bg-purple-500/10 focus:shadow-lg focus:shadow-purple-500/20 focus:ring-2 focus:ring-purple-500/20" />
        ))}
      </div>
      <button className="btn-primary mt-4 w-full" type="button">Verify code</button>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-purple-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Security step</p>
            <h3 className="mt-2 text-2xl font-semibold">Enter your 6-digit code</h3>
            <p className="mt-1 text-sm text-slate-300">We sent a code to your authenticator app.</p>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, idx) => (
                <input key={idx} maxLength={1} className="h-14 rounded-xl border border-purple-500/30 bg-purple-500/5 text-center text-xl font-bold text-white outline-none transition-all duration-200 focus:border-purple-400/80 focus:bg-purple-500/10 focus:shadow-lg focus:shadow-purple-500/20 focus:ring-2 focus:ring-purple-500/20" />
              ))}
            </div>
            <button className="btn-primary mt-4 w-full" type="button">Verify code</button>
          </div>
        )
      }
    ]
  },
  {
    id: "billing-payments",
    title: "Billing & Payment Templates",
    accent: "from-amber-500 to-orange-500",
    description: "Payment and monetization systems",
    templates: [
      {
        id: "stripe-subscription",
        name: "Stripe Subscription Integration",
        summary: "Stripe subscriptions with plan selection.",
        language: "tsx",
        tags: ["Billing", "Stripe"],
        code: `export function StripeSubscriptionIntegration() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Subscriptions</p>
          <h3 className="mt-1 text-xl font-semibold">Choose your plan</h3>
        </div>
        <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">Stripe</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ name: "Starter", price: "$19" }, { name: "Growth", price: "$49", highlight: true }, { name: "Scale", price: "$129" }].map(plan => (
          <div key={plan.name} className={plan.highlight ? "rounded-xl border border-amber-400/50 bg-amber-500/5 p-4" : "rounded-xl border border-slate-800 bg-slate-900 p-4"}>
            <p className="text-sm font-semibold">{plan.name}</p>
            <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
            <p className="text-xs text-slate-400">per month</p>
            <button className="btn-primary mt-4 w-full" type="button">Select plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Subscriptions</p>
                <h3 className="mt-1 text-xl font-semibold">Choose your plan</h3>
              </div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">Stripe</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ name: "Starter", price: "$19" }, { name: "Growth", price: "$49", highlight: true }, { name: "Scale", price: "$129" }].map(plan => (
                <div key={plan.name} className={plan.highlight ? "rounded-xl border border-amber-400/50 bg-amber-500/5 p-4" : "rounded-xl border border-slate-800 bg-slate-900 p-4"}>
                  <p className="text-sm font-semibold">{plan.name}</p>
                  <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
                  <p className="text-xs text-slate-400">per month</p>
                  <button className="btn-primary mt-4 w-full" type="button">Select plan</button>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "one-time-checkout",
        name: "One-Time Payment Checkout",
        summary: "Single purchase checkout flow.",
        language: "tsx",
        tags: ["Billing", "Checkout"],
        code: `export function OneTimePaymentCheckout() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-orange-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-2xl font-semibold">Complete your purchase</h3>
      <p className="mt-1 text-sm text-slate-300">Pay once and get instant access.</p>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
        <div className="flex items-center justify-between">
          <span>Template bundle</span>
          <span className="font-semibold">$129</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
          <span>Tax</span>
          <span>$0</span>
        </div>
      </div>
      <form className="mt-4 space-y-3">
        <input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Card number" />
        <div className="grid grid-cols-2 gap-3">
          <input className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="MM / YY" />
          <input className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="CVC" />
        </div>
        <button className="btn-primary w-full" type="button">Pay $129</button>
      </form>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-orange-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-2xl font-semibold">Complete your purchase</h3>
            <p className="mt-1 text-sm text-slate-300">Pay once and get instant access.</p>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Template bundle</span>
                <span className="font-semibold">$129</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Tax</span>
                <span>$0</span>
              </div>
            </div>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Card number" />
              <div className="grid grid-cols-2 gap-3">
                <input className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="MM / YY" />
                <input className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="CVC" />
              </div>
              <button className="btn-primary w-full" type="button">Pay $129</button>
            </form>
          </div>
        )
      },
      {
        id: "pricing-ui",
        name: "Pricing Page UI",
        summary: "Pricing tiers and plan highlights.",
        language: "tsx",
        tags: ["Billing", "Pricing"],
        code: `export function PricingPageUI() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Pricing</p>
          <h3 className="mt-1 text-xl font-semibold">Simple, predictable pricing</h3>
        </div>
        <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">Monthly</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ name: "Starter", price: "$19", features: ["2 projects", "Email support"] }, { name: "Growth", price: "$49", features: ["Unlimited projects", "Priority support"], highlight: true }, { name: "Scale", price: "$129", features: ["SSO", "Dedicated CSM"] }].map(plan => (
          <div key={plan.name} className={plan.highlight ? "rounded-xl border border-amber-400/50 bg-amber-500/5 p-4" : "rounded-xl border border-slate-800 bg-slate-900 p-4"}>
            <p className="text-sm font-semibold">{plan.name}</p>
            <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {plan.features.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary mt-4 w-full" type="button">Choose plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Pricing</p>
                <h3 className="mt-1 text-xl font-semibold">Simple, predictable pricing</h3>
              </div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">Monthly</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ name: "Starter", price: "$19", features: ["2 projects", "Email support"] }, { name: "Growth", price: "$49", features: ["Unlimited projects", "Priority support"], highlight: true }, { name: "Scale", price: "$129", features: ["SSO", "Dedicated CSM"] }].map(plan => (
                <div key={plan.name} className={plan.highlight ? "rounded-xl border border-amber-400/50 bg-amber-500/5 p-4" : "rounded-xl border border-slate-800 bg-slate-900 p-4"}>
                  <p className="text-sm font-semibold">{plan.name}</p>
                  <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-300">
                    {plan.features.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary mt-4 w-full" type="button">Choose plan</button>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "invoice-generator",
        name: "Invoice Generator System",
        summary: "Generate downloadable invoices.",
        language: "tsx",
        tags: ["Billing", "Invoices"],
        code: `export function InvoiceGeneratorSystem() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Invoice Generator</h3>
        <button className="btn-secondary" type="button">Create invoice</button>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {[{ id: "INV-3122", amount: "$129", date: "Mar 12" }, { id: "INV-3098", amount: "$49", date: "Feb 12" }, { id: "INV-3071", amount: "$49", date: "Jan 12" }].map(invoice => (
          <div key={invoice.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <div>
              <p className="font-medium">{invoice.id}</p>
              <p className="text-xs text-slate-400">{invoice.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{invoice.amount}</span>
              <button className="text-xs text-amber-200" type="button">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Invoice Generator</h3>
              <button className="btn-secondary" type="button">Create invoice</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {[{ id: "INV-3122", amount: "$129", date: "Mar 12" }, { id: "INV-3098", amount: "$49", date: "Feb 12" }, { id: "INV-3071", amount: "$49", date: "Jan 12" }].map(invoice => (
                <div key={invoice.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-xs text-slate-400">{invoice.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">{invoice.amount}</span>
                    <button className="text-xs text-amber-200" type="button">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "billing-history",
        name: "Billing History Dashboard",
        summary: "Transaction history and receipts.",
        language: "tsx",
        tags: ["Billing", "History"],
        code: `export function BillingHistoryDashboard() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Billing History</h3>
        <span className="text-xs text-slate-400">Last 90 days</span>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {[{ label: "Stripe • Growth", status: "Paid", amount: "$49" }, { label: "Stripe • Growth", status: "Paid", amount: "$49" }, { label: "Stripe • Scale", status: "Refunded", amount: "$129" }].map((item, idx) => (
          <div key={item.label + "-" + idx} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-xs text-slate-400">Mar {12 - idx}, 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs rounded-full bg-white/10 px-2 py-1">{item.status}</span>
              <span className="font-semibold">{item.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Billing History</h3>
              <span className="text-xs text-slate-400">Last 90 days</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {[{ label: "Stripe • Growth", status: "Paid", amount: "$49" }, { label: "Stripe • Growth", status: "Paid", amount: "$49" }, { label: "Stripe • Scale", status: "Refunded", amount: "$129" }].map((item, idx) => (
                <div key={`${item.label}-${idx}`} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-xs text-slate-400">Mar {12 - idx}, 2026</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs rounded-full bg-white/10 px-2 py-1">{item.status}</span>
                    <span className="font-semibold">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "coupon-discount",
        name: "Coupon & Discount System",
        summary: "Coupon codes and promo discounts.",
        language: "tsx",
        tags: ["Billing", "Discounts"],
        code: `export function CouponDiscountSystem() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-orange-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <h3 className="text-xl font-semibold">Apply a promo code</h3>
      <p className="mt-1 text-sm text-slate-300">Save on your first month.</p>
      <div className="mt-4 flex gap-3">
        <input className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="SAVE20" />
        <button className="btn-primary" type="button">Apply</button>
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>$49</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-emerald-200">
          <span>Discount</span>
          <span>-$9.80</span>
        </div>
        <div className="mt-2 flex items-center justify-between font-semibold">
          <span>Total</span>
          <span>$39.20</span>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="mx-auto max-w-md rounded-2xl border border-orange-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <h3 className="text-xl font-semibold">Apply a promo code</h3>
            <p className="mt-1 text-sm text-slate-300">Save on your first month.</p>
            <div className="mt-4 flex gap-3">
              <input className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="SAVE20" />
              <button className="btn-primary" type="button">Apply</button>
            </div>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$49</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-emerald-200">
                <span>Discount</span>
                <span>-$9.80</span>
              </div>
              <div className="mt-2 flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>$39.20</span>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "subscription-management",
    title: "Subscription Management Templates",
    accent: "from-emerald-500 to-cyan-500",
    description: "Manage user plans and subscriptions",
    templates: [
      {
        id: "plan-upgrade-downgrade",
        name: "Plan Upgrade & Downgrade Logic",
        summary: "Switch plans with prorations.",
        language: "tsx",
        tags: ["Subscription", "Plans"],
        code: `export function PlanUpgradeDowngradeLogic() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Current plan</p>
          <h3 className="mt-1 text-2xl font-semibold">Growth</h3>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Renews in 12d</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {["Starter", "Growth", "Scale"].map(plan => (
          <div key={plan} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold">{plan}</p>
            <p className="text-xs text-slate-400">Best for {plan === "Scale" ? "enterprise" : "teams"}</p>
            <button className="btn-secondary mt-3 w-full" type="button">Switch to {plan}</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Current plan</p>
                <h3 className="mt-1 text-2xl font-semibold">Growth</h3>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Renews in 12d</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Starter", "Growth", "Scale"].map(plan => (
                <div key={plan} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm font-semibold">{plan}</p>
                  <p className="text-xs text-slate-400">Best for {plan === "Scale" ? "enterprise" : "teams"}</p>
                  <button className="btn-secondary mt-3 w-full" type="button">Switch to {plan}</button>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "feature-gating",
        name: "Free vs Paid Feature Gating",
        summary: "Gate features by plan tier.",
        language: "tsx",
        tags: ["Subscription", "Gating"],
        code: `export function FreeVsPaidFeatureGating() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">Feature access</h3>
      <p className="mt-1 text-sm text-slate-300">Upgrade to unlock premium features.</p>
      <ul className="mt-4 space-y-2 text-sm">
        {["Custom domains", "Team roles", "Usage exports"].map(item => (
          <li key={item} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{item}</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">Pro</span>
          </li>
        ))}
      </ul>
      <button className="btn-primary mt-4 w-full" type="button">Upgrade to Pro</button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">Feature access</h3>
            <p className="mt-1 text-sm text-slate-300">Upgrade to unlock premium features.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Custom domains", "Team roles", "Usage exports"].map(item => (
                <li key={item} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{item}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">Pro</span>
                </li>
              ))}
            </ul>
            <button className="btn-primary mt-4 w-full" type="button">Upgrade to Pro</button>
          </div>
        )
      },
      {
        id: "subscription-status",
        name: "Subscription Status Tracker",
        summary: "Active, trialing, past due states.",
        language: "tsx",
        tags: ["Subscription", "Status"],
        code: `export function SubscriptionStatusTracker() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <h3 className="text-xl font-semibold">Subscription status</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ label: "Active", color: "bg-emerald-500/15 text-emerald-100" }, { label: "Trialing", color: "bg-amber-500/15 text-amber-100" }, { label: "Past due", color: "bg-rose-500/15 text-rose-100" }].map(item => (
          <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold">{item.label}</p>
            <span className={"mt-2 inline-block rounded-full px-3 py-1 text-xs " + item.color}>Status</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <h3 className="text-xl font-semibold">Subscription status</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ label: "Active", color: "bg-emerald-500/15 text-emerald-100" }, { label: "Trialing", color: "bg-amber-500/15 text-amber-100" }, { label: "Past due", color: "bg-rose-500/15 text-rose-100" }].map(item => (
                <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm font-semibold">{item.label}</p>
                  <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs ${item.color}`}>Status</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "trial-period",
        name: "Trial Period System",
        summary: "Trial onboarding and expiry.",
        language: "tsx",
        tags: ["Subscription", "Trial"],
        code: `export function TrialPeriodSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Trial</p>
          <h3 className="mt-1 text-2xl font-semibold">7 days left</h3>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Ends Mar 21</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
      </div>
      <button className="btn-primary mt-4 w-full" type="button">Upgrade now</button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Trial</p>
                <h3 className="mt-1 text-2xl font-semibold">7 days left</h3>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Ends Mar 21</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </div>
            <button className="btn-primary mt-4 w-full" type="button">Upgrade now</button>
          </div>
        )
      },
      {
        id: "usage-based-billing",
        name: "Usage-Based Billing System",
        summary: "Metered usage with limits.",
        language: "tsx",
        tags: ["Subscription", "Usage"],
        code: `export function UsageBasedBillingSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <h3 className="text-xl font-semibold">Usage this month</h3>
      <p className="mt-1 text-sm text-slate-300">API calls billed by consumption.</p>
      <div className="mt-4 space-y-3">
        {[{ label: "API calls", value: "72%", fill: "72%" }, { label: "Seats", value: "12 / 20", fill: "60%" }].map(item => (
          <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
            <div className="flex items-center justify-between text-sm">
              <span>{item.label}</span>
              <span className="text-slate-300">{item.value}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: item.fill }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <h3 className="text-xl font-semibold">Usage this month</h3>
            <p className="mt-1 text-sm text-slate-300">API calls billed by consumption.</p>
            <div className="mt-4 space-y-3">
              {[{ label: "API calls", value: "72%", fill: "72%" }, { label: "Seats", value: "12 / 20", fill: "60%" }].map(item => (
                <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="text-slate-300">{item.value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: item.fill }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "dashboard-ui",
    title: "Dashboard UI Templates",
    accent: "from-blue-500 to-cyan-500",
    description: "Core UI layouts for SaaS dashboards",
    templates: [
      {
        id: "admin-dashboard-ui",
        name: "Admin Dashboard UI",
        summary: "Overview dashboard for admins.",
        language: "tsx",
        tags: ["Dashboard", "Admin"],
        code: `export function AdminDashboardUI() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Admin Dashboard</h3>
        <button className="btn-secondary" type="button">Export report</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ label: "MRR", value: "$42.8k" }, { label: "New users", value: "1,204" }, { label: "Churn", value: "2.1%" }].map(stat => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
        <p className="font-semibold">Recent alerts</p>
        <ul className="mt-2 space-y-2 text-slate-300">
          {["API error spike", "Trial conversions up", "2 failed webhooks"].map(item => (
            <li key={item} className="flex items-center justify-between">
              <span>{item}</span>
              <span className="text-xs text-slate-400">Just now</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Admin Dashboard</h3>
              <button className="btn-secondary" type="button">Export report</button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ label: "MRR", value: "$42.8k" }, { label: "New users", value: "1,204" }, { label: "Churn", value: "2.1%" }].map(stat => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
              <p className="font-semibold">Recent alerts</p>
              <ul className="mt-2 space-y-2 text-slate-300">
                {["API error spike", "Trial conversions up", "2 failed webhooks"].map(item => (
                  <li key={item} className="flex items-center justify-between">
                    <span>{item}</span>
                    <span className="text-xs text-slate-400">Just now</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "user-dashboard-layout",
        name: "User Dashboard Layout",
        summary: "Personalized user dashboard layout.",
        language: "tsx",
        tags: ["Dashboard", "User"],
        code: `export function UserDashboardLayout() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Welcome back, Jamie</h3>
          <p className="text-sm text-slate-300">Here is what needs attention today.</p>
        </div>
        <button className="btn-primary" type="button">Create project</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {["Design system", "Billing revamp", "Launch email"].map(project => (
          <div key={project} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold">{project}</p>
            <p className="text-xs text-slate-400">Updated 2h ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Welcome back, Jamie</h3>
                <p className="text-sm text-slate-300">Here is what needs attention today.</p>
              </div>
              <button className="btn-primary" type="button">Create project</button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {["Design system", "Billing revamp", "Launch email"].map(project => (
                <div key={project} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm font-semibold">{project}</p>
                  <p className="text-xs text-slate-400">Updated 2h ago</p>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "analytics-dashboard",
        name: "Analytics Dashboard (Charts)",
        summary: "Charts and KPI overview.",
        language: "tsx",
        tags: ["Dashboard", "Analytics"],
        code: `export function AnalyticsDashboardCharts() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {["Signups", "Activation", "Retention"].map(metric => (
          <div key={metric} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{metric}</p>
            <div className="mt-3 flex h-16 items-end gap-2">
              {[30, 60, 45, 80].map((height, idx) => (
                <div key={metric + "-" + idx} className="flex-1 rounded-md bg-gradient-to-t from-cyan-500/40 to-blue-500/10" style={{ height: height + "%" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Signups", "Activation", "Retention"].map(metric => (
                <div key={metric} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs text-slate-400">{metric}</p>
                  <div className="mt-3 flex h-16 items-end gap-2">
                    {[30, 60, 45, 80].map((height, idx) => (
                      <div key={metric + "-" + idx} className="flex-1 rounded-md bg-gradient-to-t from-cyan-500/40 to-blue-500/10" style={{ height: height + "%" }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "saas-metrics-ui",
        name: "SaaS Metrics UI (MRR, Users)",
        summary: "MRR, churn, and growth panels.",
        language: "tsx",
        tags: ["Dashboard", "Metrics"],
        code: `export function SaaSMetricsUI() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">SaaS Metrics</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {[{ label: "MRR", value: "$58.3k" }, { label: "Active users", value: "18,402" }, { label: "Churn", value: "1.9%" }, { label: "ARPA", value: "$32" }].map(stat => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">SaaS Metrics</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[{ label: "MRR", value: "$58.3k" }, { label: "Active users", value: "18,402" }, { label: "Churn", value: "1.9%" }, { label: "ARPA", value: "$32" }].map(stat => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "sidebar-navbar",
        name: "Sidebar + Navbar Layout",
        summary: "Standard SaaS navigation layout.",
        language: "tsx",
        tags: ["Dashboard", "Layout"],
        code: `export function SidebarNavbarLayout() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <div className="flex gap-4">
        <aside className="hidden w-40 flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4 md:flex">
          {["Overview", "Templates", "Billing", "Settings"].map(item => (
            <button key={item} className="text-left text-sm text-slate-200" type="button">{item}</button>
          ))}
        </aside>
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <p className="text-sm font-semibold">Workspace</p>
            <button className="btn-secondary" type="button">Invite</button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {["Active projects", "Upcoming invoices"].map(card => (
              <div key={card} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm font-semibold">{card}</p>
                <p className="text-xs text-slate-400">Updated just now</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <div className="flex gap-4">
              <aside className="hidden w-40 flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4 md:flex">
                {["Overview", "Templates", "Billing", "Settings"].map(item => (
                  <button key={item} className="text-left text-sm text-slate-200" type="button">{item}</button>
                ))}
              </aside>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
                  <p className="text-sm font-semibold">Workspace</p>
                  <button className="btn-secondary" type="button">Invite</button>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {["Active projects", "Upcoming invoices"].map(card => (
                    <div key={card} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-sm font-semibold">{card}</p>
                      <p className="text-xs text-slate-400">Updated just now</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "user-management",
    title: "User Management Templates",
    accent: "from-rose-500 to-pink-500",
    description: "Manage users and permissions",
    templates: [
      {
        id: "user-profile",
        name: "User Profile System",
        summary: "Profile details and preferences.",
        language: "tsx",
        tags: ["Users", "Profile"],
        code: `export function UserProfileSystem() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
        <div>
          <h3 className="text-xl font-semibold">Jamie Patel</h3>
          <p className="text-sm text-slate-300">Product lead • jamie@studio.co</p>
        </div>
        <button className="btn-secondary ml-auto" type="button">Edit profile</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Role</p>
          <p className="mt-2 text-sm font-semibold">Admin</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Workspace</p>
          <p className="mt-2 text-sm font-semibold">Arc Studio</p>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
              <div>
                <h3 className="text-xl font-semibold">Jamie Patel</h3>
                <p className="text-sm text-slate-300">Product lead • jamie@studio.co</p>
              </div>
              <button className="btn-secondary ml-auto" type="button">Edit profile</button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Role</p>
                <p className="mt-2 text-sm font-semibold">Admin</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Workspace</p>
                <p className="mt-2 text-sm font-semibold">Arc Studio</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "rbac",
        name: "Role-Based Access Control (RBAC)",
        summary: "Roles with permissions mapping.",
        language: "tsx",
        tags: ["Users", "RBAC"],
        code: `export function RoleBasedAccessControl() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Role-based access</h3>
        <button className="btn-secondary" type="button">Add role</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {["Admin", "Editor", "Viewer"].map(role => (
          <div key={role} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold">{role}</p>
            <p className="text-xs text-slate-400">{role === "Viewer" ? "Read-only" : "Can edit"}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
        <p className="font-semibold">Key permissions</p>
        <ul className="mt-2 space-y-2 text-slate-300">
          {[
            "Manage billing",
            "Invite teammates",
            "Publish templates"
          ].map(permission => (
            <li key={permission} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
              {permission}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Role-based access</h3>
              <button className="btn-secondary" type="button">Add role</button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Admin", "Editor", "Viewer"].map(role => (
                <div key={role} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm font-semibold">{role}</p>
                  <p className="text-xs text-slate-400">{role === "Viewer" ? "Read-only" : "Can edit"}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
              <p className="font-semibold">Key permissions</p>
              <ul className="mt-2 space-y-2 text-slate-300">
                {[
                  "Manage billing",
                  "Invite teammates",
                  "Publish templates"
                ].map(permission => (
                  <li key={permission} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "user-permissions",
        name: "User Permissions System",
        summary: "Fine-grained permission toggles.",
        language: "tsx",
        tags: ["Users", "Permissions"],
        code: `export function UserPermissionsSystem() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <h3 className="text-xl font-semibold">Permissions</h3>
      <p className="mt-1 text-sm text-slate-300">Enable or revoke feature access.</p>
      <div className="mt-4 space-y-3 text-sm">
        {[
          { name: "Edit billing", enabled: true },
          { name: "Manage users", enabled: false },
          { name: "Publish templates", enabled: true }
        ].map(permission => (
          <label key={permission.name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <span>{permission.name}</span>
            <input className="h-4 w-4 accent-rose-400" defaultChecked={permission.enabled} type="checkbox" />
          </label>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <h3 className="text-xl font-semibold">Permissions</h3>
            <p className="mt-1 text-sm text-slate-300">Enable or revoke feature access.</p>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { name: "Edit billing", enabled: true },
                { name: "Manage users", enabled: false },
                { name: "Publish templates", enabled: true }
              ].map(permission => (
                <label key={permission.name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
                  <span>{permission.name}</span>
                  <input className="h-4 w-4 accent-rose-400" defaultChecked={permission.enabled} type="checkbox" />
                </label>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "account-settings",
        name: "Account Settings Page",
        summary: "Settings, preferences, and security.",
        language: "tsx",
        tags: ["Users", "Settings"],
        code: `export function AccountSettingsPage() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-xl font-semibold">Account settings</h3>
      <div className="mt-4 grid gap-3">
        <label className="text-sm text-slate-200">
          Full name
          <input className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Jamie Patel" />
        </label>
        <label className="text-sm text-slate-200">
          Email
          <input className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="jamie@studio.co" type="email" />
        </label>
        <label className="text-sm text-slate-200">
          Timezone
          <select className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <option>GMT-8 (Pacific)</option>
            <option>GMT-5 (Eastern)</option>
          </select>
        </label>
      </div>
      <div className="mt-4 flex gap-3">
        <button className="btn-secondary" type="button">Cancel</button>
        <button className="btn-primary" type="button">Save changes</button>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-xl font-semibold">Account settings</h3>
            <div className="mt-4 grid gap-3">
              <label className="text-sm text-slate-200">
                Full name
                <input className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Jamie Patel" />
              </label>
              <label className="text-sm text-slate-200">
                Email
                <input className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="jamie@studio.co" type="email" />
              </label>
              <label className="text-sm text-slate-200">
                Timezone
                <select className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <option>GMT-8 (Pacific)</option>
                  <option>GMT-5 (Eastern)</option>
                </select>
              </label>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="btn-secondary" type="button">Cancel</button>
              <button className="btn-primary" type="button">Save changes</button>
            </div>
          </div>
        )
      },
      {
        id: "delete-account",
        name: "Delete Account Flow",
        summary: "Account deletion confirmation.",
        language: "tsx",
        tags: ["Users", "Security"],
        code: `export function DeleteAccountFlow() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <h3 className="text-xl font-semibold">Delete account</h3>
      <p className="mt-1 text-sm text-slate-300">This action is permanent and cannot be undone.</p>
      <div className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm">
        <p className="font-semibold text-rose-200">Before you go</p>
        <ul className="mt-2 space-y-2 text-slate-200">
          {["Download your data", "Transfer billing", "Revoke tokens"].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-4 w-full rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm text-rose-100" type="button">
        Delete account permanently
      </button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <h3 className="text-xl font-semibold">Delete account</h3>
            <p className="mt-1 text-sm text-slate-300">This action is permanent and cannot be undone.</p>
            <div className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm">
              <p className="font-semibold text-rose-200">Before you go</p>
              <ul className="mt-2 space-y-2 text-slate-200">
                {["Download your data", "Transfer billing", "Revoke tokens"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-4 w-full rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm text-rose-100" type="button">
              Delete account permanently
            </button>
          </div>
        )
      }
    ]
  },
  {
    id: "email-notifications",
    title: "Email & Notification Templates",
    accent: "from-amber-500 to-lime-400",
    description: "Communication systems",
    templates: [
      {
        id: "welcome-email",
        name: "Welcome Email System",
        summary: "Welcome email with quick start links.",
        language: "tsx",
        tags: ["Email", "Welcome"],
        code: `export function WelcomeEmailSystem() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Welcome</p>
      <h3 className="mt-2 text-2xl font-semibold">You are in! Let us get you started.</h3>
      <p className="mt-1 text-sm text-slate-300">Pick a template and launch in minutes.</p>
      <div className="mt-4 grid gap-2 text-sm">
        {[
          "Browse templates",
          "Invite your team",
          "Connect billing"
        ].map(item => (
          <div key={item} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{item}</span>
            <span className="text-amber-200">→</span>
          </div>
        ))}
      </div>
      <button className="btn-primary mt-4" type="button">Open dashboard</button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Welcome</p>
            <h3 className="mt-2 text-2xl font-semibold">You are in! Let us get you started.</h3>
            <p className="mt-1 text-sm text-slate-300">Pick a template and launch in minutes.</p>
            <div className="mt-4 grid gap-2 text-sm">
              {[
                "Browse templates",
                "Invite your team",
                "Connect billing"
              ].map(item => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{item}</span>
                  <span className="text-amber-200">→</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-4" type="button">Open dashboard</button>
          </div>
        )
      },
      {
        id: "password-reset-email",
        name: "Password Reset Email Template",
        summary: "Reset email with CTA button.",
        language: "tsx",
        tags: ["Email", "Reset"],
        code: `export function PasswordResetEmailTemplate() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-2xl font-semibold">Reset your password</h3>
      <p className="mt-1 text-sm text-slate-300">We received a request to reset your password.</p>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
        <p className="text-slate-200">This link expires in 15 minutes.</p>
        <button className="btn-primary mt-3" type="button">Reset password</button>
      </div>
      <p className="mt-3 text-xs text-slate-400">If you did not request this, ignore this email.</p>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-2xl font-semibold">Reset your password</h3>
            <p className="mt-1 text-sm text-slate-300">We received a request to reset your password.</p>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm">
              <p className="text-slate-200">This link expires in 15 minutes.</p>
              <button className="btn-primary mt-3" type="button">Reset password</button>
            </div>
            <p className="mt-3 text-xs text-slate-400">If you did not request this, ignore this email.</p>
          </div>
        )
      },
      {
        id: "in-app-notifications",
        name: "In-App Notification System",
        summary: "Notification center and badges.",
        language: "tsx",
        tags: ["Notifications", "In-app"],
        code: `export function InAppNotificationSystem() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Notifications</h3>
        <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">3 new</span>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {[
          "New teammate joined your workspace",
          "Subscription updated to Growth",
          "Template export completed"
        ].map(item => (
          <div key={item} className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <p>{item}</p>
            <p className="text-xs text-slate-400">Just now</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Notifications</h3>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">3 new</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {[
                "New teammate joined your workspace",
                "Subscription updated to Growth",
                "Template export completed"
              ].map(item => (
                <div key={item} className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <p>{item}</p>
                  <p className="text-xs text-slate-400">Just now</p>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "html-email-templates",
        name: "HTML Email Templates",
        summary: "Branded HTML email layouts.",
        language: "tsx",
        tags: ["Email", "HTML"],
        code: `export function HTMLEmailTemplates() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">HTML Email Builder</h3>
      <div className="mt-4 space-y-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Header</p>
          <p className="mt-2 text-sm font-semibold">Your weekly product updates</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Content block</p>
          <p className="mt-2 text-sm text-slate-300">New templates, billing revamp, and analytics dashboards.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">CTA</p>
          <button className="btn-primary mt-2" type="button">Read updates</button>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">HTML Email Builder</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Header</p>
                <p className="mt-2 text-sm font-semibold">Your weekly product updates</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Content block</p>
                <p className="mt-2 text-sm text-slate-300">New templates, billing revamp, and analytics dashboards.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">CTA</p>
                <button className="btn-primary mt-2" type="button">Read updates</button>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "smtp-integration",
        name: "SMTP Email Integration",
        summary: "SMTP setup and sending pipeline.",
        language: "tsx",
        tags: ["Email", "SMTP"],
        code: `export function SMTPEmailIntegration() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">SMTP Integration</h3>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Connected</span>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
          <span>Provider</span>
          <span className="text-slate-200">Postmark</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
          <span>From address</span>
          <span className="text-slate-200">hello@templates.app</span>
        </div>
      </div>
      <button className="btn-secondary mt-4" type="button">Send test email</button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">SMTP Integration</h3>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Connected</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                <span>Provider</span>
                <span className="text-slate-200">Postmark</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                <span>From address</span>
                <span className="text-slate-200">hello@templates.app</span>
              </div>
            </div>
            <button className="btn-secondary mt-4" type="button">Send test email</button>
          </div>
        )
      }
    ]
  },
  {
    id: "file-upload-storage",
    title: "File Upload & Storage Templates",
    accent: "from-teal-500 to-emerald-500",
    description: "File handling systems",
    templates: [
      {
        id: "file-upload",
        name: "File Upload System",
        summary: "Upload files with progress.",
        language: "tsx",
        tags: ["Files", "Upload"],
        code: `export function FileUploadSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-xl font-semibold">Upload files</h3>
      <div className="mt-4 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-500/5 p-6 text-center text-sm text-emerald-100">
        Drag files here or click to upload
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {["design-system.zip", "dashboard.png"].map(file => (
          <div key={file} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{file}</span>
            <span className="text-xs text-slate-400">Uploading…</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-xl font-semibold">Upload files</h3>
            <div className="mt-4 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-500/5 p-6 text-center text-sm text-emerald-100">
              Drag files here or click to upload
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {["design-system.zip", "dashboard.png"].map(file => (
                <div key={file} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{file}</span>
                  <span className="text-xs text-slate-400">Uploading…</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "image-upload-preview",
        name: "Image Upload with Preview",
        summary: "Image preview and crop.",
        language: "tsx",
        tags: ["Files", "Images"],
        code: `export function ImageUploadWithPreview() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">Image preview</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="aspect-square rounded-xl border border-slate-800 bg-slate-900" />
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm">Crop: 1:1</div>
          <button className="btn-secondary w-full" type="button">Choose image</button>
          <button className="btn-primary w-full" type="button">Save avatar</button>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">Image preview</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="aspect-square rounded-xl border border-slate-800 bg-slate-900" />
              <div className="space-y-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm">Crop: 1:1</div>
                <button className="btn-secondary w-full" type="button">Choose image</button>
                <button className="btn-primary w-full" type="button">Save avatar</button>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "cloud-storage",
        name: "Cloud Storage Integration (AWS S3)",
        summary: "S3 uploads and presigned URLs.",
        language: "tsx",
        tags: ["Files", "S3"],
        code: `export function CloudStorageIntegration() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">AWS S3 Storage</h3>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Connected</span>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {["uploads/assets", "uploads/avatars", "exports/reports"].map(bucket => (
          <div key={bucket} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{bucket}</span>
            <button className="text-xs text-emerald-200" type="button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">AWS S3 Storage</h3>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">Connected</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {["uploads/assets", "uploads/avatars", "exports/reports"].map(bucket => (
                <div key={bucket} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{bucket}</span>
                  <button className="text-xs text-emerald-200" type="button">View</button>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "profile-picture",
        name: "Profile Picture Upload",
        summary: "Avatar upload and resize.",
        language: "tsx",
        tags: ["Files", "Avatar"],
        code: `export function ProfilePictureUpload() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-xl font-semibold">Profile photo</h3>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-slate-800" />
        <div className="space-y-2">
          <button className="btn-secondary" type="button">Upload new</button>
          <button className="text-xs text-slate-400" type="button">Remove photo</button>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-xl font-semibold">Profile photo</h3>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-slate-800" />
              <div className="space-y-2">
                <button className="btn-secondary" type="button">Upload new</button>
                <button className="text-xs text-slate-400" type="button">Remove photo</button>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "document-management",
        name: "Document Management System",
        summary: "Organize, tag, and search files.",
        language: "tsx",
        tags: ["Files", "Docs"],
        code: `export function DocumentManagementSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Documents</h3>
        <button className="btn-secondary" type="button">New folder</button>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {[
          { name: "Brand guidelines.pdf", tag: "Design" },
          { name: "Pricing sheet.xlsx", tag: "Finance" },
          { name: "Q1 roadmap.docx", tag: "Product" }
        ].map(doc => (
          <div key={doc.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{doc.name}</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{doc.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Documents</h3>
              <button className="btn-secondary" type="button">New folder</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { name: "Brand guidelines.pdf", tag: "Design" },
                { name: "Pricing sheet.xlsx", tag: "Finance" },
                { name: "Q1 roadmap.docx", tag: "Product" }
              ].map(doc => (
                <div key={doc.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{doc.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{doc.tag}</span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "analytics-tracking",
    title: "Analytics & Tracking Templates",
    accent: "from-sky-500 to-blue-500",
    description: "User and system tracking tools",
    templates: [
      {
        id: "user-activity-tracking",
        name: "User Activity Tracking",
        summary: "Track sessions and events.",
        language: "tsx",
        tags: ["Analytics", "Users"],
        code: `export function UserActivityTracking() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">User activity</h3>
      <div className="mt-4 space-y-3 text-sm">
        {[
          { user: "@jamie", action: "Logged in", time: "2m ago" },
          { user: "@riley", action: "Upgraded plan", time: "12m ago" },
          { user: "@noah", action: "Invited teammate", time: "1h ago" }
        ].map(item => (
          <div key={item.user + item.time} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{item.user} • {item.action}</span>
            <span className="text-xs text-slate-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">User activity</h3>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { user: "@jamie", action: "Logged in", time: "2m ago" },
                { user: "@riley", action: "Upgraded plan", time: "12m ago" },
                { user: "@noah", action: "Invited teammate", time: "1h ago" }
              ].map(item => (
                <div key={item.user + item.time} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{item.user} • {item.action}</span>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "page-view-analytics",
        name: "Page View Analytics",
        summary: "Page views and funnels.",
        language: "tsx",
        tags: ["Analytics", "Pages"],
        code: `export function PageViewAnalytics() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Page views</h3>
        <span className="text-xs text-slate-400">Last 7 days</span>
      </div>
      <div className="mt-4 flex h-20 items-end gap-2">
        {[25, 40, 32, 55, 48, 70, 60].map((height, idx) => (
          <div key={idx} className="flex-1 rounded-md bg-gradient-to-t from-sky-500/40 to-blue-500/10" style={{ height: height + "%" }} />
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Page views</h3>
              <span className="text-xs text-slate-400">Last 7 days</span>
            </div>
            <div className="mt-4 flex h-20 items-end gap-2">
              {[25, 40, 32, 55, 48, 70, 60].map((height, idx) => (
                <div key={idx} className="flex-1 rounded-md bg-gradient-to-t from-sky-500/40 to-blue-500/10" style={{ height: height + "%" }} />
              ))}
            </div>
          </div>
        )
      },
      {
        id: "admin-analytics",
        name: "Admin Analytics Dashboard",
        summary: "Admin-level analytics overview.",
        language: "tsx",
        tags: ["Analytics", "Admin"],
        code: `export function AdminAnalyticsDashboard() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Admin analytics</h3>
        <button className="btn-secondary" type="button">Export</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ label: "Active orgs", value: "1,204" }, { label: "MRR", value: "$82.1k" }, { label: "Uptime", value: "99.98%" }].map(stat => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Admin analytics</h3>
              <button className="btn-secondary" type="button">Export</button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ label: "Active orgs", value: "1,204" }, { label: "MRR", value: "$82.1k" }, { label: "Uptime", value: "99.98%" }].map(stat => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "event-tracking",
        name: "Event Tracking System",
        summary: "Event stream and filters.",
        language: "tsx",
        tags: ["Analytics", "Events"],
        code: `export function EventTrackingSystem() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">Event tracking</h3>
      <div className="mt-4 space-y-2 text-sm">
        {[
          { name: "user_signed_up", source: "web" },
          { name: "subscription_upgraded", source: "billing" },
          { name: "template_published", source: "api" }
        ].map(evt => (
          <div key={evt.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span className="font-mono text-xs text-slate-200">{evt.name}</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{evt.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">Event tracking</h3>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { name: "user_signed_up", source: "web" },
                { name: "subscription_upgraded", source: "billing" },
                { name: "template_published", source: "api" }
              ].map(evt => (
                <div key={evt.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span className="font-mono text-xs text-slate-200">{evt.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{evt.source}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "custom-charts",
        name: "Custom Chart Integration",
        summary: "Custom charts and embeds.",
        language: "tsx",
        tags: ["Analytics", "Charts"],
        code: `export function CustomChartIntegration() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <h3 className="text-xl font-semibold">Custom charts</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">MRR growth</p>
          <div className="mt-3 h-20 rounded-lg bg-gradient-to-r from-sky-500/25 to-blue-500/10" />
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Retention</p>
          <div className="mt-3 h-20 rounded-lg bg-gradient-to-r from-blue-500/25 to-cyan-500/10" />
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <h3 className="text-xl font-semibold">Custom charts</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">MRR growth</p>
                <div className="mt-3 h-20 rounded-lg bg-gradient-to-r from-sky-500/25 to-blue-500/10" />
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Retention</p>
                <div className="mt-3 h-20 rounded-lg bg-gradient-to-r from-blue-500/25 to-cyan-500/10" />
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "admin-panel",
    title: "Admin Panel Templates",
    accent: "from-fuchsia-500 to-rose-500",
    description: "Backend control panels",
    templates: [
      {
        id: "admin-dashboard-panel",
        name: "Admin Dashboard Panel",
        summary: "Admin overview and controls.",
        language: "tsx",
        tags: ["Admin", "Dashboard"],
        code: `export function AdminDashboardPanel() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Admin overview</h3>
        <button className="btn-secondary" type="button">Generate report</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ label: "Active users", value: "12,402" }, { label: "MRR", value: "$94.2k" }, { label: "Tickets", value: "28" }].map(stat => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Admin overview</h3>
              <button className="btn-secondary" type="button">Generate report</button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ label: "Active users", value: "12,402" }, { label: "MRR", value: "$94.2k" }, { label: "Tickets", value: "28" }].map(stat => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "user-management-admin",
        name: "User Management Admin View",
        summary: "Manage users and roles.",
        language: "tsx",
        tags: ["Admin", "Users"],
        code: `export function UserManagementAdminView() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">User management</h3>
        <button className="btn-secondary" type="button">Invite user</button>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {[
          { name: "Jamie Patel", role: "Admin" },
          { name: "Riley Chen", role: "Editor" },
          { name: "Noah Kim", role: "Viewer" }
        ].map(user => (
          <div key={user.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{user.name}</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">User management</h3>
              <button className="btn-secondary" type="button">Invite user</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { name: "Jamie Patel", role: "Admin" },
                { name: "Riley Chen", role: "Editor" },
                { name: "Noah Kim", role: "Viewer" }
              ].map(user => (
                <div key={user.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{user.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{user.role}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "content-moderation",
        name: "Content Moderation System",
        summary: "Review and moderate content.",
        language: "tsx",
        tags: ["Admin", "Moderation"],
        code: `export function ContentModerationSystem() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <h3 className="text-xl font-semibold">Moderation queue</h3>
      <div className="mt-4 space-y-2 text-sm">
        {[
          "Flagged template: Pricing v2",
          "Reported comment on template",
          "User reported spam"
        ].map(item => (
          <div key={item} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{item}</span>
            <button className="text-xs text-fuchsia-200" type="button">Review</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <h3 className="text-xl font-semibold">Moderation queue</h3>
            <div className="mt-4 space-y-2 text-sm">
              {[
                "Flagged template: Pricing v2",
                "Reported comment on template",
                "User reported spam"
              ].map(item => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{item}</span>
                  <button className="text-xs text-fuchsia-200" type="button">Review</button>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "analytics-overview-panel",
        name: "Analytics Overview Panel",
        summary: "High-level analytics summary.",
        language: "tsx",
        tags: ["Admin", "Analytics"],
        code: `export function AnalyticsOverviewPanel() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-xl font-semibold">Analytics overview</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Weekly signups</p>
          <p className="mt-2 text-2xl font-semibold">2,104</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">Activation rate</p>
          <p className="mt-2 text-2xl font-semibold">38%</p>
        </div>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-xl font-semibold">Analytics overview</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Weekly signups</p>
                <p className="mt-2 text-2xl font-semibold">2,104</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Activation rate</p>
                <p className="mt-2 text-2xl font-semibold">38%</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "system-settings",
        name: "System Settings Panel",
        summary: "Global settings and toggles.",
        language: "tsx",
        tags: ["Admin", "Settings"],
        code: `export function SystemSettingsPanel() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <h3 className="text-xl font-semibold">System settings</h3>
      <div className="mt-4 space-y-3 text-sm">
        {[
          "Enable audit logs",
          "Require MFA",
          "Maintenance mode"
        ].map(setting => (
          <label key={setting} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <span>{setting}</span>
            <input className="h-4 w-4 accent-fuchsia-400" type="checkbox" />
          </label>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <h3 className="text-xl font-semibold">System settings</h3>
            <div className="mt-4 space-y-3 text-sm">
              {[
                "Enable audit logs",
                "Require MFA",
                "Maintenance mode"
              ].map(setting => (
                <label key={setting} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
                  <span>{setting}</span>
                  <input className="h-4 w-4 accent-fuchsia-400" type="checkbox" />
                </label>
              ))}
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "ai-integration",
    title: "AI Integration Templates",
    accent: "from-indigo-500 to-violet-500",
    description: "AI-powered SaaS features",
    templates: [
      {
        id: "ai-chat",
        name: "AI Chat Interface",
        summary: "Chat UI for AI assistants.",
        language: "tsx",
        tags: ["AI", "Chat"],
        code: `export function AIChatInterface() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <h3 className="text-xl font-semibold">AI Assistant</h3>
      <div className="mt-4 space-y-3 text-sm">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">How can I help you today?</div>
        <div className="ml-auto rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-3">Show me billing templates.</div>
      </div>
      <div className="mt-4 flex gap-2">
        <input className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="Ask a question" />
        <button className="btn-primary" type="button">Send</button>
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <h3 className="text-xl font-semibold">AI Assistant</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">How can I help you today?</div>
              <div className="ml-auto rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-3">Show me billing templates.</div>
            </div>
            <div className="mt-4 flex gap-2">
              <input className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="Ask a question" />
              <button className="btn-primary" type="button">Send</button>
            </div>
          </div>
        )
      },
      {
        id: "openai-integration",
        name: "OpenAI API Integration Module",
        summary: "OpenAI requests and responses.",
        language: "tsx",
        tags: ["AI", "API"],
        code: `export function OpenAIAPIIntegrationModule() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
      <h3 className="text-xl font-semibold">OpenAI Integration</h3>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-xs">
        <p className="text-slate-400">POST /v1/chat/completions</p>
        <pre className="mt-2 whitespace-pre-wrap text-slate-200">{"{"}model: \"gpt-4o-mini\", messages: [{ role: \"user\", content: \"Summarize my app\" }]{"}"}</pre>
      </div>
      <button className="btn-secondary mt-4" type="button">Test request</button>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Cyber Forest */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Abstract Branch / Leaves Silhouette */}
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10 text-emerald-800 animate-shape-morph" style={{ animationDuration: '20s' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full fill-currentColor">
             <path d="M45.7,113.8c-20.9-10.8-37.5-31-41.2-54.6C12,6,43.3-8.8,63,6.2c22.1,16.8,17.2,50,4,71.5 C59.6,98.8,53.2,109.2,45.7,113.8z M80.9,139.8c-7.2-22.3-1.8-49,14.8-65.7c18.5-18.7,48.5-14.7,59.2,8.5 c10.5,22.7,3.3,51.8-15.5,67.6C121.7,165.2,95.5,166.4,80.9,139.8z M25.8,168.1c9.3-19.1,30.8-30.8,51.6-27.4 c21.4,3.5,37.3,23.3,34.7,45c-2.4,19.9-19.3,34.8-38.6,33.5C53.7,217.7,31.4,197.6,25.8,168.1z"/>
          </svg>
        </div>
        {/* Soft emerald gradient glow */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent blur-xl" />
        {/* Fireflies (Particles) */}
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-particle-drift" style={{ animationDuration: '19s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-400 blur-[1px] animate-particle-drift" style={{ animationDuration: '24s', animationDelay: '7s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-particle-drift" style={{ animationDuration: '16s', animationDelay: '2s' }} />
      </div>
            <h3 className="text-xl font-semibold">OpenAI Integration</h3>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-xs">
              <p className="text-slate-400">POST /v1/chat/completions</p>
              <pre className="mt-2 whitespace-pre-wrap text-slate-200">{`{model: "gpt-4o-mini", messages: [{ role: "user", content: "Summarize my app" }]}`}</pre>
            </div>
            <button className="btn-secondary mt-4" type="button">Test request</button>
          </div>
        )
      },
      {
        id: "ai-content-generator",
        name: "AI Content Generator UI",
        summary: "Generate content with AI.",
        language: "tsx",
        tags: ["AI", "Content"],
        code: `export function AIContentGeneratorUI() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
      <h3 className="text-xl font-semibold">Content generator</h3>
      <textarea className="mt-4 w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-sm" rows={3} placeholder="Write a welcome email for a SaaS app..." />
      <button className="btn-primary mt-3" type="button">Generate</button>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-200">Draft output will appear here.</div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Atmospheric Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Sunset ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-fuchsia-900/10 mix-blend-screen" />
        
        {/* Slow drifting abstract cloud/wind blobs */}
        <div className="absolute -top-10 -left-20 w-80 h-32 bg-fuchsia-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-40 bg-indigo-800/10 blur-3xl rounded-[100%] animate-wave-flow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        
        {/* Subtle Wind Lines (Atmosphere) */}
        <div className="absolute top-1/4 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent animate-wave-flow" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>
            <h3 className="text-xl font-semibold">Content generator</h3>
            <textarea className="mt-4 w-full rounded-lg border border-slate-800 bg-slate-900 p-3 text-sm" rows={3} placeholder="Write a welcome email for a SaaS app..." />
            <button className="btn-primary mt-3" type="button">Generate</button>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-200">Draft output will appear here.</div>
          </div>
        )
      },
      {
        id: "prompt-management",
        name: "Prompt Management System",
        summary: "Store and organize prompts.",
        language: "tsx",
        tags: ["AI", "Prompts"],
        code: `export function PromptManagementSystem() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Prompt library</h3>
        <button className="btn-secondary" type="button">New prompt</button>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {[
          { name: "Onboarding email", tag: "Marketing" },
          { name: "Changelog summary", tag: "Product" },
          { name: "Support reply", tag: "Support" }
        ].map(prompt => (
          <div key={prompt.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
            <span>{prompt.name}</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{prompt.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Night Node */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Subtle tech grid referencing a starry night coordinate system */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Dark nebula background blob */}
        <div className="absolute -inset-10 bg-slate-800/10 blur-[80px] rounded-full animate-shape-morph" style={{ animationDuration: '30s' }} />
        
        {/* Glowing Star/Neon Particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-particle-drift" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.6)] animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '10s' }} />
        
        {/* Pulsing neon corner accent referencing a moon/satellite */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-500/20 animate-neon-pulse" />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Prompt library</h3>
              <button className="btn-secondary" type="button">New prompt</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { name: "Onboarding email", tag: "Marketing" },
                { name: "Changelog summary", tag: "Product" },
                { name: "Support reply", tag: "Support" }
              ].map(prompt => (
                <div key={prompt.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  <span>{prompt.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{prompt.tag}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "ai-dashboard",
        name: "AI Dashboard Interface",
        summary: "Monitor AI usage and costs.",
        language: "tsx",
        tags: ["AI", "Dashboard"],
        code: `export function AIDashboardInterface() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">AI usage</h3>
        <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-100">March</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[{ label: "Requests", value: "84k" }, { label: "Spend", value: "$412" }, { label: "Latency", value: "620ms" }].map(stat => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        preview: (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-6 text-white">
      {/* Elegant Nature Layer: Ocean Flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Flowing bottom wave */}
        <div className="absolute -bottom-20 left-0 w-[200%] h-64 opacity-20 text-cyan-800 animate-wave-flow" style={{ animationDuration: '15s' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.66,195.49,103.88Z" />
          </svg>
        </div>
        <div className="absolute -bottom-16 left-0 w-[200%] h-64 opacity-10 text-blue-900 animate-wave-flow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fillOpacity=".5"/>
          </svg>
        </div>
        {/* Subtle Water Dust (Particles) */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-particle-drift" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-drift" style={{ animationDuration: '22s', animationDelay: '0s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500 blur-[1px] animate-particle-drift" style={{ animationDuration: '25s', animationDelay: '5s' }} />
      </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">AI usage</h3>
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-100">March</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[{ label: "Requests", value: "84k" }, { label: "Spend", value: "$412" }, { label: "Latency", value: "620ms" }].map(stat => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  }
];

const defaultTemplateCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* This template uses utility classes included in the HTML snippet. */`;

const extractMarkupFromReactCode = (reactCode: string) => {
  const returnMatch = reactCode.match(/return\s*\(([\s\S]*?)\);\s*}/m);
  return (returnMatch?.[1] ?? reactCode).trim();
};

const toHtmlCode = (reactCode: string) => {
  return extractMarkupFromReactCode(reactCode)
    .replace(/className=/g, "class=")
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "")
    .replace(/\{`([^`]+)`\}/g, "$1")
    .replace(/\{"([^"]+)"\}/g, "$1")
    .replace(/\{'([^']+)'\}/g, "$1")
    .replace(/\{\s*true\s*\}/g, "true")
    .replace(/\{\s*false\s*\}/g, "false");
};

const toCodeBundle = (template: TemplateExample): TemplateCode => {
  if (typeof template.code !== "string") {
    return template.code;
  }

  return {
    html: toHtmlCode(template.code),
    css: defaultTemplateCss,
    react: template.code
  };
};

const toPreviewComponent = (preview: TemplatePreview) => {
  if (typeof preview === "function") {
    return preview as () => ReactNode;
  }

  return () => <>{preview}</>;
};

const normalizedTemplateSections: NormalizedTemplateSection[] = templateSections.map(section => ({
  ...section,
  templates: section.templates.map(template => ({
    ...template,
    description: template.description ?? template.summary,
    code: toCodeBundle(template),
    preview: toPreviewComponent(template.preview)
  }))
}));

export default function TemplatesPage() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [hoveredTemplateId, setHoveredTemplateId] = useState<string | null>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<CodeTab>("react");

  const activeSection = useMemo(() => normalizedTemplateSections.find(section => section.id === activeSectionId) ?? null, [activeSectionId]);

  const hoveredTemplate = useMemo(
    () => activeSection?.templates.find(t => t.id === hoveredTemplateId) ?? null,
    [activeSection, hoveredTemplateId]
  );
  const selectedTemplate = useMemo(
    () => (activeSection ? activeSection.templates.find(t => t.id === selectedTemplateId) ?? null : null),
    [activeSection, selectedTemplateId]
  );
  const previewTemplate = selectedTemplate ?? hoveredTemplate ?? null;

  const renderPreview = (template?: NormalizedTemplateExample | null) => {
    if (!template) return null;
    switch (template.id) {
      case "aurora-hero":
        return (
          <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Launch ready</p>
            <h1 className="mt-3 text-4xl font-semibold">Ship pages that feel premium.</h1>
            <p className="mt-2 max-w-2xl text-slate-200">Use this hero for marketing landers. Includes badge, headline, subcopy, and two CTAs.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary">Start free</button>
              <button className="btn-secondary">Book demo</button>
            </div>
          </section>
        );
      case "split-cta":
        return (
          <section className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-200">New</p>
                <h2 className="text-3xl font-semibold text-white">Ship your next launch in hours.</h2>
                <p className="text-slate-300">Flexible layout with logo strip and secondary CTA.</p>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">Book demo</button>
                  <button className="btn-secondary">See components</button>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-xs text-slate-400">Trusted by</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm font-medium text-white">
                  {"Zephyr,Northwind,Arc".split(",").map(logo => (
                    <div key={logo} className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-center">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "pricing-tiles": {
        const tiers = [
          { name: "Starter", price: "$19", features: ["1k users", "Email support"], highlight: false },
          { name: "Growth", price: "$49", features: ["Priority SLAs", "A/B blocks"], highlight: true },
          { name: "Scale", price: "$129", features: ["SSO", "Custom themes"], highlight: false }
        ];
        return (
          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map(tier => (
              <div
                key={tier.name}
                className={tier.highlight ? "rounded-2xl border border-orange-400/60 bg-orange-500/5 p-6" : "rounded-2xl border border-slate-800 bg-slate-950 p-6"}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                  {tier.highlight ? <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-100">Popular</span> : null}
                </div>
                <p className="mt-3 text-3xl font-bold text-white">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary mt-6 w-full">Choose plan</button>
              </div>
            ))}
          </div>
        );
      }
      case "logo-strip": {
        const logos = ["Framer", "Linear", "Raycast", "Vercel", "Supabase", "Clerk"];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Trusted by teams</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-slate-100 sm:grid-cols-6">
              {logos.map(logo => (
                <div key={logo} className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-center">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "feature-row": {
        const items = [
          { title: "Blazing fast", copy: "98th percentile performance" },
          { title: "Secure", copy: "SOC2-ready defaults" },
          { title: "Composable", copy: "Drop-in sections" }
        ];
        return (
          <div className="grid gap-4 md:grid-cols-3 text-white">
            {items.map(item => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.copy}</p>
              </div>
            ))}
          </div>
        );
      }
      case "metrics-ribbon": {
        const stats = [
          { label: "MRR", value: "$18.4k", delta: "+6.2%" },
          { label: "Active users", value: "12,104", delta: "+3.1%" },
          { label: "Error rate", value: "0.08%", delta: "-0.4%" }
        ];
        return (
          <div className="grid gap-3 rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-4 md:grid-cols-3 text-white">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center justify-between rounded-xl bg-emerald-500/5 px-4 py-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-emerald-200">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">{stat.delta}</span>
              </div>
            ))}
          </div>
        );
      }
      case "billing-summary": {
        const invoices = [
          { id: "INV-2043", total: "$129", status: "Paid", date: "Mar 01" },
          { id: "INV-2042", total: "$129", status: "Paid", date: "Feb 01" },
          { id: "INV-2041", total: "$89", status: "Paid", date: "Jan 01" }
        ];
        return (
          <div className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-cyan-200">Current plan</p>
                <h3 className="text-xl font-semibold text-white">Growth</h3>
              </div>
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-100">Renews in 12d</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              {invoices.map(invoice => (
                <div key={invoice.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-xs text-slate-400">{invoice.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{invoice.total}</p>
                    <p className="text-xs text-emerald-200">{invoice.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-4 w-full">Manage billing</button>
          </div>
        );
      }
      case "settings-panel":
        return (
          <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
            <div>
              <h3 className="text-lg font-semibold text-white">Workspace</h3>
              <p className="text-sm text-slate-400">Name, domain, and notifications.</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm text-slate-200">
                Workspace name
                <input className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="Arc Studio" />
              </label>
              <label className="block text-sm text-slate-200">
                Domain
                <div className="mt-2 flex rounded-lg border border-slate-800 bg-slate-900">
                  <span className="px-3 py-2 text-slate-400">https://</span>
                  <input className="flex-1 bg-transparent px-2 py-2 text-sm" placeholder="workspace.arc.app" />
                </div>
              </label>
              <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-3 text-sm text-slate-200">
                Enable weekly summary
                <input type="checkbox" className="h-4 w-4 accent-emerald-400" />
              </label>
            </div>
            <div className="flex gap-3">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Save changes</button>
            </div>
          </div>
        );
      case "usage-cards": {
        const items = [
          { label: "API calls", value: "1.2M", fill: "70%" },
          { label: "Seats", value: "18 / 24", fill: "75%" }
        ];
        return (
          <div className="grid gap-4 md:grid-cols-2 text-white">
            {items.map(item => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: item.fill }} />
                </div>
              </div>
            ))}
          </div>
        );
      }
      case "activity-list": {
        const events = [
          { title: "New deploy", meta: "Today • v1.3.4" },
          { title: "Plan upgraded", meta: "Yesterday • Growth" },
          { title: "User invited", meta: "Tue • @jamie" }
        ];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold text-white">Recent activity</p>
            <div className="mt-3 divide-y divide-slate-800 text-sm text-slate-200">
              {events.map(event => (
                <div key={event.title} className="py-3">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-slate-400">{event.meta}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "glow-login":
        return (
          <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-slate-950 p-8 text-white">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/25 via-indigo-500/15 to-cyan-500/10 blur-3xl" />
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-sm text-slate-300">Access your workspace.</p>
            <form className="mt-6 space-y-4">
              <label className="block text-sm">
                Email
                <input type="email" className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="you@studio.co" />
              </label>
              <label className="block text-sm">
                Password
                <input type="password" className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" />
              </label>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-purple-400" />
                  Remember me
                </label>
                <button className="text-purple-200" type="button">Forgot?</button>
              </div>
              <button className="btn-primary w-full" type="button">Sign in</button>
            </form>
          </div>
        );
      case "reset-flow":
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
            <h3 className="text-lg font-semibold">Reset password</h3>
            <p className="text-sm text-slate-300">We will send a magic link to your inbox.</p>
            <form className="mt-4 space-y-3">
              <input type="email" className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="you@domain.com" />
              <button className="btn-primary w-full" type="button">Send reset link</button>
            </form>
          </div>
        );
      case "onboarding-steps": {
        const steps = [
          { title: "Create project", done: true },
          { title: "Connect billing", done: false },
          { title: "Invite teammates", done: false }
        ];
        return (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Get set up</h3>
              <span className="text-sm text-indigo-200">{steps.filter(s => s.done).length}/3 done</span>
            </div>
            <div className="mt-4 space-y-3">
              {steps.map(step => (
                <label key={step.title} className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-200">
                  <input type="checkbox" checked={step.done} readOnly className="h-4 w-4 accent-indigo-400" />
                  <span className={step.done ? "text-emerald-200" : ""}>{step.title}</span>
                </label>
              ))}
            </div>
          </div>
        );
      }
      case "two-factor":
        return (
          <div className="max-w-md rounded-2xl border border-purple-500/30 bg-slate-950 p-6 text-white">
            <p className="text-sm text-purple-100">Step 2 of 2</p>
            <h3 className="mt-1 text-xl font-semibold">Enter the 6-digit code</h3>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, idx) => (
                <input key={idx} maxLength={1} className="h-12 rounded-lg border border-slate-800 bg-slate-900 text-center text-lg" />
              ))}
            </div>
            <button className="btn-primary mt-4 w-full" type="button">Verify</button>
          </div>
        );
      case "access-roles": {
        const roles = [
          { name: "Admin", color: "bg-purple-500/20 text-purple-100" },
          { name: "Editor", color: "bg-blue-500/20 text-blue-100" },
          { name: "Viewer", color: "bg-slate-500/20 text-slate-100" }
        ];
        const permissions = ["Manage billing", "Invite users", "Publish content"];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold text-white">Access roles</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map(role => (
                <span key={role.name} className={"rounded-full px-3 py-1 text-xs " + role.color}>{role.name}</span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {permissions.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      case "receipt-email":
        return (
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "Inter, system-ui", background: "#0f172a", color: "#e2e8f0", padding: "24px" }}>
            <tbody>
              <tr>
                <td style={{ maxWidth: 640, margin: "0 auto", background: "#0b1224", borderRadius: 16, padding: 24, border: "1px solid #1e293b" }}>
                  <h2 style={{ margin: 0, color: "#fff" }}>Payment receipt</h2>
                  <p style={{ margin: "8px 0 16px", color: "#cbd5e1" }}>Thanks for your purchase. Here are the details.</p>
                  <div style={{ padding: 12, background: "#111827", borderRadius: 12 }}>
                    <p style={{ margin: 0, color: "#a5f3fc" }}>Plan: Growth</p>
                    <p style={{ margin: "4px 0 0" }}>Amount: $129</p>
                    <p style={{ margin: "4px 0 0" }}>Date: Mar 14, 2026</p>
                  </div>
                  <a href="#" style={{ display: "inline-block", marginTop: 16, padding: "10px 16px", background: "#f59e0b", color: "#0b1224", borderRadius: 12, fontWeight: 600 }}>View invoice</a>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "plain-text":
        {
          const plainText = `Subject: Action needed on your workspace

Hi {{name}},

We noticed a spike in errors in {{workspace}}. Your error budget is at 82%.

- Last 10 minutes: {{errorRate}}
- Impacted services: {{services}}

Visit the dashboard to mute alerts or roll back.
https://app.yourdomain.com/releases/{{releaseId}}

Thanks,
Your reliability team`;
          return (
            <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 whitespace-pre-wrap">
              {plainText}
            </pre>
          );
        }
      case "changelog": {
        const updates = [
          { title: "Templates library", tag: "Feature", date: "Mar 14" },
          { title: "Faster login", tag: "Improvement", date: "Mar 12" },
          { title: "Bug fixes", tag: "Fix", date: "Mar 10" }
        ];
        return (
          <div className="rounded-2xl border border-amber-500/40 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-amber-200">Changelog</p>
                <h3 className="text-lg font-semibold">What shipped this week</h3>
              </div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">Weekly</span>
            </div>
            <div className="mt-4 space-y-3">
              {updates.map(update => (
                <div key={update.title} className="flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{update.title}</p>
                    <p className="text-xs text-slate-400">{update.date}</p>
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">{update.tag}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-4 w-full">Read full notes</button>
          </div>
        );
      }
      case "invite-email":
        return (
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "Inter, system-ui", background: "#0f172a", color: "#e2e8f0", padding: "24px" }}>
            <tbody>
              <tr>
                <td style={{ maxWidth: 640, margin: "0 auto", background: "#0b1224", borderRadius: 16, padding: 24, border: "1px solid #1e293b" }}>
                  <p style={{ margin: "0 0 8px", color: "#cbd5e1" }}>You have been invited to</p>
                  <h2 style={{ margin: 0, color: "#fff" }}>Studio Workspace</h2>
                  <p style={{ margin: "12px 0 16px", color: "#cbd5e1" }}>Accept the invite to join projects, view dashboards, and collaborate.</p>
                  <a href="#" style={{ display: "inline-block", padding: "10px 16px", background: "#22d3ee", color: "#0b1224", borderRadius: 12, fontWeight: 600 }}>Accept invite</a>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "incident-note":
        {
          const incidentCopy = `Subject: Incident update

We are investigating elevated error rates impacting the EU region.

Current impact:
- API error rate: 7.2%
- Affected services: api, web

Next update in 20 minutes. Thank you for your patience.`;
          return (
            <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 whitespace-pre-wrap">
              {incidentCopy}
            </pre>
          );
        }
      case "upsell-banner":
        return (
          <div className="rounded-2xl border border-fuchsia-500/40 bg-fuchsia-500/10 p-4 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-200">Limited</p>
                <p className="text-lg font-semibold">Upgrade now and save 20%</p>
                <p className="text-sm text-fuchsia-100">Unlock unlimited projects and priority support.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">Save 20%</span>
                <button className="btn-primary">Upgrade</button>
              </div>
            </div>
          </div>
        );
      case "cross-sell-grid": {
        const items = [
          { title: "Analytics", copy: "Insights pack", badge: "New" },
          { title: "Automation", copy: "Workflow builder", badge: "Popular" },
          { title: "Support", copy: "Priority SLAs", badge: "Pro" }
        ];
        return (
          <div className="grid gap-3 md:grid-cols-3">
            {items.map(item => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                  <span>{item.badge}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[11px]">Add-on</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.copy}</p>
                <button className="btn-secondary mt-3 w-full">Add for $19</button>
              </div>
            ))}
          </div>
        );
      }
      case "exit-intent-modal":
        return (
          <div className="max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Wait</p>
            <h3 className="mt-2 text-2xl font-semibold">Get 20% off your first month.</h3>
            <p className="mt-2 text-slate-300">Apply the discount and keep your progress—no credit card changes needed.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary">Apply discount</button>
              <button className="btn-secondary">Keep browsing</button>
            </div>
          </div>
        );
      case "article-spotlight":
        return (
          <article className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-blue-200">
              <span>Feature</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white">5 min read</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold">How we ship SaaS in hours</h3>
            <p className="mt-2 text-slate-300">A practical playbook for founders shipping faster with a solid starter kit.</p>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-100">Product</span>
              <span className="text-slate-400">12k reads</span>
            </div>
          </article>
        );
      case "newsletter-cta":
        return (
          <div className="rounded-2xl border border-purple-500/30 bg-slate-950 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Stay updated</p>
            <h3 className="mt-2 text-2xl font-semibold">Get launch patterns in your inbox</h3>
            <p className="mt-2 text-slate-300">Short, tactical notes on SaaS UX and billing.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="you@company.com" />
              <button className="btn-primary w-full sm:w-auto">Subscribe</button>
            </div>
            <p className="mt-2 text-xs text-slate-400">Join 4,200 founders • No spam</p>
          </div>
        );
      case "author-bio":
        return (
          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            <div className="space-y-1">
              <p className="text-lg font-semibold">Jamie Patel</p>
              <p className="text-sm text-slate-300">Founder, shipping fast with SaaS kits.</p>
              <div className="flex gap-3 text-xs text-slate-400">
                <span>12k readers</span>
                <span>42 posts</span>
                <span>Based in SF</span>
              </div>
            </div>
            <button className="btn-secondary ml-auto">Follow</button>
          </div>
        );
      case "welcome-drip":
        return (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-200">Day 0</p>
            <h3 className="text-2xl font-semibold">Welcome to Templates</h3>
            <p className="mt-2 text-slate-200">Kick off with quick links to activate new users.</p>
            <div className="mt-4 grid gap-2 text-sm">
              {["Pick a template", "Invite teammate", "Connect billing"].map(item => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2">
                  <span>{item}</span>
                  <span className="text-emerald-200">→</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "reactivation-email":
        return (
          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Winback</p>
            <h3 className="text-xl font-semibold">We saved your seat — here’s 25% off</h3>
            <p className="mt-2 text-slate-200">Highlight the incentive and what’s new.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-100">
              {"Projects saved|New funnels and billing|Custom code blocks".split("|").map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <button className="btn-primary">Use code</button>
              <button className="btn-secondary">Maybe later</button>
            </div>
          </div>
        );
      case "nudge-card":
        return (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Finish setup</p>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">2 steps left</span>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              {[{ title: "Connect Stripe", done: false }, { title: "Add a hero block", done: true }, { title: "Invite a teammate", done: false }].map(task => (
                <label key={task.title} className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                  <input type="checkbox" checked={task.done} readOnly className="h-4 w-4 accent-rose-400" />
                  <span className={task.done ? "text-emerald-100 line-through" : "text-white"}>{task.title}</span>
                </label>
              ))}
            </div>
            <button className="btn-primary mt-4 w-full">Complete setup</button>
          </div>
        );
      case "winback-modal":
        return (
          <div className="max-w-lg rounded-2xl border border-amber-500/40 bg-slate-950 p-6 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Come back</p>
            <h3 className="mt-2 text-2xl font-semibold">We’d love to keep you.</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {"Save 20% on your next month|Keep all projects and data|New engagement templates added".split("|").map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary">Redeem 20% off</button>
              <button className="btn-secondary">Maybe later</button>
            </div>
          </div>
        );
      case "status-banner":
        return (
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                All systems operational
              </div>
              <a className="text-sm font-semibold text-cyan-100" href="#">
                View status →
              </a>
            </div>
          </div>
        );
      case "faq-accordion": {
        const items = [
          { q: "How do I invite teammates?", a: "Go to Settings → Team and send invites via email." },
          { q: "Do you support SSO?", a: "Yes, SAML SSO is available on the Scale plan." },
          { q: "Can I export data?", a: "Exports are available in Settings → Data." }
        ];
        return (
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            {items.map(item => (
              <details key={item.q} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        );
      }
      case "contact-support":
        return (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Need help?</p>
            <h3 className="mt-2 text-xl font-semibold">Talk to support</h3>
            <p className="mt-2 text-sm text-slate-300">Live chat, email, and priority support on Scale.</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                <span>Email</span>
                <span className="text-slate-300">support@templates.app</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                <span>Live chat</span>
                <span className="text-slate-300">~2 min avg</span>
              </div>
            </div>
            <button className="btn-primary mt-4 w-full">Open ticket</button>
          </div>
        );
      case "ticket-list": {
        const tickets = [
          { id: "#4281", subject: "Billing update", status: "Open" },
          { id: "#4274", subject: "SSO setup", status: "Pending" },
          { id: "#4260", subject: "API rate limits", status: "Resolved" }
        ];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold">Your tickets</p>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              {tickets.map(ticket => (
                <div key={ticket.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{ticket.subject}</p>
                    <p className="text-xs text-slate-400">{ticket.id}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">{ticket.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "api-keys": {
        const keys = [
          { name: "Server key", value: "sk-live-1234", scope: "write", created: "Mar 2026" },
          { name: "Public key", value: "pk-live-5678", scope: "read", created: "Feb 2026" }
        ];
        return (
          <div className="space-y-3 rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
            {keys.map(key => (
              <div key={key.name} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{key.name}</p>
                    <p className="text-xs text-slate-400">{key.created}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">{key.scope}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm">
                  <span className="font-mono text-emerald-100">{key.value}</span>
                  <button className="text-xs text-emerald-200">Regenerate</button>
                </div>
              </div>
            ))}
          </div>
        );
      }
      case "webhook-logs": {
        const events = [
          { id: "evt_01", status: "Delivered", time: "2m ago" },
          { id: "evt_02", status: "Retrying", time: "5m ago" },
          { id: "evt_03", status: "Failed", time: "10m ago" }
        ];
        return (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold">Webhook deliveries</p>
            <div className="mt-3 space-y-2 text-sm">
              {events.map(evt => (
                <div key={evt.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-mono text-emerald-100">{evt.id}</p>
                    <p className="text-xs text-slate-400">{evt.time}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">{evt.status}</span>
                </div>
              ))}
            </div>
            <button className="btn-secondary mt-4 w-full">View dashboard</button>
          </div>
        );
      }
      case "integration-gallery": {
        const items = [
          { name: "Slack", tag: "Collab" },
          { name: "Zapier", tag: "Automation" },
          { name: "Notion", tag: "Docs" },
          { name: "Stripe", tag: "Payments" }
        ];
        return (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 text-white">
            {items.map(item => (
              <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-lg font-semibold">{item.name}</p>
                <span className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100">{item.tag}</span>
                <p className="mt-2 text-sm text-slate-300">Connect in one click.</p>
              </div>
            ))}
          </div>
        );
      }
      case "api-cta":
        return (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Developers</p>
            <h3 className="mt-2 text-2xl font-semibold">Build with the Templates API</h3>
            <p className="mt-2 text-sm text-slate-300">REST + webhooks with typed SDKs.</p>
            <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-emerald-100">{`fetch('https://api.templates.app/v1/sites', {
  method: 'POST',
  headers: { Authorization: 'Bearer sk_live_123' },
  body: JSON.stringify({ name: 'New project' })
})`}</pre>
            <div className="mt-3 flex flex-wrap gap-3">
              <button className="btn-primary">View docs</button>
              <button className="btn-secondary">Generate key</button>
            </div>
          </div>
        );
      default:
        {
          const Preview = template.preview;
          return <Preview />;
        }
    }
  };

  const handleSectionSelect = (sectionId: string) => {
    setActiveSectionId(sectionId);
    setSelectedTemplateId(null);
    setHoveredTemplateId(null);
    setHoveredTemplateId(null);
    setActiveTab("react");
  };

  const handleBackToTopics = () => {
    setActiveSectionId(null);
    setSelectedTemplateId(null);
    setHoveredTemplateId(null);
    setHoveredTemplateId(null);
    setCopiedId(null);
    setActiveTab("react");
  };

  const copyCode = async () => {
    if (!selectedTemplate) return;
    await navigator.clipboard.writeText(selectedTemplate.code[activeTab]);
    setCopiedId(selectedTemplate.id);
    setTimeout(() => setCopiedId(null), 1200);
  };

  const codeExtensionByTab: Record<CodeTab, string> = {
    react: "tsx",
    html: "html",
    css: "css"
  };

  const codeLabelByTab: Record<CodeTab, string> = {
    react: "React (TSX)",
    html: "HTML",
    css: "CSS"
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#f59e0b22,_transparent_45%),radial-gradient(circle_at_30%_20%,_#34d39922,_transparent_30%),radial-gradient(circle_at_80%_10%,_#6366f122,_transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 space-y-10">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-amber-200">
            <Sparkles className="h-3.5 w-3.5" /> Templates
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight">Browse by topic. Hover to see it. Click to copy the code.</h1>
              <p className="max-w-2xl text-base text-slate-300">Pick a topic to load its templates. Hover a name to view the live preview above. Click to lock it and reveal the code.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center gap-2 font-semibold"><PlayCircle className="h-4 w-4 text-amber-300" /> How it works</div>
              <p className="mt-1 text-slate-300">1) Choose a topic. 2) Hover to preview. 3) Click to show code.</p>
            </div>
          </div>
        </header>

        {!activeSection ? (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <Layers className="h-4 w-4" /> Topics
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {normalizedTemplateSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => handleSectionSelect(section.id)}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-white/60 hover:bg-white/5 shadow-sm shadow-black/10`}
                >
                  <div className={`text-xs font-semibold uppercase tracking-[0.18em] bg-clip-text text-transparent bg-gradient-to-r ${section.accent}`}>
                    {section.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{section.description}</p>
                  <p className="mt-2 text-xs text-slate-400">{section.templates.length} templates</p>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleBackToTopics}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:bg-slate-900/80"
              >
                ← Back to topics
              </button>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs uppercase tracking-wide text-slate-100">Selected</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${activeSection.accent}`}>{activeSection.title}</span>
              </div>
            </div>

            <section className="grid gap-6 lg:grid-cols-[4fr,6fr]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <LayoutTemplate className="h-4 w-4" /> Template names
                  <span className="rounded-full border border-slate-800 px-2 py-0.5 text-[11px] text-slate-300">Hover to preview</span>
                </div>
                <div className="grid gap-3 lg:grid-cols-1">
                  {activeSection.templates.map(template => {
                    const active = template.id === selectedTemplate?.id;
                    return (
                      <button
                        key={template.id}
                        onMouseEnter={() => setHoveredTemplateId(template.id)}
                        onClick={() => {
                          setSelectedTemplateId(template.id);
                          setActiveTab("react");
                        }}
                        className={`group w-full rounded-xl border px-4 py-3 text-left transition-all duration-200 hover:border-white/50 hover:bg-white/5 ${active ? "border-white/70 bg-white/5 shadow-lg shadow-black/20" : "border-slate-800 bg-slate-950"
                          }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-base font-semibold text-white">{template.name}</p>
                            <p className="text-sm text-slate-300">{template.summary}</p>
                          </div>
                          <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-200">{template.language}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {template.tags.map(tag => (
                            <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200 transition group-hover:bg-white/10">{tag}</span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <MousePointer2 className="h-4 w-4" /> Preview {selectedTemplate ? "& code" : "on hover"}
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-inner shadow-black/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{activeSection.title}</p>
                      <h3 className="text-xl font-semibold text-white">{previewTemplate?.name ?? "Hover a template"}</h3>
                      <p className="text-sm text-slate-300">Hover to preview; click to lock and view code.</p>
                    </div>
                    <button
                      onClick={copyCode}
                      disabled={!selectedTemplate}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:border-white/30 hover:shadow-lg hover:shadow-emerald-500/10 ${selectedTemplate ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-800 bg-slate-900/70 text-slate-500 cursor-not-allowed"
                        }`}
                    >
                      {copiedId === selectedTemplate?.id ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                      {copiedId === selectedTemplate?.id ? "Copied" : "Copy code"}
                    </button>
                  </div>

                  <div className="mt-4">
                    {previewTemplate ? (
                      <div className="relative max-h-[460px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-black/40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#22d3ee22,transparent_40%),radial-gradient(circle_at_80%_0%,#f472b622,transparent_35%),radial-gradient(circle_at_50%_100%,#8b5cf622,transparent_45%)]" />
                        <div className="relative max-h-[460px] overflow-auto p-3">
                          <div className="relative rounded-xl border border-slate-800/80 bg-slate-900/85 p-4 shadow-inner shadow-black/30">
                            <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/5" />
                            <div className="relative">{renderPreview(previewTemplate)}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/60 px-4 py-8 text-sm text-slate-400">
                        Hover a template name to see its preview here.
                      </div>
                    )}
                  </div>

                  {previewTemplate?.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {previewTemplate.tags.map(tag => (
                        <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">{tag}</span>
                      ))}
                    </div>
                  ) : null}

                  {selectedTemplate ? (
                    <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900">
                      <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2 text-xs text-slate-300">
                        <span>{selectedTemplate.name}.{codeExtensionByTab[activeTab]}</span>
                        <div className="flex items-center gap-2">
                          {(["html", "css", "react"] as CodeTab[]).map(tab => (
                            <button
                              key={tab}
                              type="button"
                              onClick={() => setActiveTab(tab)}
                              className={`rounded-full border px-2 py-0.5 uppercase tracking-wide transition ${activeTab === tab
                                  ? "border-white/50 bg-white/10 text-white"
                                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-white/30"
                                }`}
                            >
                              {tab}
                            </button>
                          ))}
                          <span>{codeLabelByTab[activeTab]}</span>
                        </div>
                      </div>
                      <pre className="max-h-[320px] overflow-auto px-4 py-3 text-[13px] leading-relaxed text-slate-100 font-mono whitespace-pre-wrap break-words break-all">
                        <code>{selectedTemplate.code[activeTab]}</code>
                      </pre>
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-slate-400">Click a template name to lock it and view the code.</p>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
