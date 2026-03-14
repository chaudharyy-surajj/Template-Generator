# API Reference (v1)
Base URL: `/api/v1`

## Auth
- `POST /auth/register` — body `{ name, email, password }` → sets `token` cookie, returns user.
- `POST /auth/login` — body `{ email, password }` → sets `token` cookie, returns user.
- `POST /auth/logout` — clears cookie.
- `POST /auth/reset-password` — stub for password reset email.
- `GET /auth/me` — returns current user (requires auth).

## Users
- `GET /users/profile` — current user profile.
- `PUT /users/profile` — update profile `{ name, email }`.
- `DELETE /users/account` — delete current account.

## Subscriptions
- `GET /subscriptions/plans` — list available plans.
- `GET /subscriptions/current` — current user's subscription.
- `POST /subscriptions/create` — body `{ planId }` → returns Stripe Checkout URL.
- `POST /subscriptions/cancel` — body `{ stripeSubscriptionId }` → cancels at period end.

## Admin (requires `role=ADMIN`)
- `GET /admin/users` — list users.
- `GET /admin/subscriptions` — list subscriptions with user + plan.
- `DELETE /admin/users/:id` — delete user.

## Status
- `GET /health` — liveness probe.

## Auth model
- JWT signed with `JWT_SECRET`, stored in HTTP-only cookie `token`.
- Use `withCredentials: true` on frontend API requests.
