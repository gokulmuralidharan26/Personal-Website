"use client";

/**
 * Switches between light and dark mode and remembers the choice.
 * Shows a moon in light mode and a sun in dark mode (see globals.css).
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing can block storage. The toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="icon-moon size-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="icon-sun size-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="10" cy="10" r="3.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M4.3 15.7l1.4-1.4M14.3 5.7l1.4-1.4" />
      </svg>
    </button>
  );
}
