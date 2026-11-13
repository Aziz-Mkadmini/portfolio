"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// The only WebGL canvas on the site. three.js is fetched on the first interaction (or a few
// seconds after load), and never at all when WebGL is missing or the visitor prefers reduced
// motion: the static orb below is what they see instead.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Static stand-in for the 3D shape. Inline so it costs no request and paints with the HTML. */
function OrbFallback({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 600 600" fill="none" className={className}>
      <defs>
        <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F5A524" stopOpacity=".2" />
          <stop offset="1" stopColor="#F5A524" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb-body" cx="36%" cy="30%" r="80%">
          <stop offset="0" stopColor="#4a3414" />
          <stop offset=".42" stopColor="#1a140c" />
          <stop offset="1" stopColor="#060504" />
        </radialGradient>
        <radialGradient id="orb-rim" cx="80%" cy="16%" r="46%">
          <stop offset="0" stopColor="#FFD58A" stopOpacity=".95" />
          <stop offset=".35" stopColor="#F5A524" stopOpacity=".55" />
          <stop offset="1" stopColor="#F5A524" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb-low" cx="22%" cy="88%" r="40%">
          <stop offset="0" stopColor="#F5A524" stopOpacity=".28" />
          <stop offset="1" stopColor="#F5A524" stopOpacity="0" />
        </radialGradient>
        <clipPath id="orb-shape">
          <path d="M300 92C392 84 492 150 506 262C520 372 470 478 360 506C252 534 128 482 100 366C74 258 150 104 300 92Z" />
        </clipPath>
      </defs>
      <circle cx="300" cy="300" r="300" fill="url(#orb-glow)" />
      <g clipPath="url(#orb-shape)">
        <rect width="600" height="600" fill="url(#orb-body)" />
        <rect width="600" height="600" fill="url(#orb-rim)" />
        <rect width="600" height="600" fill="url(#orb-low)" />
      </g>
      <ellipse
        cx="300"
        cy="300"
        rx="286"
        ry="92"
        transform="rotate(-24 300 300)"
        stroke="#F5A524"
        strokeOpacity=".45"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!hasWebGL()) return;

    const events = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown"] as const;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      cleanup();
      setMount(true);
    };
    const arm = () => {
      timer = setTimeout(start, 4000);
    };
    function cleanup() {
      events.forEach((name) => window.removeEventListener(name, start));
      window.removeEventListener("load", arm);
      if (timer) clearTimeout(timer);
    }

    events.forEach((name) => window.addEventListener(name, start, { passive: true, once: true }));
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    return cleanup;
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
      <OrbFallback
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
      <div className="absolute inset-0 bg-gradient-to-b from-surface/45 via-surface/85 to-surface lg:bg-gradient-to-r lg:from-surface lg:via-surface/70 lg:to-transparent" />
    </div>
  );
}
