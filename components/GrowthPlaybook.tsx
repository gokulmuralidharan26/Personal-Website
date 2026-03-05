"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FlaskConical,
  TrendingDown,
  BarChart3,
  Megaphone,
  Share2,
  RefreshCw,
  LucideIcon,
} from "lucide-react";
import { growthPlaybook } from "@/data/content";
import { Section, SectionLabel, SectionHeading, SectionSubheading } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const iconComponents: Record<string, LucideIcon> = {
  FlaskConical,
  TrendingDown,
  BarChart3,
  Megaphone,
  Share2,
  RefreshCw,
};

const cardAccents = [
  "hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]",
  "hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]",
  "hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)]",
  "hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]",
  "hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]",
  "hover:border-rose-500/30 hover:shadow-[0_0_20px_rgba(244,63,94,0.08)]",
];

const iconColors = [
  "text-indigo-400 bg-indigo-500/10",
  "text-cyan-400 bg-cyan-500/10",
  "text-purple-400 bg-purple-500/10",
  "text-amber-400 bg-amber-500/10",
  "text-emerald-400 bg-emerald-500/10",
  "text-rose-400 bg-rose-500/10",
];

function PlaybookCard({ item, index }: { item: (typeof growthPlaybook)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = iconComponents[item.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay: index * 0.055, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group glass rounded-2xl p-6 border border-border transition-all duration-300 flex flex-col gap-4",
        cardAccents[index % cardAccents.length]
      )}
    >
      {/* Icon */}
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110",
        iconColors[index % iconColors.length]
      )}>
        {Icon && <Icon size={18} />}
      </div>

      {/* Title + desc */}
      <div>
        <h3 className="text-base font-bold text-foreground">{item.title}</h3>
        <p className="text-sm text-foreground-3 mt-1.5 leading-relaxed">{item.description}</p>
      </div>

      {/* Applied example */}
      <div className="mt-auto pt-3 border-t border-border/50">
        <div className="flex items-start gap-2">
          <span className="text-xs font-bold text-foreground-3 uppercase tracking-wider mt-0.5 flex-shrink-0">
            Applied:
          </span>
          <p className="text-xs text-foreground-2 leading-relaxed">{item.applied}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function GrowthPlaybook() {
  return (
    <Section id="playbook" className="bg-surface/20">
      <Reveal>
        <SectionLabel>Growth & Product Playbook</SectionLabel>
        <SectionHeading>
          How I think about <span className="gradient-text">growth.</span>
        </SectionHeading>
        <SectionSubheading>
          Six mental models I bring to every product, campaign, and system. Each grounded in real work.
        </SectionSubheading>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {growthPlaybook.map((item, i) => (
          <PlaybookCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
