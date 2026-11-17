import { hero } from "@/content/site";

/**
 * The illustration in the hero: a sample report an agent could write.
 * It is a static picture, not a working tool. All text and figures come
 * from hero.mockup in content/site.ts. The card follows the light or dark theme.
 */
export function HeroMockup() {
  const m = hero.mockup;

  return (
    <figure className="mx-auto w-full max-w-md rounded-[1.75rem] border border-line bg-surface p-3 shadow-xl shadow-black/5 sm:p-4 lg:max-w-none">
      <div className="rounded-[1.1rem] border border-line bg-bg p-4 text-ink sm:p-5">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm">
          <span className="truncate">{m.request}</span>
          <span
            aria-hidden="true"
            className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-ink"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <p className="mt-5 font-serif text-xl leading-tight">{m.title}</p>
        <p className="mt-1 text-xs text-muted">{m.meta}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2">
          {m.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col rounded-xl bg-surface px-3 py-2.5">
              <dt className="min-h-[2lh] text-[0.7rem] leading-tight text-muted sm:min-h-0">{stat.label}</dt>
              <dd className="mt-1 font-serif text-lg leading-none sm:text-xl">{stat.value}</dd>
              <dd className="mt-1.5 text-[0.7rem] font-medium text-ink">{stat.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-3 rounded-xl bg-surface px-3.5 py-3">
          <div className="flex items-end justify-between gap-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted">
              {m.summaryLabel}
            </p>
            <svg
              aria-hidden="true"
              viewBox="0 0 120 28"
              className="h-6 w-24 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M1 22 L16 20 L30 21 L44 16 L58 17 L72 11 L86 12 L100 6 L119 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-2 text-sm leading-relaxed">{m.summary}</p>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-3">
          <div>
            <p className="text-[0.7rem] text-muted">{m.actionLabel}</p>
            <p className="mt-0.5 text-sm font-medium">{m.action}</p>
          </div>
          <span className="shrink-0 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-ink">
            {m.actionButton}
          </span>
        </div>

        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[0.7rem] text-muted">
          <span className="flex items-center gap-1.5 whitespace-nowrap font-medium uppercase tracking-[0.12em]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {m.sampleLabel}
          </span>
          <span>{m.footnote}</span>
        </figcaption>
      </div>
    </figure>
  );
}
