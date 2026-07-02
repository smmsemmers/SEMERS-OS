Labelled text field with inline validation — the standard input for the order-intake form and all SEMERS OS forms.

```jsx
<Input label="Клиент" required value="futurus food" />
<Input label="Менеджер" required error="Обязательное поле — назначьте владельца" placeholder="Не выбран" />
<Input label="Плановая отгрузка" icon="calendar_today" value="28.06.2026" />
<Input label="Order ID" readOnly value="2026-0001" />
```

Pass `error` to show the red border + message row (validation state). `readOnly` renders the beige fill for system-generated values.
