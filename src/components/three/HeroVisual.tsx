"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// The only WebGL canvas on the site. three.js is fetched after the page is idle, and never
// at all when WebGL is missing or the visitor prefers reduced motion.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!hasWebGL()) return;

    let idle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      if ("requestIdleCallback" in window) {
        idle = window.requestIdleCallback(() => setMount(true), { timeout: 2000 });
      } else {
        timer = setTimeout(() => setMount(true), 400);
      }
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let inView = true;
    const sync = () => setActive(inView && document.visibilityState === "visible");
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden>
      <Image
        src="/hero/orb-fallback.svg"
        alt=""
        width={600}
        height={600}
        unoptimized
        priority
        className={`absolute left-1/2 top-[4%] w-[78vw] max-w-[420px] -translate-x-1/2 transition-opacity duration-1000 lg:left-auto lg:right-[5%] lg:top-1/2 lg:w-[40vw] lg:max-w-[600px] lg:-translate-y-1/2 lg:translate-x-0 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      {mount ? (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <HeroScene active={active} onReady={() => setReady(true)} />
        </div>
      ) : null}
      {/* Veil that keeps the headline readable over the scene. */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/75 to-surface lg:bg-gradient-to-r lg:from-surface lg:via-surface/70 lg:to-transparent" />
    </div>
  );
}
