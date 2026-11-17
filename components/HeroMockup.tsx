import { hero } from "@/content/site";

/**
 * The illustration in the hero: a sample report an agent could write.
 * It is a static picture, not a working tool. All text and figures come
 * from hero.mockup in content/site.ts. The card keeps its paper colors in
 * both light and dark mode.
 */
export function HeroMockup() {
  const m = hero.mockup;

  return (
    <figure className="mx-auto w-full max-w-md rounded-[1.75rem] bg-black/20 p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:p-4 lg:max-w-none">
      <div className="rounded-[1.1rem] bg-[#f8f4ea] p-4 text-[#17221c] sm:p-5">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-[#e0d9c8] bg-[#f1ecdf] px-3.5 py-2.5 text-sm">
          <span className="truncate">{m.request}</span>
          <span
            aria-hidden="true"
            className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#1b4a38] text-[#f6f1e6]"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <p className="mt-5 font-serif text-xl leading-tight">{m.title}</p>
        <p className="mt-1 text-xs text-[#5c665f]">{m.meta}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2">
          {m.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col rounded-xl bg-[#f1ecdf] px-3 py-2.5">
              <dt className="min-h-[2lh] text-[0.7rem] leading-tight text-[#5c665f] sm:min-h-0">{stat.label}</dt>
              <dd className="mt-1 font-serif text-lg leading-none sm:text-xl">{stat.value}</dd>
              <dd className="mt-1.5 text-[0.7rem] font-medium text-[#1c5a43]">{stat.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-3 rounded-xl bg-[#f1ecdf] px-3.5 py-3">
          <div className="flex items-end justify-between gap-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#5c665f]">
              {m.summaryLabel}
            </p>
            <svg
              aria-hidden="true"
              viewBox="0 0 120 28"
              className="h-6 w-24 text-[#1c5a43]"
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

        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-[#e0d9c8] px-3.5 py-3">
          <div>
            <p className="text-[0.7rem] text-[#5c665f]">{m.actionLabel}</p>
            <p className="mt-0.5 text-sm font-medium">{m.action}</p>
          </div>
          <span className="shrink-0 rounded-full bg-[#1b4a38] px-3.5 py-1.5 text-xs font-medium text-[#f6f1e6]">
            {m.actionButton}
          </span>
        </div>

        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[0.7rem] text-[#5c665f]">
          <span className="flex items-center gap-1.5 whitespace-nowrap font-medium uppercase tracking-[0.12em]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#1c5a43]" />
            {m.sampleLabel}
          </span>
          <span>{m.footnote}</span>
        </figcaption>
      </div>
    </figure>
  );
}
