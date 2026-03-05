"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { experience, leadership } from "@/data/content";
import { Section, SectionLabel, SectionHeading, SectionSubheading } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  accent: "bg-accent/10 border-accent/20 text-accent",
  "accent-2": "bg-purple-500/10 border-purple-500/20 text-purple-400",
  "accent-3": "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
};

const dotColorMap: Record<string, string> = {
  accent: "bg-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]",
  "accent-2": "bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]",
  "accent-3": "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]",
};

function ExperienceCard({ exp, index }: { exp: (typeof experience)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.38, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className={cn(
        "absolute left-0 top-6 w-3 h-3 rounded-full z-10",
        dotColorMap[exp.color] || dotColorMap.accent
      )} />

      <div className="ml-8">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left group"
          aria-expanded={expanded}
          aria-label={`${exp.role} at ${exp.company}`}
        >
          <div className={cn(
            "glass rounded-2xl p-5 border transition-all duration-300",
            expanded ? "border-border-bright" : "border-border hover:border-border-bright"
          )}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-md border",
                    colorMap[exp.color] || colorMap.accent
                  )}>
                    {exp.type === "internship" ? "Internship" : "Research"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-foreground transition-colors">
                  {exp.role}
                </h3>
                <p className="text-foreground-2 font-medium mt-0.5">{exp.company}</p>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-foreground-3">
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-foreground-3">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-7 h-7 rounded-lg bg-surface-2 flex items-center justify-center"
              >
                <ChevronDown size={14} className="text-foreground-3" />
              </motion.div>
            </div>

            {/* Outcome pills preview */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.outcomes.slice(0, 2).map((outcome) => (
                <span key={outcome} className="text-xs text-foreground-3 bg-surface-2 border border-border px-2 py-0.5 rounded">
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </button>

        {/* Expanded details — CSS grid trick: no JS height measurement needed */}
        <div
          className="overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
          style={{ display: "grid", gridTemplateRows: expanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="rounded-b-2xl border-x border-b border-border-bright px-5 pb-5 pt-4 -mt-1 space-y-5 bg-[#0f0f18]">
                {/* Context */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-2">Context</h4>
                  <p className="text-sm text-foreground-2 leading-relaxed">{exp.context}</p>
                </div>

                {/* Actions */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-2">What I Did</h4>
                  <ul className="space-y-2">
                    {exp.actions.map((action) => (
                      <li key={action} className="flex gap-2 text-sm text-foreground-2">
                        <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-2">Outcomes</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.outcomes.map((outcome) => (
                      <span key={outcome} className="text-xs font-medium text-success bg-success/10 border border-success/20 px-2.5 py-1 rounded-lg">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chips row */}
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-2">Stakeholders</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stakeholders.map((s) => (
                        <span key={s} className="chip text-[11px]">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tools.map((t) => (
                        <span key={t} className="chip text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LeadershipCard({ item, index }: { item: (typeof leadership)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay: index * 0.06 }}
      className="glass rounded-2xl p-5 border border-border hover:border-border-bright card-glow"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.period}</span>
      </div>
      <h3 className="text-base font-bold text-foreground">{item.role}</h3>
      <p className="text-sm text-foreground-3 mb-3">{item.org}</p>
      <ul className="space-y-1.5">
        {item.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-xs text-foreground-2">
            <span className="text-accent/60 flex-shrink-0">→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionLabel>Experience</SectionLabel>
        <SectionHeading>
          Where I&apos;ve <span className="gradient-text">built things.</span>
        </SectionHeading>
        <SectionSubheading>
          Internships, research, and leadership. Click any role to see context, actions, and outcomes.
        </SectionSubheading>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Work experience timeline */}
        <div>
          <h3 className="text-sm font-semibold text-foreground-3 uppercase tracking-wider mb-6">
            Work Experience
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

            <div className="space-y-4">
              {experience.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Leadership grid */}
        <div>
          <h3 className="text-sm font-semibold text-foreground-3 uppercase tracking-wider mb-6">
            Leadership & Orgs
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {leadership.map((item, i) => (
              <LeadershipCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
