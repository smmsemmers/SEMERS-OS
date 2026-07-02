import { C, pill, kpiTone } from '../theme';

export const supKpis = [
  { label: 'Критичных позиций', val: '8', tone: 'crit', icon: 'priority_high' },
  { label: 'На нуле', val: '5', tone: 'crit', icon: 'remove_shopping_cart' },
  { label: '< 14 дней покрытия', val: '6', tone: 'warn', icon: 'hourglass_bottom' },
  { label: 'Долгие позиции (флоупак)', val: '2', tone: 'warn', icon: 'schedule' },
  { label: 'Открытых заявок', val: '3', tone: 'info', icon: 'description' },
].map((k) => ({ ...k, ...kpiTone(k.tone) }));

export const supRows = [
  { pos: 'Обечайки Микс PL', type: 'Флоупак', rest: '9 446', use: '14 960', cov: '0.6', lead: '50 дн', rop: '24 900', order: '38 000', tone: 'crit' },
  { pos: 'Ассорти (обечайка)', type: 'Обечайка', rest: '0', use: '22', cov: '0.0', lead: '14 дн', rop: '11', order: '500', tone: 'crit' },
  { pos: 'Вишня (обечайка)', type: 'Обечайка', rest: '640', use: '1 368', cov: '0.5', lead: '14 дн', rop: '684', order: '3 000', tone: 'crit' },
  { pos: 'Чёрная смородина', type: 'Обечайка', rest: '802', use: '1 578', cov: '0.5', lead: '14 дн', rop: '790', order: '3 200', tone: 'crit' },
  { pos: 'Обечайки Классика PL', type: 'Флоупак', rest: '15 719', use: '10 781', cov: '1.5', lead: '50 дн', rop: '18 000', order: '22 000', tone: 'warn' },
  { pos: 'Кедр (обечайка)', type: 'Обечайка', rest: '1 826', use: '1 534', cov: '1.2', lead: '14 дн', rop: '770', order: '2 000', tone: 'warn' },
  { pos: 'Классика 50 г', type: 'Флоупак', rest: '236', use: '192', cov: '1.2', lead: '40 дн', rop: '260', order: '1 200', tone: 'warn' },
  { pos: 'Скотч (упаковочный)', type: 'Расходник', rest: '21', use: '15', cov: '1.4', lead: '7 дн', rop: '8', order: '60', tone: 'warn' },
  { pos: 'Гофрокороб 35 г', type: 'Гофра', rest: '840', use: '420', cov: '2.0', lead: '14 дн', rop: '210', order: '—', tone: 'ok' },
  { pos: 'Стикеры LV', type: 'Стикеры', rest: '22 000', use: '9 000', cov: '2.4', lead: '7 дн', rop: '2 100', order: '—', tone: 'ok' },
].map((r) => {
  const p = pill(r.tone);
  return {
    ...r,
    covColor: r.tone === 'crit' ? C.red : r.tone === 'warn' ? C.amber : C.green,
    stBg: p[1],
    stColor: p[2],
    stLabel: r.tone === 'crit' ? 'Заказать сегодня' : r.tone === 'warn' ? 'Скоро заказ' : 'Норма',
    orderColor: r.order === '—' ? C.mut : C.ink,
  };
});

export const supTabDefs = [
  { k: 'all', l: 'Все позиции' },
  { k: 'urgent', l: 'Срочно', crit: true },
  { k: 'flow', l: 'Флоупак' },
  { k: 'order', l: 'Нужно заказать' },
  { k: 'transit', l: 'В пути' },
];
