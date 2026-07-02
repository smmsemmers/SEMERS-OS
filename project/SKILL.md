---
name: semers-design
description: Use this skill to generate well-branded interfaces and assets for SEMERS OS, the premium food-manufacturing operations platform — either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and the UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`styles.css` + `tokens/` for the design tokens, `components/` for reusable primitives,
`ui_kits/semers-os/` for the full app recreation, `guidelines/` for specimen cards).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and
create static HTML files for the user to view, linking `styles.css` for tokens. If
working on production code, copy assets and read the rules here to become an expert in
designing with the SEMERS OS brand.

Core rules to honor: warm cream background, apple-green primary, color carries meaning
(green=norm, amber=warning, red=critical, slate-blue=info), IBM Plex Sans + Mono (mono
for all numerics/IDs), borders over shadows, Material Symbols Outlined icons, no emoji,
Russian-language UI with English allowed for system entities.

If the user invokes this skill without other guidance, ask what they want to build,
ask a few questions, and act as an expert designer who outputs HTML artifacts or
production code depending on the need.
