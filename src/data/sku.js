import { pill } from '../theme';

export const skuRows = [
  { sku: '100г Классика', line: '100 г', fl: 'Классика', ship: '973 634', stock: '6 200', pack: 'ШБ новые', ver: 'актуальна', tone: 'ok' },
  { sku: 'Меренге 35г Классика', line: 'Меренге 35 г', fl: 'Классика', ship: '227 401', stock: '5 500', pack: 'Флоупак', ver: 'актуальна', tone: 'ok' },
  { sku: 'Меренге 35г Корица', line: 'Меренге 35 г', fl: 'Корица', ship: '88 200', stock: '1 200', pack: 'Флоупак', ver: 'актуальна', tone: 'warn' },
  { sku: 'Классика ШБ', line: '100 г', fl: 'Классика', ship: '—', stock: '0', pack: 'ШБ старая', ver: 'устарела — дубль', tone: 'crit' },
  { sku: 'AppLite 17г Ассорти', line: 'AppLite', fl: 'Ассорти', ship: '34 100', stock: '1 800', pack: 'Обечайка', ver: 'на нуле', tone: 'crit' },
  { sku: '180г LV Брусника', line: '180 г LV', fl: 'Брусника', ship: '12 400', stock: '1 500', pack: 'ШБ', ver: 'актуальна', tone: 'ok' },
].map((r) => {
  const cp = pill(r.tone);
  return { ...r, verBg: cp[1], verColor: cp[2] };
});
