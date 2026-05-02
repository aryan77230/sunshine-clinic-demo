# Sunrise Family Clinic — Landing Page

A modern, responsive landing page for Sunrise Family Clinic.

## Deploy to Vercel (Free)

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts — it will deploy the `public/` directory automatically.

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Deploy — no configuration needed

## Local Development
```bash
npx serve public
```
Opens at `http://localhost:3000`

## Structure
```
public/
  index.html   — Main landing page
  style.css    — All styles
  script.js    — Scroll animations & mobile nav
vercel.json    — Vercel deployment config
package.json   — Project metadata
```
