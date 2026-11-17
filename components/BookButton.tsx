import Link from "next/link";
import { cta } from "@/content/site";
import { bookingHref, bookingIsExternal } from "@/lib/site";

type Props = {
  size?: "sm" | "lg";
  label?: string;
  className?: string;
  /** "inverse" is the cream button used on the green bands. */
  tone?: "accent" | "inverse";
};

const tones = {
  accent: "bg-accent text-accent-ink",
  inverse: "bg-hero-ink text-hero",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  lg: "h-13 px-7 text-base",
};

/** The one call to action on the site. Reads its link from content/site.ts. */
export function BookButton({ size = "lg", label, className = "", tone = "accent" }: Props) {
  const text = label ?? (size === "sm" ? cta.bookShort : cta.book);
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-opacity hover:opacity-85 ${tones[tone]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {text}
      {size === "lg" && (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if (bookingIsExternal) {
    return (
      <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={bookingHref} className={classes}>
      {inner}
    </Link>
  );
}
