# Architecture

## Overview

Single-page application (SPA) built with Vite + React + TypeScript. One codebase — one set of
components — renders six different role portfolios from data objects.

## Folder map

```
src/
├── App.tsx                # Route table
├── main.tsx               # React root
├── index.css              # Tailwind directives
├── types/portfolio.ts     # All shared TypeScript types
├── data/
│   ├── profile.ts         # Shared personal info (name, contact, education)
│   ├── roles.ts           # Registry: slug → { name, accent, data }
│   └── roles/             # One file per role — implements RolePortfolio
├── pages/
│   ├── HomePage.tsx       # Hub page — links to all role routes
│   ├── RolePage.tsx       # Dynamic role renderer — reads ROLES[slug]
│   └── NotFound.tsx
├── components/
│   ├── layout/            # Header, Footer, Section wrapper
│   ├── sections/          # Hero, About, Skills, Experience, Projects, Contact
│   └── ui/                # Tag, Card, Button
└── lib/utils.ts           # cn() helper
```

## Routing

React Router v6 with `BrowserRouter`:

```
/           → HomePage
/:slug      → RolePage (looks up ROLES[slug]; redirects to /404 if unknown)
/404        → NotFound
*           → NotFound
```

`vercel.json` rewrites all paths to `index.html` so direct visits to `/pm` etc. work in
production.

## Data-driven rendering

`RolePage` reads `useParams().slug`, looks up `ROLES[slug]`, and passes the `RoleMeta` object
(which contains the `RolePortfolio` data + accent config) to each section component as a prop.

No content is hardcoded in components. To update a role: edit its data file.

## Theming (accent system)

Each role in `src/data/roles.ts` has an `accent` object:

```ts
{
  bg:     string  // e.g. 'bg-violet-600'
  text:   string  // e.g. 'text-violet-600'
  pill:   string  // e.g. 'bg-violet-100 text-violet-700'
  border: string  // e.g. 'border-violet-200'
  button: string  // e.g. 'bg-violet-600 hover:bg-violet-700 text-white'
  light:  string  // e.g. 'bg-violet-50'
}
```

All components receive the `role` prop and pull accent classes from `role.accent` — so the same
JSX renders a violet PO page, a blue PM page, a rose UX/UI page, etc.

Because Tailwind purges unused classes, all accent class strings must be present as complete
strings in `src/data/roles.ts` (not constructed dynamically).

## SEO limitation

This is a client-side SPA. `document.title` is set per route in `RolePage` via `useEffect`, but
meta tags are not rendered server-side. For improved SEO, consider migrating to Next.js or adding
a prerendering step.

## Adding a new role

1. Create `src/data/roles/<slug>.ts` implementing `RolePortfolio`
2. Import it in `src/data/roles.ts`, add entry to `ROLES` and `ROLE_ORDER`
3. The route `/<slug>` works automatically
