# Deployment

## Frontend (Vercel)
1. Push repo to GitHub.
2. Import the repo in Vercel and select `frontend/` as the project root.
3. Set env vars from `frontend/.env.example` (`NEXT_PUBLIC_API_URL` pointing to your deployed backend).
4. Deploy. Preview/Production URLs will proxy API calls to the backend URL.

## Backend (Railway or Render)
1. Push repo to GitHub.
2. Create a new Railway/Render service from the repo. Set root to `backend/`.
3. Set env vars from `backend/.env.example`: `DATABASE_URL`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `FRONTEND_URL`.
4. Ensure build command `npm install && npm run build` and start command `npm run start` (or `node dist/index.js`).
5. Run `npx prisma migrate deploy` during build or as a release task.

## Database (Supabase or Neon)
- Create a new Postgres instance and grab the `DATABASE_URL`.
- Grant network access to your backend host.
- Run migrations from the backend service (`prisma migrate deploy`).

## Domain & cookies
- Use the same apex/root domain for frontend and backend subdomains when possible to allow `SameSite=Lax` cookies.
- Configure HTTPS on both services; JWT cookie is HTTP-only.

## Webhooks
- Expose `/api/v1/webhooks/stripe` (to be implemented) and set `STRIPE_WEBHOOK_SECRET`.
- In Stripe dashboard, point the webhook to your backend deployment URL.
