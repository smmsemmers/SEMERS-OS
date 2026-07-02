import { C, kpiTone } from '../theme';

export const prodKpis = [
  { label: 'План на день', val: '7 900', sub: 'шт · смена', tone: 'info', icon: 'assignment' },
  { label: 'Факт', val: '6 240', sub: 'на 14:00', tone: 'warn', icon: 'done_all' },
  { label: 'Выполнение плана', val: '79%', sub: 'отставание 1 660 шт', tone: 'warn', icon: 'speed' },
  { label: 'Дефицит под заказы', val: '800', sub: 'Корица 35г', tone: 'crit', icon: 'production_quantity_limits' },
  { label: 'Узкие SKU', val: '2', sub: 'Корица, Вишня', tone: 'warn', icon: 'warning' },
  { label: 'Загрузка фасовщиков', val: '92%', sub: '3 чел на смене', tone: 'ok', icon: 'groups' },
].map((k) => ({ ...k, ...kpiTone(k.tone) }));

const statusMeta = {
  queued: ['В очереди', C.slateSoft, C.slateInk],
  running: ['В работе', C.amberSoft, C.amberInk],
  planned: ['Запланировано', C.cream, C.sub],
  done: ['Готово', C.greenSoft, C.greenInk],
};

export const prodRows = [
  { sku: 'Меренге 35г Корица', ord: 800, rep: 1200, prio: 'Высокий', tone: 'crit', status: 'queued', ready: 'к 16:00' },
  { sku: 'Меренге 35г Классика', ord: 4000, rep: 2000, prio: 'Высокий', tone: 'crit', status: 'running', ready: 'в работе' },
  { sku: '100г Классика', ord: 1500, rep: 3000, prio: 'Средний', tone: 'warn', status: 'running', ready: 'в работе' },
  { sku: 'Меренге 35г Вишня', ord: 1200, rep: 600, prio: 'Средний', tone: 'warn', status: 'queued', ready: 'к 18:00' },
  { sku: 'Зефир Классика', ord: 600, rep: 1500, prio: 'Низкий', tone: 'ok', status: 'planned', ready: 'завтра' },
  { sku: '180г LV Брусника', ord: 400, rep: 800, prio: 'Низкий', tone: 'ok', status: 'done', ready: 'готово' },
].map((r) => {
  const sm = statusMeta[r.status];
  return {
    ...r,
    prioColor: r.tone === 'crit' ? C.red : r.tone === 'warn' ? C.amber : C.green,
    stBg: sm[1],
    stColor: sm[2],
    stLabel: sm[0],
  };
});

const shift = [
  { m: 'Май 25', v: 1734 },
  { m: 'Авг 25', v: 3448 },
  { m: 'Ноя 25', v: 5439 },
  { m: 'Фев 26', v: 5333 },
  { m: 'Май 26', v: 6413 },
  { m: 'Июн 26', v: 7888 },
];
const mx = Math.max(...shift.map((s) => s.v));
export const shiftBars = shift.map((s) => ({
  ...s,
  barH: Math.round((s.v / mx) * 140) + 'px',
  barColor: s.m === 'Июн 26' ? C.green : C.apple,
}));
