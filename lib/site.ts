import { links } from "@/content/site";

/** Public URL of the site, used for meta tags, the sitemap, and robots.txt. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

/** Where "Book a call" buttons go. Falls back to /contact until a booking link is set. */
export const bookingHref = links.bookingUrl || "/contact";
export const bookingIsExternal = /^https?:\/\//.test(bookingHref);
