# VoltSense — Marketing Site

A responsive, accessible 3-page marketing site for VoltSense (smart home energy monitor).

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Design System
- Color tokens: `brand` cyan scale, `surface` dark backgrounds
- Type scale in `app/globals.css` via `@layer base`
- Spacing via Tailwind utilities, container helper `.container-px`
- Components: `Button`, `Card`, `Field` (Input, Textarea, Label)

## Pages
- `/` Home: hero, social proof, how it works, feature highlight, footer
- `/features`: 6 feature cards, comparison table, MQTT payload snippet
- `/contact`: form posts to `/api/contact`

## API
- `POST /api/contact` validates JSON `{ name, email, message }`, logs redacted email

## Local Development
```bash
pnpm i # or npm i / yarn
pnpm dev
```

## Build
```bash
pnpm build
```

## Deployment
This repo is ready for Vercel. Production URL target: `https://agentic-02b49a5f.vercel.app`.

## Decisions
- Dark, high-contrast theme for energy/tech aesthetic
- Local-first fonts via Google Inter with Next font loader
- Minimal dependencies for performance and Lighthouse scores
