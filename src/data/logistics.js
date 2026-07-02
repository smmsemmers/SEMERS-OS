import { C, kpiTone } from '../theme';

export const logKpis = [
  { label: 'К отгрузке сегодня', val: '6', tone: 'info', icon: 'today' },
  { label: 'К отгрузке завтра', val: '5', tone: 'info', icon: 'event_upcoming' },
  { label: 'Не готово', val: '2', tone: 'warn', icon: 'pending' },
  { label: 'Транспорт не назначен', val: '3', tone: 'crit', icon: 'no_crash' },
  { label: 'Документы не готовы', val: '2', tone: 'warn', icon: 'description' },
].map((k) => ({ ...k, ...kpiTone(k.tone) }));

export const logRows = [
  { id: '2026-0027', cl: 'Langino', dir: 'Германия', date: '27.06', ready: 'ok', docs: 'ok', transport: 'Назначен · DPD' },
  { id: '2025-0912', cl: 'Beryozka', dir: 'Болгария', date: '24.06', ready: 'ok', docs: 'warn', transport: 'Не назначен' },
  { id: '2026-0014', cl: 'Tirgus Online', dir: 'Латвия', date: '27.06', ready: 'ok', docs: 'ok', transport: 'Своя машина' },
  { id: '2026-0040', cl: 'Arkadia Trade', dir: 'Латвия', date: '27.06', ready: 'warn', docs: 'ok', transport: 'Назначен · Omniva' },
  { id: '2026-0001', cl: 'futurus food', dir: 'Латвия', date: '28.06', ready: 'warn', docs: 'warn', transport: 'Не назначен' },
  { id: '2025-0888', cl: 'Leis GmbH', dir: 'Германия', date: '28.06', ready: 'ok', docs: 'ok', transport: 'Не назначен' },
].map((r) => ({
  ...r,
  readyIc: r.ready === 'ok' ? 'check_circle' : 'error',
  readyC: r.ready === 'ok' ? C.green : C.amber,
  docsIc: r.docs === 'ok' ? 'check_circle' : 'error',
  docsC: r.docs === 'ok' ? C.green : C.amber,
  trColor: /Не назначен/.test(r.transport) ? C.red : C.ink,
}));

export const logDirs = [
  { n: 'Латвия', pct: 46, c: '#5C8A3F' },
  { n: 'Германия', pct: 21, c: '#7FA45C' },
  { n: 'Эстония', pct: 9, c: '#A6C97F' },
  { n: 'Литва', pct: 8, c: '#C8DBB4' },
  { n: 'Болгария', pct: 7, c: '#5E7A8C' },
  { n: 'Прочее', pct: 9, c: '#C9C2B3' },
].map((d) => ({ ...d, w: d.pct + '%' }));
