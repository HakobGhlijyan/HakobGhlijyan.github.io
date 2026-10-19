# Session Handoff

## Current Status
- **Video Playback & Mockup Architecture (`BalanceCleaner/assets/video/`, `BalanceCleaner/assets/split-style.css`, `BalanceCleaner/assets/main.js`):**
  - **FastStart MP4 Streaming**: All 4 device videos (`Screenshot-iPhone-16-Pro-0.mp4`, `17`, `18-Pro`, `SE`) remuxed with `ffmpeg -c copy -movflags +faststart`. The `moov` atom is at byte 0, enabling instant Safari streaming even on basic static servers without HTTP 206 Byte-Range support.
  - **WebKit Blank Video Fix**: Removed CSS `-webkit-mask-image` (which caused WebKit to render 0% opacity upon any mask asset glitch). Mockup screens now use CSS `border-radius: var(--vid-radius, 40px); overflow: hidden;` underneath the transparent bezel overlay (`z-index: 2`).
  - **Centered Controls & Sound Toggle Removal**: Per user request, sound buttons were removed since screen recordings have no audio. The `.mockup-play-btn` is now prominently centered (`z-index: 10`) and tap-to-toggle operates seamlessly.
  - **Overview (Guide) Video Integration**: Added a 5th card to `.guide-cards` for the iPhone 18 Pro video walkthrough (`guide-video`). The right canvas switches dynamically between the 4 step screenshots and the interactive video mockup. In `main.js`, switching to Overview automatically selects step 1.
- **Apple Branding & Badges:**
  - **Official Apple Logo in Header**: Integrated user's `apple.logo@1x.png` into `.header-appstore-btn` on both `BalanceCleaner/index.html` and `Nightwell/index.html`.
  - **App Store Badge Border Radius**: Removed `border-radius` (set to `0`) across `split-style.css` and `style.css` on `.app-store-badge-img` and `.app-store-badge-link img` to preserve Apple's official badge geometry.
- **Portfolio Main Page (`index.html`, `css/style.css`):**
  - **"Apps on the App Store" Section (`#apps`)**:
    - 6 curated app cards with custom squircle icons, category tags, official Apple App Store badge links, and links to web showcases (`Balance Cleaner`, `Nightwell`, `Project 03`–`06`).
- **Features Panel Nightwell Alignment & Media Verification**:
  - All 6 feature slides, 4 guide slides + 1 video slide, and dual-cover About canvas verified with 0 broken links.

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **FastStart MP4 Remuxing**: Essential for WebKit/Safari to stream MP4 without buffering the entire file first.
2. **Pure CSS Radius vs Mask**: CSS `border-radius: 40px` inside the bezel frame guarantees 100% reliable rendering across all browsers without external PNG mask dependencies.
3. **Overview Dynamic Canvas**: Converted Overview from a static cover context to an interactive card-driven canvas, enabling the user to inspect each step screenshot and play the iPhone 18 Pro demo video side-by-side.
4. **App Store Badge Geometry**: Apple's official SVG already includes exact rounded corners (`rx="8"`). Additional CSS border-radius was removed to eliminate double-rounding distortion.

## Proposed File Deletions (Pending User Approval)
- `BalanceCleaner/assets/site.css` (legacy multi-page styles)
- `BalanceCleaner/assets/responsive.css` (legacy responsive styles)
- `BalanceCleaner/assets/theme-fixes.css` (legacy theme override)
- `BalanceCleaner/device-preview.html` (legacy standalone preview)
- `BalanceCleaner/preview.html` (legacy preview page)
- `BalanceCleaner/assets/translations/` (embedded into `main.js`)
- `BalanceCleaner/assets/app-store/` (superseded by official assets)
- `BalanceCleaner/tools/make_screen_masks.py` (offline build tool)
- `BalanceCleaner/update_js_dict.py` (offline build tool)
- `assets/profile.jpeg` & `assets/profile.png` (superseded by `profile.webp`)
