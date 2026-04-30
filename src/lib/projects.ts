export type ProjectIcon = "orbit" | "rocket" | "boxes";

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
};

export const projects: Project[] = [
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
    demoUrl: "#contact",
    imageSrc: "/nailscan-pro/demo-resultat.png",
    imageAlt: "NailScan Pro demo and product interface preview",
    images: [
      { src: "/nailscan-pro/demo-resultat.png", alt: "NailScan demo and result screen" },
      { src: "/nailscan-pro/integration-button.png", alt: "NailScan integration button screen" },
      { src: "/nailscan-pro/pricing.png", alt: "NailScan pricing screen" },
    ],
  },
  {
    slug: "kaizen",
    name: "Kaizen",
    type: "Trading Analytics SaaS",
    icon: "rocket",
    summary:
      "A premium trading analytics platform built as an end-to-end SaaS: landing + auth, role-based admin, Paddle billing lifecycle, dashboards, and production-ready engineering practices.",
    problem:
      "A premium analytics product needs more than features: secure sessions, consistent billing flows, and admin visibility without operational ambiguity.",
    impact:
      "Delivered a complete system that operators can run: dashboards for users, admin KPIs and analytics, and a documented architecture for maintainability.",
    solution:
      "Built with Next.js + Prisma + Neon, NextAuth role-based access (USER/ADMIN/SUPERADMIN), Paddle subscriptions/webhooks, transactional emails, and resilient route protection.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL (Neon)",
      "NextAuth.js",
      "Paddle Billing",
      "Nodemailer (SMTP)",
      "Recharts",
      "Three.js (hero visuals)",
      "Framer Motion",
    ],
    highlights: [
      "Paddle checkout + webhook lifecycle (created/updated/paused/canceled/completed)",
      "NextAuth RBAC with USER/ADMIN/SUPERADMIN + middleware route protection",
      "Admin KPIs + charts (Recharts) for operator-grade visibility",
      "Transactional email system (welcome, reset, payment confirmation, cancellation)",
      "SessionStorage price caching for faster pricing UX",
    ],
    outcomes: [
      "Operators can manage users, roles, and billing with clear admin dashboards",
      "A maintainable architecture that shortens iteration time for new features",
      "Investor-ready product foundations: auth + billing + analytics + documentation",
    ],
    demoUrl: "#contact",
    /** Set in `.env.local`: `NEXT_PUBLIC_KAIZEN_GITHUB_URL` — leave unset to hide the button */
    repoUrl: process.env.NEXT_PUBLIC_KAIZEN_GITHUB_URL?.trim() || undefined,
    imageSrc: "/kaizen/landing-premium.png",
    imageAlt: "Kaizen trading analytics SaaS dashboard preview",
    images: [
      { src: "/kaizen/landing-premium.png", alt: "Kaizen landing page" },
      { src: "/kaizen/dashboard.png", alt: "Kaizen dashboard" },
      { src: "/kaizen/billing.png", alt: "Kaizen billing page" },
      { src: "/kaizen/card-pricing.png", alt: "Kaizen pricing cards" },
      { src: "/kaizen/sign-in.png", alt: "Kaizen sign in page" },
      { src: "/kaizen/sign-up.png", alt: "Kaizen sign up page" },
    ],
  },
];
