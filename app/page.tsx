import Image from "next/image";
import {
  about,
  brand,
  example,
  faq,
  finalCta,
  hero,
  links,
  problems,
  process,
  services,
} from "@/content/site";
import { Accent } from "@/components/Accent";
import { BookButton } from "@/components/BookButton";
import { HeroMockup } from "@/components/HeroMockup";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const num = (i: number) => String(i + 1).padStart(2, "0");

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pt-20 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-x-12 gap-y-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="max-w-md text-sm uppercase leading-relaxed tracking-[0.14em] text-muted sm:max-w-none">
                {hero.eyebrow}
              </p>
              <h1
                id="hero-title"
                className="mt-6 text-balance font-serif text-[2.6rem] font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]"
              >
                <Accent text={hero.headline} />
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {hero.sub}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <BookButton />
                <a
                  href={hero.secondary.href}
                  className="inline-flex h-11 items-center gap-2 self-start font-medium underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink sm:self-auto"
                >
                  {hero.secondary.label}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroMockup />
            </div>
          </div>

          <ul className="mt-14 grid gap-3 border-t border-line pt-6 text-sm text-muted sm:grid-cols-3 lg:mt-20">
            {hero.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-3">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problems */}
      <Section
        id="problems"
        index="01"
        label={problems.label}
        title={problems.title}
        intro={problems.intro}
      >
        <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {problems.items.map((item) => (
            <li key={item.title}>
              <Reveal className="border-t border-line pt-6">
                <h3 className="font-serif text-xl leading-snug sm:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section id="services" index="02" label={services.label} title={services.title}>
        <ol>
          {services.items.map((item, i) => (
            <li key={item.name}>
              <Reveal className="grid gap-x-10 gap-y-6 border-t border-line py-10 md:grid-cols-5">
                <div className="md:col-span-3">
                  <h3 className="flex items-baseline gap-4 font-serif text-2xl leading-snug sm:text-3xl">
                    <span className="text-base text-accent">{num(i)}</span>
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted">{item.body}</p>
                </div>
                <ul className="space-y-3 text-[0.95rem] md:col-span-2 md:pt-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-px w-4 shrink-0 bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="border-t border-line pt-10">
          <BookButton />
        </div>
      </Section>

      {/* How it works */}
      <Section id="process" index="03" label={process.label} title={process.title}>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {process.steps.map((step, i) => (
            <li key={step.name}>
              <Reveal className="border-t-2 border-ink pt-6">
                <p className="font-serif text-5xl text-accent">{i + 1}</p>
                <h3 className="mt-6 font-serif text-2xl">{step.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Example project */}
      <Section id="example" index="04" label={example.label} title={example.title}>
        <Reveal className="rounded-2xl bg-surface p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="rounded-full border border-accent px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-accent">
              {example.tag}
            </span>
            <p className="text-sm text-muted">{example.client}</p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-b border-line pb-10">
            {example.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="order-first font-serif text-4xl tracking-tight sm:text-6xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {example.parts.map((part) => (
              <div key={part.heading}>
                <h3 className="text-sm font-medium uppercase tracking-[0.12em]">
                  {part.heading}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{part.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* About */}
      <Section id="about" index="05" label={about.label} title={about.title}>
        <Reveal className="grid gap-10 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            {about.photo ? (
              <Image
                src={about.photo}
                alt={about.photoAlt}
                width={640}
                height={800}
                sizes="(min-width: 768px) 30vw, 100vw"
                className="aspect-[4/5] w-full max-w-xs rounded-2xl object-cover md:max-w-none"
              />
            ) : (
              <div
                role="img"
                aria-label="Photo placeholder"
                className="flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-surface md:max-w-none"
              >
                <span className="font-serif text-5xl text-muted">{brand.initials}</span>
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  Photo goes here
                </span>
              </div>
            )}
          </div>
          <div className="space-y-5 text-lg leading-relaxed md:col-span-3">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "" : "text-muted"}>
                {p}
              </p>
            ))}
            <div className="pt-4">
              <BookButton />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section id="faq" index="06" label={faq.label} title={faq.title}>
        <div className="border-b border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-t border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-xl sm:text-2xl">
                {item.q}
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0 text-accent before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-4 after:w-px after:bg-current after:transition-transform group-open:after:rotate-90"
                />
              </summary>
              <p className="max-w-2xl pb-8 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Section>

      {/* Final call to action */}
      <section aria-labelledby="cta-title" className="border-t border-line bg-surface">
        <Reveal className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
          <h2
            id="cta-title"
            className="max-w-4xl text-balance font-serif text-4xl font-light leading-[1.06] tracking-tight sm:text-6xl md:text-7xl"
          >
            <Accent text={finalCta.title} />
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {finalCta.body}
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <BookButton />
            <p className="text-muted">
              {finalCta.emailPrompt}{" "}
              <a
                href={`mailto:${links.email}`}
                className="break-all text-ink underline decoration-line underline-offset-[6px] hover:decoration-ink"
              >
                {links.email}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
