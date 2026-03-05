"use client";

import { marqueeItems } from "@/data/content";

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-3 px-4">
      <span className="text-sm font-semibold text-foreground-2 whitespace-nowrap">
        {text}
      </span>
      <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" aria-hidden="true" />
    </span>
  );
}

export function ProofMarquee() {
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="relative py-6 overflow-hidden border-y border-border"
      aria-label="Key metrics marquee"
    >
      {/* Gradient fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #050508, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #050508, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Marquee track */}
      <div className="marquee-wrapper">
        <div className="marquee-track" aria-hidden="true">
          {doubledItems.map((item, i) => (
            <MarqueeItem key={`a-${i}`} text={item} />
          ))}
        </div>
      </div>

      {/* Tagline below */}
      <div className="text-center mt-4 pointer-events-none" aria-hidden="true">
        <span className="text-xs text-foreground-3 tracking-widest uppercase">
          Metrics-first, storytelling always
        </span>
      </div>
    </div>
  );
}
