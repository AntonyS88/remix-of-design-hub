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

## Final visual polish and release QA — 26 November 2026

- Restored the dedicated WorkEnglish homepage card asset at its native 1260:570 ratio. The case keeps its independent desktop hero and a 390:844 mobile source with matching intrinsic dimensions and a reserved responsive aspect ratio. No CLS measurement was available.
- Case evidence uses full-width, desktop/mobile, image-pair, mobile-sequence and design-system presentations; all 11 Forex gallery items and the existing lightbox remain. Remy and WorkEnglish platform metadata is Web / Mobile web, the video project is an iOS concept and Forex is mobile. WorkEnglish interface screenshots are not presented as evidence of design-system tokens. English-language WorkEnglish screenshots are still needed.
- Lightbox navigation preserves focus and returns it to the initiating control; pagination buttons are 44 CSS pixels. The Back to top control respects reduced motion and is removed from keyboard navigation while hidden. These are code and jsdom test results, not a complete assistive-technology audit.
- TypeScript and production build with GitHub Pages base path passed; ESLint had zero errors and 8 existing Fast Refresh warnings; 16 tests passed across 2 files; git diff --check passed. Existing React Router future-flag warnings and outdated Browserslist data remain.
- Tests cover four cases in RU/EN, case and live-product links, both resume routes, all 11 Forex captions, WorkEnglish mobile source attributes, lightbox focus/keyboard navigation and reduced-motion scrolling. They do not establish all-device behaviour.
- Direct production GitHub Pages URLs for the four existing cases opened in the browser. Google Docs RU/EN opened in the current signed-in browser session; access for unauthenticated visitors remains unverified. Telegram opened; complete external-link and social-crawler validation remain open.
- The local preview serves `og-image.jpg` as JPEG; its future production URL currently reaches the existing production 404 because this PR has not been deployed. Social crawler rendering remains unverified.
- Final viewport captures of all four cases: [Remy](docs/portfolio-final/remy-viewport.jpg), [WorkEnglish](docs/portfolio-final/workenglish-viewport.jpg), [AI Video](docs/portfolio-final/video-viewport.jpg), [Forex](docs/portfolio-final/forex-viewport.jpg). These show the current branch at approximately 1258 CSS px; they do not show full pages.
- In this pass the browser viewport override did not change the reported 1258 px width. Therefore final tablet/mobile viewport checks, mobile hero CLS and the full RU/EN/light/dark matrix are NOT VERIFIED. Prior phase screenshots do not certify this newer code.
- Lighthouse was unavailable and the earlier npm acquisition attempt did not finish; no additional installation was attempted during continuation. Scores and performance targets remain unmeasured.
- PR #5 is superseded by PR #6; do not merge it independently. No merge or deployment is authorized without visual approval.
