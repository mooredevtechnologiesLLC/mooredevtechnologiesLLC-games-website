# MooreDev Technologies Games Website

Games website for MooreDev Technologies LLC, intended for hosting at `games.mooredevtechnologies.com`. Sister site to [mooredevtechnologies.com](https://mooredevtechnologies.com) — but with games-focused content.

## Tech Stack

- **React 19** with TypeScript (strict)
- **Vite 8** — dev server and bundler
- **SCSS Modules** — scoped per-component styles
- **Fontsource** — self-hosted web fonts (Orbitron, DM Sans, IBM Plex Mono, Caveat)

All dependencies are pinned to exact versions.

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Scripts

| Script            | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                     |
| `npm run build`   | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally          |
| `npm run lint`    | Run ESLint                                    |

## Project Structure

```
src/
├── main.tsx                  # Entry point — imports tokens, fonts, global styles
├── App.tsx                   # Root component
├── styles/
│   ├── _tokens.scss          # Design System tokens (colors, type, spacing)
│   └── global.scss           # Base resets and element defaults
└── components/
    ├── Header/               # Fixed sticky header with logo and nav
    ├── Hero/                 # Full-viewport landing section (diamond-grid texture)
    ├── About/                # Studio mission and values
    ├── Games/                # Game showcase grid
    ├── Contact/              # Email, GitHub, and main site links
    ├── Footer/               # Copyright and footer nav
    └── Logo/                 # Logo mark component
public/
├── logo.svg                  # Circuit-node logo mark
└── favicon.svg               # SVG favicon
```

## Design System

Shares the Design System with the main MooreDev Technologies site:

- **Primary** — Amber (`#f59e0b`)
- **Secondary** — Lavender (`#a78bfa`)
- **Accents** — Sage, Clay, Rose, Sky
- **Fonts** — Orbitron (headings), DM Sans (body), IBM Plex Mono (labels), Caveat (handwritten)
- **Theming** — all colors exposed as CSS custom properties; dark mode via `data-theme="dark"` on `<html>`

The games site uses lavender as its section accent (vs. amber on the main site) and a diamond-grid hero background texture (vs. hex on the main site).

## Adding a Game

Open `src/components/Games/Games.tsx` and add an entry to the `GAMES` array:

```ts
{
  name: 'My Game',
  description: 'A short description of the game.',
  genre: 'Puzzle · Casual',
  platform: 'iOS · Android',
  accent: 'amber', // 'amber' | 'lavender' | 'sage'
},
```
