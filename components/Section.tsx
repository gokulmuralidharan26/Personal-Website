import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

/** Shared layout for the numbered sections: label on the left, content on the right. */
export function Section({ id, index, label, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-6 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12">
        <p className="flex items-baseline gap-3 text-sm text-muted lg:col-span-3">
          <span className="font-serif text-accent">{index}</span>
          <span className="uppercase tracking-[0.14em]">{label}</span>
        </p>
        <div className="lg:col-span-9">
          <Reveal>
            <h2
              id={`${id}-title`}
              className="max-w-3xl text-balance font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-4xl md:text-5xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
            )}
          </Reveal>
          <div className="mt-12 md:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
