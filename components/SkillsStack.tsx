"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";
import { Section, SectionLabel, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const clusterColors: Record<string, { badge: string; dot: string; glow: string }> = {
  accent: {
    badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    dot: "bg-indigo-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]",
  },
  "accent-3": {
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    dot: "bg-cyan-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
  },
  "accent-2": {
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    dot: "bg-purple-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
  },
  success: {
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    dot: "bg-emerald-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
  },
};

const levelMap: Record<string, string> = {
  "daily driver": "text-success",
  "shipping-ready": "text-accent",
  "shipped": "text-cyan-400",
  "proficient": "text-foreground-3",
  "familiar": "text-foreground-3/60",
  "research": "text-purple-400",
};

function SkillCluster({ cluster, index }: { cluster: (typeof skills)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const colors = clusterColors[cluster.color] || clusterColors.accent;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group glass rounded-2xl p-6 border border-border transition-all duration-300",
        colors.glow
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", colors.dot)} />
          <h3 className="font-bold text-foreground">{cluster.cluster}</h3>
        </div>
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border",
          colors.badge
        )}>
          {cluster.descriptor}
        </span>
      </div>

      {/* Skills list */}
      <div className="space-y-2.5">
        {cluster.items.map((item, i) => (
          <div key={item.name} className="flex items-center justify-between">
            <span className="text-sm text-foreground-2 font-medium">{item.name}</span>
            <span className={cn(
              "text-[11px] font-medium",
              levelMap[item.level] || "text-foreground-3"
            )}>
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsStack() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionLabel>Skills</SectionLabel>
        <SectionHeading>
          The <span className="gradient-text">stack</span> behind the work.
        </SectionHeading>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 gap-5">
        {skills.map((cluster, i) => (
          <SkillCluster key={cluster.cluster} cluster={cluster} index={i} />
        ))}
      </div>
    </Section>
  );
}
