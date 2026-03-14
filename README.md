# SaaS Starter Kit

Full-stack SaaS boilerplate with Next.js + Tailwind frontend and Express + Prisma + Stripe backend. Includes auth, dashboard UI, billing scaffolding, RBAC admin, and deployment docs.

## Structure
- `frontend/` — Next.js 14 (TypeScript), Tailwind, shadcn-ready components, React Context auth.
- `backend/` — Express (TypeScript), Prisma (PostgreSQL), JWT cookies, Stripe billing hooks.
- `docs/` — Installation, deployment, and API reference.

## Quickstart
1. Backend: copy `backend/.env.example` to `.env`, install deps, run `npx prisma migrate dev`, then `npm run dev`.
2. Frontend: copy `frontend/.env.example` to `.env`, install deps, then `npm run dev`.
3. Admin seed user: `admin@saas.dev` / `password123` (created on server start).

Detailed steps live in [docs/](docs/README.md).
