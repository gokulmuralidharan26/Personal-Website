"use client";

import { useEffect, useState } from "react";
import { hero } from "@/content/site";

const TYPE_MS = 32; // speed of the typing effect, per character
const HOLD_MS = 5200; // how long each finished sample stays on screen

/**
 * The animated illustration in the hero. It types a sample request, shows
 * the kind of result an agent could return, then moves to the next sample.
 * It is a picture, not a working tool. All text and figures come from
 * hero.demo in content/site.ts.
 *
 * Visitors can pick a sample with the tabs or stop the animation with the
 * pause button. It does not auto-play for people who turn on "reduce motion".
 */
export function HeroDemo() {
  const d = hero.demo;
  const samples = d.samples;
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(samples[0].request.length);
  const [playing, setPlaying] = useState(true);

  const request = samples[active].request;
  const done = typed >= request.length;

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = done
      ? window.setTimeout(() => {
          setActive((active + 1) % samples.length);
          setTyped(0);
        }, HOLD_MS)
      : window.setTimeout(() => setTyped(typed + 1), TYPE_MS);

    return () => window.clearTimeout(timer);
  }, [playing, done, typed, active, samples.length]);

  function pick(index: number) {
    setPlaying(false);
    setActive(index);
    setTyped(samples[index].request.length);
  }

  return (
    <figure className="mx-auto w-full max-w-md rounded-[1.75rem] border border-line bg-surface p-3 shadow-xl shadow-black/5 sm:p-4 lg:max-w-none">
      <div className="rounded-[1.1rem] border border-line bg-bg p-4 text-ink sm:p-5">
        {/* The request being "typed" */}
        <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm">
          <span className="truncate" aria-hidden="true">
            {request.slice(0, typed)}
            {!done && <span className="ml-px inline-block h-[1em] w-px translate-y-[0.15em] bg-ink" />}
            {typed === 0 && " "}
          </span>
          <span className="sr-only">{request}</span>
          <span
            aria-hidden="true"
            className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-ink"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* All samples share one grid cell so the card never changes height. */}
        <div className="grid">
          {samples.map((s, i) => {
            const shown = i === active && done;
            return (
              <div
                key={s.tab}
                aria-hidden={i !== active}
                className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                  shown ? "opacity-100" : "pointer-events-none translate-y-1 opacity-0"
                } ${i === active ? "" : "invisible"}`}
              >
                <p className="mt-5 font-serif text-xl leading-tight">{s.title}</p>
                <p className="mt-1 text-xs text-muted">{s.meta}</p>

                <dl className="mt-4 grid grid-cols-3 gap-2">
                  {s.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col rounded-xl bg-surface px-3 py-2.5">
                      <dt className="min-h-[2lh] text-[0.7rem] leading-tight text-muted sm:min-h-0">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 font-serif text-lg leading-none sm:text-xl">{stat.value}</dd>
                      <dd className="mt-1.5 text-[0.7rem] font-medium">{stat.note}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-3 rounded-xl bg-surface px-3.5 py-3">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted">
                    {d.summaryLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{s.summary}</p>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-3">
                  <div>
                    <p className="text-[0.7rem] text-muted">{d.actionLabel}</p>
                    <p className="mt-0.5 text-sm font-medium">{s.action}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-ink">
                    {s.actionButton}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-3 text-[0.7rem] text-muted">
          <span className="flex items-center gap-1.5 whitespace-nowrap font-medium uppercase tracking-[0.12em]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {d.sampleLabel}
          </span>

          <div className="flex items-center gap-1.5">
            <div
              role="group"
              aria-label={d.tabsLabel}
              className="flex items-center gap-0.5 rounded-full bg-surface p-1"
            >
              {samples.map((s, i) => (
                <button
                  key={s.tab}
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => pick(i)}
                  className={`rounded-full px-2.5 py-1.5 text-xs transition-colors ${
                    i === active
                      ? "bg-bg font-medium text-ink shadow-sm"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {s.tab}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? d.pauseLabel : d.playLabel}
              title={playing ? d.pauseLabel : d.playLabel}
              className="flex size-8 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-line motion-reduce:hidden"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3" fill="currentColor">
                {playing ? (
                  <path d="M4 3h3v10H4zM9 3h3v10H9z" />
                ) : (
                  <path d="M5 3l8 5-8 5z" />
                )}
              </svg>
            </button>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
