import Link from "next/link";
import { brand, footer, links, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-lg font-medium tracking-tight">{brand.name}</p>
          <p className="mt-2 text-sm text-muted">{footer.line}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="text-muted hover:text-ink">
            Contact
          </Link>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className="text-muted hover:text-ink">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
