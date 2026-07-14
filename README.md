# Rehan Ali — Freelance IT Infrastructure Engineer

A personal portfolio and freelance-lead-generation site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — scroll reveals, hover states, page-load animation
- **Lucide React** — icon set
- **next-themes** — dark / light mode with system preference support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Before You Deploy

1. **Add real assets to `/public`:**
   - `og-image.png` (1200×630) — social share preview image
   - `Rehan-Ali-CV.pdf` — the file behind the "Download Resume" button
   - A real photo can replace the initials avatar in `components/Hero.tsx` and `components/About.tsx` if you'd like

2. **Update `lib/data.ts`** — this file centralizes all site copy: your intro, skills, services, pricing, experience, portfolio projects, testimonials, FAQs, blog posts, and contact/social links. Edit it to update content without touching component code.

3. **Real testimonials.** The `testimonials` array currently has example quotes — replace with real client feedback once you have it (or remove the section from `app/page.tsx` until you do).

4. **Freelance platform links.** Update `socialLinks` in `lib/data.ts` with your actual Upwork, Fiverr, LinkedIn, and GitHub profile URLs.

5. **Connect the contact form to a real backend.** The form in `components/Contact.tsx` currently simulates a submission. Wire it to an email service (e.g. Resend, SendGrid) or a serverless API route (`app/api/contact/route.ts`) before going live.

6. **Add Calendly.** Elements with `data-calendly-placeholder="..."` mark where a Calendly popup/inline widget should be wired up.

7. **Analytics.** Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to a `.env.local` file (see `.env.example`) to enable Google Analytics. Disabled by default.

8. **Domain.** Update `site.url` in `lib/data.ts` (used for metadata, sitemap, and structured data).

## Project Structure

```
app/                Route files: layout, page, sitemap, robots, global styles
components/          All UI sections and reusable pieces
lib/data.ts          All site content (single source of truth)
lib/utils.ts          Small utility helpers
public/              Static assets
```

Sections, in order: Hero → About → Skills → Experience → Portfolio → Services →
Process (how we'll work together) → Testimonials → Pricing → CTA → FAQ → Blog → Contact.

All in a single page with anchor navigation (`#about`, `#skills`, etc.) — no separate routes, so navigation is instant.

## Design Notes

- **Voice:** first-person throughout — this is framed as one person's practice, not a company.
- **Palette:** Azure Blue `#2563EB`, Dark Navy `#0F172A`, Cyan Accent `#06B6D4`, plus signal-green for "available now" indicators.
- **Type:** Outfit (display/headings), Inter (body), JetBrains Mono (data, labels).
- Sections that are permanently dark (hero, process) use hardcoded dark card colors rather than theme-toggled ones, since they don't change with light/dark mode.

## Accessibility

- Visible focus states on all interactive elements (`focus-ring` utility)
- `prefers-reduced-motion` respected globally
- Semantic headings and landmark elements throughout
