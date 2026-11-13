export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];

type Dict = {
  nav: {
    work: string;
    services: string;
    experience: string;
    contact: string;
    resume: string;
    requestResume: string;
    bookCall: string;
    role: string;
  };
  hero: {
    kicker: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    body: string;
    viewPortfolio: string;
    downloadResume: string;
    requestResume: string;
    bookCall: string;
    sideKicker: string;
    sideTitle: string;
    sideChip: string;
    sideBullets: string[];
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    bodyBefore: string;
    bodyAfter: string;
    bullets: string[];
  };
  projects: {
    kicker: string;
    title: string;
    description: string;
    discuss: string;
    caseStudy: string;
    problem: string;
    impact: string;
    solution: string;
    stack: string;
    liveDemo: string;
    requestDemo: string;
    talkAbout: string;
    highlights: string;
    outcomes: string;
    preview: string;
    previewHint: string;
    seeMore: string;
    videoFallback: string;
  };
  services: {
    kicker: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string; highlights: string[] }>;
  };
  experience: {
    kicker: string;
    title: string;
    description: string;
    professional: string;
    education: string;
    professionalItems: string[];
    educationItems: string[];
    creds: Array<{ title: string; body: string }>;
    achievements: string;
    achievementItems: string[];
    moreDetails: string;
    availability: string;
    availabilityBody: string;
    timeline: string;
    timelineBody: string;
    resumeNote: string;
  };
  social: {
    kicker: string;
    title: string;
    description: string;
    note: string;
    items: Array<{ title: string; body: string }>;
    strip: Array<{ k: string; v: string }>;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    open: string;
    linkedinHint: string;
    githubHint: string;
    resumeHint: string;
    requestResumeHint: string;
    emailHint: string;
    whatsapp: string;
    whatsappHint: string;
    preferCall: string;
    preferCallBody: string;
    bookACall: string;
  };
  form: {
    name: string;
    email: string;
    company: string;
    project: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  cta: {
    title: string;
    body: string;
    chipFast: string;
    chipSolid: string;
    viewPortfolio: string;
    downloadResume: string;
    requestResume: string;
    bookCall: string;
    asyncNote: string;
  };
  footer: {
    role: string;
    body: string;
    navigate: string;
    engagement: string;
    featuredWork: string;
    viewPortfolio: string;
    bookCall: string;
    downloadResume: string;
    requestResume: string;
    rights: string;
  };
  projectFields: Record<
    string,
    {
      type: string;
      summary: string;
      problem: string;
      impact: string;
      solution: string;
      highlights?: string[];
      outcomes?: string[];
      videoLabel?: string;
    }
  >;
};

const en: Dict = {
  nav: {
    work: "Work",
    services: "Services",
    experience: "Experience",
    contact: "Contact",
    resume: "Resume",
    requestResume: "Request resume",
    bookCall: "Book a call",
    role: "Software Engineer & AI Product Builder",
  },
  hero: {
    kicker: "Freelance Full-Stack & AI Engineer • Available now",
    titleBefore: "Your website, SaaS or AI tool,",
    titleHighlight: "designed, built and live",
    titleAfter: "in weeks, not months.",
    body: "I turn ideas into products people pay for: premium websites, SaaS platforms with payments, and AI automations that save your team hours every week. One engineer, from first sketch to production.",
    viewPortfolio: "View portfolio",
    downloadResume: "Download resume",
    requestResume: "Request resume",
    bookCall: "Book a call",
    sideKicker: "Why clients work with me",
    sideTitle: "Shipped products, not slide decks",
    sideChip: "Reply < 24h",
    sideBullets: [
      "SaaS live in production with Paddle payments, 2FA and 43 automated tests",
      "Premium 3D / motion redesigns that make brands look international",
      "AI features (GPT-4o, Whisper, automations) wired into real workflows",
    ],
  },
  about: {
    kicker: "About",
    title: "I build software and AI systems that solve real operational problems.",
    description:
      "From SaaS platforms to internal tools, I focus on systems that are fast to ship, easy to maintain, and useful in day-to-day work.",
    bodyBefore: "I work as an",
    bodyAfter:
      "focused on clean architecture, product reliability, and measurable outcomes.",
    bullets: [
      "I structure codebases for long-term growth, not short-term demos",
      "I integrate AI features with strict control over quality, cost, and latency",
      "I optimize business workflows so teams move faster with less operational noise",
    ],
  },
  projects: {
    kicker: "Featured work",
    title: "Case studies that combine visual quality, technical depth, and business impact",
    description:
      "Selected projects where I owned product direction, system architecture, and execution from concept to production-ready delivery.",
    discuss: "Discuss a similar build",
    caseStudy: "Case study",
    problem: "Problem",
    impact: "Business impact",
    solution: "Solution",
    stack: "Stack",
    liveDemo: "Live demo",
    requestDemo: "Request demo / details",
    talkAbout: "Talk about this project",
    highlights: "Engineering highlights",
    outcomes: "Outcomes",
    preview: "Product preview",
    previewHint: "",
    seeMore: "See more",
    videoFallback: "Product video",
  },
  services: {
    kicker: "Services",
    title: "Premium engineering for product teams, founders, and ambitious companies",
    description:
      "I provide end-to-end support across product development, AI integration, architecture consulting, and execution leadership.",
    items: [
      {
        title: "AI SaaS Development",
        description:
          "End-to-end product work: from LLM features and RAG pipelines to billing, auth, and production-grade UX — shipped as a market-ready SaaS.",
        highlights: [
          "Product architecture & feature scoping",
          "Secure, observable APIs",
          "Scalable data & session model",
        ],
      },
      {
        title: "Full-Stack Development",
        description:
          "Reliable, maintainable web platforms with Next.js, TypeScript, and modern infrastructure — designed to scale with your customer base.",
        highlights: [
          "Performance & SEO as first-class concerns",
          "Clean, reviewable codebases",
          "CI-friendly delivery",
        ],
      },
      {
        title: "Automation Systems",
        description:
          "Connect tools, data, and people with workflows that reduce manual work, eliminate errors, and unlock measurable time savings.",
        highlights: [
          "Process mapping & handoffs",
          "Event-driven & scheduled jobs",
          "Monitoring & fallbacks",
        ],
      },
      {
        title: "API Integration",
        description:
          "Resilient integrations with payments, CRMs, analytics, and custom backends — with clear contracts, retries, and audit-friendly logs.",
        highlights: [
          "Webhooks & idempotency",
          "Rate limits & error budgets",
          "Docs your team can trust",
        ],
      },
      {
        title: "Dashboard Development",
        description:
          "Operator-grade consoles: clear KPIs, role-aware access, and fast iteration on the workflows your team actually uses every day.",
        highlights: [
          "Role & permission modeling",
          "Data viz that drives decisions",
          "Accessible, responsive UI",
        ],
      },
      {
        title: "Data Science Solutions",
        description:
          "From exploratory analysis to model-assisted features — helping you turn data into defensible product decisions, not just charts.",
        highlights: [
          "Problem framing with stakeholders",
          "Reproducible pipelines",
          "Model evaluation in context",
        ],
      },
      {
        title: "Business Process Automation",
        description:
          "Map repetitive work, automate the boring parts, and leave humans in the loop where judgment matters — for lasting operational leverage.",
        highlights: [
          "ROI-focused prioritization",
          "Change management friendly rollouts",
          "Measurable SLAs",
        ],
      },
    ],
  },
  experience: {
    kicker: "Experience & authority",
    title: "Experience built through shipped systems and practical delivery constraints",
    description:
      "My track record combines product delivery, technical ownership, and quality-focused engineering across software and AI work.",
    professional: "Professional experience",
    education: "Education & training",
    professionalItems: [
      "Software Engineering Intern — APRILIUM (2024): contributed to production web features, code quality, and delivery workflows.",
      "AI and automation project work (2023-2026): built scalable software, AI-backed tools, and business process systems.",
    ],
    educationItems: [
      "Computer science engineering track with hands-on software architecture, data systems, and full-stack implementation.",
      "Continuous learning through practical projects, technical certifications, and applied product work.",
    ],
    creds: [
      {
        title: "APRILIUM Internship",
        body: "Industry internship with real delivery expectations, collaborative development, and production-focused engineering practices.",
      },
      {
        title: "ISTQB Certification Path",
        body: "Testing and quality assurance foundation that strengthens reliability mindset across architecture, implementation, and release flow.",
      },
    ],
    achievements: "Achievements",
    achievementItems: [
      "Delivered software solutions that combine product usability with maintainable engineering",
      "Built portfolio projects with real architecture choices, measurable outcomes, and clear business value",
    ],
    moreDetails: "More details are available in the downloadable resume and LinkedIn profile.",
    availability: "Availability",
    availabilityBody: "Open to freelance, consulting, and full-time opportunities — remote-first.",
    timeline: "Timeline snapshot",
    timelineBody: "2023-2026: software and AI product builds. 2024: APRILIUM internship.",
    resumeNote: "Resume available for recruiters and partners",
  },
  social: {
    kicker: "Achievements",
    title: "Trust built through shipped work and technical consistency",
    description:
      "I focus on verifiable signals: architecture quality, delivery discipline, and outcomes teams can evaluate quickly.",
    note: "This section highlights concrete indicators recruiters and clients care about: project depth, quality mindset, and consistency of execution.",
    items: [
      {
        title: "Industry internship exposure",
        body: "APRILIUM internship experience in real delivery conditions with version control, review loops, and team collaboration.",
      },
      {
        title: "Architecture-first project approach",
        body: "Projects emphasize problem framing, technical architecture, and maintainability rather than only visual polish.",
      },
      {
        title: "Quality and testing mindset",
        body: "ISTQB-aligned quality practices and reliability-focused delivery standards across product and engineering decisions.",
      },
    ],
    strip: [
      { k: "Profile", v: "Software + AI Engineer" },
      { k: "Engagement", v: "Freelance / consulting / hiring" },
      { k: "Availability", v: "Remote-first collaboration" },
      { k: "Timezone", v: "UTC+1" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let’s design and ship something exceptional.",
    description:
      "Share your goals, constraints, and timeline. I will answer with a clear plan, architecture direction, and concrete next steps.",
    open: "Open",
    linkedinHint: "Professional background",
    githubHint: "Code & projects",
    resumeHint: "Download CV",
    requestResumeHint: "Send me a note first",
    emailHint: "Direct email",
    whatsapp: "WhatsApp Business",
    whatsappHint: "Fast async chat",
    preferCall: "Prefer a call first?",
    preferCallBody: "in the nav — it keeps scheduling lightweight.",
    bookACall: "Book a call",
  },
  form: {
    name: "Name",
    email: "Work email",
    company: "Company",
    project: "What are you building?",
    send: "Send message",
    sending: "Sending…",
    success: "Message sent. I will get back to you shortly.",
    error: "Something went wrong.",
  },
  cta: {
    title: "Have a project in mind? Let’s build it the right way.",
    body: "Review my work, download my resume, and start a focused conversation around scope, architecture, and delivery.",
    chipFast: "Start fast, stay rigorous",
    chipSolid: "Built to last beyond launch",
    viewPortfolio: "View portfolio",
    downloadResume: "Download resume",
    requestResume: "Request resume",
    bookCall: "Book a call",
    asyncNote: "Prefer async first? Use LinkedIn, GitHub, or email in the contact section.",
  },
  footer: {
    role: "Software Engineer & AI Product Builder",
    body: "I design and build scalable products, AI-enabled features, and business systems with a focus on reliability and maintainability.",
    navigate: "Navigate",
    engagement: "Engagement",
    featuredWork: "Featured work",
    viewPortfolio: "View portfolio",
    bookCall: "Book a call",
    downloadResume: "Download resume",
    requestResume: "Request resume",
    rights: "All rights reserved.",
  },
  projectFields: {
    "n8n-ai-agents": {
      type: "AI Automation • n8n Agents",
      summary:
        "What if no lead ever waited for a call back? Two AI agents built in n8n for a solar & heat-pump installer: one qualifies quote requests, the other answers support tickets, 24/7.",
      problem:
        "Quote requests and after-sales tickets were sorted by hand: hot leads waited, answers were inconsistent and nothing was tracked.",
      impact:
        "Each request is scored (hot / cold), summarised and answered with a personalised email in seconds; risky cases are escalated to a human and everything is logged in SQL.",
      solution:
        "n8n workflows with webhooks, RAG over the company knowledge base (pgvector embeddings), local LLM via Ollama or OpenAI, business rules that override the model when needed, PostgreSQL and Docker Compose.",
      highlights: [
        "Sales agent: lead scoring, AI summary, personalised email and call-back scheduling",
        "Support agent: answers error codes from the knowledge base, escalates safety issues and refunds",
        "Business rules always win over the LLM (e.g. tenants are never pushed as hot leads)",
        "Workflows versioned in Git, full execution log, website chat bubble included",
      ],
      outcomes: [
        "Instant answers to every lead, day and night",
        "A reusable agent blueprint for any SME: installers, agencies, clinics, e-commerce",
      ],
    },
    "medassist-ai": {
      type: "AI SaaS for Medical Practices",
      summary:
        "An AI assistant for doctors and clinics: online booking, a 24/7 patient chatbot, voice notes transcribed by AI, billing and analytics, in FR / EN / AR.",
      problem:
        "Medical practices lose hours every day on phone calls, appointment juggling, reminders and paperwork.",
      impact:
        "Patients get answers and book on their own 24/7; doctors dictate notes instead of typing and see their practice activity at a glance.",
      solution:
        "React + Vite SaaS on Supabase (Auth + PostgreSQL), Paddle subscriptions with automatic plan activation via webhooks, Resend emails, GPT-4o chatbot and Whisper voice notes, deployed on Vercel.",
      highlights: [
        "Fully automated onboarding: sign-up, 4-step setup, payment, welcome email",
        "Patient chatbot with triage and embeddable website widget",
        "Voice notes transcribed with Whisper, reminders and analytics dashboard",
      ],
      outcomes: [
        "Self-serve SaaS: zero manual work to onboard a new practice",
        "Trilingual product ready for French-speaking and MENA markets",
      ],
    },
    "oppenheim-3d": {
      type: "Luxury Real-Estate Website Redesign (concept)",
      summary:
        "What if a website sold the house before the first viewing? An immersive, scroll-driven 3D redesign concept for The Oppenheim Group (Los Angeles, Newport Beach, San Diego, Cabo, Dubai).",
      problem:
        "Luxury buyers decide in seconds, yet the current site (ogroup.com) reads like a brochure: one big photo, a menu and a contact form. Nothing makes a $10M+ listing feel special online.",
      impact:
        "A site that feels like a private showing: visitors walk through the property from morning arrival to the house lit at night, stay longer and land on a clear \"Book a tour\" action.",
      solution:
        "Cinematic scroll-driven 3D walkthrough (10 scenes), glass navigation, refined luxury typography, featured-residences grid with city filters, 3D-tour badges and favorites, fully responsive.",
      highlights: [
        "Before / after: current homepage vs. immersive redesign",
        "Scroll-driven scenes with a live progress HUD (01/10, time of day)",
        "Listings with city filters, 3D-tour badges, favorites and instant tour booking",
      ],
      outcomes: [
        "A premium digital experience matching a $5.3B brokerage brand",
        "Clear conversion path: every section leads to \"Book a tour\"",
      ],
    },
    "falak-cosmetic": {
      type: "Cosmetics Brand & E-commerce Redesign",
      summary:
        "From a cluttered local shop to an international-looking beauty brand: full brand and website redesign for Falak Cosmetic, a Tunisian natural cosmetics label, keeping its real products and packaging.",
      problem:
        "The current site (falakcosmetic.tn) looks like a generic template: crowded header, loud colors and small product photos that don't match the quality of the products.",
      impact:
        "A soft pink \"skin & light\" identity that feels premium and girly, puts the products first and gives the brand the image it needs to sell beyond Tunisia.",
      solution:
        "New visual identity, hero with model + product, scroll-driven texture stories (water, drop, softness), six collections with real product photos, bilingual FR/AR touches, fast and responsive.",
      highlights: [
        "Before / after: current shop vs. new brand experience",
        "Macro texture storytelling inspired by luxury skincare campaigns",
        "Collections grid built on the brand's real products and packaging",
      ],
      outcomes: [
        "Live redesign: falak-refonte.netlify.app",
        "A brand image ready for international e-commerce and social ads",
      ],
    },    kaizen: {
      type: "Systematic Crypto Trading SaaS",
      summary:
        "Full-stack SaaS for systematic crypto trading: public marketing site, Paddle subscriptions (16 plans), client dashboard with live signals, performance reporting, mandatory risk framework, and admin back-office.",
      problem:
        "Launching a trading signals product requires more than a landing page — subscribers need gated access, verified performance, billing lifecycle, and operator tooling without security gaps.",
      impact:
        "Delivered an end-to-end commercial platform: visitors can subscribe via Paddle, clients receive tier-gated signals after completing the 1% risk framework, and admins manage users, revenue, and billing from a dedicated console.",
      solution:
        "Built with Next.js 14, Prisma + Neon, NextAuth (email + Google), Paddle webhooks, Upstash rate limiting, 2FA for admins, equity-curve performance sync, SEO (sitemap, Learn hub, JSON-LD), and 43 automated tests with CI.",
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
    },
    istetdaa: {
      type: "Premium Digital Invitations",
      summary:
        "Luxury digital invitation platform (استدعاء) for weddings, birthdays, and parties — mobile-first templates, interactive demos, multilingual FR/EN/AR, and WhatsApp ordering.",
      problem:
        "Couples and hosts need elegant shareable invitations without complex checkout friction, while still showcasing RSVP, countdown, location, and dress-code details on mobile.",
      impact:
        "A conversion-focused catalog where guests experience a live phone demo, clients pick a template, and orders are completed simply via WhatsApp — no card checkout on the site.",
      solution:
        "Built a multilingual marketing + product site with interactive invitation demos (envelope open, music, animations), template catalog by category, and a WhatsApp-first order flow.",
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
      videoLabel: "Example wedding invitation video",
    },
    "shopify-press-on-nails-scan": {
      type: "Shopify E-commerce + Scan",
      summary:
        "A Shopify storefront for press-on nails with a custom order flow and scan-assisted sizing implementation to improve purchase confidence.",
      problem:
        "Customers hesitate to buy press-on nails online when sizing is unclear, which increases support requests, returns, and checkout drop-off.",
      impact:
        "Introduced a clearer buying journey: product discovery, custom order path, and scan-oriented sizing guidance integrated into Shopify pages.",
      solution:
        "Implemented and customized Shopify pages (home, collections, product, custom order, checkout) with a scan-related sizing experience adapted to the press-on nails workflow.",
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
    },
    "nailscan-pro": {
      type: "Shopify SaaS",
      summary:
        "A Shopify nail sizing SaaS with camera-based demo flow, search/proxy integration to a dedicated scan API, and production-grade user/auth + subscription foundations.",
      problem:
        "Teams needed a reliable way to convert camera scans into a usable sizing flow inside Shopify, while keeping the frontend and scan API decoupled.",
      impact:
        "A structured end-to-end architecture that supports iteration: clear frontend demo UX, a proxy layer to the scan API, and a consistent product foundation for users and billing.",
      solution:
        "Implemented a Next.js SaaS frontend with authentication, subscription setup, and a `/demo` camera experience that forwards scan requests to a separate FastAPI service.",
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
    },
  },
};

const fr: Dict = {
  nav: {
    work: "Projets",
    services: "Services",
    experience: "Expérience",
    contact: "Contact",
    resume: "CV",
    requestResume: "Demander le CV",
    bookCall: "Réserver un appel",
    role: "Ingénieur logiciel & produit IA",
  },
  hero: {
    kicker: "Développeur Full-Stack & IA freelance • Disponible",
    titleBefore: "Votre site, SaaS ou outil IA,",
    titleHighlight: "conçu, développé et en ligne",
    titleAfter: "en quelques semaines, pas en quelques mois.",
    body: "Je transforme vos idées en produits qui rapportent : sites premium, plateformes SaaS avec paiement en ligne et automatisations IA qui font gagner des heures à votre équipe chaque semaine. Un seul interlocuteur, de la maquette à la mise en production.",
    viewPortfolio: "Voir le portfolio",
    downloadResume: "Télécharger le CV",
    requestResume: "Demander le CV",
    bookCall: "Réserver un appel",
    sideKicker: "Pourquoi travailler avec moi",
    sideTitle: "Des produits livrés, pas des promesses",
    sideChip: "Réponse < 24 h",
    sideBullets: [
      "SaaS en production avec paiements Paddle, 2FA et 43 tests automatisés",
      "Refontes premium 3D / motion qui donnent une image internationale",
      "Fonctions IA (GPT-4o, Whisper, automatisations) intégrées au quotidien",
    ],
  },
  about: {
    kicker: "À propos",
    title: "Je construis des logiciels et systèmes IA qui résolvent de vrais problèmes opérationnels.",
    description:
      "Des plateformes SaaS aux outils internes, je privilégie des systèmes rapides à livrer, faciles à maintenir et utiles au quotidien.",
    bodyBefore: "Je travaille comme",
    bodyAfter:
      "avec un focus sur l’architecture propre, la fiabilité produit et des résultats mesurables.",
    bullets: [
      "Je structure les codebases pour la croissance long terme, pas pour des démos jetables",
      "J’intègre l’IA avec un contrôle strict de la qualité, du coût et de la latence",
      "J’optimise les processus métier pour accélérer les équipes avec moins de friction",
    ],
  },
  projects: {
    kicker: "Travaux sélectionnés",
    title: "Des études de cas qui allient qualité visuelle, profondeur technique et impact business",
    description:
      "Projets où j’ai porté la direction produit, l’architecture système et l’exécution jusqu’à une livraison prête pour la production.",
    discuss: "Discuter d’un projet similaire",
    caseStudy: "Étude de cas",
    problem: "Problème",
    impact: "Impact business",
    solution: "Solution",
    stack: "Stack",
    liveDemo: "Démo live",
    requestDemo: "Demander une démo / détails",
    talkAbout: "Parler de ce projet",
    highlights: "Points techniques",
    outcomes: "Résultats",
    preview: "Aperçu produit",
    previewHint: "",
    seeMore: "Voir plus",
    videoFallback: "Vidéo produit",
  },
  services: {
    kicker: "Services",
    title: "Ingénierie premium pour équipes produit, fondateurs et entreprises ambitieuses",
    description:
      "Un accompagnement de bout en bout : développement produit, intégration IA, conseil architecture et leadership d’exécution.",
    items: [
      {
        title: "Développement SaaS IA",
        description:
          "Produit de bout en bout : features LLM et pipelines RAG, facturation, auth et UX production — livré comme un SaaS prêt marché.",
        highlights: [
          "Architecture produit & cadrage des features",
          "APIs sécurisées et observables",
          "Modèle de données & sessions scalable",
        ],
      },
      {
        title: "Développement full-stack",
        description:
          "Plateformes web fiables et maintenables avec Next.js, TypeScript et une infra moderne — conçues pour scaler avec vos clients.",
        highlights: [
          "Performance & SEO prioritaires",
          "Codebases propres et reviewables",
          "Livraison compatible CI",
        ],
      },
      {
        title: "Systèmes d’automatisation",
        description:
          "Relier outils, données et équipes avec des workflows qui réduisent le manuel, limitent les erreurs et génèrent des gains mesurables.",
        highlights: [
          "Cartographie des processus",
          "Jobs événementiels & planifiés",
          "Monitoring & fallbacks",
        ],
      },
      {
        title: "Intégration d’API",
        description:
          "Intégrations résilientes (paiements, CRM, analytics, backends custom) avec contrats clairs, retries et logs auditables.",
        highlights: [
          "Webhooks & idempotence",
          "Rate limits & budgets d’erreur",
          "Documentation exploitable",
        ],
      },
      {
        title: "Développement de dashboards",
        description:
          "Consoles opérateurs : KPIs clairs, accès par rôles, et itération rapide sur les workflows utilisés au quotidien.",
        highlights: [
          "Modélisation des rôles & permissions",
          "Visualisation utile à la décision",
          "UI accessible et responsive",
        ],
      },
      {
        title: "Solutions data science",
        description:
          "De l’exploration aux features assistées par modèles — transformer la data en décisions produit défendables, pas seulement en graphiques.",
        highlights: [
          "Cadrage avec les parties prenantes",
          "Pipelines reproductibles",
          "Évaluation des modèles en contexte",
        ],
      },
      {
        title: "Automatisation des processus",
        description:
          "Cartographier le répétitif, automatiser le superflu, et garder l’humain là où le jugement compte — pour un levier opérationnel durable.",
        highlights: [
          "Priorisation orientée ROI",
          "Déploiements adaptés au change management",
          "SLAs mesurables",
        ],
      },
    ],
  },
  experience: {
    kicker: "Expérience & crédibilité",
    title: "Une expérience construite sur des systèmes livrés et des contraintes réelles",
    description:
      "Mon parcours combine livraison produit, ownership technique et ingénierie orientée qualité sur le logiciel et l’IA.",
    professional: "Expérience professionnelle",
    education: "Formation",
    professionalItems: [
      "Stagiaire ingénierie logicielle — APRILIUM (2024) : contributions features web en production, qualité de code et process de livraison.",
      "Projets IA et automatisation (2023-2026) : logiciels scalables, outils IA et systèmes de processus métier.",
    ],
    educationItems: [
      "Parcours ingénierie informatique avec architecture logicielle, systèmes de données et full-stack appliqué.",
      "Apprentissage continu via projets concrets, certifications techniques et travail produit.",
    ],
    creds: [
      {
        title: "Stage APRILIUM",
        body: "Stage en conditions réelles : attentes de livraison, développement collaboratif et pratiques d’ingénierie orientées production.",
      },
      {
        title: "Parcours certification ISTQB",
        body: "Fondations test & qualité qui renforcent la fiabilité sur l’architecture, l’implémentation et le flux de release.",
      },
    ],
    achievements: "Réalisations",
    achievementItems: [
      "Livraison de solutions qui allient usabilité produit et ingénierie maintenable",
      "Projets portfolio avec vrais choix d’architecture, résultats mesurables et valeur business claire",
    ],
    moreDetails: "Plus de détails sont disponibles dans le CV téléchargeable et sur LinkedIn.",
    availability: "Disponibilité",
    availabilityBody: "Ouvert au freelance, au consulting et aux postes full-time — remote-first.",
    timeline: "Aperçu chronologique",
    timelineBody: "2023-2026 : builds logiciel et produit IA. 2024 : stage APRILIUM.",
    resumeNote: "CV disponible pour recruteurs et partenaires",
  },
  social: {
    kicker: "Réalisations",
    title: "Une confiance construite sur du livré et une constance technique",
    description:
      "Je mise sur des signaux vérifiables : qualité d’architecture, discipline de livraison et résultats évaluables rapidement.",
    note: "Cette section met en avant ce que recruteurs et clients regardent : profondeur de projet, mindset qualité et constance d’exécution.",
    items: [
      {
        title: "Exposition stage industrie",
        body: "Expérience APRILIUM en conditions réelles : version control, revues et collaboration d’équipe.",
      },
      {
        title: "Approche architecture-first",
        body: "Les projets privilégient le cadrage, l’architecture technique et la maintenabilité — pas seulement le polish visuel.",
      },
      {
        title: "Mindset qualité & tests",
        body: "Pratiques alignées ISTQB et standards de fiabilité sur les décisions produit et engineering.",
      },
    ],
    strip: [
      { k: "Profil", v: "Ingénieur logiciel + IA" },
      { k: "Engagement", v: "Freelance / consulting / emploi" },
      { k: "Disponibilité", v: "Collaboration remote-first" },
      { k: "Fuseau", v: "UTC+1" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Construisons et livrons quelque chose d’exceptionnel.",
    description:
      "Partagez objectifs, contraintes et délais. Je répondrai avec un plan clair, une direction d’architecture et des prochains pas concrets.",
    open: "Ouvrir",
    linkedinHint: "Parcours professionnel",
    githubHint: "Code & projets",
    resumeHint: "Télécharger le CV",
    requestResumeHint: "Écrivez-moi d’abord",
    emailHint: "Email direct",
    whatsapp: "WhatsApp Business",
    whatsappHint: "Échange async rapide",
    preferCall: "Préférez un appel d’abord ?",
    preferCallBody: "dans la navigation — pour un planning simple.",
    bookACall: "Réserver un appel",
  },
  form: {
    name: "Nom",
    email: "Email pro",
    company: "Entreprise",
    project: "Que construisez-vous ?",
    send: "Envoyer",
    sending: "Envoi…",
    success: "Message envoyé. Je vous répondrai rapidement.",
    error: "Une erreur est survenue.",
  },
  cta: {
    title: "Un projet en tête ? Construisons-le correctement.",
    body: "Parcourez mon travail, téléchargez mon CV et démarrons une discussion claire sur le scope, l’architecture et la livraison.",
    chipFast: "Démarrer vite, rester rigoureux",
    chipSolid: "Conçu pour durer après le lancement",
    viewPortfolio: "Voir le portfolio",
    downloadResume: "Télécharger le CV",
    requestResume: "Demander le CV",
    bookCall: "Réserver un appel",
    asyncNote: "Préférez l’async ? Utilisez LinkedIn, GitHub ou l’email dans la section contact.",
  },
  footer: {
    role: "Ingénieur logiciel & produit IA",
    body: "Je conçois et construis des produits scalables, des features IA et des systèmes métier axés fiabilité et maintenabilité.",
    navigate: "Navigation",
    engagement: "Engagement",
    featuredWork: "Travaux sélectionnés",
    viewPortfolio: "Voir le portfolio",
    bookCall: "Réserver un appel",
    downloadResume: "Télécharger le CV",
    requestResume: "Demander le CV",
    rights: "Tous droits réservés.",
  },
  projectFields: {
    "n8n-ai-agents": {
      type: "Automatisation IA • Agents n8n",
      summary:
        "Et si plus aucun prospect n'attendait qu'on le rappelle ? Deux agents IA construits dans n8n pour un installateur solaire et pompes à chaleur : l'un qualifie les demandes de devis, l'autre répond au SAV, 24 h/24.",
      problem:
        "Les demandes de devis et les tickets SAV étaient triés à la main : les prospects chauds attendaient, les réponses variaient et rien n'était suivi.",
      impact:
        "Chaque demande est notée (chaud / froid), résumée et reçoit un email personnalisé en quelques secondes ; les cas sensibles partent chez un humain et tout est enregistré en SQL.",
      solution:
        "Workflows n8n avec webhooks, RAG sur la base de connaissances de l'entreprise (embeddings pgvector), LLM local via Ollama ou OpenAI, règles métier qui priment sur le modèle, PostgreSQL et Docker Compose.",
      highlights: [
        "Agent commercial : scoring du lead, résumé IA, email personnalisé et rappel planifié",
        "Agent SAV : répond aux codes erreur depuis la base, escalade la sécurité et les remboursements",
        "Les règles métier gagnent toujours sur le LLM (ex. un locataire n'est jamais classé chaud)",
        "Workflows versionnés dans Git, journal d'exécution complet, bulle de chat pour le site",
      ],
      outcomes: [
        "Une réponse immédiate à chaque prospect, jour et nuit",
        "Un modèle d'agent réutilisable pour toute PME : artisans, agences, cabinets, e-commerce",
      ],
    },
    "medassist-ai": {
      type: "SaaS IA pour cabinets médicaux",
      summary:
        "Un assistant IA pour médecins et cabinets : prise de rendez-vous en ligne, chatbot patient 24/7, notes vocales transcrites par IA, facturation et statistiques, en FR / EN / AR.",
      problem:
        "Les cabinets perdent des heures chaque jour au téléphone, à jongler avec les rendez-vous, les rappels et la paperasse.",
      impact:
        "Les patients obtiennent des réponses et réservent seuls 24/7 ; le médecin dicte ses notes au lieu de les taper et suit l'activité du cabinet d'un coup d'œil.",
      solution:
        "SaaS React + Vite sur Supabase (Auth + PostgreSQL), abonnements Paddle activés automatiquement par webhooks, emails Resend, chatbot GPT-4o et notes vocales Whisper, déployé sur Vercel.",
      highlights: [
        "Onboarding 100 % automatique : inscription, configuration en 4 étapes, paiement, email de bienvenue",
        "Chatbot patient avec triage et widget intégrable sur le site du cabinet",
        "Notes vocales transcrites par Whisper, rappels et tableau de bord statistiques",
      ],
      outcomes: [
        "SaaS en libre-service : aucune action manuelle pour ajouter un cabinet",
        "Produit trilingue prêt pour les marchés francophones et MENA",
      ],
    },
    "oppenheim-3d": {
      type: "Refonte site immobilier de luxe (concept)",
      summary:
        "Et si votre site vendait la maison avant la première visite ? Concept de refonte 3D immersive pilotée par le scroll pour The Oppenheim Group (Los Angeles, Newport Beach, San Diego, Cabo, Dubaï).",
      problem:
        "Les acheteurs de luxe décident en quelques secondes, mais le site actuel (ogroup.com) ressemble à une brochure : une grande photo, un menu, un formulaire. Rien ne met en valeur un bien à 10 M$.",
      impact:
        "A site that feels like a private showing: visitors walk through the property from morning arrival to the house lit at night, stay longer and land on a clear \"Book a tour\" action.",
      solution:
        "Visite 3D cinématique au scroll (10 scènes), navigation en verre, typographie luxe, grille de propriétés avec filtres par ville, badges visite 3D et favoris, 100 % responsive.",
      highlights: [
        "Avant / après : page d'accueil actuelle vs refonte immersive",
        "Scènes pilotées par le scroll avec indicateur de progression (01/10, heure de la journée)",
        "Annonces avec filtres par ville, badges visite 3D, favoris et réservation de visite",
      ],
      outcomes: [
        "Une expérience digitale à la hauteur d'une agence à 5,3 Md$ de ventes",
        "Clear conversion path: every section leads to \"Book a tour\"",
      ],
    },
    "falak-cosmetic": {
      type: "Refonte marque & e-commerce cosmétique",
      summary:
        "D'une boutique locale chargée à une marque beauté à l'allure internationale : refonte complète de la marque et du site de Falak Cosmetic (cosmétique naturelle tunisienne), en gardant ses vrais produits et emballages.",
      problem:
        "Le site actuel (falakcosmetic.tn) ressemble à un template générique : en-tête chargé, couleurs criardes et petites photos qui ne reflètent pas la qualité des produits.",
      impact:
        "A soft pink \"skin & light\" identity that feels premium and girly, puts the products first and gives the brand the image it needs to sell beyond Tunisia.",
      solution:
        "Nouvelle identité visuelle, hero avec mannequin + produit, histoires de textures au scroll (l'eau, la goutte, la douceur), six collections avec les vraies photos produits, touches FR/AR, rapide et responsive.",
      highlights: [
        "Avant / après : boutique actuelle vs nouvelle expérience de marque",
        "Storytelling macro des textures inspiré des campagnes skincare de luxe",
        "Grille de collections construite avec les vrais produits de la marque",
      ],
      outcomes: [
        "Refonte en ligne : falak-refonte.netlify.app",
        "Une image de marque prête pour l'e-commerce international et la pub sur les réseaux",
      ],
    },    kaizen: {
      type: "SaaS trading crypto systématique",
      summary:
        "SaaS full-stack pour le trading crypto systématique : site marketing, abonnements Paddle (16 formules), dashboard client avec signaux live, reporting performance, cadre de risque obligatoire et back-office admin.",
      problem:
        "Lancer un produit de signaux exige plus qu’une landing : accès gated, performance vérifiée, cycle de facturation et outils opérateurs sans failles de sécurité.",
      impact:
        "Plateforme commerciale de bout en bout : souscription via Paddle, signaux selon le tier après le risk framework 1 %, admin pour utilisateurs, revenus et billing.",
      solution:
        "Construit avec Next.js 14, Prisma + Neon, NextAuth (email + Google), webhooks Paddle, rate limiting Upstash, 2FA admin, sync equity curve, SEO et 43 tests automatisés + CI.",
      highlights: [
        "16 price IDs Paddle — 8 trading + 8 investissement (mensuel & annuel)",
        "Dashboard client : signaux, rapport performance, gate risk framework, abonnement",
        "Admin : KPIs, utilisateurs, abonnements, revenus, sync Paddle & audit log",
        "2FA admin, export/suppression GDPR, signature webhooks, score sécurité 84/100",
        "Equity curve synchronisée homepage, /performance et dashboard client",
      ],
      outcomes: [
        "Production live sur kaizenkyotocapital.com — SaaS prêt clients",
        "Monétisation live : checkout, webhooks et activation automatique du plan",
        "SEO prêt : page performance, articles Learn, FAQ schema, sitemap",
        "Documentation déploiement, setup Paddle et audit sécurité pour handoff",
      ],
    },
    istetdaa: {
      type: "Invitations digitales premium",
      summary:
        "Plateforme d’invitations digitales de luxe (استدعاء) pour mariages, anniversaires et soirées — templates mobile-first, démos interactives, multilingue FR/EN/AR et commande WhatsApp.",
      problem:
        "Les couples et hôtes veulent des invitations élégantes et partageables sans checkout complexe, avec RSVP, countdown, lieu et dress code sur mobile.",
      impact:
        "Catalogue orienté conversion : démo live sur téléphone, choix du modèle, commande simple via WhatsApp — sans paiement carte sur le site.",
      solution:
        "Site marketing + produit multilingue avec démos interactives (ouverture d’enveloppe, musique, animations), catalogue par catégorie et tunnel WhatsApp-first.",
      highlights: [
        "Démos live : enveloppe, musique d’ambiance, animations d’entrée",
        "Catalogue mariage / anniversaire / soirée / custom avec tarifs",
        "Fonctions invités : RSVP, countdown, Maps, dress code",
        "Commande WhatsApp — pas de checkout carte sur le site",
        "Expérience multilingue (FR, EN, AR)",
      ],
      outcomes: [
        "Production live sur istetdaa.vercel.app — Collection 2026",
        "Identité premium (bordeaux / crème / or) alignée invitations de luxe",
        "Parcours clair : découverte → démo → commande WhatsApp",
      ],
      videoLabel: "Exemple de vidéo d’invitation mariage",
    },
    "shopify-press-on-nails-scan": {
      type: "E-commerce Shopify + Scan",
      summary:
        "Boutique Shopify pour press-on nails avec parcours de commande personnalisé et sizing assisté par scan pour renforcer la confiance d’achat.",
      problem:
        "Les clients hésitent à acheter en ligne si le sizing est flou — plus de support, retours et abandons checkout.",
      impact:
        "Parcours d’achat clarifié : découverte produit, commande custom et guidance sizing par scan intégrée aux pages Shopify.",
      solution:
        "Pages Shopify custom (home, collections, produit, commande perso, checkout) avec expérience de sizing liée au scan.",
      highlights: [
        "Pages Shopify custom pour découverte, fiche produit, contact et commande perso",
        "Scan intégré au parcours d’achat / sizing",
        "UX fiche produit pour réduire l’incertitude avant checkout",
        "Tunnel bout en bout aligné conversion",
      ],
      outcomes: [
        "Chemin plus clair du browsing au checkout pour les nouveaux acheteurs",
        "Meilleure confiance sizing avant achat via le scan",
        "Structure Shopify réutilisable pour produits et campagnes",
      ],
    },
    "nailscan-pro": {
      type: "SaaS Shopify",
      summary:
        "SaaS de sizing ongles pour Shopify avec démo caméra, proxy vers une API scan dédiée, et fondations auth + abonnement production.",
      problem:
        "Besoin d’un flux fiable caméra → sizing dans Shopify, sans coupler le frontend à l’API scan.",
      impact:
        "Architecture end-to-end itérable : UX démo claire, couche proxy vers l’API scan, fondations produit pour users et billing.",
      solution:
        "Frontend Next.js SaaS avec auth, abonnements et `/demo` caméra qui forward les scans vers un service FastAPI séparé.",
      highlights: [
        "Architecture deux repos : Next.js + API FastAPI scan",
        "UX `/demo` caméra avec proxy des requêtes scan",
        "Auth + fondations RBAC pour les opérations produit",
        "Structure abonnement Paddle pour un cycle SaaS réel",
      ],
      outcomes: [
        "Pipeline sizing utilisable dans Shopify sans coupler UI et moteur scan",
        "Séparation claire des responsabilités pour scaler frontend et API",
        "Design système production : onboarding + billing + admin",
      ],
    },
  },
};

export const messages: Record<Locale, Dict> = { en, fr };
