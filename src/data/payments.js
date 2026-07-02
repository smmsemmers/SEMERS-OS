import { C, pill, kpiTone } from '../theme';

export const payKpis = [
  { label: 'Слепая дебиторка', val: '€202.1k', sub: '254 заказа без оплаты', tone: 'crit', icon: 'visibility_off' },
  { label: 'Зависло > 90 дней', val: '€48.0k', sub: 'Leis, Posylka, ZIP', tone: 'crit', icon: 'hourglass_disabled' },
  { label: '30–90 дней', val: '€87.4k', sub: 'на контроле', tone: 'warn', icon: 'schedule' },
  { label: '0–30 дней', val: '€66.7k', sub: 'в норме', tone: 'ok', icon: 'check_circle' },
  { label: 'Спящие клиенты', val: '12', sub: '> 120 дней без заказа', tone: 'warn', icon: 'bedtime' },
].map((k) => ({ ...k, ...kpiTone(k.tone) }));

export const payRows = [
  { cl: 'Leis GmbH', ch: 'Жанна', sum: '€14 020', days: 112, seg: 'crit', last: '08.03.26' },
  { cl: 'Posylka.de', ch: 'Жанна', sum: '€13 180', days: 104, seg: 'crit', last: '16.03.26' },
  { cl: 'ZIP Trade', ch: '«RU»', sum: '€12 900', days: 98, seg: 'crit', last: '22.03.26' },
  { cl: 'Me Gusto', ch: 'Глеб', sum: '€9 870', days: 54, seg: 'warn', last: '04.05.26' },
  { cl: 'Fruchtschmaus', ch: 'Жанна', sum: '€6 240', days: 41, seg: 'warn', last: '17.05.26' },
  { cl: '3banani', ch: 'Жанна', sum: '€2 410', days: 18, seg: 'ok', last: '09.06.26' },
].map((r) => {
  const p = pill(r.seg);
  return {
    ...r,
    segBg: p[1],
    segColor: p[2],
    segLabel: r.seg === 'crit' ? '> 90 дней' : r.seg === 'warn' ? '30–90 дней' : '0–30 дней',
    daysColor: r.seg === 'crit' ? C.red : r.seg === 'warn' ? C.amber : C.green,
  };
});
