import { C, kpiTone } from '../theme';

export const dqKpis = [
  { label: 'Заказы без статуса', val: '47', tone: 'warn' },
  { label: 'Заказы без менеджера', val: '335', tone: 'crit' },
  { label: 'Заказы без даты отгрузки', val: '15', tone: 'warn' },
  { label: 'Выполнено без оплаты', val: '254', tone: 'crit' },
  { label: 'Дубли клиентов', val: '17', tone: 'warn' },
  { label: 'Дубли SKU', val: '9', tone: 'warn' },
  { label: 'Расхождения остатков', val: '−4.1%', tone: 'crit' },
].map((k) => ({ ...k, ...kpiTone(k.tone), mc: k.tone === 'crit' ? C.red : C.amber }));

const dqStatusMeta = {
  open: ['Открыто', C.redSoft, C.redInk],
  fixing: ['Исправляется', C.amberSoft, C.amberInk],
  done: ['Исправлено', C.greenSoft, C.greenInk],
};

export const dqRows = [
  { type: 'Дубль клиента', ent: 'Fruchtschmaus', desc: '7+ написаний: FruschtSmaus, Fruschtschmauss, Fruchsmaus…', crit: 'Высокая', who: 'Хранитель ИИ', status: 'fixing', tone: 'crit' },
  { type: 'Без оплаты', ent: '254 заказа', desc: '26% завершённой выручки без отметки оплаты (€202k)', crit: 'Высокая', who: 'Глеб / Жанна', status: 'open', tone: 'crit' },
  { type: 'Без владельца', ent: '335 заказов', desc: '36% реестра без названного менеджера', crit: 'Высокая', who: 'Хранитель ИИ', status: 'open', tone: 'crit' },
  { type: 'Расхождение остатка', ent: 'Классика PL', desc: 'Книжный − факт = −6 800 шт (переходная упаковка)', crit: 'Высокая', who: 'Снабжение', status: 'fixing', tone: 'crit' },
  { type: 'Клиент-число', ent: '43 записи', desc: 'Номер вместо имени — онлайн-заказы', crit: 'Средняя', who: 'Хранитель ИИ', status: 'open', tone: 'warn' },
  { type: 'Дубль SKU', ent: 'Классика ШБ', desc: '«Классика ШБ» / «Классика ШБ новые» / «Классика новая 6»', crit: 'Средняя', who: 'Производство', status: 'fixing', tone: 'warn' },
  { type: 'Дата отгрузки < приёма', ent: '6 заказов', desc: 'Ошибка ввода дат — отгрузка раньше приёма', crit: 'Низкая', who: 'Михаил', status: 'done', tone: 'ok' },
].map((r) => {
  const sm = dqStatusMeta[r.status];
  return {
    ...r,
    stBg: sm[1],
    stColor: sm[2],
    stLabel: sm[0],
    critColor: r.tone === 'crit' ? C.red : r.tone === 'warn' ? C.amber : C.green,
  };
});
