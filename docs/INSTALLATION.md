# Installation

## Prerequisites
- Node.js 18+
- PostgreSQL database (local, Supabase, or Neon)
- Stripe test keys

## Backend setup
1. `cd backend`
2. `cp .env.example .env` and fill values (`DATABASE_URL`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `FRONTEND_URL`).
3. Install dependencies: `npm install`.
4. Run Prisma migrations: `npx prisma migrate dev`.
5. Start dev server: `npm run dev` (defaults to port 4000).
6. A seed admin user is auto-created: email `admin@saas.dev`, password `password123`.

## Frontend setup
1. `cd frontend`
2. `cp .env.example .env` and set `NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1`.
3. Install dependencies: `npm install`.
4. Start dev server: `npm run dev` (defaults to port 3000).

## Linking frontend and backend
- CORS is configured to allow `FRONTEND_URL` from the backend env.
- Auth uses HTTP-only `token` cookie set by the backend; ensure both servers share the same top-level domain in production.

## Database schema
- Prisma models: `User`, `Plan`, `Subscription` (see `backend/prisma/schema.prisma`).
- Customize plan seeds in `Plan` table and update Stripe price IDs before going live.

## Stripe
- Use test keys by default.
- Configure webhook endpoint on your backend `/api/v1/webhooks/stripe` once implemented.
