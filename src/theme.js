export const C = {
  ink: '#2A2722',
  sub: '#6E685D',
  mut: '#9C9586',
  line: '#E4DFD4',
  card: '#FFFFFF',
  cream: '#F4F1E9',
  green: '#5C8A3F',
  greenSoft: '#EAF1E1',
  greenInk: '#3E6B2C',
  red: '#C7503F',
  redSoft: '#FBE9E5',
  redInk: '#9A3527',
  amber: '#CC8A2C',
  amberSoft: '#FAF0DC',
  amberInk: '#8A5A12',
  slate: '#5E7A8C',
  slateSoft: '#E7EEF2',
  slateInk: '#3C5563',
  apple: '#7FA45C',
  beige: '#EFE9DC',
};

// generic tone -> [label, bg, ink]
export function pill(kind) {
  const m = {
    crit: ['Критично', C.redSoft, C.redInk],
    warn: ['Внимание', C.amberSoft, C.amberInk],
    ok: ['Норма', C.greenSoft, C.greenInk],
    info: ['В работе', C.slateSoft, C.slateInk],
  };
  return m[kind];
}

// tone -> {accent, accentSoft} used by KPI cards
export function kpiTone(tone) {
  const m = {
    ok: [C.green, C.greenSoft],
    warn: [C.amber, C.amberSoft],
    crit: [C.red, C.redSoft],
    info: [C.slate, C.slateSoft],
  };
  const v = m[tone];
  return { accent: v[0], accentSoft: v[1] };
}

// severity -> red-flag card styling
export function flagTone(sev) {
  return sev === 'crit'
    ? { fbg: C.redSoft, fbar: C.red, fic: C.redInk, ficon: 'error' }
    : { fbg: C.amberSoft, fbar: C.amber, fic: C.amberInk, ficon: 'warning' };
}

// tone -> single accent color (data-error mini stat)
export function miniTone(tone) {
  return tone === 'crit' ? { mc: C.red } : { mc: C.amber };
}

export const palette = [
  { n: 'Фон', c: '#F1EEE7', r: 'app background' },
  { n: 'Карточка', c: '#FFFFFF', r: 'surface' },
  { n: 'Чернила', c: '#2A2722', r: 'text / dark ui' },
  { n: 'Яблочный', c: '#5C8A3F', r: 'primary · норма' },
  { n: 'Пастель', c: '#A6C97F', r: 'accent soft' },
  { n: 'Крем', c: '#EFE9DC', r: 'beige' },
  { n: 'Критично', c: '#C7503F', r: 'red · срыв' },
  { n: 'Внимание', c: '#CC8A2C', r: 'amber · риск' },
  { n: 'Норма', c: '#5C9A5C', r: 'green · ok' },
  { n: 'Инфо', c: '#5E7A8C', r: 'slate-blue' },
  { n: 'Линия', c: '#E4DFD4', r: 'borders' },
  { n: 'Тёмная панель', c: '#23211C', r: 'sidebar' },
];
