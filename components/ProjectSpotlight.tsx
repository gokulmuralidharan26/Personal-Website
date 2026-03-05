"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section, SectionLabel, SectionHeading, SectionSubheading } from "./Section";
import { Reveal } from "./Reveal";
import { CaseStudyCard } from "./CaseStudyCard";
import { projects } from "@/data/content";

function SpotlightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent-2/5 rounded-full blur-3xl" />
    </div>
  );
}

export function ProjectSpotlight() {
  return (
    <Section id="projects" className="relative bg-surface/20">
      <SpotlightBackground />

      <Reveal>
        <SectionLabel>Projects</SectionLabel>
        <SectionHeading>
          Things I <span className="gradient-text">built & shipped.</span>
        </SectionHeading>
        <SectionSubheading>
          Full-stack apps from idea to deployment. Each with a real problem, a real solution, and real numbers.
        </SectionSubheading>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <CaseStudyCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
