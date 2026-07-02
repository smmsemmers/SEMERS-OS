# SEMERS OS Design System

Design system for **SEMERS OS v1.0** — the operations platform for SEMERS, a premium
food manufacturer (meringue / pastila / zefir, lines like 35 г, 100 г, 180 г, AppLite).
SEMERS OS replaces a Google-Sheets workflow with one web app for orders, warehouse,
packaging supply, production, logistics, payments and data quality, on the path
Sheets → Claude/MCP → own web platform.

The system is **B2B operations + premium food manufacturing**: calm, premium, light,
uncluttered, desktop-first, Russian-language UI (system/technical entities may stay in
English where it helps UX).

## Sources
- `SEMERS OS.dc.html` — the production app (Design Component) and source of truth.
- Original spec docs: `SEMERS_регламент_системы`, `SEMERS_спецификации_дашбордов`,
  `SEMERS_анализ_и_план_автоматизации`, plus the order-form / clients / staff sheets
  (in `uploads/`). All sample data in the kit is drawn from these.

## Index / manifest
- `styles.css` — global entry (import this). `@import`s everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`,
  `shadow.css`, `fonts.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable primitives:
  - `forms/` — `Button`, `Input`, `Select`
  - `data/` — `KpiCard`, `StatusPill`, `Tag`
  - `feedback/` — `AlertBlock`
- `ui_kits/semers-os/` — full app recreation (`index.html`, `README.md`).
- `SKILL.md` — Agent-Skills entry point.

---

## CONTENT FUNDAMENTALS
- **Language:** Russian UI. Technical/system entities may stay English when clearer:
  `SKU`, `Data Quality`, `Command Center`, `Order ID`, `MCP`, `Top clients`.
- **Tone:** operational, direct, calm-urgent. Tells the user the *situation* and the
  *next action*, never decoration. Eyebrow labels frame each screen with a one-line
  mission, e.g. `ПУЛЬС КОМПАНИИ · 27 ИЮНЯ 2026`, `УПРАВЛЕНИЕ ПО ИСКЛЮЧЕНИЯМ`.
- **Voice:** third-person/imperative about the work ("Что нужно заказать сегодня",
  "Что горит сегодня", "Готов к сборке"), not "you". Headlines are nouns
  ("Красные флаги", "Снабжение"); subtitles are a single explanatory sentence.
- **Numbers:** always concrete and sourced — `€202.1k`, `−4.1%`, `покрытие 0.6 мес`,
  `335 из 925`. Money in `€`, thin-space thousands (`118 300`). Quantities in pcs/шт.
- **Casing:** Sentence case for titles and body; UPPERCASE only for mono eyebrow
  labels and table column heads (with wide tracking).
- **No emoji.** Status is shown with color + Material Symbols icons, never emoji.

## VISUAL FOUNDATIONS
- **Background:** warm cream `#F1EEE7` (never pure white app bg). Surfaces are white
  cards on cream. The sidebar is near-black warm `#23211C`; special dark cards
  (Data Quality KPIs, calculators) use `#2E2B25`.
- **Color = meaning:** apple green `#5C8A3F` = primary/norm, amber `#CC8A2C` =
  warning, red `#C7503F` = critical, slate-blue `#5E7A8C` = info/neutral. Each has a
  soft tint (`*-soft`) for pill/alert backgrounds and an ink shade for text on it.
  Beige/cream are quiet structural fills. Never use green as mere decoration —
  green means the number is genuinely healthy.
- **Type:** IBM Plex Sans for all text; IBM Plex Mono for numerics, IDs, barcodes,
  quantities, KPI values and eyebrow labels. Display 25/600 with `-0.3px` tracking;
  KPI values 25–26px mono with `-0.5px`.
- **Spacing:** 4px-based; KPI grids gap 12px, column layouts 18px, card padding
  ~18–20px, screen padding 26–30px, table cells ~13px vertical. Controls 38px,
  primary buttons 40px.
- **Corners:** inputs 8, buttons 9, KPI cards 12, panels/tables 14, modals 16,
  status pills/badges fully rounded (20).
- **Borders over shadows:** flat cards use a 1px `#E4DFD4` border and **no** shadow.
  Shadows appear only on floating layers — drawers (`-8px 0 30px rgba(0,0,0,.16)`)
  and modals (`0 24px 60px rgba(0,0,0,.28)`). Scrim `rgba(30,28,24,.38)`.
- **KPI card motif:** white card with a 3px left accent bar colored by tone, label +
  tone-colored icon on top, big mono value, muted sub line.
- **Tables:** white panel, `#FBFAF7` header row with uppercase mono-ish small caps,
  1px row dividers, mono for IDs/numbers (IDs in green), `StatusPill` in a status
  column, right chevron for drill-in rows.
- **Animation:** restrained. Drawer slides in (~0.26s ease-out), overlays fade
  (~0.2s). No bounce, no decorative motion. Content paints immediately.
- **Hover/press:** subtle — row hover lightens to `#FBFAF7`; buttons darken slightly
  via filter. Disabled = 0.5 opacity.
- **Imagery:** none required; the aesthetic is data + typographic. Charts are simple
  bar/coverage placeholders in apple/pastel green and slate.

## ICONOGRAPHY
- **Material Symbols Outlined** (Google Fonts), weight 300, optical size 20 — loaded
  via `tokens/fonts.css`. Rendered with `<span class="material-symbols-outlined">name</span>`
  or React `className="material-symbols-outlined"`. Sizes 14–24px, colored by tone.
- Status uses filled glyphs like `check_circle` / `error` / `cancel` in green/amber/red.
- **No emoji, no hand-drawn SVG icons.** The logo mark is a typographic "S" in an
  apple-green rounded square (see `guidelines/brand-marks.card.html`).

## CAVEATS / SUBSTITUTIONS
- **Fonts** are loaded from Google Fonts (IBM Plex Sans/Mono, Material Symbols), not
  self-hosted binaries. If you need offline/self-hosted fonts, provide the files and
  I'll swap `tokens/fonts.css` to `@font-face` rules.
- The UI-kit `index.html` embeds the production Design Component via iframe so it never
  drifts from the real app.
