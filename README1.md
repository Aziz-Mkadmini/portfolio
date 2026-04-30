# NailScan Pro — SaaS Platform

> **Shopify nail sizing SaaS** built with Next.js 14, Prisma, Neon PostgreSQL, NextAuth.js, Paddle subscriptions, and Framer Motion.

---

## Deux repos GitHub (frontend + backend)

Ce dépôt est le **frontend** (Next.js). L’API scan est dans un autre dépôt, par ex. **`nail-scan-api`** (FastAPI).

**Commandes rapides**

```bash
git clone https://github.com/VOTRE_ORG/saas-boilerplate.git
cd saas-boilerplate
npm install
cp .env.local.example .env.local
# Renseigner DATABASE_URL, NEXTAUTH_*, SCAN_API_BASE_URL=http://localhost:8000, Paddle, etc.
npx prisma db push
npm run dev
```

Dans un second terminal, lancer l’API depuis le repo **`nail-scan-api`** :

```bash
cd ../nail-scan-api
python -m venv .venv && .venv\Scripts\activate   # Windows: .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Guide détaillé (clone, `.env`, CORS prod) : fichier **`TWO-REPOS.md`** dans le repo **nail-scan-api** (à copier ou dupliquer dans la doc front si besoin).

---

## Nail Scan Demo (local)

1. Démarrer FastAPI (`nail-scan-api`) : `uvicorn main:app --host 0.0.0.0 --port 8000 --reload`
2. Dans ce projet, `.env.local` : **`SCAN_API_BASE_URL=http://127.0.0.1:8000`** (et `NEXT_PUBLIC_API_URL` identique si utilisé)
3. `npm run dev`
4. Ouvrir `http://localhost:3000/demo`

La page `/demo` ouvre la caméra, appelle `/api/scan` (proxy vers FastAPI avec `x-api-key` session).

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Architecture](#architecture)
6. [Database Schema](#database-schema)
7. [API Routes](#api-routes)
8. [Authentication & Roles](#authentication--roles)
9. [Payments — Paddle](#payments--paddle)
10. [Email System](#email-system)
11. [Admin Dashboard](#admin-dashboard)
12. [Setup — Local Development](#setup--local-development)
13. [Environment Variables](#environment-variables)
14. [Database Commands](#database-commands)
15. [Deployment — Production](#deployment--production)
16. [Roadmap](#roadmap)

---

## Overview

NailScan Pro is a full-stack SaaS application for camera-based nail sizing in Shopify stores. It includes a complete user-facing product (landing page, authentication, pricing, user dashboard) and a professional admin panel with user management and billing oversight.

```
┌─────────────────────────────────────────────────────────────────┐
│                      NailScan Pro SaaS                       │
├──────────────────┬──────────────────┬───────────────────────────┤
│  Public Site     │  User Area       │  Admin Area               │
│                  │                  │                           │
│  / (landing)     │  /dashboard      │  /admin (overview)        │
│  /pricing        │  /dashboard/     │  /admin/users             │
│  /contact        │    billing       │  /admin/billing           │
│  /terms          │  /dashboard/     │                           │
│  /privacy        │    settings      │                           │
├──────────────────┴──────────────────┴───────────────────────────┤
│  Auth: /sign-in  /sign-up  /forgot-password  /reset-password    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Features

### ✅ Landing Page
- Animated hero section with WebGL nebula background (Three.js)
- Features, Platform Architecture, Stats, Process, Testimonials, CTA sections
- Full-width neon SVG arc decoration
- Responsive navigation with scroll-aware active link detection

### ✅ Authentication
- Email + password registration and login
- Google OAuth (toggle with `NEXT_PUBLIC_GOOGLE_ENABLED`)
- Forgot password → email reset link (1-hour expiry)
- JWT sessions via NextAuth.js
- Role-based access control (USER / ADMIN / SUPERADMIN)

### ✅ Pricing & Payments
- 3 plans: Starter, Pro, Enterprise
- Monthly / Yearly toggle with animated transition
- Paddle Billing integration (sandbox + production)
- Real-time localized prices from Paddle API with sessionStorage cache
- 7-day free trial badge on paid plans
- Unauthenticated users redirected to sign-in before checkout
- Paddle webhook handler (subscription created, updated, canceled, paused)
- Post-payment `/success` page with auto-redirect to dashboard

### ✅ User Dashboard (`/dashboard`)
- Overview: current plan, status, renewal date, quick actions
- Billing: subscription details, Paddle customer portal link
- Settings: update display name, change password
- Skeleton loading states (Next.js Suspense)

### ✅ Admin Dashboard (`/admin`)
- 4 KPI cards: Total Users, New this week, Admins, Revenue MRR
- Charts: User Growth (area), Role Distribution (donut), Daily Registrations (bar)
- Recent users table with role management (SUPERADMIN only)
- Quick action links (Paddle dashboard, setup pages)
- System info panel

### ✅ Emails (Transactional)
- Welcome email on registration
- Password reset email (token expires in 1 hour)
- Payment confirmation email (plan + next renewal date)
- Subscription cancellation email (with access-until date)
- Branded HTML template shared across all emails

### ✅ Security
- bcrypt password hashing (12 rounds)
- Rate limiting on sensitive API routes (register: 5/hr, forgot-pw: 3/15min)
- Timing-safe secret comparison for SUPER_SETUP_SECRET
- Route protection via NextAuth middleware

### ✅ SEO & Performance
- Dynamic OG image (`/api/og`) generated with `next/og`
- Dynamic favicon and apple-touch-icon via `app/icon.tsx` / `app/apple-icon.tsx`
- Sitemap (`/sitemap.xml`) and robots.txt auto-generated
- Global metadata with OpenGraph + Twitter card
- Paddle CDN preconnect for faster price loading
- SessionStorage price cache (30-minute TTL)

### ✅ UX
- Framer Motion animations (page transitions, scroll-in cards, hover lifts)
- Toast notifications via `sonner`
- GDPR cookie consent banner (localStorage persistence)
- Custom 404 page
- Global error boundary (`error.tsx` + `global-error.tsx`)
- Page loading skeleton (`loading.tsx`)
- TradingPageLoader animation with skip paths for admin/auth

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.2 |
| Language | TypeScript | 5.9 |
| Styling | Tailwind CSS | 3.4 |
| Animations | Framer Motion | 12 |
| 3D / WebGL | Three.js + React Three Fiber | 0.18 / 8 |
| Auth | NextAuth.js | 4.24 |
| ORM | Prisma | 5.22 |
| Database | PostgreSQL (Neon) | — |
| Payments | Paddle Billing | v2 |
| Email | Nodemailer (SMTP) | 6.10 |
| Charts | Recharts | 3.8 |
| Icons | Lucide React | 0.54 |
| Toasts | Sonner | 2.0 |
| Validation | Zod | 4.3 |
| Password | bcryptjs | 3.0 |

---

## Project Structure

```
NailScanPro/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar, Footer, Providers, Toaster, CookieBanner)
│   ├── page.tsx                  # Landing page
│   ├── loading.tsx               # Global skeleton loader
│   ├── error.tsx                 # React error boundary page
│   ├── global-error.tsx          # Layout-level error page
│   ├── not-found.tsx             # Custom 404 page
│   ├── icon.tsx                  # Dynamic favicon (32×32)
│   ├── apple-icon.tsx            # Dynamic apple-touch-icon (180×180)
│   ├── sitemap.ts                # Auto-generated sitemap.xml
│   ├── robots.ts                 # robots.txt
│   │
│   ├── pricing/                  # Pricing page (Paddle checkout)
│   ├── contact/                  # Contact form
│   ├── terms/                    # Terms of Service
│   ├── privacy/                  # Privacy Policy
│   ├── success/                  # Post-payment confirmation
│   │
│   ├── sign-in/                  # Login (email + Google)
│   ├── sign-up/                  # Registration (email + Google)
│   ├── forgot-password/          # Request password reset
│   ├── reset-password/           # Set new password via token
│   │
│   ├── dashboard/                # User dashboard (protected)
│   │   ├── page.tsx              # Overview
│   │   ├── billing/              # Subscription & invoices
│   │   └── settings/             # Profile & password
│   │
│   ├── admin/                    # Admin panel (ADMIN + SUPERADMIN)
│   │   ├── page.tsx              # Dashboard overview + charts
│   │   ├── users/                # User management (SUPERADMIN only)
│   │   ├── billing/              # Paddle revenue overview
│   │   └── charts/               # UserGrowthChart, RoleDistributionChart, DailyRegistrationsChart
│   │
│   ├── setup/                    # First-time ADMIN setup (one-use)
│   ├── super-setup/              # Developer SUPERADMIN setup (secret-protected)
│   │
│   └── api/
│       ├── auth/
│       │   ├── [...nextauth]/    # NextAuth handler
│       │   ├── register/         # POST — create user
│       │   ├── forgot-password/  # POST — send reset email
│       │   └── reset-password/   # POST — update password
│       ├── user/
│       │   └── profile/          # GET / PATCH — read & update profile
│       ├── admin/
│       │   └── users/            # GET / PATCH — admin user management
│       ├── webhooks/
│       │   └── paddle/           # POST — Paddle event handler
│       ├── setup/                # POST — first ADMIN creation
│       ├── super-setup/          # POST — SUPERADMIN creation (secret)
│       └── og/                   # GET — dynamic OG image
│
├── components/
│   ├── Navbar.tsx                # Top navigation bar
│   ├── Footer.tsx                # Site footer
│   ├── CookieBanner.tsx          # GDPR cookie consent
│   ├── GoogleButton.tsx          # Google OAuth button
│   ├── PricingCard.tsx           # Individual plan card
│   ├── Toggle.tsx                # Monthly/Yearly toggle
│   ├── TradingPageLoader.tsx     # Page transition loader
│   ├── NebulaBackground.tsx      # WebGL animated background
│   ├── Providers.tsx             # SessionProvider wrapper
│   ├── Hero.tsx                  # Hero section
│   ├── Features.tsx              # Features section
│   ├── Stats.tsx                 # Statistics section
│   ├── Testimonials.tsx          # Social proof section
│   ├── CTA.tsx                   # Call-to-action section
│   └── ...                       # Other landing sections
│
├── lib/
│   ├── auth.ts                   # NextAuth configuration
│   ├── prisma.ts                 # Prisma singleton client
│   ├── paddle.ts                 # Paddle init, checkout, price fetching
│   ├── mailer.ts                 # Email sender (welcome, reset, payment)
│   ├── admin-analytics.ts        # Prisma aggregation for admin charts
│   └── rate-limit.ts             # In-memory rate limiter
│
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Seeds SUPERADMIN + ADMIN users
│
├── public/
│   └── favicon.svg               # Static SVG favicon fallback
│
├── styles/
│   └── globals.css               # Tailwind base + custom styles
│
├── middleware.ts                 # NextAuth route protection
├── .env.local                    # Local environment variables (gitignored)
├── .env.local.example            # Template for env variables
└── package.json
```

---

## Architecture

```
                        ┌──────────────────────┐
                        │     Browser/Client   │
                        └──────────┬───────────┘
                                   │ HTTPS
                        ┌──────────▼───────────┐
                        │   Next.js App Router  │
                        │   (Vercel / Node.js)  │
                        └──┬───────────────┬───┘
                           │               │
              ┌────────────▼──┐    ┌───────▼──────────┐
              │  Server Pages │    │   API Routes      │
              │  (RSC + SSR)  │    │  /api/auth/*      │
              └───────────────┘    │  /api/user/*      │
                                   │  /api/admin/*     │
                                   │  /api/webhooks/*  │
                                   └───────┬───────────┘
                                           │
               ┌───────────────────────────┼───────────────────┐
               │                           │                   │
    ┌──────────▼───────┐      ┌────────────▼──────┐   ┌───────▼──────┐
    │  Neon PostgreSQL  │      │  Paddle Billing   │   │  SMTP Email  │
    │  (via Prisma ORM) │      │  (webhooks + API) │   │  (Nodemailer)│
    └───────────────────┘      └───────────────────┘   └──────────────┘
```

---

## Database Schema

```prisma
model User {
  id                  String    @id @default(cuid())
  email               String    @unique
  passwordHash        String?             // null for Google OAuth users
  name                String?
  image               String?             // Google profile picture
  role                String    @default("USER")  // USER | ADMIN | SUPERADMIN
  
  // Paddle subscription
  paddleSubId         String?   @unique
  paddleCustomerId    String?
  planKey             String?             // "starter" | "pro"
  subStatus           String?             // "active" | "canceled" | "past_due" | "trialing" | "paused"
  subCurrentPeriodEnd DateTime?
  
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt
  resetTokens         PasswordResetToken[]
}

model PasswordResetToken {
  id        String    @id @default(cuid())
  token     String    @unique          // sha256 random hex
  userId    String
  user      User      @relation(...)
  expiresAt DateTime                   // +1 hour from creation
  usedAt    DateTime?                  // set when used (single-use)
  createdAt DateTime  @default(now())
}
```

---

## API Routes

### Authentication
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Create new user account | Public |
| `POST` | `/api/auth/forgot-password` | Send password reset email | Public |
| `POST` | `/api/auth/reset-password` | Update password with token | Public |
| `*` | `/api/auth/[...nextauth]` | NextAuth handler (login, OAuth) | Public |

### User
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/user/profile` | Get current user profile | User |
| `PATCH` | `/api/user/profile` | Update name or password | User |

### Admin
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/admin/users` | List all users | ADMIN+ |
| `PATCH` | `/api/admin/users` | Update user role | SUPERADMIN |

### Webhooks
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/webhooks/paddle` | Handle Paddle billing events | Paddle |

### Setup
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET/POST` | `/api/setup` | First-time ADMIN setup | Public (one-use) |
| `POST` | `/api/super-setup` | Create/reset SUPERADMIN | Secret key |

### Utilities
| Method | Route | Description |
|---|---|---|
| `GET` | `/api/og` | Generate dynamic OG image |
| `GET` | `/apple-icon` | Apple touch icon (180×180) |
| `GET` | `/icon` | Favicon (32×32) |
| `GET` | `/sitemap.xml` | SEO sitemap |
| `GET` | `/robots.txt` | Crawler rules |

---

## Authentication & Roles

### Roles
```
USER        → Can access /dashboard (own account only)
ADMIN       → Can access /admin (user overview, billing)
SUPERADMIN  → Full access: can promote/demote users, manage everything
```

### Session flow
```
Sign in → NextAuth JWT → middleware checks role → redirect to /admin or /dashboard
```

### Protected routes (middleware.ts)
```
/dashboard/*  → requires any authenticated session
/admin/*      → requires role ADMIN or SUPERADMIN
```

### First-time setup
```
1. SUPERADMIN  → /super-setup  (requires SUPER_SETUP_SECRET env var)
2. ADMIN       → /setup        (one-time use, disabled after first ADMIN created)
                 or via npm run db:seed
```

---

## Payments — Paddle

### Plans
| Plan | Monthly | Yearly | Features |
|---|---|---|---|
| Starter | `NEXT_PUBLIC_PADDLE_STARTER_MONTHLY` | `NEXT_PUBLIC_PADDLE_STARTER_YEARLY` | 1 workspace, 3 members, basic analytics |
| Pro | `NEXT_PUBLIC_PADDLE_PRO_MONTHLY` | `NEXT_PUBLIC_PADDLE_PRO_YEARLY` | Unlimited workspaces, 20 members, advanced analytics |
| Enterprise | — contact sales — | — contact sales — | Custom agreement |

### Checkout flow
```
User clicks plan → openCheckout(priceId, { email, planKey })
    → Paddle overlay opens
    → User pays
    → Paddle redirects to /success?plan=starter
    → Paddle sends webhook to /api/webhooks/paddle
    → DB updated: planKey, subStatus, subCurrentPeriodEnd
    → Email sent: payment confirmation
```

### Webhook events handled
```
subscription.created   → set plan, status, period
subscription.activated → set plan, status, period
subscription.updated   → update plan, status, period
subscription.canceled  → set status=canceled, send cancellation email
subscription.paused    → set status=paused
subscription.resumed   → set status=active
transaction.completed  → confirm active plan, send confirmation email
```

### Environments
| ENV | Token prefix | `NEXT_PUBLIC_PADDLE_ENV` |
|---|---|---|
| Sandbox (test) | `test_` | `sandbox` |
| Production | `live_` | `production` |

---

## Email System

All emails share a branded dark HTML template. The system uses **Nodemailer** with any SMTP provider.

| Email | Trigger | Function |
|---|---|---|
| Welcome | User registers | `sendWelcomeEmail(email, name)` |
| Password reset | Forgot password form | `sendPasswordResetEmail(email, resetUrl)` |
| Payment confirmation | `transaction.completed` webhook | `sendPaymentConfirmationEmail(email, plan, periodEnd)` |
| Cancellation | `subscription.canceled` webhook | `sendCancellationEmail(email, plan, accessUntil)` |

> Emails fail **silently** (console log only) — the app never crashes if SMTP is not configured.

### Recommended SMTP providers
- **[Resend](https://resend.com)** — simplest, free tier, great DX
- **Gmail** — `smtp.gmail.com:587` with App Password
- **SendGrid** — `smtp.sendgrid.net:587`
- **Mailgun** — `smtp.mailgun.org:587`

---

## Admin Dashboard

### Overview metrics
- **Total Users** — all registered accounts
- **New this week** — registrations in last 7 days
- **Admins** — count of ADMIN + SUPERADMIN roles
- **Revenue MRR** — estimated from active subscriptions

### Charts (Recharts)
| Chart | Type | Data |
|---|---|---|
| User Growth | Area chart | Cumulative users over 30 days |
| Role Distribution | Donut chart | USER / ADMIN / SUPERADMIN breakdown |
| Daily Registrations | Bar chart | New accounts per day over 30 days |

### User management (SUPERADMIN only — `/admin/users`)
- List all users with role, plan, registration date
- Promote USER → ADMIN or demote ADMIN → USER
- View subscription status per user

---

## Setup — Local Development

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- A [Neon](https://neon.tech) account (free tier)
- A [Paddle](https://paddle.com) account (sandbox)

### 1. Clone and install

```bash
git clone <repo-url> NailScanPro
cd NailScanPro
npm install
```

### 2. Configure environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values (see [Environment Variables](#environment-variables)).

### 3. Generate NEXTAUTH_SECRET

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Paste the output into `NEXTAUTH_SECRET`.

### 4. Push database schema

```bash
npm run db:push
```

### 5. Seed initial admin accounts

```bash
npm run db:seed
```

This creates accounts from `SUPERADMIN_EMAIL/PASSWORD` and `ADMIN_EMAIL/PASSWORD` in `.env.local`.

### 6. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 7. Create super-admin manually (alternative)

If seed doesn't work, visit `/super-setup` and enter your `SUPER_SETUP_SECRET`.

---

## Environment Variables

```bash
# ── Site ──────────────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=http://localhost:3000           # Change to https://yourdomain.com in prod

# ── NextAuth (REQUIRED) ───────────────────────────────────────────
NEXTAUTH_SECRET=<generate: openssl rand -base64 32>  # Session signing key
NEXTAUTH_URL=http://localhost:3000                   # Full site URL

# ── Database — Neon PostgreSQL ────────────────────────────────────
DATABASE_URL=postgresql://user:pass@pooler.neon.tech/db?sslmode=require
DIRECT_URL=postgresql://user:pass@direct.neon.tech/db?sslmode=require

# ── Paddle Billing ────────────────────────────────────────────────
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=test_xxx             # From Paddle Dashboard → Developer
NEXT_PUBLIC_PADDLE_ENV=sandbox                       # "sandbox" or "production"
NEXT_PUBLIC_PADDLE_DEBUG=false
NEXT_PUBLIC_PADDLE_STARTER_MONTHLY=pri_xxx
NEXT_PUBLIC_PADDLE_STARTER_YEARLY=pri_xxx
NEXT_PUBLIC_PADDLE_PRO_MONTHLY=pri_xxx
NEXT_PUBLIC_PADDLE_PRO_YEARLY=pri_xxx

# ── Google OAuth (optional) ───────────────────────────────────────
NEXT_PUBLIC_GOOGLE_ENABLED=true
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxx

# ── Email / SMTP ──────────────────────────────────────────────────
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="NailScan Pro <noreply@yourdomain.com>"

# ── Admin accounts ────────────────────────────────────────────────
SUPERADMIN_EMAIL=dev@yourdomain.com
SUPERADMIN_PASSWORD=strong_password
SUPERADMIN_NAME=Developer
SUPER_SETUP_SECRET=<generate: openssl rand -hex 32>

ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=strong_password
```

---

## Database Commands

```bash
# Push schema changes to database (no migration files)
npm run db:push

# Open Prisma Studio (visual DB browser)
npm run db:studio

# Seed SUPERADMIN and ADMIN accounts
npm run db:seed

# Generate Prisma client (done automatically on build)
npx prisma generate

# Full reset (⚠️ deletes all data)
npx prisma db push --force-reset
```

---

## Deployment — Production

### Vercel (recommended)

```bash
npm install -g vercel
vercel --prod
```

**Required environment variables on Vercel:**
```
NEXTAUTH_SECRET          ← generate fresh for production
NEXTAUTH_URL             ← https://yourdomain.com
NEXT_PUBLIC_SITE_URL     ← https://yourdomain.com
DATABASE_URL             ← Neon pooler URL
DIRECT_URL               ← Neon direct URL
NEXT_PUBLIC_PADDLE_ENV   ← production
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ← live_ token
... all other vars ...
```

### Paddle Webhook (production)

In Paddle Dashboard → **Notifications** → **New destination**:

```
URL:    https://yourdomain.com/api/webhooks/paddle
Events: subscription.created, subscription.updated, subscription.canceled,
        subscription.paused, subscription.resumed, transaction.completed
```

### Google OAuth (production)

In [Google Cloud Console](https://console.cloud.google.com) → APIs → Credentials → OAuth Client:

```
Authorized redirect URIs:
  https://yourdomain.com/api/auth/callback/google
```

### Build command (for CI/CD)

```bash
npm run build    # runs: prisma generate && next build
```

---

## Scripts

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (prisma generate + next build)
npm run start        # Start production server
npm run lint         # ESLint check
npm run db:push      # Sync schema to database
npm run db:seed      # Create initial admin accounts
npm run db:studio    # Open Prisma Studio (port 5555)
```

---

## Rate Limiting

In-memory rate limiter (`lib/rate-limit.ts`) — resets on server restart:

| Route | Limit | Window |
|---|---|---|
| `POST /api/auth/register` | 5 requests | per IP per hour |
| `POST /api/auth/forgot-password` | 3 requests | per IP per 15 min |

> For production at scale, replace with **[Upstash Redis](https://upstash.com)** rate limiting.

---

## Security Checklist

| Item | Status |
|---|---|
| Passwords hashed with bcrypt (12 rounds) | ✅ |
| JWT sessions signed with NEXTAUTH_SECRET | ✅ |
| Route protection via NextAuth middleware | ✅ |
| Rate limiting on auth endpoints | ✅ |
| Password reset tokens: single-use + 1h expiry | ✅ |
| SUPER_SETUP_SECRET uses timing-safe comparison | ✅ |
| HTTPS enforced by Vercel/Neon in production | ✅ |
| Paddle handles all card data (PCI DSS via Paddle) | ✅ |
| GDPR cookie consent banner | ✅ |
| Admin/SUPERADMIN routes protected at middleware level | ✅ |

---

## Roadmap

### Near term
- [ ] PostHog / Plausible analytics integration
- [ ] User onboarding checklist (dashboard welcome flow)
- [ ] 2FA (TOTP authenticator app)
- [ ] `/api/health` endpoint for uptime monitoring
- [ ] Sentry error monitoring

### Medium term
- [ ] Email marketing integration (Resend audiences / ConvertKit)
- [ ] Referral/affiliate program
- [ ] Usage limits enforcement per plan
- [ ] User session management (active devices list)
- [ ] Audit log for admin actions

### Long term
- [ ] `/changelog` page
- [ ] Public status page
- [ ] API keys for users (programmatic access)
- [ ] Multi-language (i18n)

---

## License

Private — All rights reserved © 2026 NailScan Pro.

---

*Built with Next.js 14, Prisma, Neon, Paddle, and ☕*
