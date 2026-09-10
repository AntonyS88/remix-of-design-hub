# Design QA

- Source visual truth: in-app browser capture of the pre-iteration portfolio at `http://127.0.0.1:8080/`, captured in this task before implementation.
- Implementation evidence: in-app browser captures of the current local build at `http://127.0.0.1:8080/`, `/case/mobile-app-concept`, `/resume/ru`, `/resume/en`, and `/missing-page`.
- Viewports: 1440 × 1000, 1024 × 900, 768 × 900, and 390 × 844 CSS pixels at browser density 1.
- States: light and dark themes; Russian and English; desktop navigation, mobile menu, case gallery, and lightbox.

## Full-view comparison

The existing typography-first direction remains the visual source of truth. The updated implementation preserves the large name, restrained portrait, violet CTA, neutral surfaces, and real case imagery while tightening the shared container, section rhythm, and case-study hierarchy.

## Focused-region comparison

- Hero: the name remains the primary element; the portrait stays secondary and disappears below the desktop breakpoint. Text wrapping and CTA order remain stable across the tested widths.
- Selected Work: the previous four-project layout produced an unbalanced final full-width card. The current layout intentionally presents one featured case and two equal secondary cases.
- Case hero and gallery: the previous header left too much separation between title, metadata, and cover. The revised header forms one compact 12-column composition, and captioned case images now appear as a single large reading sequence.
- Resume and 404: both now share the same container, eyebrow, spacing, focus, and theme behavior as the rest of the portfolio.

## Required fidelity surfaces

- Fonts and typography: Inter, weights, language-specific copy, display tracking, and readable body measures are preserved. No font substitution was introduced.
- Spacing and layout rhythm: one 1280 px maximum container and one responsive section-space token are used across the primary pages. No horizontal overflow was detected at any tested width.
- Colors and tokens: the existing semantic light/dark palette and violet accent remain unchanged. Radius tokens were reduced to support the editorial direction.
- Image quality: all existing source images and crops are preserved. Project covers use `object-contain` only where the case declares its own aspect ratio; gallery images remain uncropped.
- Copy and content: existing RU/EN content, case data, routes, role, period, outcome, contacts, and resume links remain intact.

## Comparison history

1. P2 — selected work became visually unbalanced with four projects and an orphan full-width final card. Fixed by curating the homepage to one featured and two secondary projects while preserving all case routes and data. Post-fix evidence: 1440 px and 390 px Selected Work captures.
2. P2 — case-study opening lacked a compact relationship between title, metadata, outcome, and cover. Fixed with a tighter 12-column header and reduced vertical gaps. Post-fix evidence: 1440 px and 390 px mobile-video case captures.
3. P2 — page families used similar but independently specified widths and spacing. Fixed with shared `layout-shell`, `section-space`, `section-heading`, and `eyebrow` primitives. Post-fix evidence: homepage, Resume RU/EN, case, and 404 captures.

No actionable P0, P1, or P2 findings remain. A P3 performance consideration remains: Inter is still loaded from Google Fonts to avoid a visual type change during this iteration.

## Interaction and accessibility checks

- Mobile navigation opens, exposes all destinations and theme/language controls, closes after navigation, and scrolls to the selected section.
- Case lightbox opens with focus on Close, exposes previous/next controls and gallery position buttons, and preserves descriptive image alternatives.
- Focus-visible states remain present on navigation, links, buttons, project cards, language controls, and gallery controls.
- `prefers-reduced-motion` now disables nonessential animation and smooth scrolling.
- Fresh page loads showed no runtime errors; Vite displayed only existing React Router future-flag warnings.

final result: passed
