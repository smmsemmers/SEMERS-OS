import { C } from '../theme';

const stMeta = {
  accepted: ['Принят', C.slateSoft, C.slateInk],
  ready: ['Готов', C.greenSoft, C.greenInk],
  assembling: ['В сборке', C.amberSoft, C.amberInk],
  packed: ['Собран', C.greenSoft, C.greenInk],
  done: ['Выполнен', C.cream, C.sub],
};
const payMeta = {
  paid: ['Оплачен', C.green],
  unpaid: ['Не оплачен', C.amber],
  overdue: ['Просрочен', C.red],
  unknown: ['Нет данных', C.mut],
};

export const ordRows = [
  { id: '2026-0001', cl: 'futurus food', mgr: 'Жанна', ctry: 'Латвия', date: '28.06', sum: '€4 280', st: 'accepted', pay: 'unpaid' },
  { id: '2026-0014', cl: 'Tirgus Online', mgr: 'Интернет', ctry: 'Латвия', date: '27.06', sum: '€186', st: 'ready', pay: 'paid' },
  { id: '2026-0027', cl: 'Langino', mgr: 'Жанна', ctry: 'Германия', date: '27.06', sum: '€3 940', st: 'packed', pay: 'paid' },
  { id: '2026-0033', cl: '3banani', mgr: 'Жанна', ctry: 'Латвия', date: '29.06', sum: '€1 980', st: 'accepted', pay: 'unpaid' },
  { id: '2026-0040', cl: 'Arkadia Trade', mgr: 'Жанна', ctry: 'Латвия', date: '27.06', sum: '€2 410', st: 'assembling', pay: 'paid' },
  { id: '2026-0044', cl: 'Me Gusto', mgr: 'Глеб', ctry: 'РФ', date: '27.06', sum: '€9 870', st: 'done', pay: 'unknown' },
  { id: '2026-0051', cl: 'Rewers', mgr: '—', ctry: 'Литва', date: '28.06', sum: '€2 410', st: 'accepted', pay: 'unpaid' },
  { id: '2025-0888', cl: 'Leis GmbH', mgr: 'Жанна', ctry: 'Германия', date: '20.06', sum: '€14 020', st: 'done', pay: 'overdue' },
  { id: '2025-0912', cl: 'Beryozka', mgr: '«RU»', ctry: 'Болгария', date: '24.06', sum: '€6 140', st: 'ready', pay: 'unpaid' },
].map((r) => {
  const sm = stMeta[r.st];
  const pm = payMeta[r.pay];
  return { ...r, stBg: sm[1], stColor: sm[2], stLabel: sm[0], payColor: pm[1], payLabel: pm[0] };
});
