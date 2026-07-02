The SEMERS OS action button — apple-green primary for the main action per screen, outline secondary, text ghost, red destructive.

```jsx
<Button variant="primary" icon="add">Создать заказ</Button>
<Button variant="secondary">Сохранить черновик</Button>
<Button variant="ghost">Все заказы</Button>
<Button variant="destructive" size="sm">Удалить</Button>
```

Use exactly one primary per view. `size="sm"` (34px) for filter rows and toolbars; default `md` (40px) for form footers and the top bar. `icon` takes any Material Symbols Outlined name.
