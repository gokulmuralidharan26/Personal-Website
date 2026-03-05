"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollNarrative } from "@/data/content";
import { Section, SectionLabel, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { AlertCircle, Cpu, Rocket, LucideIcon } from "lucide-react";

const stepIcons = [AlertCircle, Cpu, Rocket];
const stepColors = [
  { dot: "bg-amber-400", border: "border-amber-400/30", badge: "bg-amber-400/10 text-amber-400", glow: "shadow-[0_0_20px_rgba(251,191,36,0.15)]" },
  { dot: "bg-accent", border: "border-accent/30", badge: "bg-accent/10 text-accent", glow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]" },
  { dot: "bg-success", border: "border-success/30", badge: "bg-success/10 text-success", glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]" },
];

function ProblemVisual() {
  const items = [
    "Q3_report_FINAL_v3.xlsx",
    "report_backup_oct.xlsx",
    "finance_data_raw.csv",
    "dashboard_draft2.xlsx",
    "Cost_drivers_FINAL.xlsx",
    "exec_summary_old.pptx",
  ];
  // Static list — CSS stagger via animation-delay, no JS observers per item
  return (
    <div className="space-y-2">
      {items.map((name, i) => (
        <div
          key={name}
          className="flex items-center gap-2 rounded-lg px-3 py-2 border border-border text-xs text-foreground-3 bg-[#0f0f18]"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="w-4 h-4 rounded bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[8px] text-amber-400 font-bold">XL</span>
          </div>
          <span className="truncate">{name}</span>
          <span className="ml-auto text-[10px] text-amber-400/60 flex-shrink-0">manual</span>
        </div>
      ))}
    </div>
  );
}

function BuildVisual() {
  const pipeline = [
    { label: "Raw Data",     color: "bg-foreground-3/15" },
    { label: "SQL Transform",color: "bg-accent/15" },
    { label: "Power BI",     color: "bg-purple-500/15" },
    { label: "Dashboard",    color: "bg-success/15" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1 overflow-x-auto pb-2">
        {pipeline.map((step, i) => (
          <div key={step.label} className="flex items-center gap-1 flex-shrink-0">
            <div className={`${step.color} rounded-lg px-3 py-2 text-xs font-medium text-foreground-2 border border-border`}>
              {step.label}
            </div>
            {i < pipeline.length - 1 && (
              <div className="w-4 h-px bg-accent/40 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Stakeholders aligned", val: "3 teams" },
          { label: "Sprint velocity", val: "15+ stories" },
          { label: "SQL queries", val: "50+" },
          { label: "Templates built", val: "170+" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl p-3 border border-border bg-[#0f0f18]">
            <div className="text-lg font-bold font-mono text-accent">{stat.val}</div>
            <div className="text-[10px] text-foreground-3 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShipVisual() {
  const outcomes = [
    { label: "Manual formatting time", pct: "80%",  color: "bg-accent" },
    { label: "Reporting accuracy",      pct: "95%",  color: "bg-success" },
    { label: "Excel files eliminated",  pct: "100%", color: "bg-purple-500" },
  ];
  return (
    <div className="space-y-4">
      {outcomes.map((item) => (
        <div key={item.label} className="rounded-xl p-4 border border-border bg-[#0f0f18]">
          <div className="flex justify-between text-xs text-foreground-3 mb-2">
            <span>{item.label}</span>
            <span className="text-success font-medium">↑ Impact</span>
          </div>
          <div className="h-2 bg-surface-3 rounded-full overflow-hidden">
            {/* CSS transition on a width change — GPU handles it, no JS needed */}
            <div
              className={`h-full ${item.color} rounded-full transition-[width] duration-700 delay-300 ease-out`}
              style={{ width: item.pct }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-foreground-3 mt-1.5">
            <span>Before: 0%</span>
            <span className="text-foreground-2 font-medium">After: {item.pct}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const visuals = [ProblemVisual, BuildVisual, ShipVisual];

export function ScrollNarrative() {
  return (
    <Section id="narrative" className="bg-surface/30">
      <Reveal>
        <SectionLabel>The Process</SectionLabel>
        <SectionHeading>
          How I think about <span className="gradient-text">every problem.</span>
        </SectionHeading>
      </Reveal>

      <div className="mt-16 space-y-24">
        {scrollNarrative.steps.map((step, i) => {
          const StepIcon = stepIcons[i];
          const Visual = visuals[i];
          const colors = stepColors[i];
          const isEven = i % 2 === 0;

          return (
            <StepBlock
              key={step.id}
              step={step}
              index={i}
              Icon={StepIcon}
              Visual={Visual}
              colors={colors}
              reverse={!isEven}
            />
          );
        })}
      </div>
    </Section>
  );
}

interface StepBlockProps {
  step: (typeof scrollNarrative.steps)[0];
  index: number;
  Icon: LucideIcon;
  Visual: React.ComponentType;
  colors: { dot: string; border: string; badge: string; glow: string };
  reverse: boolean;
}

function StepBlock({ step, index, Icon, Visual, colors, reverse }: StepBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
    >
      {/* Text side */}
      <div className={cn("space-y-5", reverse ? "lg:col-start-2" : "")}>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${colors.badge}`}>
            <Icon size={12} />
            {step.tag}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
          {step.headline}
        </h3>
        <p className="text-foreground-3 leading-relaxed text-base">
          {step.body}
        </p>
        {/* Step number */}
        <div className={`w-12 h-12 rounded-2xl border ${colors.border} ${colors.glow} flex items-center justify-center`}>
          <span className="text-2xl font-bold text-foreground-3">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Visual side */}
      <div className={cn("glass rounded-2xl p-6 border border-border", reverse ? "lg:col-start-1" : "")}>
        <Visual />
      </div>
    </motion.div>
  );
}

function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
