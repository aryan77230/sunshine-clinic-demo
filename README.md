# Sunshine Clinic — Demo

A modern, animated landing site for a family healthcare clinic. Built as a portfolio / design-exploration project — **this is not a real medical practice.**

## 🌐 Live demo

### → **[demo-clinic-aryan-test.vercel.app](https://demo-clinic-aryan-test.vercel.app)**

[![Live Demo](https://img.shields.io/badge/live-demo-0D9488?style=for-the-badge)](https://demo-clinic-aryan-test.vercel.app)
[![Vercel](https://img.shields.io/badge/deployed%20on-vercel-000?style=for-the-badge&logo=vercel)](https://demo-clinic-aryan-test.vercel.app)

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** with a custom "Editorial Sage" palette (teal · coral · sage · ivory)
- **Framer Motion** + custom scroll-driven primitives for entry animations
- **OGL** (lightweight WebGL) for the Aurora background
- **React Router v6** — multi-page (`/`, `/about`, `/services`, `/doctors`, `/contact`)
- **Lordicon** animated icons with a custom SVG `feColorMatrix` filter for true white-key transparency

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview the production build locally
```

## Project layout

```
src/
├── components/
│   ├── layout/        Nav, Footer, Dock
│   └── reactbits/     Animation + visual primitives (BlurText, TiltedCard,
│                      SpotlightCard, ScrollReveal, Particles, Aurora, …)
├── pages/             Home, About, Services, Doctors, Contact
└── styles/            Global Tailwind + design tokens
index.html            Includes the SVG dropWhite filter for Lordicon GIFs
vercel.json           Vite framework preset + SPA rewrite
```

## Design notes

- **Anti-template UI** — intentional rhythm, layered backgrounds, editorial typography (DM Serif Display + Plus Jakarta Sans), bento grid for services
- **Equal-height card layout** propagated through `ScrollReveal` → `TiltedCard` → card root via `h-full flex flex-col`
- **White-keyed Lordicon GIFs** — `feColorMatrix` luminance-to-alpha + gamma-2 anti-halo + `feComposite operator="in"` to preserve transparent regions
- **Mobile-first responsive** — all five pages tuned for 320 / 375 / 768 / 1024 / 1440

## Deploy

Already wired to Vercel. From this folder:

```bash
vercel --prod
```

Production aliases for any deploy:
- [demo-clinic-aryan-test.vercel.app](https://demo-clinic-aryan-test.vercel.app) (canonical)
- sunrise-family-clinic.vercel.app (auto-domain — slated for rename)

## License

MIT — feel free to fork, learn from, or adapt the layout/animation patterns.
