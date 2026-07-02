import { C } from '../theme';

export const formComp = [
  { sku: 'Меренге 35г Классика', bc: '4607...0012', variant: 'Классика', qty: '4 000', pack: 'Флоупак', lang: 'LV', stick: 'LV', show: '8', ok: true, stock: '5 500', note: '—' },
  { sku: 'Меренге 35г Корица', bc: '4607...0029', variant: 'Корица', qty: '2 000', pack: 'Флоупак', lang: 'LV', stick: 'LV', show: '8', ok: false, stock: '1 200', note: 'не хватает 800' },
  { sku: '100г Классика', bc: '4607...0103', variant: 'Классика', qty: '1 500', pack: 'ШБ новые', lang: 'LV', stick: '—', show: '12', ok: true, stock: '6 200', note: '—' },
].map((r) => ({ ...r, mark: r.ok ? 'check_circle' : 'error', mc: r.ok ? C.green : C.red, qtyBorder: r.ok ? '#E1DBCE' : '#E8A99D' }));
