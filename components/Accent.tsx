/**
 * Renders a headline from content/site.ts. Any phrase wrapped in *asterisks*
 * is set in italics with the accent color.
 */
export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="text-hero-accent">
            {part}
          </em>
        ) : (
          part
        ),
      )}
    </>
  );
}
