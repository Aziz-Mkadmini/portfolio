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
  /** Strings added with the studio redesign (hero CTAs, marquee, process, stats, sliders). */
  studio: {
    viewProjects: string;
    whatsappCta: string;
    /** Short label for the navbar and the floating mobile button. */
    contactCta: string;
    /** Pre-filled WhatsApp message. */
    whatsappPrefill: string;
    whatsappAbout: string;
    askDemo: string;
    scroll: string;
    marquee: string;
    caseToggle: string;
    filters: { label: string; all: string; automation: string; fullstack: string };
    gallery: string;
    before: string;
    after: string;
    dragHint: string;
    /** "What I do for you": the two pillars of the offer, shown under the hero. */
    pillars: {
      kicker: string;
      title: string;
      description: string;
      benefitsLabel: string;
      examplesLabel: string;
      proofLabel: string;
      cards: Array<{
        /** Matches `Project.pillars` in src/lib/projects.ts. */
        key: "automation" | "fullstack";
        title: string;
        promise: string;
        benefits: string[];
        /** Typical use cases. Examples, not past clients. */
        examples: string;
        proofSlug: string;
        proofName: string;
        proofText: string;
        cta: string;
        prefill: string;
      }>;
    };
    /** The offers, grouped by pillar. Prices stay "on quote" until real amounts are provided. */
    offers: {
      title: string;
      description: string;
      deliverablesLabel: string;
      priceNote: string;
      families: Array<{
        key: "automation" | "fullstack";
        title: string;
        intro: string;
        items: Array<{ title: string; benefit: string; deliverables: string[]; delay: string }>;
      }>;
    };
    services: {
      from: string;
      onQuote: string;
      delayLabel: string;
      /** One indicative timeline per entry of `services.items`, same order. */
      delays: string[];
      cta: string;
    };
    process: {
      kicker: string;
      title: string;
      description: string;
      steps: Array<{ title: string; body: string; when: string }>;
    };
    stats: {
      kicker: string;
      items: Array<{
        value: number;
        prefix?: string;
        suffix?: string;
        label: string;
        /** Where the figure comes from (project or employer). */
        source: string;
      }>;
    };
    aboutKicker: string;
    credsKicker: string;
    contactOr: string;
  };
  projectFields: Record<
    string,
    {
      type: string;
      /** Two to four short facts shown as chips under the project title. */
      proof?: string[];
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
    role: "Full-Stack & AI Automation Developer",
  },
  hero: {
    kicker: "Freelance Full-Stack & AI Automation Developer • Available",
    titleBefore: "I automate your business",
    titleHighlight: "and build your websites & SaaS,",
    titleAfter: "from idea to launch.",
    body: "AI agents and n8n workflows that answer your customers and qualify your leads in seconds. Websites and SaaS delivered with payments, customer accounts and a dashboard. One person to talk to, start to finish.",
    viewPortfolio: "View portfolio",
    downloadResume: "Download resume",
    requestResume: "Request resume",
    bookCall: "Book a call",
    sideKicker: "Why clients work with me",
    sideTitle: "Shipped products, not slide decks",
    sideChip: "Reply < 24h",
    sideBullets: [
      "Your customer requests answered in seconds, day and night",
      "A SaaS live in production with online payments and customer accounts",
      "Premium redesigns that give your brand an international look",
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
    impact: "Result",
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
      "Freelance Full-Stack & AI Developer (06/2025 – present): design and production launch of web products, APIs and SaaS — Kaizen Kyoto Capital, NailScan Pro, MedAssist AI.",
      "Data Science & AI Intern — Poulina Group Holding (02/2025 – 05/2025): ETL flows automated with SSIS (-40% processing time), ML models above 80% accuracy, Power BI dashboards (-50% reporting time).",
      "Software Development Intern — Société Tunisienne de Banque (10/2023 – 11/2023): archive management web app with Clean Architecture (Angular, .NET, PostgreSQL).",
      "Full-Stack Development Intern — APRILIUM (01/2023 – 02/2023): school management app (React, TypeScript, NestJS, SQL Server).",
      "Full-Stack Development Intern — AZZEDDA (02/2022 – 05/2022): e-commerce app (Angular, Spring Boot, MongoDB).",
    ],
    educationItems: [
      "Engineering degree in Computer Engineering — Université Centrale, Tunis (2022 – 2025).",
      "Applied bachelor's degree in Information Technology — ISET Zaghouan (2019 – 2022).",
    ],
    creds: [
      {
        title: "ISTQB Foundation",
        body: "Software testing certification: a testing and quality foundation that strengthens reliability across architecture, implementation, and release flow.",
      },
      {
        title: "NASA Space Apps Challenge",
        body: "Took part in the international hackathon with an AI project.",
      },
      {
        title: "Full Stack Angular / Spring Boot",
        body: "Full-stack development certification covering Angular and Spring Boot.",
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
    timelineBody: "2022 – 2023: internships at AZZEDDA, APRILIUM and STB. 2025: final-year internship at Poulina Group Holding, then freelance since June 2025.",
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
    role: "Full-Stack & AI Automation Developer",
    body: "I automate repetitive work with AI agents and n8n workflows, and I build websites and SaaS from idea to launch.",
    navigate: "Navigate",
    engagement: "Engagement",
    featuredWork: "Featured work",
    viewPortfolio: "View portfolio",
    bookCall: "Book a call",
    downloadResume: "Download resume",
    requestResume: "Request resume",
    rights: "All rights reserved.",
  },
  studio: {
    viewProjects: "View my work",
    whatsappCta: "Message me on WhatsApp",
    contactCta: "Contact me",
    whatsappPrefill: "Hello Mohamed, I have a project I would like to discuss.",
    whatsappAbout: "Hello Mohamed, I would like to know more about this project:",
    askDemo: "Ask for a demo",
    scroll: "Scroll",
    marquee: "Technologies I ship to production",
    caseToggle: "Read the full case study",
    filters: {
      label: "Filter projects",
      all: "All",
      automation: "Automation",
      fullstack: "Websites & SaaS",
    },
    gallery: "Screens",
    before: "Before",
    after: "After",
    dragHint: "Drag to compare",
    pillars: {
      kicker: "What I do for you",
      title: "Two ways to move your business forward",
      description:
        "Automate what wastes your team's time, or build the product your customers will use. Often both.",
      benefitsLabel: "What you get",
      examplesLabel: "Typical use cases",
      proofLabel: "Proof",
      cards: [
        {
          key: "automation",
          title: "Automation",
          promise:
            "I automate your company's repetitive tasks: customer requests get an answer in seconds, leads are qualified, and your data moves on its own.",
          benefits: [
            "Every customer request answered in seconds, around the clock",
            "Leads scored and sorted before your first call",
            "Your tools connected to each other: no more copy-paste or forgotten follow-ups",
          ],
          examples: "Real-estate agencies, tradespeople, practices, e-commerce, recruitment",
          proofSlug: "n8n-ai-agents",
          proofName: "Lumina Énergie",
          proofText:
            "Two AI agents that qualify quote requests and answer support tickets for a solar installer.",
          cta: "Automate my business",
          prefill: "Hello Mohamed, I would like to automate part of my business.",
        },
        {
          key: "fullstack",
          title: "Websites & SaaS",
          promise:
            "I design and launch your website or SaaS, with payments, customer accounts and the dashboard.",
          benefits: [
            "A website or platform that is live, not a mockup",
            "Online payments, customer accounts and a dashboard included",
            "A premium design that is fast on mobile and ready for Google",
          ],
          examples: "Showcase sites, redesigns, SaaS MVPs, dashboards",
          proofSlug: "kaizen",
          proofName: "Kaizen Kyoto Capital",
          proofText:
            "A SaaS in production with online subscriptions, a customer area and an admin back-office.",
          cta: "Launch my website or SaaS",
          prefill: "Hello Mohamed, I would like to launch a website or a SaaS.",
        },
      ],
    },
    offers: {
      title: "Clear offers, each with a deliverable and a timeline",
      description:
        "Tell me what you need: you get a costed quote within 24 hours, before any commitment.",
      deliverablesLabel: "What you receive",
      priceNote: "Price on quote, sent within 24 hours",
      families: [
        {
          key: "automation",
          title: "Automation",
          intro: "AI agents and n8n workflows that take the repetitive work off your team.",
          items: [
            {
              title: "AI agent that answers your customers",
              benefit:
                "Your customers get an accurate answer in seconds, at any hour, based on your own documents.",
              deliverables: [
                "Agent connected to your website or mailbox",
                "Answers grounded in your documents and your rules",
                "Handover to a human for sensitive cases",
              ],
              delay: "1 to 2 weeks",
            },
            {
              title: "Lead qualification",
              benefit:
                "Every request is scored, summarised and filed before your first call.",
              deliverables: [
                "Connected form or entry point",
                "Hot / cold score and automatic summary",
                "Personalised email and call-back scheduling",
              ],
              delay: "1 to 2 weeks",
            },
            {
              title: "n8n workflows",
              benefit:
                "Repetitive tasks run on their own: follow-ups, reporting, data syncing.",
              deliverables: [
                "Map of your repetitive tasks",
                "Documented, versioned n8n workflows",
                "Execution log and alerts when something fails",
              ],
              delay: "3 to 10 days",
            },
            {
              title: "API integrations",
              benefit: "Your tools finally talk to each other: payments, CRM, forms, databases.",
              deliverables: [
                "Connection between the tools you already use",
                "Automatic retries when a call fails",
                "Clear documentation for your team",
              ],
              delay: "3 to 10 days",
            },
          ],
        },
        {
          key: "fullstack",
          title: "Websites & SaaS",
          intro: "From the showcase site to the complete platform, designed, built and launched.",
          items: [
            {
              title: "Premium showcase website",
              benefit: "A fast, elegant site that builds trust and makes people contact you.",
              deliverables: [
                "Custom, mobile-first design",
                "SEO, performance and contact form",
                "Launch and domain setup",
              ],
              delay: "2 to 3 weeks",
            },
            {
              title: "Redesign",
              benefit: "Your current site, rethought to match the level you really work at.",
              deliverables: [
                "Audit of the existing site and before / after mockup",
                "New visual identity and animations",
                "Migration of your content",
              ],
              delay: "2 to 4 weeks",
            },
            {
              title: "SaaS MVP",
              benefit: "Your idea becomes a product customers can pay for.",
              deliverables: [
                "Customer accounts and online payment",
                "Customer dashboard and admin back-office",
                "Automated tests and production launch",
              ],
              delay: "4 to 8 weeks",
            },
            {
              title: "Dashboard",
              benefit: "Your key numbers in one place, up to date and readable at a glance.",
              deliverables: [
                "Indicators defined with you",
                "Role-based access",
                "Data refreshed automatically",
              ],
              delay: "2 to 3 weeks",
            },
          ],
        },
      ],
    },
    services: {
      from: "From",
      onQuote: "On quote",
      delayLabel: "Timeline",
      delays: [
        "4 to 8 weeks",
        "2 to 4 weeks",
        "1 to 2 weeks",
        "3 to 10 days",
        "2 to 3 weeks",
        "2 to 4 weeks",
        "1 to 3 weeks",
      ],
      cta: "Get a quote",
    },
    process: {
      kicker: "Process",
      title: "Four steps, no surprises",
      description:
        "You always know where the project stands, what comes next and what it costs.",
      steps: [
        {
          title: "Free call",
          body: "30 minutes, no commitment, to understand your need, constraints and budget. You leave with a clear scope and a quote.",
          when: "Day 1",
        },
        {
          title: "Audit / mockup",
          body: "For an automation, I map your current process. For a website or SaaS, I design the key screens. You approve before anything is built.",
          when: "Week 1",
        },
        {
          title: "Development",
          body: "Built in stages with a preview link: you follow progress and adjust as we go.",
          when: "Following weeks",
        },
        {
          title: "Launch + follow-up",
          body: "Deployment, testing and handover with documentation. I stay available after go-live for adjustments.",
          when: "Final week",
        },
      ],
    },
    stats: {
      kicker: "Key figures",
      items: [
        { value: 43, label: "automated tests with CI", source: "Kaizen Kyoto Capital" },
        {
          value: 40,
          prefix: "-",
          suffix: "%",
          label: "ETL processing time, automated with SSIS",
          source: "Poulina Group Holding",
        },
        {
          value: 50,
          prefix: "-",
          suffix: "%",
          label: "reporting time with Power BI dashboards",
          source: "Poulina Group Holding",
        },
        { value: 84, suffix: "/100", label: "security score", source: "Kaizen Kyoto Capital" },
      ],
    },
    aboutKicker: "About",
    credsKicker: "Certifications & credentials",
    contactOr: "or write to me directly",
  },
  projectFields: {
    "n8n-ai-agents": {
      type: "AI Automation • n8n Agents",
      proof: ["Answers in seconds", "Leads scored hot / cold", "24/7"],
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
      proof: ["Online booking 24/7", "Patient chatbot", "FR / EN / AR"],
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
      proof: ["Redesign concept", "Scroll-driven 3D tour"],
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
      proof: ["Redesign live", "New brand identity"],
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
      proof: ["Live in production", "Online payments", "43 automated tests", "Security 84/100"],
      summary:
        "A complete subscription platform for a crypto trading signals service: visitors subscribe online, get their client area, and the team runs everything from an admin back-office.",
      problem:
        "Selling trading signals takes far more than a landing page: you need to collect subscriptions, reserve content for paying clients and prove performance, with no security gaps.",
      impact:
        "A commercial product live in production: online payment, automatic plan activation, a client area with signals and performance reports, and a back-office to track users and revenue.",
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
      proof: ["Live", "Order via WhatsApp", "FR / EN / AR"],
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
      proof: ["Shopify store", "Scan-guided sizing"],
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
      proof: ["SaaS for Shopify", "Camera scan", "Online subscriptions"],
      summary:
        "A tool for Shopify press-on nail stores: the customer scans her hand with her phone camera and gets her size, no measuring.",
      problem:
        "Picking the right press-on nail size online is hard: customers hesitate, get it wrong and send orders back.",
      impact:
        "A working camera demo and the base of a sellable SaaS: user accounts, online subscriptions and a separate scan service that is easy to evolve.",
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
    role: "Développeur Full-Stack & Automatisation IA",
  },
  hero: {
    kicker: "Développeur Full-Stack & Automatisation IA • Freelance • Disponible",
    titleBefore: "J’automatise votre business",
    titleHighlight: "et je développe vos sites & SaaS,",
    titleAfter: "de l’idée à la mise en ligne.",
    body: "Des agents IA et des workflows n8n qui répondent à vos clients et qualifient vos prospects en quelques secondes. Des sites et des SaaS livrés avec le paiement, les comptes clients et le tableau de bord. Un seul interlocuteur, du début à la fin.",
    viewPortfolio: "Voir le portfolio",
    downloadResume: "Télécharger le CV",
    requestResume: "Demander le CV",
    bookCall: "Réserver un appel",
    sideKicker: "Pourquoi travailler avec moi",
    sideTitle: "Des produits livrés, pas des promesses",
    sideChip: "Réponse < 24 h",
    sideBullets: [
      "Vos demandes clients reçoivent une réponse en quelques secondes, jour et nuit",
      "Un SaaS en production avec paiement en ligne et comptes clients",
      "Des refontes premium qui donnent à votre marque une image internationale",
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
    impact: "Résultat",
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
      "Développeur Full-Stack & solutions IA, freelance (06/2025 – aujourd’hui) : conception et mise en production de produits web, APIs et SaaS — Kaizen Kyoto Capital, NailScan Pro, MedAssist AI.",
      "Stagiaire Data Science & IA — Poulina Group Holding (02/2025 – 05/2025) : flux ETL automatisés via SSIS (-40 % de temps de traitement), modèles ML à plus de 80 % de précision, dashboards Power BI (-50 % de temps de reporting).",
      "Stagiaire Développement Logiciel — Société Tunisienne de Banque (10/2023 – 11/2023) : application web de gestion d’archivage en Clean Architecture (Angular, .NET, PostgreSQL).",
      "Stagiaire Développement Full-Stack — APRILIUM (01/2023 – 02/2023) : application de gestion scolaire (React, TypeScript, NestJS, SQL Server).",
      "Stagiaire Développement Full-Stack — AZZEDDA (02/2022 – 05/2022) : application e-commerce (Angular, Spring Boot, MongoDB).",
    ],
    educationItems: [
      "Diplôme d’ingénieur en génie informatique — Université Centrale, Tunis (2022 – 2025).",
      "Licence appliquée en technologies de l’informatique — ISET Zaghouan (2019 – 2022).",
    ],
    creds: [
      {
        title: "ISTQB Foundation",
        body: "Certification en test logiciel : des fondations test & qualité qui renforcent la fiabilité sur l’architecture, l’implémentation et le flux de release.",
      },
      {
        title: "NASA Space Apps Challenge",
        body: "Participation au hackathon international avec un projet IA.",
      },
      {
        title: "Full Stack Angular / Spring Boot",
        body: "Certification en développement full-stack Angular et Spring Boot.",
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
    timelineBody: "2022 – 2023 : stages chez AZZEDDA, APRILIUM et STB. 2025 : stage de fin d’études chez Poulina Group Holding, puis freelance depuis juin 2025.",
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
    role: "Développeur Full-Stack & Automatisation IA",
    body: "J’automatise les tâches répétitives avec des agents IA et des workflows n8n, et je développe des sites et des SaaS, de l’idée à la mise en ligne.",
    navigate: "Navigation",
    engagement: "Engagement",
    featuredWork: "Travaux sélectionnés",
    viewPortfolio: "Voir le portfolio",
    bookCall: "Réserver un appel",
    downloadResume: "Télécharger le CV",
    requestResume: "Demander le CV",
    rights: "Tous droits réservés.",
  },
  studio: {
    viewProjects: "Voir mes projets",
    whatsappCta: "Me contacter sur WhatsApp",
    contactCta: "Me contacter",
    whatsappPrefill: "Bonjour Mohamed, j’ai un projet dont j’aimerais discuter.",
    whatsappAbout: "Bonjour Mohamed, j’aimerais en savoir plus sur ce projet :",
    askDemo: "Demander une démo",
    scroll: "Défiler",
    marquee: "Les technologies que je mets en production",
    caseToggle: "Voir l’étude de cas complète",
    filters: {
      label: "Filtrer les projets",
      all: "Tous",
      automation: "Automatisation",
      fullstack: "Sites & SaaS",
    },
    gallery: "Captures",
    before: "Avant",
    after: "Après",
    dragHint: "Glissez pour comparer",
    pillars: {
      kicker: "Ce que je fais pour vous",
      title: "Deux façons de faire avancer votre entreprise",
      description:
        "Automatiser ce qui fait perdre du temps à votre équipe, ou construire le produit que vos clients utiliseront. Souvent les deux.",
      benefitsLabel: "Ce que vous obtenez",
      examplesLabel: "Cas d’usage typiques",
      proofLabel: "La preuve",
      cards: [
        {
          key: "automation",
          title: "Automatisation",
          promise:
            "J’automatise les tâches répétitives de votre entreprise : vos demandes clients reçoivent une réponse en quelques secondes, vos leads sont qualifiés, vos données circulent toutes seules.",
          benefits: [
            "Une réponse à chaque demande client en quelques secondes, 24 h/24",
            "Des prospects notés et triés avant même votre premier appel",
            "Vos outils reliés entre eux : fini les copier-coller et les oublis",
          ],
          examples: "Agences immobilières, artisans, cabinets, e-commerce, recrutement",
          proofSlug: "n8n-ai-agents",
          proofName: "Lumina Énergie",
          proofText:
            "Deux agents IA qui qualifient les demandes de devis et répondent au SAV pour un installateur solaire.",
          cta: "Automatiser mon activité",
          prefill: "Bonjour Mohamed, j’aimerais automatiser une partie de mon activité.",
        },
        {
          key: "fullstack",
          title: "Sites & SaaS",
          promise:
            "Je conçois et mets en ligne votre site ou votre SaaS, avec le paiement, les comptes clients et le tableau de bord.",
          benefits: [
            "Un site ou une plateforme réellement en ligne, pas une maquette",
            "Paiement en ligne, comptes clients et tableau de bord inclus",
            "Un design premium, rapide sur mobile et prêt pour Google",
          ],
          examples: "Sites vitrines, refontes, SaaS MVP, tableaux de bord",
          proofSlug: "kaizen",
          proofName: "Kaizen Kyoto Capital",
          proofText:
            "Un SaaS en production avec abonnements en ligne, espace client et back-office.",
          cta: "Lancer mon site ou mon SaaS",
          prefill: "Bonjour Mohamed, j’aimerais lancer un site ou un SaaS.",
        },
      ],
    },
    offers: {
      title: "Des offres claires, chacune avec un livrable et un délai",
      description:
        "Dites-moi votre besoin : vous recevez un devis chiffré sous 24 h, avant tout engagement.",
      deliverablesLabel: "Ce que vous recevez",
      priceNote: "Prix sur devis, envoyé sous 24 h",
      families: [
        {
          key: "automation",
          title: "Automatisation",
          intro: "Des agents IA et des workflows n8n qui déchargent votre équipe du répétitif.",
          items: [
            {
              title: "Agent IA de réponse aux clients",
              benefit:
                "Vos clients reçoivent une réponse précise en quelques secondes, à toute heure, à partir de vos propres documents.",
              deliverables: [
                "Agent branché sur votre site ou votre boîte mail",
                "Réponses fondées sur vos documents et vos règles",
                "Passage à un humain pour les cas sensibles",
              ],
              delay: "1 à 2 semaines",
            },
            {
              title: "Qualification de leads",
              benefit:
                "Chaque demande est notée, résumée et classée avant votre premier appel.",
              deliverables: [
                "Formulaire ou point d’entrée connecté",
                "Score chaud / froid et résumé automatique",
                "Email personnalisé et prise de rappel",
              ],
              delay: "1 à 2 semaines",
            },
            {
              title: "Workflows n8n",
              benefit:
                "Les tâches répétitives s’exécutent toutes seules : relances, reporting, synchronisation des données.",
              deliverables: [
                "Cartographie de vos tâches répétitives",
                "Workflows n8n documentés et versionnés",
                "Journal d’exécution et alertes en cas d’erreur",
              ],
              delay: "3 à 10 jours",
            },
            {
              title: "Intégrations API",
              benefit:
                "Vos outils se parlent enfin : paiement, CRM, formulaires, bases de données.",
              deliverables: [
                "Connexion entre vos outils existants",
                "Reprises automatiques en cas d’échec",
                "Documentation claire pour votre équipe",
              ],
              delay: "3 à 10 jours",
            },
          ],
        },
        {
          key: "fullstack",
          title: "Sites & SaaS",
          intro: "Du site vitrine à la plateforme complète, conçu, développé et mis en ligne.",
          items: [
            {
              title: "Site vitrine premium",
              benefit: "Un site rapide et élégant qui donne confiance et pousse à vous contacter.",
              deliverables: [
                "Design sur mesure, pensé d’abord pour le mobile",
                "SEO, performance et formulaire de contact",
                "Mise en ligne et nom de domaine",
              ],
              delay: "2 à 3 semaines",
            },
            {
              title: "Refonte",
              benefit: "Votre site actuel, repensé pour être à la hauteur de votre vrai niveau.",
              deliverables: [
                "Audit de l’existant et maquette avant / après",
                "Nouvelle identité visuelle et animations",
                "Reprise de vos contenus",
              ],
              delay: "2 à 4 semaines",
            },
            {
              title: "SaaS MVP",
              benefit: "Votre idée devient un produit que des clients peuvent payer.",
              deliverables: [
                "Comptes clients et paiement en ligne",
                "Tableau de bord client et back-office",
                "Tests automatisés et mise en production",
              ],
              delay: "4 à 8 semaines",
            },
            {
              title: "Tableau de bord",
              benefit: "Vos chiffres clés au même endroit, à jour et lisibles d’un coup d’œil.",
              deliverables: [
                "Indicateurs définis avec vous",
                "Accès par rôle",
                "Données mises à jour automatiquement",
              ],
              delay: "2 à 3 semaines",
            },
          ],
        },
      ],
    },
    services: {
      from: "À partir de",
      onQuote: "Sur devis",
      delayLabel: "Délai",
      delays: [
        "4 à 8 semaines",
        "2 à 4 semaines",
        "1 à 2 semaines",
        "3 à 10 jours",
        "2 à 3 semaines",
        "2 à 4 semaines",
        "1 à 3 semaines",
      ],
      cta: "Demander un devis",
    },
    process: {
      kicker: "Process",
      title: "Quatre étapes, aucune surprise",
      description:
        "Vous savez à tout moment où en est le projet, ce qui vient ensuite et ce que ça coûte.",
      steps: [
        {
          title: "Appel gratuit",
          body: "30 minutes, sans engagement, pour comprendre votre besoin, vos contraintes et votre budget. Vous repartez avec un périmètre clair et un devis.",
          when: "Jour 1",
        },
        {
          title: "Audit / maquette",
          body: "Pour une automatisation, je cartographie votre fonctionnement actuel. Pour un site ou un SaaS, je dessine les écrans clés. Vous validez avant toute construction.",
          when: "Semaine 1",
        },
        {
          title: "Développement",
          body: "Construction par étapes avec un lien de prévisualisation : vous suivez l’avancement et ajustez au fil de l’eau.",
          when: "Semaines suivantes",
        },
        {
          title: "Mise en ligne + suivi",
          body: "Déploiement, tests et passation avec documentation. Je reste disponible après le lancement pour les ajustements.",
          when: "Dernière semaine",
        },
      ],
    },
    stats: {
      kicker: "Chiffres clés",
      items: [
        { value: 43, label: "tests automatisés avec CI", source: "Kaizen Kyoto Capital" },
        {
          value: 40,
          prefix: "-",
          suffix: " %",
          label: "de temps de traitement ETL, automatisé via SSIS",
          source: "Poulina Group Holding",
        },
        {
          value: 50,
          prefix: "-",
          suffix: " %",
          label: "de temps de reporting avec des dashboards Power BI",
          source: "Poulina Group Holding",
        },
        { value: 84, suffix: "/100", label: "score sécurité", source: "Kaizen Kyoto Capital" },
      ],
    },
    aboutKicker: "À propos",
    credsKicker: "Certifications & références",
    contactOr: "ou écrivez-moi directement",
  },
  projectFields: {
    "n8n-ai-agents": {
      type: "Automatisation IA • Agents n8n",
      proof: ["Réponse en quelques secondes", "Prospects notés chaud / froid", "24 h/24"],
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
      proof: ["Rendez-vous en ligne 24/7", "Chatbot patient", "FR / EN / AR"],
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
      proof: ["Concept de refonte", "Visite 3D au scroll"],
      summary:
        "Et si votre site vendait la maison avant la première visite ? Concept de refonte 3D immersive pilotée par le scroll pour The Oppenheim Group (Los Angeles, Newport Beach, San Diego, Cabo, Dubaï).",
      problem:
        "Les acheteurs de luxe décident en quelques secondes, mais le site actuel (ogroup.com) ressemble à une brochure : une grande photo, un menu, un formulaire. Rien ne met en valeur un bien à 10 M$.",
      impact:
        "Un site qui se vit comme une visite privée : le visiteur parcourt la propriété de l’arrivée au petit matin jusqu’à la maison illuminée le soir, reste plus longtemps et arrive sur une action claire, « Réserver une visite ».",
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
      proof: ["Refonte en ligne", "Nouvelle identité de marque"],
      summary:
        "D'une boutique locale chargée à une marque beauté à l'allure internationale : refonte complète de la marque et du site de Falak Cosmetic (cosmétique naturelle tunisienne), en gardant ses vrais produits et emballages.",
      problem:
        "Le site actuel (falakcosmetic.tn) ressemble à un template générique : en-tête chargé, couleurs criardes et petites photos qui ne reflètent pas la qualité des produits.",
      impact:
        "Une identité rose doux « peau & lumière », premium et féminine, qui met les produits au premier plan et donne à la marque l’image qu’il lui faut pour vendre au-delà de la Tunisie.",
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
      proof: ["En production", "Paiement en ligne", "43 tests automatisés", "Sécurité 84/100"],
      summary:
        "Une plateforme d’abonnement complète pour un service de signaux de trading crypto : le visiteur s’abonne en ligne, accède à son espace client et l’équipe pilote tout depuis son back-office.",
      problem:
        "Vendre des signaux de trading demande bien plus qu’une page de présentation : il faut encaisser les abonnements, réserver le contenu aux clients payants et prouver les performances, sans faille de sécurité.",
      impact:
        "Un produit commercial en production : paiement en ligne, activation automatique de l’abonnement, espace client avec signaux et rapport de performance, et un back-office pour suivre utilisateurs et revenus.",
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
      proof: ["En ligne", "Commande par WhatsApp", "FR / EN / AR"],
      summary:
        "Une plateforme d’invitations digitales haut de gamme (استدعاء) pour mariages, anniversaires et soirées : modèles pensés pour le mobile, démos interactives, trois langues et commande par WhatsApp.",
      problem:
        "Les couples et les hôtes veulent des invitations élégantes et faciles à partager, sans paiement compliqué, avec la confirmation de présence, le compte à rebours, le lieu et le dress code sur mobile.",
      impact:
        "Un catalogue qui convertit : le client teste la démo sur son téléphone, choisit son modèle et commande simplement par WhatsApp, sans carte bancaire sur le site.",
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
      proof: ["Boutique Shopify", "Taille guidée par scan"],
      summary:
        "Une boutique Shopify de faux ongles avec un parcours de commande personnalisée et une aide au choix de la taille par scan, pour acheter en confiance.",
      problem:
        "Quand la taille est incertaine, les clientes hésitent à commander : plus de questions au support, de retours et de paniers abandonnés.",
      impact:
        "Un parcours d’achat plus clair : découverte des produits, commande personnalisée et aide à la taille par scan, directement dans les pages de la boutique.",
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
      proof: ["SaaS pour Shopify", "Scan par caméra", "Abonnements en ligne"],
      summary:
        "Un outil pour les boutiques Shopify de faux ongles : la cliente scanne sa main avec la caméra de son téléphone et obtient sa taille, sans mesurer.",
      problem:
        "Choisir la bonne taille de faux ongles en ligne est difficile : les clientes hésitent, se trompent et renvoient leurs commandes.",
      impact:
        "Une démo caméra fonctionnelle et la base d’un SaaS vendable : comptes utilisateurs, abonnements en ligne et un service de scan indépendant, facile à faire évoluer.",
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
