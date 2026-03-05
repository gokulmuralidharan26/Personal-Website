import Link from "next/link";
import { Github, Linkedin, Youtube, Mail, FileText } from "lucide-react";
import { siteConfig } from "@/data/content";
import { NAV_LINKS } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden" aria-label="Footer">
      {/* Gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.4), rgba(6,182,212,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-semibold text-foreground">Gokul Muralidharan</span>
            </Link>
            <p className="text-sm text-foreground-3 leading-relaxed max-w-xs">
              TPM · PM · Builder. CS @ UF · AI Certificate · Open to roles.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: siteConfig.github, icon: Github, label: "GitHub" },
                { href: siteConfig.youtube, icon: Youtube, label: "YouTube" },
                { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg text-foreground-3 hover:text-foreground hover:bg-surface-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-4">Navigation</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-foreground-3 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-4">Get in Touch</h3>
            <div className="space-y-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-foreground-3 hover:text-foreground transition-colors duration-200"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <FileText size={13} />
                Download Resume
              </a>
              <p className="text-xs text-foreground-3 mt-3 leading-relaxed">
                Graduating May 2026<br />
                Open to PM · TPM · APM roles
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-10 pt-6 border-t border-border/50">
          <p className="text-xs text-foreground-3">
            © {new Date().getFullYear()} Gokul Muralidharan. Built with Next.js & Tailwind.
          </p>
          <p className="text-xs text-foreground-3">
            University of Florida · B.S. Computer Science · GPA 3.71
          </p>
        </div>
      </div>
    </footer>
  );
}
