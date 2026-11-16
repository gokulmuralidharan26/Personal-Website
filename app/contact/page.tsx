import type { Metadata } from "next";
import { contact, links } from "@/content/site";
import { bookingIsExternal } from "@/lib/site";
import { BookButton } from "@/components/BookButton";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: contact.metaTitle,
  description: contact.metaDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: contact.title,
    description: contact.metaDescription,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h1 className="text-balance font-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-6xl">
          {contact.title}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{contact.intro}</p>

        <dl className="mt-12 space-y-8 border-t border-line pt-8">
          {/* Shown once a booking link is set in content/site.ts */}
          {bookingIsExternal && (
            <div>
              <dt className="text-sm uppercase tracking-[0.14em] text-muted">
                {contact.bookHeading}
              </dt>
              <dd className="mt-3">
                <p className="mb-4 text-muted">{contact.bookBody}</p>
                <BookButton />
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm uppercase tracking-[0.14em] text-muted">
              {contact.emailHeading}
            </dt>
            <dd className="mt-3">
              <a
                href={`mailto:${links.email}`}
                className="break-all text-lg underline decoration-line underline-offset-[6px] hover:decoration-ink"
              >
                {links.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-7">
        <ContactForm />
      </div>
    </div>
  );
}
