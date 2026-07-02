export const navDef = {
  top: [
    { key: 'command', label: 'Command Center', icon: 'space_dashboard' },
    { key: 'orders', label: 'Заказы', icon: 'receipt_long', badge: '12' },
  ],
  roles: [
    { key: 'warehouse', label: 'Кладовщик', icon: 'inventory_2', badge: '4' },
    { key: 'supply', label: 'Снабжение', icon: 'package_2', badge: '8', crit: true },
    { key: 'production', label: 'Производство', icon: 'factory' },
    { key: 'logistics', label: 'Логистика', icon: 'local_shipping' },
    { key: 'payments', label: 'Оплаты', icon: 'payments', badge: '€202k', crit: true },
  ],
  data: [
    { key: 'dataquality', label: 'Data Quality', icon: 'rule', badge: '76', crit: true },
    { key: 'clients', label: 'Клиенты', icon: 'groups' },
    { key: 'sku', label: 'SKU / Номенклатура', icon: 'category' },
    { key: 'uikit', label: 'Design System', icon: 'palette' },
    { key: 'settings', label: 'Настройки', icon: 'settings' },
  ],
};

export const crumbs = {
  command: ['space_dashboard', 'Command Center'],
  orders: ['receipt_long', 'Заказы'],
  warehouse: ['inventory_2', 'Кладовщик · диспетчер'],
  supply: ['package_2', 'Снабжение'],
  production: ['factory', 'Производство'],
  logistics: ['local_shipping', 'Логистика'],
  payments: ['payments', 'Оплаты и дебиторка'],
  dataquality: ['rule', 'Data Quality · Хранитель ИИ'],
  clients: ['groups', 'Клиенты'],
  sku: ['category', 'SKU / Номенклатура'],
  settings: ['settings', 'Настройки'],
  uikit: ['palette', 'Design System'],
};
