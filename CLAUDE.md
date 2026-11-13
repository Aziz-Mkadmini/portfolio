# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Mohamed Aziz Mkadmini (live at https://mohamedazizmkadmini.vercel.app/). Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, Framer Motion, one react-three-fiber scene, Lenis. No database, no auth — the only server code is the contact form endpoint.

## Positioning — read before touching copy

The site exists to turn visitors into freelance clients (SMEs, startups, agencies, French speakers first), not to impress developers. The owner is positioned as "Développeur Full-Stack & Automatisation IA", with two pillars on equal footing: **Automation** (n8n, AI agents, workflows) and **Full-Stack** (websites, SaaS). Rules that follow from this:

- Lead with the client benefit; technical vocabulary (Prisma, webhooks, RBAC…) belongs in the collapsed part of a case study, never in a headline or first paragraph.
- One primary call to action everywhere: WhatsApp, built with `whatsappLink(prefill)` from `src/lib/site.ts`. Other buttons are secondary.
- Never invent testimonials, client logos, figures or prices. Every key figure carries its `source`. Prices stay "on quote" (`t.studio.offers.priceNote`) and timelines are indicative until the owner supplies real ones.
- Use-case examples by trade are examples, not past clients — keep them worded that way.
- Do not remove a project or an image without asking.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # production build
npm run lint       # eslint, fails on any warning (--max-warnings 0)
npm run typecheck  # tsc --noEmit
```

There is no test suite. `DEPLOYMENT.md` asks for `npm run lint` and `npm run build` to pass before deploying.

Copy `.env.local.example` to `.env.local` for local work. All `NEXT_PUBLIC_*` variables have fallbacks in `src/lib/site.ts`; only `RESEND_API_KEY` is required, and only for the contact form to deliver mail.

## Architecture

### Content lives in three files, not in components

- `src/lib/site.ts` — identity and outbound links (email, LinkedIn, GitHub, WhatsApp, resume, booking), each overridable by a `NEXT_PUBLIC_*` env var. Also feeds metadata, sitemap and JSON-LD. The `services` array exported here is not used by the UI; the Services section renders `t.services.items` from the messages file.
- `src/lib/projects.ts` — the `projects` array: slug, stack, URLs, images, video. Its text fields (`type`, `summary`, `problem`, `impact`, `solution`, `highlights`, `outcomes`) are only a fallback.
- `src/lib/i18n/messages.ts` — every UI string in English and French, typed by a single `Dict`. `projectFields[slug]` holds the localized text for each project and overrides the fields in `projects.ts`.

**Adding or editing a project touches both files:** the entry in `projects.ts` plus a `projectFields[slug]` block in *both* the `en` and `fr` dictionaries. Likewise any new UI string must be added to the `Dict` type and to both locales, or typecheck fails.

### i18n is client-side only

There are no locale routes. `LocaleProvider` (`src/lib/i18n/LocaleProvider.tsx`) wraps the app in `layout.tsx`, renders French first, then on mount switches to the `portfolio-locale` value in localStorage or the browser language. Components read strings through `const { t, locale } = useLocale()`, so anything showing translated text must be a client component (`"use client"`). Server-rendered metadata in `layout.tsx` is static and comes from `site.ts`.

### Pages

- `/` (`src/app/page.tsx`) stacks the sections from `src/components/sections/` in order: Hero, ProofBar (key figures), Pillars ("What I do for you"), Projects, TechMarquee, Services, Process, Experience ("Why me"), Contact. Everything from Projects down is loaded with `next/dynamic` (still server-rendered) so it hydrates in separate chunks.
- `/projects` reuses the same `Projects` and `Contact` sections; there are no per-project routes — each case study is rendered inline by `Projects.tsx`.
- Navigation uses hash links to section ids (`/#services`, `#contact`, …), so keep section `id`s stable.
- Strings added by the redesign live under `t.studio` in `messages.ts`: `pillars` (the two offer cards), `offers` (services: two families of four offers with benefit, deliverables, timeline), `process`, `stats` (key figures with `source`), `why` ("Why me"), `filters`. The older `t.services.items`, `t.studio.services.delays` and `site.services` are no longer rendered.
- Each project has `pillars` in `projects.ts`, which drives the Automation / Websites & SaaS filters, and an optional `proof` list in `projectFields[slug]` (short facts shown as chips). A case study shows hook, proof chips, visual, problem and result; solution, stack, highlights, outcomes and gallery sit inside its `<details>`.
- `Experience.tsx` keeps the résumé content (internships, degrees, certifications, availability for jobs) behind a `<details>` so it does not compete with the client message.
- Page metadata is static and French-first (`site.title`, `site.tagline`); the English variants (`titleEn`, `taglineEn`) only feed keywords and JSON-LD because there are no locale routes. `src/app/opengraph-image.tsx` generates the share preview.

### 3D hero — one canvas only

`components/three/HeroVisual.tsx` owns the only WebGL canvas on the site; do not add another. It renders an inline SVG orb first, then loads `HeroScene.tsx` (`next/dynamic`, `ssr: false`) on the first user interaction or 4 s after load. three.js is never fetched when WebGL is missing or `prefers-reduced-motion` is set, and the canvas `frameloop` switches to `"never"` when the hero is off-screen or the tab is hidden. Lighting is generated with drei `Lightformer`s — no external HDRI, which the CSP would also block. This deferral is what keeps mobile Lighthouse performance around 85; mounting the canvas eagerly dropped it to 58.

### Contact form

`ContactForm.tsx` posts to `src/app/api/contact/route.ts`, which validates with zod, applies an in-memory per-IP rate limit (5 requests / 10 min, reset on every cold start), HTML-escapes the input and sends through Resend. Env: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

### Styling and motion

- Dark theme only, with a single amber accent — no other hue. Colors are RGB-triplet CSS variables in `src/app/globals.css` exposed as Tailwind colors: `surface`, `surface-raised`, `ink` (text), `muted` (secondary text), `line` (hairline borders), `accent`. Fonts are Inter (`font-sans`) and Bricolage Grotesque (`font-display`) via `next/font`; the display font uses font-display `block` because swapping it re-wrapped the hero title and caused layout shift. Layout is editorial: hairlines and type rather than boxed cards; `.label` is the small uppercase caption style.
- `src/components/Motion.tsx`: `FadeIn`, `Stagger`, `StaggerItem` (scroll reveals), `RevealWords` (word-by-word titles, CSS-driven so the hero `<h1>` paints before hydration), `Counter` (count-up numbers). All honor `prefers-reduced-motion`. Reveal wrappers carry the `js-reveal` class, which a `<noscript>` style in `layout.tsx` forces visible. `SectionHeading` already uses `RevealWords`.
- `SmoothScroll.tsx` loads Lenis only for mouse/trackpad devices; touch devices use native scrolling. `Cursor.tsx` (custom cursor) likewise only mounts for a fine pointer and adds `html.has-cursor`.
- `ui/BeforeAfter.tsx` expects the stacked 1680x1614 sheets in `public/redesigns/*-before-after.jpg` (before on top, after below) and crops the same file twice; a new sheet must use the same layout. Which projects use it is set by `beforeAfterSlugs` in `Projects.tsx`.
- `Projects.tsx` maps stack labels to brand icons by keyword (`stackIconByKeyword`); add an entry there when a new technology should show an icon. Gallery images and the video inside a case study are only rendered once its `<details>` is opened.

### Assets and security headers

- Served assets live in `public/<project>/`. The root-level `kaizen/`, `shopify/`, `Nailsscan pro/` folders, `imageprofil.png` and the CV PDF are original source captures, not referenced by the site.
- `next.config.ts` sets a strict CSP (`default-src 'self'`, `media-src 'self'`, `form-action 'self'`) and only allows `images.unsplash.com` for remote `next/image`. Embedding third-party scripts, iframes, videos or fonts requires updating the CSP there. `'unsafe-eval'` is added in development only, because `next dev` cannot hydrate without it.
- `next build` and `next dev` share `.next`: stop the dev server before running a build.

## Misleading docs

`README.md` and `README1.md` describe other projects (the Kaizen SaaS and NailScan Pro: Prisma, NextAuth, Paddle). They do not describe this repository — ignore them when reasoning about this codebase. The short `readme` file is the actual project blurb.
