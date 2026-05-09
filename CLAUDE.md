# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + production build (tsc -b && vite build)
npm run lint      # ESLint
npm run preview   # Preview the production build locally
```

There is no test suite configured.

## Architecture

Single-page portfolio site built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and Headless UI.

**Page layout** (`src/App.tsx`): Renders sections in order — `Navbar`, `Hero`, `About`, `Experience`, `Projects`, `Contact` — as a single scrolling page. Each section has a corresponding `id` attribute for in-page anchor navigation.

**Section components** (`src/components/`):
- `Navbar.tsx` — fixed top nav with anchor links
- `Hero.tsx`, `About.tsx`, `Contact.tsx` — self-contained sections
- `Experience/Experience.tsx` — wraps `Experience/VerticalTabs.tsx`, which uses Headless UI `TabGroup` to switch between employer entries (VISTECH, GO-DIGITAL). Work history is hardcoded inside `VerticalTabs.tsx`.
- `projects/Projects.tsx` — maps over the `projects` array and alternates between two layout variants per card (even index → `ProjectCard2` image-left, odd → `ProjectCard` image-right)

**Project data** (`src/components/projectsData.ts`): Single source of truth for all project cards. Exports a `Project` interface and a `projects` array. To add or update a project, edit this file and place the image in `src/assets/projects/`.

**Animations**: Every section uses Framer Motion `whileInView` with `viewport={{ once: true }}` so animations fire once on scroll-in.

**Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Global CSS in `src/index.css` defines Ubuntu font utility classes (`ubuntu-bold`, `ubuntu-regular`, etc.) and a `.hvr-sweep-to-right` hover effect used in the Navbar.
