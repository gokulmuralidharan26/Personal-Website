"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/data/content";
import { Section, SectionLabel, SectionHeading, SectionSubheading } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function useCountUp(target: number, duration: number = 1200, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId: number;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
}

const borderColorMap: Record<string, string> = {
  accent:    "border-indigo-500/20 hover:border-indigo-500/40",
  "accent-2":"border-purple-500/20 hover:border-purple-500/40",
  "accent-3":"border-cyan-500/20   hover:border-cyan-500/40",
  success:   "border-emerald-500/20 hover:border-emerald-500/40",
  warning:   "border-amber-500/20  hover:border-amber-500/40",
};

const bgMap: Record<string, string> = {
  accent:    "bg-indigo-500/5",
  "accent-2":"bg-purple-500/5",
  "accent-3":"bg-cyan-500/5",
  success:   "bg-emerald-500/5",
  warning:   "bg-amber-500/5",
};

const textColorMap: Record<string, string> = {
  accent:    "text-indigo-400",
  "accent-2":"text-purple-400",
  "accent-3":"text-cyan-400",
  success:   "text-emerald-400",
  warning:   "text-amber-400",
};

function MetricTile({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // Use a single shared observer at low threshold to reduce intersection events
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showTooltip, setShowTooltip] = useState(false);
  const count = useCountUp(parseInt(metric.value), 1100, isInView);

  const borderClass = borderColorMap[metric.color] || borderColorMap.accent;
  const bgClass     = bgMap[metric.color] || bgMap.accent;
  const textClass   = textColorMap[metric.color] || textColorMap.accent;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="button"
      aria-label={`${metric.value}${metric.suffix} ${metric.label}. How: ${metric.how}`}
    >
      <div className={cn(
        "rounded-2xl p-6 border transition-colors duration-200 cursor-default h-full",
        bgClass, borderClass
      )}>
        <div className={cn("text-4xl lg:text-5xl font-bold font-mono tabular-nums tracking-tight", textClass)}>
          {metric.prefix}{count}{metric.suffix}
        </div>
        <div className="text-sm text-foreground-3 mt-2 leading-snug">{metric.label}</div>
        <div className="mt-3">
          <span className="text-[10px] font-medium text-foreground-3/50 border border-border rounded px-1.5 py-0.5">
            hover for how
          </span>
        </div>
      </div>

      {/* CSS-only tooltip — no Framer Motion, no extra compositing layer */}
      {showTooltip && (
        <div
          className="absolute bottom-full left-0 mb-2 z-20 rounded-xl p-3 w-64 pointer-events-none
                     bg-[#16162a] border border-border-bright shadow-[0_4px_24px_rgba(0,0,0,0.5)]
                     animate-[fadeInUp_0.15s_ease_forwards]"
          style={{ animation: "fadeInUp 0.15s ease forwards" }}
        >
          <p className="text-xs text-foreground-2 leading-relaxed">{metric.how}</p>
        </div>
      )}
    </motion.div>
  );
}

export function MetricTiles() {
  return (
    <Section id="metrics">
      <Reveal>
        <SectionLabel>Proof of Work</SectionLabel>
        <SectionHeading>
          Numbers that <span className="gradient-text">don&apos;t lie.</span>
        </SectionHeading>
        <SectionSubheading>
          Every metric comes with a story. Hover to see the how.
        </SectionSubheading>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
        {metrics.map((metric, i) => (
          <MetricTile key={metric.label} metric={metric} index={i} />
        ))}
      </div>
    </Section>
  );
}
