"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, FileText, Linkedin, Github, Calendar } from "lucide-react";
import { NAV_LINKS } from "@/lib/routes";
import { siteConfig } from "@/data/content";
import { cn, throttle } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-nav py-3"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Gokul Muralidharan - Home"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                G
              </div>
              <span className={cn(
                "font-semibold text-sm transition-all duration-300",
                scrolled ? "text-foreground" : "text-foreground"
              )}>
                Gokul M.
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive
                        ? "text-foreground"
                        : "text-foreground-3 hover:text-foreground-2"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-md bg-surface-3 border border-border-bright"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Resume"
              >
                <FileText size={16} />
              </a>
              <a
                href={siteConfig.calendly}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-all duration-200 btn-sheen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Book a call"
              >
                <Calendar size={13} />
                Book a call
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#070710] border-b border-border lg:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-foreground-2 hover:text-foreground hover:bg-surface-2 transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-colors text-sm"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-colors text-sm"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
              <a
                href={siteConfig.calendly}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <Calendar size={15} />
                Book a call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
