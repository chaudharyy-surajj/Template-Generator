# SaaS Starter Kit

Production-ready boilerplate for a subscription SaaS: Next.js + Tailwind on the frontend, Express + Prisma + Stripe on the backend. Includes auth (JWT in HTTP-only cookies), dashboard layout, billing scaffolding, admin area, and deployment guides.

## Features
- Authentication with register/login/logout, password reset hook, JWT cookies, and RBAC (user/admin)
- User dashboard layout with Navbar + Sidebar + cards, settings, billing, admin pages
- Stripe subscription scaffolding (plans, checkout session creation, cancel, webhook placeholder)
- Prisma models for `User`, `Plan`, `Subscription`
- API routes under `/api/v1` following REST
- Security: bcrypt hashing, helmet, rate limiting, zod validation, CORS, cookies
- Deploy targets: Vercel (frontend) + Railway/Render (backend) + Supabase/Neon (PostgreSQL)

## Structure
```
frontend/   Next.js 14 + Tailwind + React Context auth client
backend/    Express + Prisma + Stripe + JWT auth
docs/       Guides and API reference
```

## Quickstart
1. Copy `.env.example` files to `.env` in frontend and backend; fill values.
2. Backend: `cd backend && npm install && npx prisma migrate dev && npm run dev`.
3. Frontend: `cd frontend && npm install && npm run dev`.
4. Visit `http://localhost:3000` and login. An admin seed user (`admin@saas.dev` / `password123`) is created on boot.

See [INSTALLATION.md](./INSTALLATION.md) and [DEPLOYMENT.md](./DEPLOYMENT.md) for deeper steps.
