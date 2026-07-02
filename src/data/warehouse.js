import { C } from '../theme';

export const whOrders = [
  {
    id: '2026-0001', cl: 'futurus food', date: '28.06 · завтра', goods: 'warn', pack: 'ok',
    status: 'short_goods', todo: 'Допроизвести Корицу 35г',
    comp: [
      { sku: 'Меренге 35г Классика', qty: 4000, stock: 5500, ok: true },
      { sku: 'Меренге 35г Корица', qty: 2000, stock: 1200, ok: false },
      { sku: '100г Классика', qty: 1500, stock: 6200, ok: true },
    ],
    packs: [
      { n: 'Обечайки Микс PL', need: 6000, stock: 9446, ok: true },
      { n: 'Гофрокороб 35г', need: 120, stock: 840, ok: true },
      { n: 'Стикеры LV', need: 7500, stock: 22000, ok: true },
    ],
    ready: '30.06 16:00', note: 'Сетевой заказ Maxima, ~300 магазинов. Раскладка по сети.',
  },
  {
    id: '2026-0014', cl: 'Tirgus Online', date: '27.06 · сегодня', goods: 'ok', pack: 'ok',
    status: 'ready', todo: 'Бронь транспорта',
    comp: [
      { sku: 'AppLite 17г Ассорти', qty: 300, stock: 1800, ok: true },
      { sku: '100г Вишня', qty: 150, stock: 900, ok: true },
    ],
    packs: [
      { n: 'Гофрокороб микс', need: 18, stock: 320, ok: true },
      { n: 'Стикеры LV', need: 450, stock: 22000, ok: true },
    ],
    ready: '27.06 14:00', note: 'Розница, мелкая сборка.',
  },
  {
    id: '2026-0033', cl: '3banani', date: '29.06', goods: 'ok', pack: 'crit',
    status: 'short_pack', todo: 'Заявка снабжению: Вишня',
    comp: [
      { sku: 'Меренге 35г Вишня', qty: 1200, stock: 3400, ok: true },
      { sku: 'Зефир Классика', qty: 600, stock: 2100, ok: true },
    ],
    packs: [
      { n: 'Обечайки Вишня', need: 1200, stock: 640, ok: false },
      { n: 'Гофрокороб 35г', need: 36, stock: 840, ok: true },
    ],
    ready: '01.07 (ждёт упаковку)', note: 'Упаковка Вишня на грани — 0.5 мес покрытия.',
  },
  {
    id: '2026-0040', cl: 'Arkadia Trade', date: '27.06 · сегодня', goods: 'ok', pack: 'ok',
    status: 'assembling', todo: 'Идёт сборка',
    comp: [
      { sku: '100г Классика', qty: 2400, stock: 6200, ok: true },
      { sku: '180г LV Брусника', qty: 400, stock: 1500, ok: true },
    ],
    packs: [
      { n: 'Гофрокороб 100г', need: 80, stock: 560, ok: true },
      { n: 'Стрейч', need: 4, stock: 60, ok: true },
    ],
    ready: '27.06 17:30', note: '',
  },
  {
    id: '2026-0051', cl: 'Rewers', date: '28.06 · завтра', goods: 'ok', pack: 'ok',
    status: 'today_check', todo: 'Проверить состав',
    comp: [{ sku: 'Меренге 35г Классика', qty: 1800, stock: 5500, ok: true }],
    packs: [{ n: 'Обечайки Классика PL', need: 1800, stock: 15719, ok: true }],
    ready: '29.06 12:00', note: 'Без названного владельца — уточнить.',
  },
  {
    id: '2026-0027', cl: 'Langino', date: '26.06', goods: 'ok', pack: 'ok',
    status: 'packed', todo: 'Ждёт машину',
    comp: [
      { sku: '100г Классика', qty: 3000, stock: 6200, ok: true },
      { sku: '100г Кедр', qty: 500, stock: 1826, ok: true },
    ],
    packs: [{ n: 'Гофрокороб 100г', need: 100, stock: 560, ok: true }],
    ready: '26.06 готов', note: 'Собран, ждёт транспорт на Германию.',
  },
];

export function whStatusMeta(k) {
  const m = {
    ready: ['Готов к сборке', C.greenSoft, C.greenInk],
    short_goods: ['Не хватает товара', C.redSoft, C.redInk],
    short_pack: ['Не хватает упаковки', C.amberSoft, C.amberInk],
    assembling: ['В сборке', C.slateSoft, C.slateInk],
    packed: ['Собран, не отгружен', C.greenSoft, C.greenInk],
    today_check: ['К проверке', C.cream, C.sub],
  };
  return m[k];
}

export const whTabDefs = [
  { k: 'all', label: 'Все', c: whOrders.length },
  { k: 'today_check', label: 'Сегодня', c: 2 },
  { k: 'tomorrow', label: 'Завтра', c: 3 },
  { k: 'ready', label: 'Готово к сборке', c: 1 },
  { k: 'short_goods', label: 'Не хватает товара', c: 1, crit: true },
  { k: 'short_pack', label: 'Не хватает упаковки', c: 1, warn: true },
  { k: 'assembling', label: 'В сборке', c: 1 },
  { k: 'packed', label: 'Собрано, не отгружено', c: 1 },
];
