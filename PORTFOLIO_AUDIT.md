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
