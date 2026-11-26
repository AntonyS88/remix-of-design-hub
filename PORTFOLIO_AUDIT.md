# Portfolio audit

Baseline: production and `origin/main` at `3199be3`, inspected 2026-11-25. The audit uses observed browser states and repository evidence; it is not a substitute for usability research or an accessibility certification.

| Priority | Page / component | Evidence and problem | Why it matters | Recommendation |
| --- | --- | --- | --- | --- |
| P1 | Homepage / Selected Work | At 1440px the three secondary projects form two columns, leaving the right half of the final row empty (`02-work-gap-desktop.jpg`). | The final project looks isolated and the portfolio loses visual balance. | Let the final project span the row using the existing wide editorial card treatment. |
| P1 | CasePage / hero cover | During the WorkEnglish route load the next section appeared before the image; the image then expanded into the page. Source image lacks intrinsic width and height. | Late layout movement can disorient readers and harm CLS. | Provide real intrinsic image dimensions for every case cover. |
| P2 | Homepage / project cards | Remy and WorkEnglish card links lead only to the case. Live product links appear in case heroes, not in Selected Work. | A hiring lead or client needs an extra navigation step to try the product. | Add a separate, clearly labelled live-product link where a verified project URL exists. |
| P2 | Resume / PDF | `07-resume-desktop.jpg` shows a disabled Download PDF button; source confirms no PDF link is configured. | An unavailable action adds friction. | Request approved RU/EN PDF files before enabling download; do not manufacture documents. |
| P1 | Global / social preview | `index.html` references `og-image.png`, but the file is absent from `public/` and the production build. | Link previews may not display an image. | Use an existing approved portfolio image at a stable absolute URL; test social crawlers separately. |
| P2 | Case studies / evidence | Case pages explain process and role, but screenshots and copy do not establish measured outcomes, research samples or interview evidence. | A reviewer cannot assess external validation from the present materials alone. | Request actual artifacts and results; do not infer or invent them. |
| P2 | WorkEnglish / mobile case hero | `09-workenglish-mobile.jpg`: the full desktop screenshot fits the screen, but interface text is too small to read. | The product is less legible on a phone. | Prefer a verified mobile capture in a future iteration; retain the existing screenshot until one is approved. |
| P3 | Motion and accessibility | Baseline uses CSS transitions and a hero fade. Keyboard, reduced-motion and contrast were not comprehensively tested in this audit. | Visual inspection alone does not prove accessibility. | Use restrained motion with reduced-motion support and complete an assistive-technology review. |

## Captured flow

1. Homepage and Hero, desktop and mobile: clear positioning and primary work link.
2. Selected Work: four projects present; the final row has unused space.
3. Remy, WorkEnglish, AI Video Editor and Forex case heroes: all four routes opened in the browser.
4. Resume EN: Google Doc action present; PDF disabled.
5. WorkEnglish on mobile and light tablet: responsive layout visible; hero image detail is small on mobile.

## Evidence available for the four cases

| Case | Present in the portfolio | Further evidence needed before stronger claims |
| --- | --- | --- |
| Remy | Live-product CTA, focus/inbox/task screenshots and documented role, process and status. Its local project also contains `docs/design/DESIGN_SYSTEM.md`. | Approved token/variant/state examples, collaboration artifacts, and verified findings or outcomes. |
| WorkEnglish | Public-beta CTA; listening, feedback, mobile practice and reader screenshots; current/planned split. Its local source contains shared learning and UI components. | Approved current mobile screen, token/variant examples, and evidence for validation claims. |
| AI Video Editor | Identified as a concept; includes problem, research, solution, agentic flow and interface images. | Source and scope for research assertions; clarify what was tested and which artifacts can be shown. |
| Forex | Redesign narrative with JTBD, flow, wireframes, components, typography/colors and interface images. | Confirm source of audit/JTBD and any observed validation or handoff artifacts. |

The portfolio itself has semantic light/dark CSS variables and reusable UI components. Source files or screenshots alone do not establish that a design system was adopted by a team or delivered to developers.

Screenshots are in [docs/portfolio-audit](docs/portfolio-audit/) and are not evidence of business outcomes. The audit did not cover every page at every breakpoint and theme, every external link, assistive technologies, or measurable Core Web Vitals. Those checks remain open.

## Phase 2 review — 25 November 2026

- **Selected Work / P0 — addressed:** Forex no longer occupies an isolated full-width row; two featured products precede an equal pair of concept/redesign projects. Project types replace the duplicated Product Design tag. See [desktop](docs/portfolio-phase2/home-desktop.jpg) and [mobile](docs/portfolio-phase2/home-mobile.jpg).
- **Case narratives / P0 — partially addressed:** real images now sit beside the relevant problem, flow, decisions and interface details; project overview and next-project links were added. Additional validated outcomes, implementation evidence and token/handoff artifacts have not been supplied. See the four full-page case screenshots in `docs/portfolio-phase2`.
- **WorkEnglish / P1 — addressed for mobile:** a real mobile Sprint screenshot replaces the desktop hero on narrow screens, and the heading is smaller. [Mobile capture](docs/portfolio-phase2/workenglish-mobile.jpg).
- **Conversion / P1 — addressed:** removed the disabled PDF button; Google Docs links remain, and homepage contact copy addresses both employment and collaborations.
- **Motion / P1 — partially checked:** nested Hero animations removed; reduced-motion rules are present in source. OS-level reduced-motion emulation remains unverified.
- **QA / P1 — incomplete:** Lighthouse, full keyboard and contrast audits, all-page RU/EN and light/dark combinations and assistive technology remain unverified. Full-page screenshots may show sticky-header stitching artifacts. Do not treat them as proof of accessibility or performance.
- **PR overlap / P1:** draft PR #5 and #6 both modify the eight motion files. Do not merge both independently.

## Final polish follow-up — 26 November 2026

- **WorkEnglish card:** dedicated existing cover restored with matching container ratio. Mobile hero reserves its own 390:844 ratio; layout-shift measurement remains open.
- **Case presentation:** existing images are grouped by content and format; wide research, architecture, wireframes and Forex design-system artifacts use the available text-column width. English WorkEnglish product screenshots remain unavailable in this repository.
- **Lightbox and motion:** focus retention and restoration have regression tests; pagination targets are 44 px in code. Reduced-motion scrolling has a unit test, but system/browser emulation and physical touch testing are outstanding.
- **Release gate remains incomplete:** current viewport control did not change the measured browser width, so final responsive viewport matrix is not established. Lighthouse is unavailable; social preview on production and public access to resume documents need verification after release.
