# Gokul Muralidharan: consulting site

A single landing page plus a `/contact` page. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Every page is static, so it is fast and free to host on Vercel.

## Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000. The page reloads as you edit.

To test the production version:

```bash
npm run build
```

```bash
npm run start
```

## Before you launch

Three things are still placeholders:

1. **Booking link.** Open `content/site.ts` and set `links.bookingUrl` to your Calendly or Cal.com link. Until you do, every "Book a call" button goes to the `/contact` page.
2. **Contact form key.** See "Contact form" below. Until you add a key, the form opens the visitor's email app with their message filled in.
3. **Photo.** Put a portrait in `public/` (for example `public/gokul.jpg`, ideally 4:5 and at least 800px wide), then set `about.photo` to `"/gokul.jpg"` in `content/site.ts`.

Also read through the FAQ answers and the About section. I drafted them, and they make promises on your behalf (timelines, NDAs, how you handle data, reply times). Change anything that isn't true for you.

## Edit the copy

All text lives in one file: **`content/site.ts`**. Headlines, services, steps, the example project, FAQ, button labels, meta description, your email, and your links are all there. Edit the text between the quotes and save. You never need to open a component.

To add or remove an FAQ, a service, or a problem, add or delete one `{ ... }` block in the matching list.

### The hero illustration and italic headlines

- The report card beside the main headline is a picture of sample output, not a working tool. Its text and numbers live under `hero.mockup` in `content/site.ts`. The numbers are made up, so keep the "Sample data" label.
- To put part of a headline in italics, wrap it in asterisks, like `"More time for the work that *grows your business.*"`. This works for the hero headline and the closing headline.

### Rebrand to a company name later

In `content/site.ts`, change `brand.name` and `brand.initials`. That updates the header wordmark, footer, page titles, favicon, and social sharing image. Then update `seo.title`, and reword any first-person copy you want to change.

### Change colors or fonts

- Colors: the variables at the top of `app/globals.css`. There is one set for light mode and one for dark. `--accent` is the button and highlight color (black in light mode, cream in dark). Change it in both sets to add a color.
- Fonts: the two font imports at the top of `app/layout.tsx`.
- The social image and favicon use fixed colors, set in `app/opengraph-image.tsx`, `app/icon.tsx`, and `app/apple-icon.tsx`.

## Contact form

The form uses [Web3Forms](https://web3forms.com). It sends each submission to your inbox. There is no server, database, or dashboard to manage, and the free plan is enough for a site like this.

Setup takes about two minutes:

1. Go to https://web3forms.com and enter the email address where you want messages delivered.
2. They email you an access key.
3. Locally, copy `.env.example` to `.env.local` and paste the key after `NEXT_PUBLIC_WEB3FORMS_KEY=`.
4. On Vercel, add the same variable under Project Settings > Environment Variables, then redeploy.

The key is designed to be public, so it is safe in the browser. The form includes a hidden field that filters out most spam bots.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new, import the repository, and click Deploy. Vercel detects Next.js on its own. No settings to change.
3. In Project Settings > Environment Variables, add:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`: your Web3Forms key
   - `NEXT_PUBLIC_SITE_URL`: your live address, for example `https://www.yourdomain.com`
4. Redeploy so the variables take effect (Deployments > the latest one > Redeploy).

After that, every push to the main branch deploys automatically.

### Custom domain

1. In Vercel, open the project and go to Settings > Domains.
2. Add your domain (both `yourdomain.com` and `www.yourdomain.com`).
3. Vercel shows the DNS records to add. At your domain registrar, add them exactly as shown. This is usually an A record for the root domain and a CNAME record for `www`.
4. Wait for the records to verify. This is often a few minutes and can take up to a day. Vercel issues the HTTPS certificate for you.
5. Make sure `NEXT_PUBLIC_SITE_URL` matches the final address, then redeploy. This keeps the sitemap, robots.txt, and social sharing tags pointing at the right domain.

## What's where

```
content/site.ts          All copy, your name, brand name, links
app/page.tsx             The landing page (all eight sections)
app/contact/page.tsx     The contact page
app/layout.tsx           Fonts, meta tags, header and footer
app/globals.css          Colors for light and dark mode
app/opengraph-image.tsx  Social sharing image, generated from the content file
app/icon.tsx             Favicon, generated from your initials
app/sitemap.ts           sitemap.xml
app/robots.ts            robots.txt
components/              Header, footer, buttons, form, theme toggle, hero illustration
```
