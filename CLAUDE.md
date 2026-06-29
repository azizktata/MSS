# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The import above is load-bearing: this project runs **Next.js 16.2.9 with breaking changes vs. training data**. Read the relevant guide under `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`) before writing framework code, and heed deprecation notices.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured. Type-checking happens via the build (`tsc --noEmit` is wired through `next build` / the editor; `tsconfig.json` sets `noEmit: true`).

## Project Status & Goal

The product is specified in **`Design-doc.md`**: a single-page B2B showroom for **Mediterranean Mining Solutions (MMS)**, an industrial silica sand & quartz trader. Read it before building UI — it is the source of truth for content, structure, and the real (non-negotiable) data matrix (chemical specs, sieve analysis, logistics/Incoterms). Key requirements:

- **Three switchable design variants** (Industrial Spec Engine, Deep Basin Carrier, Material Monolith) toggled via a sticky control bar. Identical factual data, entirely different visual shells.
- Bilingual EN/FR (English primary, French for export market) — not yet implemented; structure content so the i18n switch is first-class.
- Eight explicit interactive states on every clickable element; `prefers-reduced-motion` collapses spatial animation to opacity crossfades; <80ms initial interaction feedback.
- OKLCH color base, no pure black/white (see `.impeccable.md` for the locked, user-tested token set — it supersedes Design-doc §3).

The three variants are **built** and live (see Architecture below). `app/page.tsx` is still the untouched `create-next-app` starter — it is not the product entry point; the variants live at `/1`, `/2`, `/3`.

## Architecture

The variants are **three presentational shells over one shared data + component layer.** Build shared logic/content once; diverge only the visual shell.

- **`lib/data.ts`** — the single source of factual truth: company info, the chemical/sieve/logistics matrices, application grades, compliance list, curated Unsplash image IDs (`IMG`), and the `VARIANTS` array. Every variant imports from here; the data is byte-identical across all three. When content changes, change it here, not in a page.
- **`app/1/`, `app/2/`, `app/3/`** — one `page.tsx` per variant (route paths `/1`, `/2`, `/3`). Each is a Server Component that composes the shared components and maps over `lib/data.ts`, applying a variant scope class (`.mss .v1` / `.v2` / `.v3`) to the root `<main>`.
- **`components/`** — shared, mostly Client Components (`"use client"`):
  - `VariantBar.tsx` — the sticky engineering control bar / variant switcher (reads `usePathname`).
  - `SiteNav.tsx` — per-page nav (transparent→solid on scroll, mobile drawer, compact variant switcher); takes `items` so each page passes its own section anchors.
  - `RfqForm.tsx` — structured RFQ capture with the eight-state form lifecycle (`idle`/`loading`/`success`/`error`); demo-only submit.
  - `HeroCarousel.tsx` — v2-only crossfading full-bleed hero (auto-advance, pause-on-interaction, reduced-motion aware) with a static stat strip; takes `slides`/`stats`/`cta` props.

### How variants diverge — CSS scope classes, not per-page styling

All distinctive styling lives in **`app/globals.css`** under `.v1` / `.v2` / `.v3` scope blocks. Each block **redefines design tokens** (`--font-display`, `--font-body`, `--font-num`, `--radius`, `--tracking-display`, background weighting) so the *same* shared primitives (`.shell`, `.display`, `.num`, `.eyebrow`, `.cell`, `.stat-strip`, etc.) render in three different aesthetics. To change a variant's look, edit its scope block + the shared primitives — avoid hardcoding variant-specific values inline in pages.

- `.v1` Industrial Spec Engine — Archivo, `--radius: 0px`, sharp mono-led cells, `--bg-2` ground.
- `.v2` Deep Basin Carrier — Big Shoulders display, Hanken body, `--radius: 2px`, cinematic full-bleed, generous vertical padding.
- `.v3` Material Monolith — Bricolage Grotesque, Hanken body, `--radius: 3px`, bright mineral-stone surfaces, wide-tracked labels.

## Stack

- **Next.js 16** App Router (`app/` directory), **React 19**, **TypeScript** (strict).
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured entirely in CSS. `app/globals.css` uses `@import "tailwindcss"`; the design system is hand-authored CSS (`:root` tokens + `.mss`/`.v*` scopes + shared primitive classes), not Tailwind `@theme` utilities. There is no `tailwind.config.js`. Pages mix Tailwind utility classes with the custom primitive classes.
- Path alias `@/*` → project root (`@/lib/data`, `@/components/...`).
- Fonts loaded via `next/font/google` in `app/layout.tsx`: Archivo, Big Shoulders, Bricolage Grotesque, Hanken Grotesk, Spline Sans Mono (+ Geist sans/mono from the starter). Each is exposed as a CSS variable; variant scope blocks pick which to use. **Do not add Inter/Roboto/system fonts** (impeccable ban).

## Design Workflow (`.agents/skills/`)

UI work is governed by two user-invocable design skills checked into the repo. **Run these — don't freestyle design.**

- **`impeccable`** (`/impeccable [craft|teach|extract]`) — the core design system: anti-AI-slop guidelines, typography/color/spatial rules, and a **Context Gathering Protocol**. Before any design work it requires confirmed design context; if `.impeccable.md` doesn't exist in the project root, run `/impeccable teach` first to generate it. Note the hard bans (no Inter/Roboto/system fonts, no gradient text, no >1px side-stripe card borders, no glassmorphism-everywhere) and the mandate to use OKLCH.
- **`bolder`** (`/bolder [target]`) — amplifies bland designs; depends on `impeccable` for context.

Reference material the skills draw on lives in `.agents/skills/impeccable/reference/` (typography, color-and-contrast, spatial-design, motion-design, interaction-design, responsive-design, ux-writing, craft, extract).

## Deployment

Deploys to **Netlify** (`netlify.toml`: `npm run build`, publish `.next`). Note: the `[[headers]]` block targets `/api/*`, but there is currently **no `app/api/` route** — that header is dormant boilerplate, not a wired endpoint.
