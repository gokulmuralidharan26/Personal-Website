# Gokul Muralidharan — Portfolio

A Vercel-level portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Smooth Scroll**: Lenis (`@studio-freight/lenis`)
- **Icons**: Lucide React
- **Fonts**: Inter (via `next/font`)
- **Deploy**: Vercel

## Structure

```
app/
├── layout.tsx                    # Root layout with font, metadata, providers
├── page.tsx                      # Main portfolio page
├── not-found.tsx                 # 404 page
└── (case-studies)/
    └── case-studies/[slug]/page.tsx  # Dynamic case study pages

components/
├── Navbar.tsx          # Sticky glass navbar with scrollspy
├── HeroStory.tsx       # Hero with animated live dashboard card
├── ProofMarquee.tsx    # Horizontal metrics marquee
├── MetricTiles.tsx     # Count-up metric tiles with hover tooltips
├── ScrollNarrative.tsx # 3-step scroll story with visuals
├── ExperienceTimeline.tsx  # Expandable experience + leadership
├── ProjectSpotlight.tsx    # Project section wrapper
├── CaseStudyCard.tsx   # Project card with Problem/Approach/Impact
├── GrowthPlaybook.tsx  # 6-card growth mental model section
├── SkillsStack.tsx     # Skill clusters with descriptors
├── CreativeGallery.tsx # Filterable masonry gallery with modal
├── VideoReel.tsx       # YouTube content section
├── ContactCTA.tsx      # Contact form + social links
├── Footer.tsx          # Footer with nav + social
├── MotionProviders.tsx # Cursor glow + Lenis smooth scroll
├── Section.tsx         # Layout primitive
├── Reveal.tsx          # Framer Motion scroll reveal
└── ParallaxLayer.tsx   # Scroll parallax wrapper

data/
└── content.ts          # ALL copy, metrics, projects, skills

lib/
├── utils.ts            # cn(), throttle, animation constants
└── routes.ts           # Nav links and route helpers

styles/
└── globals.css         # Tailwind base + design system CSS
```

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm, yarn, or pnpm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. No environment variables needed
4. Click Deploy

Or use the CLI:

```bash
npx vercel
```

## Customization

All content lives in `data/content.ts`. To update:

- **Personal info / links**: `siteConfig`
- **Hero content**: `heroContent`
- **Metrics**: `metrics`
- **Experience**: `experience`
- **Projects**: `projects` + `caseStudies`
- **Skills**: `skills`
- **Growth playbook**: `growthPlaybook`
- **Creative work**: `creativeWork`

## Performance Notes

- Cursor glow and Lenis are disabled when `prefers-reduced-motion: reduce` is set
- All animations respect `prefers-reduced-motion`
- Dynamic imports used for gallery and video modal components
- Images use `next/image` for automatic optimization
- Font uses `next/font` for zero CLS

## Case Studies

Located at `/case-studies/anybet` and `/case-studies/fbk-chatbot`.

Statically generated at build time via `generateStaticParams`.

## License

Personal portfolio — not for redistribution.
