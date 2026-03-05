"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Calendar, CheckCircle2 } from "lucide-react";
import { Section, SectionLabel, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/content";

export function ContactCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission (no backend)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Reveal className="text-center">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading className="text-center">
            Let&apos;s build something <span className="gradient-text">impactful.</span>
          </SectionHeading>
          <p className="text-foreground-3 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re hiring, collaborating, or just want to talk product — I&apos;m reachable.
            Graduating May 2026. Open to full-time PM/TPM/APM roles.
          </p>
        </Reveal>

        {/* Quick links */}
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all btn-sheen shadow-glow-sm hover:shadow-glow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-2 text-foreground-2 font-semibold text-sm border border-border hover:border-border-bright hover:text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-2 text-foreground-2 font-semibold text-sm border border-border hover:border-border-bright hover:text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={siteConfig.calendly}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-2 text-foreground-2 font-semibold text-sm border border-border hover:border-border-bright hover:text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Calendar size={16} />
            Book a Call
          </a>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={0.2} className="mt-14">
          <div className="glass rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-1">Send a message</h3>
            <p className="text-sm text-foreground-3 mb-6">I read everything. Usually respond within 24h.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-8 gap-3 text-center"
              >
                <CheckCircle2 size={40} className="text-success" />
                <h4 className="font-bold text-foreground text-lg">Message received!</h4>
                <p className="text-foreground-3 text-sm">
                  Thanks for reaching out. I&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-3/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-3/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about the role, project, or just say hello..."
                    className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-3/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all btn-sheen disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
