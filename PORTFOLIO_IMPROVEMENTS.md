# Portfolio improvements and handoff

## Implemented

- Selected Work now presents Remy and WorkEnglish as consecutive featured projects, followed by equal AI Video Editor and Forex cards; mobile is a single column. Real images are contained rather than stretched, project types replace duplicate Product Design tags, and both live products retain separate links.
- Remy and WorkEnglish have separate, clearly named live-product links, alongside their case links. Cards show the role recorded in each case, without adding new claims.
- Every existing case hero image now declares its actual intrinsic dimensions. This reserves space before the image loads; it does not by itself prove a passing CLS score.
- Replaced a missing social-preview image reference with a stable absolute URL to the existing approved portrait. Social-platform rendering has not been independently verified.
- The existing Magic UI-inspired motion work from draft PR #5 was reused: restrained entrances, hover feedback and reduced-motion CSS. The MIT notice is included and no dependencies were added.
- Case images and their existing captions are grouped beside the problem, process, decisions and interface system. The shared template adds an overview, role, project type/status, platform and next-project navigation. Existing case facts and product status claims remain; analytics and routes are unchanged.
- The hero is shorter and offers a contact link; nested title and signature animations were removed. Capabilities and process steps link to concrete cases. The inactive PDF action was removed while Google Docs remain available.
- WorkEnglish uses its existing mobile Sprint screenshot as its mobile hero; desktop retains the full Practice screenshot.

## Evidence and review

- [Before: final project isolated in half a row](docs/portfolio-audit/02-work-gap-desktop.jpg)
- [Phase 2: complete homepage, desktop](docs/portfolio-phase2/home-desktop.jpg) and [mobile](docs/portfolio-phase2/home-mobile.jpg)
- [Remy desktop](docs/portfolio-phase2/remy-desktop.jpg) / [mobile](docs/portfolio-phase2/remy-mobile.jpg); [WorkEnglish desktop](docs/portfolio-phase2/workenglish-desktop.jpg) / [mobile](docs/portfolio-phase2/workenglish-mobile.jpg)
- [AI Video desktop](docs/portfolio-phase2/video-desktop.jpg) / [mobile](docs/portfolio-phase2/video-mobile.jpg); [Forex desktop](docs/portfolio-phase2/forex-desktop.jpg) / [mobile](docs/portfolio-phase2/forex-mobile.jpg)
- [WorkEnglish mobile case](docs/portfolio-audit/09-workenglish-mobile.jpg)

The screenshots document selected states, not the full breakpoint/theme/page matrix. The desktop before and after screenshots use different language settings; compare layout rather than translated copy.

## Outstanding / user input

- Provide approved RU and EN resume PDFs if download actions should be added.
- Provide verified research artifacts, constraints, design-system handoff examples and outcomes for individual projects before adding claims to the case studies.
- Confirm whether the existing mobile Sprint screen is the preferred WorkEnglish hero on mobile.
- Complete Lighthouse before/after under identical conditions; Performance, Accessibility, SEO and CLS targets are not established by these changes.
- Complete all-page and all-theme screenshots, external-link checks, keyboard-only navigation, assistive-technology, contrast, reduced-motion emulation and before/after visual regression. No accessibility certification is implied.
- The new branch contains the previously prepared motion changes from PR #5. Review the overlap before merging either PR; neither was merged or deployed as part of this work.

## Checks and size

- TypeScript: passed. ESLint: 0 errors, 8 existing Fast Refresh warnings. Vitest: 1 existing test passed. `git diff --check`: passed.
- Production build with `VITE_BASE_PATH=/remix-of-design-hub/`: passed. Browserslist reported an outdated data warning; dependencies were not updated.
- Vite main JS: 251.06 kB before → 253.26 kB after; CSS: 88.99 kB → 90.01 kB, before compression. These are build sizes, not user transfer or Lighthouse measurements.
- Browser sample: 360/390/768/1024/1280/1440/1920 widths on the WorkEnglish case without horizontal overflow; WorkEnglish gallery opens and closes with Escape. RU/EN, light/dark and desktop/mobile were sampled during baseline and local review.
- Lighthouse was not available in the local environment. Performance, Accessibility, SEO, LCP and CLS are therefore not measured and target scores cannot be claimed.

## Phase 2 QA notes

- Full-page screenshots captured at desktop 1440 and mobile 390 after scrolling to load images. Some full-page captures contain sticky-header stitching artifacts; they document layout, not pixel-perfect browser output.
- RU/dark and EN/light were sampled; all four case pages and the homepage at mobile 390 had no horizontal overflow. EN/light WorkEnglish was inspected on mobile. This is not a complete language/theme matrix.
- Keyboard focus was sampled on the language/navigation controls. Reduced-motion CSS and smooth-scroll guards exist, but OS-level reduced-motion emulation and comprehensive keyboard/contrast testing remain outstanding.
- Lighthouse was not available locally; an attempt to acquire it did not finish. No before/after scores or CLS are claimed.
- Draft PR #5 and PR #6 overlap in all eight motion files. Do not independently merge both; reconcile or close the superseded PR after visual approval.
- The case structure associates existing evidence with decisions. A separate complete validation narrative, detailed token/handoff documentation and verified research or outcomes still require source material.

- Phase 2 browser interaction: WorkEnglish image lightbox opened, Escape closed it, and next-project navigation reached the video case at the top. A sampled focus transition was checked; this does not establish full keyboard coverage.
- Sampled normal-text contrast from computed colors against the page background: light approximately 4.86:1, dark approximately 5.42:1. This does not cover every foreground/background combination.
- Latest phase 2 production build: main JS 255.03 kB (85.52 kB gzip), CSS 89.46 kB (15.44 kB gzip); build-size comparison is not a Lighthouse or real-user performance test.
