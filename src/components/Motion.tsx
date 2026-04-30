"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

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
      className={className}
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
      className={className}
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
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.985 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
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
      className={className}
      whileHover={{ scale, y: -2 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
