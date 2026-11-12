# Session Handoff

## Current Status
- **Synchronized Standardization Across All Three Showcase Sites (`FilterStudio/`, `CentSweep/`, `Nightwell/`):**
  - **Centered Header Navigation (`.site-header-center`):**
    - The navigation group — starting from the `← Portfolio` button through all section tabs (`Features`, `Screens`, `Overview`/`Screenshots`, `About`, `Support`, `Privacy`) — is strictly centered horizontally across the header on all 3 sites (`position: absolute; left: 50%; transform: translateX(-50%);`).
    - Left side retains `.site-header-left` (App Icon + App Name).
    - Right side retains `.site-actions` (App Store / Coming Soon button, language selector, hamburger menu).
    - Responsive mobile (<= 640px): Brand name and `← Portfolio` button stay visible next to each other on the left; all section tabs open via the hamburger menu.
  - **Right-Aligned Banner QR Code (`.live-qr`):**
    - On all 3 sites, `.live-card` has `justify-content: space-between; gap: 1.2rem;` and `.live-text` has `flex: 1;`.
    - `.live-qr` is pinned to the right (`margin: 0 0 0 auto; text-align: right; align-items: flex-end;`). The QR image and caption text are strictly right-aligned, preventing any horizontal jitter or shifting when toggling languages.
  - **Header & Section Typography Standardized in Nightwell:**
    - Standardized Nightwell's header fonts: `.site-brand` uses `var(--font-serif); font-size: 1.15rem; font-weight: 800;`, `.portfolio-back-link` uses `var(--font-mono); font-size: 0.68rem; font-weight: 400;`, `.site-nav-tabs a` uses `var(--font-sans); font-weight: 500; font-size: 0.76rem;`, `.site-nav-tabs a.nav-active` uses `font-weight: 600;`, `.header-appstore-btn` and `.lang-btn` use `var(--font-mono); font-size: 0.68rem; font-weight: 400;`. Eliminated oversized/heavy Playfair and bold weights in Nightwell's header.
    - Standardized section titles and eyebrows in Nightwell's About, Support, and Privacy: `.about-headline`, `.contact-headline` now use `clamp(1.4rem, 2.3vw, 2.1rem); font-family: var(--font-serif); font-weight: 700;` (reduced from `clamp(1.8rem, 3vw, 2.8rem); font-weight: 800;`), and `.about-label`, `.contact-label` use `0.68rem; font-family: var(--font-mono); font-weight: 400; letter-spacing: 0.14em; color: var(--accent); margin-bottom: 0.6rem;`, matching FilterStudio and CentSweep exactly.
  - **All Collapsible Sections Default to Closed:**
    - Across all 3 sites, all `<details class="faq-card">` and `<details class="policy-card">` in Support and Privacy start closed (all `open` attributes removed). Users open whichever section they choose via the `+` button.

## Next Steps
1. User verification of the 3 synchronized sites on Live Server (Desktop, iPad, Mobile).
2. Create neutral-grey `Project-Template/` using this identical, rock-solid architecture.
3. Commit and push to `dev/FeaturesUpdateAndAddNewFilterStudio`.

## Working Branch & Git State
- Working Tree: `/Users/hakobghlijyan/Library/Mobile Documents/com~apple~CloudDocs/Developer/GitHub/HakobGhlijyan.github.io`
- Branch: `dev/FeaturesUpdateAndAddNewFilterStudio`
