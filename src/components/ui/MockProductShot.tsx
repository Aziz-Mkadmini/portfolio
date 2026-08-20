"use client";

import { Orbit, Rocket, Boxes, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectIcon } from "@/lib/projects";

const projectIcons: Record<ProjectIcon, LucideIcon> = {
  orbit: Orbit,
  rocket: Rocket,
  boxes: Boxes,
  sparkles: Sparkles,
};

type Tone = "blue" | "violet" | "slate";

const tones: Record<Tone, { top: string; bar: string; glow: string; chip: string }> = {
  blue: {
    top: "from-blue-500/20 via-cyan-500/5 to-transparent",
    bar: "from-blue-500/30 to-cyan-500/10",
    glow: "from-blue-500/20",
    chip: "text-sky-200/80",
  },
  violet: {
    top: "from-violet-500/20 via-fuchsia-500/5 to-transparent",
    bar: "from-violet-500/30 to-fuchsia-500/10",
    glow: "from-violet-500/20",
    chip: "text-violet-200/80",
  },
  slate: {
    top: "from-sky-500/15 via-slate-500/5 to-transparent",
    bar: "from-slate-500/30 to-slate-500/10",
    glow: "from-sky-500/10",
    chip: "text-slate-200/80",
  },
};

export function MockProductShot({
  label,
  icon,
  tone = "blue",
}: {
  label: string;
  icon: ProjectIcon;
  tone?: Tone;
}) {
  const r = useReducedMotion();
  const t = tones[tone];
  const Icon = projectIcons[icon];

  return (
    <motion.div
      initial={r ? false : { opacity: 0, y: 12 }}
      whileInView={r ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl shadow-black/50 backdrop-blur"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${t.top} pointer-events-none`}
        aria-hidden
      />
      <div className="absolute inset-0 bg-glow-radial pointer-events-none" aria-hidden />
      <div className="relative border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <div className="mx-auto flex min-w-0 max-w-sm flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-zinc-950/60 px-2 py-1 text-[10px] text-zinc-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            <span className="truncate">app.{label.toLowerCase().replace(/\s+/g, "")}.com</span>
          </div>
        </div>
      </div>
      <div className="relative grid gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
              <Icon className="h-3.5 w-3.5 text-sky-300/80" />
              {label}
            </div>
            <div className="mt-2 h-2 w-40 rounded bg-white/10" />
            <div className="mt-2 h-2 w-28 rounded bg-white/5" />
          </div>
          <div
            className={`h-10 w-24 rounded-lg bg-gradient-to-br ${t.bar} shadow-inner`}
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-zinc-950/50 p-2"
            >
              <div className="h-1.5 w-10 rounded bg-white/15" />
              <div
                className="mt-2 h-10 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02]"
                style={{ transform: r ? undefined : `translateY(${i * 1.5}px)` }}
              />
              <div className="mt-2 h-1 w-16 rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {["KPIs", "Roles", "Audit trail", "Exports"].map((c) => (
            <span
              key={c}
              className={`rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] font-medium ${t.chip}`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
