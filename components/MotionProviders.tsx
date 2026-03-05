"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    setVisible(true);

    let rafId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      // Schedule a single rAF per frame — never more
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (glowRef.current) {
            // Setting CSS custom properties never triggers layout
            glowRef.current.style.setProperty("--gx", `${pendingX}px`);
            glowRef.current.style.setProperty("--gy", `${pendingY}px`);
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        // Prevent Lenis from hijacking scroll on touch — native momentum is fast enough
        touchMultiplier: 0,
      }) as { raf: (t: number) => void; destroy: () => void };

      function raf(time: number) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      lenisInstance?.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
