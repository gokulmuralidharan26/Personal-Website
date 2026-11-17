import Link from "next/link";
import { cta } from "@/content/site";
import { bookingHref, bookingIsExternal } from "@/lib/site";

type Props = {
  size?: "sm" | "lg";
  label?: string;
  className?: string;
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  lg: "h-13 px-7 text-base",
};

/** The one call to action on the site. Reads its link from content/site.ts. */
export function BookButton({ size = "lg", label, className = "" }: Props) {
  const text = label ?? (size === "sm" ? cta.bookShort : cta.book);
  const classes = `inline-flex items-center justify-center gap-2 rounded-full bg-accent font-medium text-accent-ink transition-opacity hover:opacity-85 ${sizes[size]} ${className}`;

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
