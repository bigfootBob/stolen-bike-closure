# WCAG 2 AA Audit Report — Stolen Bike Closure

**Audited:** March 27, 2026
**Tool:** axe-core 4.11.1
**Standard:** WCAG 2.0 AA (2A + 2AA rule sets)
**Pages tested:** 9 routes (`/`, `/grief-counseling`, `/karma-chronicles`, `/recovery-merch`, `/submit-story`, `/build-story`, `/online-medium`, `/obituary-templates`, `/grief-articles`)

---

## Summary

| Result | Count |
|---|---|
| Violations (failures) | 9 (one per page) |
| Needs manual review | 2 pages |
| Passes | 10–18 rules per page |

**All violations fall into a single rule: `color-contrast` (WCAG 1.4.3).** No structural, semantic, keyboard navigation, or ARIA issues were found.

---

## Violations

### 1. Framer Motion opacity fade-in — all sub-pages

**Rule:** 1.4.3 Contrast (Minimum) — *Serious*
**Affected pages:** All 8 sub-pages
**Detected contrast ratios:** 1.06:1 – 1.71:1 (required: 3:1 for large text, 4.5:1 for body text)
**Root cause:** `motion.main` in `Layout.jsx` used `initial={{ opacity: 0 }}`. Because axe-core scans the DOM immediately on page load, it captures elements while the animation is still running — effectively at near-zero opacity. Text that is visually transparent is treated as having the same color as its background, producing a near-1:1 contrast ratio.

Some elements were flagged as **1:1 contrast** (literally invisible during the scan), which placed them in axe's "needs review" category on the Grief Counseling and Karma Chronicles pages.

**Fix applied — `src/components/Layout.jsx`:**

```jsx
// Before
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}

// After
initial={{ y: 20 }}
animate={{ y: 0 }}
exit={{ y: -20 }}
```

The slide-in animation is preserved; the opacity fade is removed. All text remains fully opaque at all times, eliminating the contrast failure across all sub-pages.

---

### 2. Footer disclaimer — home page

**Rule:** 1.4.3 Contrast (Minimum) — *Serious*
**Element:** `<p class="footer__disclaimer">`
**Detected contrast:** 2.43:1 (required: 4.5:1 — small text at 12px/9pt)
**Root cause:** The `.footer__disclaimer` rule in `Layout.scss` applied `opacity: 0.6` to text already using the muted color variable (`--color-text-muted: #5a6c7d`). At 60% opacity over the off-white background (`#fdfdf9`), the effective rendered color becomes `#9ba6af` — well below the 4.5:1 threshold.

**Fix applied — `src/styles/Layout.scss`:**

```scss
// Before
&__disclaimer {
  margin-top: 0.5rem;
  font-size: 0.75rem !important;
  opacity: 0.6;
}

// After
&__disclaimer {
  margin-top: 0.5rem;
  font-size: 0.75rem !important;
  /* opacity removed — full color #5a6c7d achieves ~4.9:1 contrast */
}
```

`--color-text-muted` (`#5a6c7d`) at full opacity achieves approximately **4.9:1** contrast against `#fdfdf9`, which passes WCAG AA for small text.

---

## What Passed

The codebase is otherwise well-structured from an accessibility standpoint. Passing checks across all pages included:

- **aria-required-children / aria-required-parent** — ARIA roles used correctly
- **button-name** — All buttons have accessible names (including the icon-only nav buttons in GriefCounseling which use `aria-label`)
- **document-title** — Pages have titles
- **duplicate-id** — No ID collisions
- **html-has-lang** — `<html lang>` attribute present
- **image-alt** — Images have alt text
- **label** — Form inputs are properly labelled
- **link-name** — Links have discernible text
- **list / listitem** — List semantics are correct
- **region** — Content is contained within landmark regions
- **tabindex** — No inappropriate tabindex values

The `aria-current="page"` implementation on the active nav link in `Layout.jsx` is a nice touch and was flagged as passing.

---

## Recommendations (not violations)

These are not WCAG failures but worth considering for a more robust experience:

- **Reduced motion:** Add a `prefers-reduced-motion` media query to skip or shorten the page transition animation. Users who prefer reduced motion may still find a sliding animation jarring.
- **Focus indicator:** The `:focus-visible` outline in `global.scss` uses `--color-accent` (`#333333`) — adequate but could be more prominent (e.g., offset 2px with a thicker outline) for users navigating by keyboard.
- **`<main>` landmark:** The `motion.main` element renders as a `<main>` landmark, which is correct — no action needed, just confirming it is semantically sound.

---

*Audit performed using axe-core against the production preview build (`vite preview`).*
