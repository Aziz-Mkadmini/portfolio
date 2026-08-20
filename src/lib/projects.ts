export type ProjectIcon = "orbit" | "rocket" | "boxes" | "sparkles";

export type Project = {
  slug: string;
  name: string;
  type: string;
  icon: ProjectIcon;
  summary: string;
  problem: string;
  impact: string;
  solution: string;
  stack: string[];
  /** What makes the build credible: concrete engineering details */
  highlights?: string[];
  /** Business/operator outcomes (what the system enables) */
  outcomes?: string[];
  /** Public demo URL, or omit / use #contact to route to inquiry */
  demoUrl?: string;
  /** Public repository — omit or set via env; empty string resolves to no button */
  repoUrl?: string;
  imageSrc?: string;
  imageAlt: string;
  images?: { src: string; alt: string }[];
  /** Optional product demo video (e.g. invitation walkthrough) */
  videoSrc?: string;
  videoLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "kaizen",
    name: "Kaizen Kyoto Capital",
    type: "Systematic Crypto Trading SaaS",
    icon: "rocket",
    summary:
      "Full-stack SaaS for systematic crypto trading: public marketing site, Paddle subscriptions (16 plans), client dashboard with live signals, performance reporting, mandatory risk framework, and admin back-office.",
    problem:
      "Launching a trading signals product requires more than a landing page — subscribers need gated access, verified performance, billing lifecycle, and operator tooling without security gaps.",
    impact:
      "Delivered an end-to-end commercial platform: visitors can subscribe via Paddle, clients receive tier-gated signals after completing the 1% risk framework, and admins manage users, revenue, and billing from a dedicated console.",
    solution:
      "Built with Next.js 14, Prisma + Neon, NextAuth (email + Google), Paddle webhooks, Upstash rate limiting, 2FA for admins, equity-curve performance sync, SEO (sitemap, Learn hub, JSON-LD), and 43 automated tests with CI.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL (Neon)",
      "NextAuth.js",
      "Paddle Billing",
      "Upstash Redis",
      "Nodemailer (SMTP)",
      "Recharts",
      "Framer Motion",
    ],
    highlights: [
      "16 Paddle price IDs — 8 trading + 8 investment packages (monthly & annual)",
      "Client dashboard: signals, performance report, risk framework gate, subscription management",
      "Admin: KPIs, users, subscriptions, revenue analytics, Paddle sync & audit log",
      "2FA for admins, GDPR export/delete, webhook signature verification, security score 84/100",
      "Performance equity curve synced across homepage, /performance, and client dashboard",
    ],
    outcomes: [
      "Live production at kaizenkyotocapital.com — full SaaS ready for clients",
      "Monetization live: checkout, webhooks, and automatic plan activation after payment",
      "SEO-ready: dedicated performance page, Learn articles, FAQ schema, sitemap",
      "Documented deployment, Paddle setup, and security audit for client handoff",
    ],
    demoUrl: "https://kaizenkyotocapital.com/",
    /** Set in `.env.local`: `NEXT_PUBLIC_KAIZEN_GITHUB_URL` — leave unset to hide the button */
    repoUrl: process.env.NEXT_PUBLIC_KAIZEN_GITHUB_URL?.trim() || undefined,
    imageSrc: "/kaizen/kaizen-kyoto-capital-full.png",
    imageAlt:
      "Kaizen Kyoto Capital — full-page screenshot of the systematic crypto trading platform",
  },
  {
    slug: "istetdaa",
    name: "Istetdaa",
    type: "Premium Digital Invitations",
    icon: "sparkles",
    summary:
      "Luxury digital invitation platform (استدعاء) for weddings, birthdays, and parties — mobile-first templates, interactive demos, multilingual FR/EN/AR, and WhatsApp ordering.",
    problem:
      "Couples and hosts need elegant shareable invitations without complex checkout friction, while still showcasing RSVP, countdown, location, and dress-code details on mobile.",
    impact:
      "A conversion-focused catalog where guests experience a live phone demo, clients pick a template, and orders are completed simply via WhatsApp — no card checkout on the site.",
    solution:
      "Built a multilingual marketing + product site with interactive invitation demos (envelope open, music, animations), template catalog by category, and a WhatsApp-first order flow.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "i18n (FR / EN / AR)",
      "WhatsApp commerce",
      "Figma → mobile-first UI",
    ],
    highlights: [
      "Interactive live demos: envelope open, ambient music, entrance animations",
      "Catalog of wedding / birthday / party / custom templates with pricing",
      "Guest features: RSVP, countdown, Google Maps location, dress code",
      "WhatsApp order path — no on-site card checkout",
      "Multilingual experience (French, English, Arabic)",
    ],
    outcomes: [
      "Production live at istetdaa.vercel.app with Collection 2026 templates",
      "Premium brand presence (burgundy / cream / gold) aligned with luxury invitations",
      "Clear path from discovery → demo → WhatsApp order",
    ],
    demoUrl: "https://istetdaa.vercel.app/en",
    imageSrc: "/istetdaa/promo.png",
    imageAlt: "Istetdaa — luxury digital wedding invitation promotional creative",
    videoSrc: "/istetdaa/wedding-invitation.mp4",
    videoLabel: "Example wedding invitation video",
  },
  {
    slug: "shopify-press-on-nails-scan",
    name: "Press-On Nails Shopify Store",
    type: "Shopify E-commerce + Scan",
    icon: "boxes",
    summary:
      "A Shopify storefront for press-on nails with a custom order flow and scan-assisted sizing implementation to improve purchase confidence.",
    problem:
      "Customers hesitate to buy press-on nails online when sizing is unclear, which increases support requests, returns, and checkout drop-off.",
    impact:
      "Introduced a clearer buying journey: product discovery, custom order path, and scan-oriented sizing guidance integrated into Shopify pages.",
    solution:
      "Implemented and customized Shopify pages (home, collections, product, custom order, checkout) with a scan-related sizing experience adapted to the press-on nails workflow.",
    stack: [
      "Shopify",
      "Liquid",
      "HTML/CSS",
      "JavaScript",
      "Custom product pages",
      "Checkout flow",
      "Scan-guided sizing UX",
    ],
    highlights: [
      "Custom Shopify pages for discovery, product detail, contact, and personalized order",
      "Scan implementation integrated into the buying/sizing journey",
      "Product-page UX adapted to reduce uncertainty before checkout",
      "End-to-end storefront flow aligned with conversion goals",
    ],
    outcomes: [
      "A clearer path from product browsing to checkout for first-time buyers",
      "Better sizing confidence before purchase via scan-assisted flow",
      "A reusable Shopify structure for future product and campaign updates",
    ],
    demoUrl: "#contact",
    imageSrc: "/shopify/landing-home.png",
    imageAlt: "Shopify press-on nails storefront landing page",
    images: [
      { src: "/shopify/landing-home.png", alt: "Shopify home page" },
      { src: "/shopify/collections-all.png", alt: "Shopify collections page" },
      { src: "/shopify/product-page.png", alt: "Product page" },
      { src: "/shopify/product-page-scan.png", alt: "Product page with scan section" },
      { src: "/shopify/custom-order-scan.png", alt: "Custom order scan flow page" },
      { src: "/shopify/checkout.png", alt: "Checkout page" },
    ],
  },
  {
    slug: "nailscan-pro",
    name: "NailScan Pro",
    type: "Shopify SaaS",
    icon: "orbit",
    summary:
      "A Shopify nail sizing SaaS with camera-based demo flow, search/proxy integration to a dedicated scan API, and production-grade user/auth + subscription foundations.",
    problem:
      "Teams needed a reliable way to convert camera scans into a usable sizing flow inside Shopify, while keeping the frontend and scan API decoupled.",
    impact:
      "A structured end-to-end architecture that supports iteration: clear frontend demo UX, a proxy layer to the scan API, and a consistent product foundation for users and billing.",
    solution:
      "Implemented a Next.js SaaS frontend with authentication, subscription setup, and a `/demo` camera experience that forwards scan requests to a separate FastAPI service.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "Prisma",
      "PostgreSQL (Neon)",
      "Paddle subscriptions",
      "FastAPI (scan API)",
      "Framer Motion",
    ],
    highlights: [
      "Two-repo architecture: Next.js frontend + dedicated FastAPI scan API",
      "Camera-based `/demo` UX with proxying scan requests",
      "Authentication + RBAC-ready foundations for product operations",
      "Subscription-ready structure (Paddle) for a real SaaS lifecycle",
    ],
    outcomes: [
      "A usable sizing pipeline inside Shopify without coupling UI to the scan engine",
      "Clear separation of concerns: scalable evolution path for both frontend and API",
      "Production-grade system design for onboarding + billing + admin workflows",
    ],
    demoUrl: "https://nail-scan-pro.vercel.app",
    imageSrc: "/nailscan-pro/demo-resultat.png",
    imageAlt: "NailScan Pro demo and product interface preview",
    images: [
      { src: "/nailscan-pro/demo-resultat.png", alt: "NailScan demo and result screen" },
      { src: "/nailscan-pro/integration-button.png", alt: "NailScan integration button screen" },
      { src: "/nailscan-pro/pricing.png", alt: "NailScan pricing screen" },
    ],
  },
];
