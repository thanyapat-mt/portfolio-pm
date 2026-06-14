# Portfolio 2026 — Thanyapat Montha

A multi-role personal portfolio. The same person, six tailored views — each optimized for a different target role.

## Routes

| URL       | Role                  |
|-----------|-----------------------|
| `/`       | Hub — links to all roles |
| `/po`     | Product Owner         |
| `/pm`     | Product Manager       |
| `/ba`     | Business Analyst      |
| `/cs`     | Customer Success      |
| `/ux-ui`  | UX/UI Designer        |
| `/bd`     | Business Development  |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & preview

```bash
npm run build     # output in dist/
npm run preview   # serve dist/ locally
```

## Deploy (Vercel)

1. Push to GitHub
2. Import repo in Vercel — it auto-detects Vite
3. `vercel.json` handles SPA deep-link rewrites automatically

## Update content

- Personal info: `src/data/profile.ts`
- Per-role content: `src/data/roles/po.ts`, `pm.ts`, `ba.ts`, `cs.ts`, `uxui.ts`, `bd.ts`
- Add LinkedIn/GitHub URLs in `src/data/profile.ts` (marked as placeholders)
