The urgent callout banner — "Что нужно заказать сегодня", "Что горит сегодня", red-flag rows. Tone sets color + default icon.

```jsx
<AlertBlock tone="crit" title="Что нужно заказать сегодня — 4 критичные позиции"
  action={<Button variant="destructive" size="sm">Сформировать заявку</Button>}>
  Обечайки Микс PL — покрытие 0.6 мес, срок 50 дней. Нужно ~38 000.
</AlertBlock>
```

Reserve `crit` for things that need action today. `action` is typically a Button.
