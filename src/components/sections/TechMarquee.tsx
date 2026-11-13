"use client";

import { type ComponentType } from "react";
import {
  SiDocker,
  SiFastapi,
  SiFramer,
  SiN8N,
  SiNextdotjs,
  SiOpenai,
  SiPaddle,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiShopify,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { useLocale } from "@/lib/i18n/LocaleProvider";

// Technologies that appear in the project stacks (src/lib/projects.ts) or in this site.
const tech: Array<{ name: string; icon: ComponentType<{ className?: string }> }> = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "OpenAI", icon: SiOpenai },
  { name: "n8n", icon: SiN8N },
  { name: "Docker", icon: SiDocker },
  { name: "Paddle", icon: SiPaddle },
  { name: "Shopify", icon: SiShopify },
  { name: "Vercel", icon: SiVercel },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {tech.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="flex items-center gap-3 whitespace-nowrap px-7 font-display text-xl font-medium text-ink/70 sm:px-10 sm:text-2xl"
        >
          <Icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  const { t } = useLocale();

  return (
    <section className="border-y border-line py-8 sm:py-10" aria-label={t.studio.marquee}>
      <div
        className="marquee overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
