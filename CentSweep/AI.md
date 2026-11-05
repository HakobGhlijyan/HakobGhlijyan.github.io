# Instructions for AI Assistants (AI.md)

Welcome! If you are an AI reading this, here are the critical rules and structure of this project:

## Architecture Rules
1. **Vanilla Only**: Do NOT introduce React, Vue, Tailwind, jQuery, or any build step (Webpack/Vite). The project must remain pure HTML/CSS/JS.
2. **i18n System**: Localization is handled in `assets/main.js` via the `dictionaries` object and `assets/translations/*.json`.
   - Elements with `data-i18n="key"` will have their `.innerHTML` replaced automatically.
   - When adding new text to the HTML, ALWAYS add a `data-i18n` attribute and update the dictionaries in `main.js` for all languages (`en`, `ru`, `fr`, `de`, `es`, `it`, `hy`).
3. **Theming**: The site supports light and dark modes. Use CSS variables defined in `:root` inside `site.css` (e.g., `var(--bg)`, `var(--text)`). Do not hardcode `#000` or `#fff` for layout elements.

## Design Guidelines
- **Kinetic FAQ**: The FAQ uses a Flexbox accordion where the opened item expands to 100% width. Do not revert this to a standard vertical list.
- **Theme Transition**: The theme switch uses a `theme-blur` class applied to the `body` to create a smooth crossfade + blur effect. Do not use JS overlays.
- **Borders & Dividers**: Keep the UI clean. Use the 60px wide, 4px thick pill divider (`.section:not(:last-child)::after`) instead of full-width borders.

## Editing Code
- Be careful with `assets/main.js`. It contains sensitive initialization logic (Coverflow, ScrollSpy, i18n). Avoid syntax errors.
