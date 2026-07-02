The metric tile at the top of every role dashboard. Mono value, left accent bar colored by tone, optional icon + sub line.

```jsx
<KpiCard label="Зависшая дебиторка" value="€202.1k" sub="€48k > 90 дней" tone="crit" icon="account_balance_wallet" />
<KpiCard label="Заказы сегодня" value="14" sub="8 готовы · 6 в сборке" tone="ok" icon="today" />
```

Lay out in CSS grid (`repeat(5,1fr)` or `repeat(6,1fr)`, gap 12px). Tone is meaning, not style — green only when the number is genuinely healthy.
