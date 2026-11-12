# Session Handoff

## Current Status
- **Standardization Across All Three Showcase Sites (`FilterStudio/`, `CentSweep/`, `Nightwell/`):**
  - **Filter Studio (`FilterStudio/` — Golden Master):**
    - Header Left (`.site-header-left`): Brand (`Filter Studio`), `← Portfolio` button, and section tabs (`Features`, `Screens`, `Overview`, `About`, `Support`, `Privacy`) side-by-side.
    - Top-down panel flow (`#panel-features { justify-content: flex-start; padding: 1.2rem 0; }`), banner attached at top directly under header, scrollable features list beneath.
    - Sticky blurred headers (`backdrop-filter: blur(16px); position: sticky; top: 0;`) for Screens, Overview, Support, and Privacy.
    - Canvas: iOS blue dashed border (`1.5px dashed rgba(76, 141, 255, 0.55)`), blank clean placeholder on open, clean reset on mouseleave.
    - QR standardized: "Scan to download" / "Сканируйте QR" across 6 languages.
    - Mobile Header (<= 640px): Brand name + `← Portfolio` visible in bar; section links inside hamburger drawer.
  - **CentSweep (`CentSweep/`):**
    - Standardized `.site-header-left` grouping brand, portfolio back button, and navigation tabs.
    - Top-aligned Features panel (`justify-content: flex-start; padding: 1.2rem 0;`).
    - Sticky blurred headers for Screens, Guide, Support, and Privacy.
    - Emerald dashed canvas card border (`1.5px dashed var(--canvas-card-border)`), blank clean initial state on load, clean reset on mouseleave.
    - Mobile Header (<= 640px): Brand name + `← Portfolio` visible in bar; section links inside hamburger drawer.
    - QR caption standardized to "Scan to download" / "Сканируйте QR".
  - **Nightwell (`Nightwell/`):**
    - Split screen ratios standardized to `44vw / 56vw`.
    - Standardized `.site-header-left` grouping brand, portfolio back button, and navigation tabs.
    - Top-aligned Work/Features panel (`justify-content: flex-start; padding: 1.2rem 0;`).
    - Multiline top alignment on interactive links (`align-items: flex-start; padding-top: 0.15rem;`).
    - Sticky blurred headers for Screens (`#panel-screens`), Support (`#panel-support`), and Privacy (`#panel-privacy`).
    - Dashed canvas card and caption border (`1.5px dashed rgba(200, 187, 170, 0.55)`), blank clean initial state on load, clean reset on mouseleave.
    - Mobile Header (<= 640px): Brand name + `← Portfolio` visible in bar; section links inside hamburger drawer.
    - QR caption standardized to "Scan to download" / "Сканируйте QR".

## Next Steps
1. User review and approval of the standardized layout across all 3 sites (`FilterStudio`, `CentSweep`, `Nightwell`) on Desktop, iPad, and Mobile.
2. Build neutral-grey `Project-Template/` based directly on the standardized Filter Studio golden master.
3. Commit and push to `dev/FeaturesUpdateAndAddNewFilterStudio`.

## Working Branch & Git State
- Working Tree: `/Users/hakobghlijyan/Library/Mobile Documents/com~apple~CloudDocs/Developer/GitHub/HakobGhlijyan.github.io`
- Branch: `dev/FeaturesUpdateAndAddNewFilterStudio`
