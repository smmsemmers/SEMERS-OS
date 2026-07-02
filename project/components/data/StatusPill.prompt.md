The state chip that appears in every table — order status, payment status, coverage, data-quality state. Tone maps to meaning, never to decoration.

```jsx
<StatusPill tone="ok">Готов к сборке</StatusPill>
<StatusPill tone="warn">Не хватает упаковки</StatusPill>
<StatusPill tone="crit">Просрочка отгрузки</StatusPill>
<StatusPill tone="info">В сборке</StatusPill>
<StatusPill tone="neutral">Выполнен</StatusPill>
```

Keep labels short (1–3 words). Use `neutral` for terminal/archival states that need no attention.
