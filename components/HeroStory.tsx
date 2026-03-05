"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Zap } from "lucide-react";
import { heroContent, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

function AnimatedOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      {/* Radial hero glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-accent/8 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

function DashboardCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cycles = heroContent.dashboardCycles;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cycles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [cycles.length]);

  const current = cycles[currentIndex];

  const icons = [TrendingUp, TrendingUp, Zap, TrendingUp, Sparkles, Zap];
  const Icon = icons[currentIndex % icons.length];

  return (
    <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-sm"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-2xl" />

      <div className="relative glass-bright rounded-2xl p-1 shadow-card border border-border">
        {/* Header bar */}
        <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 border-b border-border/50">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
          <span className="text-xs text-foreground-3 ml-2 font-mono">metrics.live</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-px p-1">
          {[
            { label: "Reports automated", val: "600+", color: "text-accent" },
            { label: "Accuracy gain", val: "+30%", color: "text-success" },
            { label: "Time saved", val: "80%↓", color: "text-accent-2" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-2/50 rounded-lg p-3 text-center">
              <div className={cn("text-lg font-bold font-mono tabular-nums", stat.color)}>
                {stat.val}
              </div>
              <div className="text-[10px] text-foreground-3 mt-0.5 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cycling proof point */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-accent/15 flex items-center justify-center">
              <Icon size={12} className="text-accent" />
            </div>
            <span className="text-xs font-medium text-foreground-3 uppercase tracking-wider">
              Latest impact
            </span>
            {/* Live dot */}
            <div className="ml-auto flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] text-success font-medium">live</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="text-2xl font-bold font-mono tabular-nums gradient-text mb-1">
                {current.value}
              </div>
              <div className="text-sm text-foreground-2 font-medium leading-tight">
                {current.label}
              </div>
              <div className="text-xs text-foreground-3 mt-1">
                {current.context}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex gap-1 mt-4">
            {cycles.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-0.5 rounded-full transition-all duration-300",
                  i === currentIndex
                    ? "bg-accent w-6"
                    : "bg-border-bright hover:bg-border-bright/80 w-2"
                )}
                aria-label={`View metric ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini sparkline */}
        <div className="px-4 pb-4">
          <svg viewBox="0 0 200 40" className="w-full h-8 opacity-40" aria-hidden="true">
            <polyline
              points="0,35 20,28 40,30 60,20 80,22 100,15 120,17 140,10 160,12 180,5 200,3"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-between text-[10px] text-foreground-3 -mt-1">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TrustedChips() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="flex items-center flex-wrap gap-2"
    >
      <span className="text-xs text-foreground-3 mr-1">Worked with</span>
      {heroContent.trustedBy.map((org) => (
        <span key={org} className="chip">
          {org}
        </span>
      ))}
    </motion.div>
  );
}

export function HeroStory() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      <AnimatedOrb />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Open to roles · Graduating May 2026
            </motion.div>

            {/* Headline */}
            <div>
              <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-foreground"
              >
                {heroContent.headline}{" "}
                <span className="gradient-text">{heroContent.headlineAccent}</span>
              </motion.h1>

              <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-6 text-lg text-foreground-3 leading-relaxed max-w-xl"
              >
                {heroContent.subheadline}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={heroContent.cta1.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all duration-200 btn-sheen shadow-glow-sm hover:shadow-glow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {heroContent.cta1.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={heroContent.cta2.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 text-foreground-2 font-semibold text-sm border border-border hover:border-border-bright hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {heroContent.cta2.label}
              </a>
            </motion.div>

            {/* Trusted by chips */}
            <TrustedChips />
          </div>

          {/* Right: Animated dashboard */}
          <div className="flex justify-center lg:justify-end">
            <DashboardCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-foreground-3 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-foreground-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
