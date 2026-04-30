"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border border-cyan-300/40 bg-cyan-300/12 text-cyan-100 shadow-[0_0_24px_-12px_rgba(103,232,249,0.6)] hover:border-cyan-200/55 hover:bg-cyan-300/18 focus-visible:ring-2 focus-visible:ring-cyan-300/35",
  secondary:
    "border border-white/15 bg-zinc-900/60 text-zinc-100 hover:border-cyan-300/30 hover:bg-zinc-900/90 focus-visible:ring-2 focus-visible:ring-white/15",
  ghost:
    "border border-transparent text-zinc-300 hover:border-white/10 hover:text-white hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-white/10",
};

function isAbsoluteOrSpecialHref(href: string) {
  return (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  /** Prefer true for any URL that should open in a new tab (external sites, calendars). */
  external?: boolean;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    // next/link is for app navigation. External, hash, and special schemes must use <a> to
    // avoid runtime bundler/React issues with cross-origin client navigation.
    if (isAbsoluteOrSpecialHref(href)) {
      const openInNew =
        external === true ||
        href.startsWith("http://") ||
        href.startsWith("https://");
      return (
        <a
          href={href}
          className={classes}
          target={openInNew ? "_blank" : undefined}
          rel={openInNew ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
