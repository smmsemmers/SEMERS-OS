# SEMERS OS — UI kit

A high-fidelity, click-through recreation of the SEMERS OS operations app: a single
web application for running a premium food-manufacturing business — production, orders,
warehouse, packaging, logistics, payments and data quality.

## Surfaces (in `../../SEMERS OS.dc.html`)
The app is built as one Design Component with a persistent shell (dark sidebar +
light top bar with search, period switcher, notifications, "Создать заказ") and an
in-app router that swaps screens:

- **Command Center** — owner pulse: 10 KPI tiles, red flags, revenue chart, top
  clients / managers, data-error panel, problem-orders table.
- **Кладовщик** — dispatcher: status tabs, readiness calculator, order table + right
  **order drawer** (composition, goods/packaging coverage, actions).
- **Снабжение** — packaging coverage, reorder points, "order today" alert.
- **Производство** — shift plan from the order queue, plan-vs-fact, deviations.
- **Логистика** — shipments, transport/docs readiness, directions, consolidation.
- **Оплаты** — AR ageing by client/segment.
- **Data Quality** — Хранитель ИИ: error queue prioritised by criticality.
- **Заказы / Клиенты / SKU / Настройки** — registry, canonical client directory,
  product catalogue, roles & MCP sources.
- **Design System** — in-app component reference.
- **Order intake modal** — full form with required-field validation, order
  composition table, "Проверить остатки", draft/submit states.

## How it composes the components
Tables use `StatusPill` (state) and `Tag` (attributes); every dashboard header is a
grid of `KpiCard`; urgent context uses `AlertBlock`; the order form uses `Input` /
`Select` with inline validation; all actions use `Button`.

## Note
`index.html` embeds the production Design Component directly so the kit always matches
the real app. The component primitives in `/components` are the extracted, reusable
versions of the same patterns.
