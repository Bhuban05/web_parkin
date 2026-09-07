# ParkIn — Kathmandu parking, reimagined

A production-structured React + Vite marketing site for ParkIn, a parking
reservation product for Kathmandu. Built with Tailwind CSS for styling and
Framer Motion for a restrained set of entrance and scroll animations.

## Getting started

```bash
npm install
npm run dev      # start local dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/
    layout/         # Navbar, Footer — persistent chrome
    sections/        # One file per landing-page section (Hero, Stats, ...)
    ui/               # Small, reusable presentational pieces (Button, Card, ...)
  data/               # Static content (testimonials, stats, steps) kept out
                      # of components so copy can be edited without touching JSX
  hooks/              # Reusable logic, e.g. useCountUp for the animated stats
  App.jsx             # Composes the page from sections
  main.jsx            # React root / entry point
  index.css           # Tailwind layers + global base styles
```

## Design notes

- **Palette** — ink navy, brick terracotta and marigold accent, drawn from
  Kathmandu's brick townhouses and tiered pagoda roofs rather than a generic
  SaaS palette.
- **Type** — Fraunces for display headlines, Public Sans for UI and body
  copy.
- **Motion** — a single orchestrated stagger on the hero entrance, plus
  restrained scroll-triggered reveals; `prefers-reduced-motion` is respected
  throughout (see `src/index.css` and `useCountUp`).
- **Illustration** — the hero backdrop is a custom SVG skyline
  (`SkylineIllustration.jsx`) referencing local pagoda-roof silhouettes,
  instead of a stock photograph.

## Content

Copy referencing neighbourhoods (Thamel, Patan, New Road, Boudha) and
figures (spaces listed, pricing, ratings) is illustrative placeholder
content — swap the files in `src/data/` for real figures before shipping.
