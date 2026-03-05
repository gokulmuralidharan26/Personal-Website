import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { caseStudies, siteConfig } from "@/data/content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const study = caseStudies[params.slug];
  if (!study) return {};
  return {
    title: `${study.name} — Case Study | Gokul Muralidharan`,
    description: study.tagline,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = caseStudies[params.slug];
  if (!study) notFound();

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-foreground-3 hover:text-foreground transition-colors mb-10 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="mb-14">
            <div className={`inline-block text-sm font-bold px-3 py-1 rounded-lg bg-gradient-to-r ${study.gradient} text-white mb-4`}>
              Case Study
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{study.name}</h1>
            <p className="text-xl text-foreground-3 mt-3 leading-relaxed">{study.tagline}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {study.techStack.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px w-full bg-gradient-to-r ${study.gradient} opacity-30 mb-14`} />

          {/* Overview */}
          <Section title="Overview">
            <p className="text-foreground-2 leading-relaxed text-base">{study.overview}</p>
          </Section>

          {/* Goals & Constraints */}
          <div className="grid sm:grid-cols-2 gap-6 my-10">
            <div className="glass rounded-2xl p-6 border border-border">
              <h2 className="text-base font-bold text-foreground mb-4">Goals</h2>
              <ul className="space-y-2">
                {study.goals.map((goal) => (
                  <li key={goal} className="flex gap-2 text-sm text-foreground-2">
                    <CheckCircle2 size={15} className="text-success flex-shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 border border-border">
              <h2 className="text-base font-bold text-foreground mb-4">Constraints</h2>
              <ul className="space-y-2">
                {study.constraints.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-foreground-2">
                    <span className="text-amber-400 flex-shrink-0 mt-0.5">⚠</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture */}
          <Section title="Architecture">
            <div className="space-y-4">
              {study.architecture.map((layer, i) => (
                <div key={layer.title} className="flex gap-4 glass rounded-xl p-4 border border-border">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{layer.title}</h3>
                    <p className="text-sm text-foreground-3 mt-1">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Key Decisions */}
          <Section title="Key Decisions">
            <div className="space-y-5">
              {study.decisions.map((d) => (
                <div key={d.decision} className="glass rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <ArrowRight size={15} className="text-accent flex-shrink-0" />
                    {d.decision}
                  </h3>
                  <p className="text-sm text-foreground-2 mt-2 leading-relaxed pl-5">
                    {d.rationale}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Results */}
          <Section title="Results">
            <div className="grid sm:grid-cols-2 gap-3">
              {study.results.map((result) => (
                <div key={result} className="flex items-start gap-3 glass rounded-xl p-4 border border-success/20 bg-success/5">
                  <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground-2">{result}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* What I'd Do Next */}
          <Section title="What I'd Do Next">
            <ul className="space-y-2">
              {study.nextSteps.map((step) => (
                <li key={step} className="flex gap-2 text-sm text-foreground-2">
                  <span className="text-accent-2 flex-shrink-0 mt-0.5">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* CTA */}
          <div className="mt-14 glass rounded-2xl border border-border p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Want to talk through this project?
            </h3>
            <p className="text-foreground-3 text-sm mb-6">
              I can walk through the architecture, the decisions, and what I learned.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-colors btn-sheen"
              >
                Get in Touch
              </a>
              <Link
                href="/#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 text-foreground-2 font-semibold text-sm border border-border hover:border-border-bright transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-3 h-3 rounded-sm bg-accent/60" />
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </div>
  );
}
