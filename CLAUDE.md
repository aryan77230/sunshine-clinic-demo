# CLAUDE.md

Context for AI agents (Claude Code) working in this repo.

## What this is

A demo / portfolio landing site for a fictional family healthcare clinic. **Not a real medical practice.** Single-page React app routed via `react-router-dom`, deployed as a static SPA.

## Stack

- **Build**: Vite 5 (`npm run dev` / `npm run build` / `npm run preview`)
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3 (config in `tailwind.config.js`, global tokens in `src/styles/globals.css`)
- **Animation**: Framer Motion + custom scroll-driven primitives in `src/components/reactbits/`
- **3D / WebGL**: OGL (lightweight, used for `Aurora` background only)
- **Icons**: Lordicon GIFs from `media.lordicon.com` + a custom SVG `feColorMatrix` filter for white-key transparency

## URLs

| | |
|---|---|
| Live (canonical) | https://demo-clinic-aryan-test.vercel.app |
| Live (auto-domain) | https://sunshine-clinic-demo.vercel.app |
| GitHub repo | https://github.com/aryan77230/sunshine-clinic-demo |
| Vercel project | `aryan77230-gmailcoms-projects/sunshine-clinic-demo` |

## Deployment

GitHub `main` is wired to Vercel for auto-deploy. **Just `git push origin main`** — Vercel rebuilds in ~15s. Manual deploy fallback: `vercel --prod` from this folder.

Build config: `vercel.json` sets framework=vite, output=dist, with SPA rewrite to `index.html` for client-side routing.

## Pages

`src/pages/` — `Home.tsx`, `About.tsx`, `Services.tsx`, `Doctors.tsx`, `Contact.tsx`. Routes wired in `src/App.tsx`. Nav + Dock + Footer in `src/components/layout/`.

## Design system

- **Palette**: teal `#0D9488` (primary), teal-dark `#134E4A`, coral `#E07856`, sage `#5EA092`, sage-light, ivory `#FFFAF0`, cream `#EAEFE5`, charcoal `#1A2624`. All in `tailwind.config.js`.
- **Fonts**: DM Serif Display (headings) + Plus Jakarta Sans (body). Loaded in `index.html`.
- **Style direction**: "Editorial Sage" — intentional rhythm, layered backgrounds, bento grid, gradient cards. **Do not let it drift toward generic SaaS template** (gray-on-white cards, centered hero with gradient blob, etc.). See `~/.claude/rules/web/design-quality.md`.

## Critical quirks — don't break these

1. **Lordicon white-box filter** (`index.html`): the `<filter id="dropWhite">` does luminance-keying + gamma-2 alpha + `feComposite operator="in"`. This is what makes the Lordicon GIFs transparent. **Do NOT combine with `mix-blend-multiply` on the same `<img>`** — the filter alone is correct. The icon URLs are specifically the ones without built-in frame artwork; don't swap to other Lordicon slugs casually.

2. **Equal-height service/doctor cards**: achieved by passing `h-full` through `ScrollReveal` → `TiltedCard` → card root (`h-full flex flex-col`), then `flex-1` on the description so tag pills sit at the bottom. Both wrappers accept `className` and pass it to their root div. If cards start mis-aligning, this chain broke.

3. **Doctor portrait framing**: `<img>` uses `object-cover object-top` — heads are always near the top of source photos, so default center cropping cut foreheads off. Keep `object-top`.

4. **Contact card email overflow**: the value uses `[overflow-wrap:anywhere]` because `break-words` alone won't break an unspaced string like `info@sunrisefamilyclinic.com` on narrow viewports.

5. **Mobile breakpoints**: all pages tuned for 320 / 375 / 768 / 1024 / 1440. Section padding uses `py-16 md:py-24 lg:py-32` pattern, headings `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`. Don't drop the `sm:` step — that's what fixes mobile.

6. **TiltedCard creates a stacking context** (3D transform). Inside it, `mix-blend-mode` against ancestors won't work. That's another reason the icon white-keying uses an SVG filter instead of blend modes.

7. **Booking URL**: `https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey` — referenced in multiple pages. If it needs to change, search-replace it across all pages.

## Package name caveat

`package.json` still has `"name": "sunrise-family-clinic"` — leftover from an earlier project name. Not load-bearing; renamable but no urgency.

## Common tasks

- **Local dev**: `npm run dev` → http://localhost:5173
- **Verify a build before pushing**: `npm run build`
- **Push to prod**: `git push origin main` (auto-deploys)
- **Manual deploy**: `vercel --prod`
- **Check what's live**: `vercel ls sunshine-clinic-demo` shows recent deployments
- **Re-link to a different Vercel account**: `rm -rf .vercel && vercel link --project sunshine-clinic-demo --yes`

## What lives outside src/

- `ghl/` — GoHighLevel CRM setup notes/scripts (unrelated to the site build)
- `public-old/` — the static-HTML version of this site before the Vite migration (gitignored, kept for reference)
- `node_modules/`, `dist/`, `.vercel/` — all gitignored
