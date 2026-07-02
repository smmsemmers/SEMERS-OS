import { C, pill, kpiTone, flagTone, miniTone } from '../theme';

export const kpis = [
  { label: 'Заказы сегодня', val: '14', sub: '8 готовы · 6 в сборке', tone: 'ok', icon: 'today' },
  { label: 'Заказы завтра', val: '11', sub: '2 ждут товар', tone: 'info', icon: 'event_upcoming' },
  { label: 'Просроченные отгрузки', val: '3', sub: 'Beryozka, Leis, Rewers', tone: 'crit', icon: 'running_with_errors' },
  { label: 'Новые заказы', val: '5', sub: 'за последние 24ч', tone: 'info', icon: 'fiber_new' },
  { label: 'Заказы с проблемами', val: '7', sub: 'нехватка / данные', tone: 'warn', icon: 'report_problem' },
  { label: 'Заказы без оплаты', val: '254', sub: 'из 623 выполненных', tone: 'crit', icon: 'money_off' },
  { label: 'Сумма заказов / месяц', val: '€118.3k', sub: 'июнь 2026 · +9% м/м', tone: 'ok', icon: 'euro' },
  { label: 'Зависшая дебиторка', val: '€202.1k', sub: '€48k > 90 дней', tone: 'crit', icon: 'account_balance_wallet' },
  { label: 'Дефицит товара (SKU)', val: '2', sub: 'Корица 35г, Вишня', tone: 'warn', icon: 'inventory' },
  { label: 'Дефицит упаковки', val: '8', sub: '5 позиций на нуле', tone: 'crit', icon: 'package_2' },
].map((k) => ({ ...k, ...kpiTone(k.tone) }));

export const flags = [
  {
    sev: 'crit',
    title: 'Обечайки Микс PL — покрытие 0.6 мес',
    desc: 'Остаток 9 446 при расходе ~15 000/мес, срок изготовления 50 дней. Нужно ~38 000 уже сейчас.',
    act: 'Заявка поставщику',
    to: 'supply',
  },
  {
    sev: 'crit',
    title: '€202k выручки без отметки оплаты',
    desc: '254 завершённых заказа из 623 (26%) — невозможно отличить оплаченное от зависшего.',
    act: 'Открыть контур AR',
    to: 'payments',
  },
  {
    sev: 'crit',
    title: '3 просроченные отгрузки сегодня',
    desc: 'Beryozka (Болгария), Leis GmbH (Германия), Rewers — риск штрафа за срыв срока.',
    act: 'Логистика',
    to: 'logistics',
  },
  {
    sev: 'warn',
    title: 'Расхождение учёта ГП −4.1%',
    desc: '−10 880 шт, концентрация на переходных SKU: Классика PL (−6 800), Микс PL (−4 080).',
    act: 'Data Quality',
    to: 'dataquality',
  },
  {
    sev: 'warn',
    title: '36% заказов без владельца',
    desc: '335 из 925 заказов не имеют названного менеджера — дыра в ответственности.',
    act: 'Хранитель ИИ',
    to: 'dataquality',
  },
].map((f) => ({ ...f, ...flagTone(f.sev) }));

const revenue = [
  { m: 'Янв', v: 58 },
  { m: 'Фев', v: 71 },
  { m: 'Мар', v: 64 },
  { m: 'Апр', v: 69 },
  { m: 'Май', v: 52 },
  { m: 'Июн', v: 118 },
];
const maxRev = Math.max(...revenue.map((r) => r.v));
export const revBars = revenue.map((r) => ({
  ...r,
  barH: Math.round((r.v / maxRev) * 150) + 'px',
  barColor: r.m === 'Июн' ? C.green : C.apple,
}));

export const cmdFilters = [
  { k: 'Период:', v: ' Июнь 2026' },
  { k: 'Менеджер:', v: ' Все' },
  { k: 'Страна:', v: ' Все' },
  { k: 'Клиент:', v: ' Все' },
  { k: 'Статус:', v: ' Все' },
  { k: 'Проблема:', v: ' Все' },
];

export const topClients = [
  { n: 'Me Gusto', v: '€100.2k', pct: '13%', w: 100 },
  { n: 'Beryozka', v: '€63.4k', pct: '8%', w: 63 },
  { n: 'futurus food', v: '€41.0k', pct: '5%', w: 41 },
  { n: 'Leis GmbH', v: '€33.8k', pct: '4%', w: 34 },
  { n: 'Posylka.de', v: '€28.1k', pct: '4%', w: 28 },
].map((c) => ({ ...c, barW: c.w + '%' }));

export const topManagers = [
  { n: 'Жанна', role: 'ЕС / Латвия', orders: 452, v: '€363.2k', chk: '€813', pay: 63 },
  { n: 'Глеб', role: 'РФ', orders: 51, v: '€221.3k', chk: '€4 516', pay: 76 },
  { n: '«RU» канал', role: 'без имени', orders: 36, v: '€162.4k', chk: '€4 640', pay: 78 },
  { n: 'Интернет-магазин', role: 'Латвия', orders: 76, v: '€8.1k', chk: '€106', pay: 17 },
].map((m) => ({ ...m, payColor: m.pay >= 70 ? C.green : m.pay >= 40 ? C.amber : C.red }));

export const dataErrors = [
  { t: 'Заказы без владельца', v: '335', base: 'из 925', tone: 'warn' },
  { t: 'Завершённые без оплаты', v: '254', base: 'из 623', tone: 'crit' },
  { t: 'Дубли клиентов', v: '17', base: 'групп + 43 числа', tone: 'warn' },
  { t: 'Расхождение остатка ГП', v: '−4.1%', base: '−10 880 шт', tone: 'crit' },
].map((e) => ({ ...e, ...miniTone(e.tone) }));

export const probOrders = [
  { id: '2026-0001', cl: 'futurus food', mgr: 'Жанна', ctry: 'Латвия', sum: '€4 280', date: '28.06', prob: 'Нехватка товара', tone: 'warn' },
  { id: '2025-0912', cl: 'Beryozka', mgr: '«RU»', ctry: 'Болгария', sum: '€6 140', date: '24.06', prob: 'Просрочка отгрузки', tone: 'crit' },
  { id: '2025-0888', cl: 'Leis GmbH', mgr: 'Жанна', ctry: 'Германия', sum: '€14 020', date: '20.06', prob: 'Зависло > 90 дней', tone: 'crit' },
  { id: '2026-0044', cl: 'Me Gusto', mgr: 'Глеб', ctry: 'РФ', sum: '€9 870', date: '27.06', prob: 'Без отметки оплаты', tone: 'crit' },
  { id: '2026-0051', cl: 'Rewers', mgr: '—', ctry: 'Литва', sum: '€2 410', date: '26.06', prob: 'Без владельца', tone: 'warn' },
  { id: '2026-0033', cl: '3banani', mgr: 'Жанна', ctry: 'Латвия', sum: '€1 980', date: '29.06', prob: 'Дефицит упаковки', tone: 'warn' },
].map((o) => {
  const p = pill(o.tone);
  return { ...o, probBg: p[1], probColor: p[2] };
});
