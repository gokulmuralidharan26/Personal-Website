"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/content";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  project: (typeof projects)[0];
  index: number;
}

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className={cn(
        "group relative glass rounded-2xl border border-border overflow-hidden",
        "hover:border-border-bright transition-all duration-300 card-glow"
      )}
    >
      {/* Gradient top bar */}
      <div className={cn("h-1 w-full bg-gradient-to-r", project.gradient)} />

      {/* Status badge */}
      <div className="absolute top-5 right-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success bg-success/10 border border-success/20 px-2.5 py-1 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-success" />
          {project.status}
        </span>
      </div>

      <div className="p-6">
        <div className="text-xs text-foreground-3 mb-2">{project.date}</div>
        <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
        <p className="text-sm text-foreground-3 mt-0.5">{project.tagline}</p>

        {/* Problem/Approach/Impact */}
        <div className="mt-5 space-y-4">
          {[
            { label: "Problem", content: project.problem },
            { label: "Approach", content: project.approach },
          ].map((section) => (
            <div key={section.label}>
              <span className="text-xs font-semibold text-foreground-3 uppercase tracking-wider">
                {section.label}
              </span>
              <p className="text-sm text-foreground-2 mt-1 leading-relaxed line-clamp-3">
                {section.content}
              </p>
            </div>
          ))}

          <div>
            <span className="text-xs font-semibold text-foreground-3 uppercase tracking-wider">
              Impact
            </span>
            <ul className="mt-1 space-y-1">
              {project.impact.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2 text-sm text-success">
                  <span className="flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="chip text-[11px]">{tech}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-5">
          <Link
            href={`/case-studies/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors btn-sheen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Case Study
            <ArrowRight size={14} />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-surface-2 border border-border hover:border-border-bright text-foreground-3 hover:text-foreground transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface-2 border border-border hover:border-border-bright text-foreground-3 hover:text-foreground transition-all"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
