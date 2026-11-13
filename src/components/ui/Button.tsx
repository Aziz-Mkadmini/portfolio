"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-surface hover:bg-ink",
  secondary: "border border-ink/20 text-ink hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-ink",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 disabled:opacity-50";
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
