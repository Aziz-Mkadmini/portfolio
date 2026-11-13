"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 14,
  blur = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: number;
}) {
  const r = useReducedMotion();
  if (r) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={`js-reveal ${className}`}
      initial={{ opacity: 0, y, filter: blur ? `blur(${blur}px)` : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  staggerChildren = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const r = useReducedMotion();
  if (r) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={`js-reveal ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const r = useReducedMotion();
  if (r) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={`js-reveal ${className}`}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HoverScale({
  children,
  className = "",
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  const r = useReducedMotion();
  if (r) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={`js-reveal ${className}`}
      whileHover={{ scale, y: -2 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type Segment = { text: string; className?: string };

/**
 * Title that reveals word by word. The animation is pure CSS (see `.rw` in globals.css) so a
 * title rendered with `immediate` is visible before hydration and can be the LCP element.
 */
export function RevealWords({
  text,
  segments,
  as: Tag = "h2",
  className = "",
  immediate = false,
  delay = 0,
}: {
  text?: string;
  segments?: Segment[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Play on load instead of when scrolled into view. */
  immediate?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const parts = segments ?? [{ text: text ?? "" }];
  let i = 0;

  return (
    <Tag
      ref={ref as never}
      className={`${className} ${immediate || inView ? "rw-in" : ""}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {parts.map((part, p) =>
        part.text
          .split(/\s+/)
          .filter(Boolean)
          .map((word) => {
            const index = i++;
            return (
              <Fragment key={`${p}-${index}`}>
                <span className="rw" style={{ "--i": index } as CSSProperties}>
                  <span className={part.className}>{word}</span>
                </span>{" "}
              </Fragment>
            );
          }),
      )}
    </Tag>
  );
}

/** Number that counts up from 0 the first time it scrolls into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setShown(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
