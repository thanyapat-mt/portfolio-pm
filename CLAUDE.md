# CLAUDE.md — portfolio-2026

## Stack
- **Vite + React + TypeScript** (SPA)
- **Tailwind CSS** for styling
- **React Router v6** for routing
- **Vercel** for deployment (`vercel.json` handles SPA rewrites)

## Commands
```
npm run dev        # start dev server at http://localhost:5173
npm run build      # typecheck + production build
npm run preview    # serve production build locally
npm run typecheck  # tsc only, no emit
```

## Key rules
1. **Content lives in `src/data/` — never hardcode text in components.**
   - Personal info → `src/data/profile.ts`
   - Per-role content → `src/data/roles/{po,pm,ba,cs,uxui,bd}.ts`
   - Role registry (slugs, accent colors) → `src/data/roles.ts`
2. Components in `src/components/` are generic — they receive role data as props and render it.
3. Accent colors drive theming per role. All accent Tailwind classes are defined in `src/data/roles.ts` under `accents`.

## Adding a new role
1. Create `src/data/roles/<slug>.ts` implementing `RolePortfolio` (see `src/types/portfolio.ts`)
2. Add the slug to `ROLES` and `ROLE_ORDER` in `src/data/roles.ts` with an `accent` config
3. The route `/your-slug` works automatically via `/:slug` in `App.tsx`

## Editing content
- To update personal info (name, email, phone, LinkedIn, GitHub): edit `src/data/profile.ts`
- To update content for a specific role: edit `src/data/roles/<slug>.ts`
- Each role file exports a `RolePortfolio` object with: `hero`, `summary`, `skillGroups`, `tools`, `experience`, `projects`, `highlights`
