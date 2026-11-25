# Portfolio improvements and handoff

## Implemented

- Selected Work retains Remy, WorkEnglish, AI Video Editor and Forex. The last project spans the desktop row, removing the unused half-row; its real cover remains fully visible.
- Remy and WorkEnglish have separate, clearly named live-product links, alongside their case links. Cards show the role recorded in each case, without adding new claims.
- Every existing case hero image now declares its actual intrinsic dimensions. This reserves space before the image loads; it does not by itself prove a passing CLS score.
- Replaced a missing social-preview image reference with a stable absolute URL to the existing approved portrait. Social-platform rendering has not been independently verified.
- The existing Magic UI-inspired motion work from draft PR #5 was reused: restrained entrances, hover feedback and reduced-motion CSS. The MIT notice is included and no dependencies were added.
- No case facts, screenshots, analytics, routes or product status claims were invented or removed.

## Evidence and review

- [Before: final project isolated in half a row](docs/portfolio-audit/02-work-gap-desktop.jpg)
- [After: final project fills the row](docs/portfolio-audit/11-after-work-desktop.jpg)
- [After: mobile project layout](docs/portfolio-audit/12-after-work-mobile.jpg)
- [WorkEnglish mobile case](docs/portfolio-audit/09-workenglish-mobile.jpg)

The screenshots document selected states, not the full breakpoint/theme/page matrix. The desktop before and after screenshots use different language settings; compare layout rather than translated copy.

## Outstanding / user input

- Provide approved RU and EN resume PDFs if the disabled PDF actions should become available.
- Provide verified research artifacts, constraints, design-system handoff examples and outcomes for individual projects before adding claims to the case studies.
- Provide an approved current mobile WorkEnglish screenshot if the mobile hero should show larger legible UI without cropping the desktop screen.
- Complete Lighthouse before/after under identical conditions; Performance, Accessibility, SEO and CLS targets are not established by these changes.
- Complete all-page and all-theme screenshots, external-link checks, keyboard-only navigation, assistive-technology, contrast, reduced-motion emulation and before/after visual regression. No accessibility certification is implied.
- The new branch contains the previously prepared motion changes from PR #5. Review the overlap before merging either PR; neither was merged or deployed as part of this work.

## Checks and size

- TypeScript: passed. ESLint: 0 errors, 8 existing Fast Refresh warnings. Vitest: 1 existing test passed. `git diff --check`: passed.
- Production build with `VITE_BASE_PATH=/remix-of-design-hub/`: passed. Browserslist reported an outdated data warning; dependencies were not updated.
- Vite main JS: 251.06 kB before → 253.26 kB after; CSS: 88.99 kB → 90.01 kB, before compression. These are build sizes, not user transfer or Lighthouse measurements.
- Browser sample: 360/390/768/1024/1280/1440/1920 widths on the WorkEnglish case without horizontal overflow; WorkEnglish gallery opens and closes with Escape. RU/EN, light/dark and desktop/mobile were sampled during baseline and local review.
- Lighthouse was not available in the local environment. Performance, Accessibility, SEO, LCP and CLS are therefore not measured and target scores cannot be claimed.
