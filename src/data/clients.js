import { pill } from '../theme';

export const cliRows = [
  { n: 'Интернет-заказы', ord: 68, rev: '€8.1k', ch: 'Онлайн', dup: '2 варианта: Internet / internet', tone: 'warn' },
  { n: 'Tirgus Online', ord: 51, rev: '€12.4k', ch: 'Онлайн', dup: 'канонизирован', tone: 'ok' },
  { n: 'futurus food', ord: 33, rev: '€41.0k', ch: 'Жанна', dup: '5 вариантов: Maxima, 6 Maxima (FF)…', tone: 'warn' },
  { n: 'Fruchtschmaus', ord: 19, rev: '€28.4k', ch: 'Жанна', dup: '7+ написаний — слиты', tone: 'crit' },
  { n: 'Beryozka', ord: 18, rev: '€63.4k', ch: 'Жанна / «RU»', dup: '2 канала — один клиент', tone: 'warn' },
  { n: 'Me Gusto', ord: 24, rev: '€100.2k', ch: 'Глеб / «RU»', dup: 'канонизирован', tone: 'ok' },
  { n: 'Leis GmbH', ord: 16, rev: '€33.8k', ch: 'Жанна', dup: 'канонизирован', tone: 'ok' },
].map((r) => {
  const cp = pill(r.tone);
  return { ...r, dupBg: cp[1], dupColor: cp[2], dupIcon: r.tone === 'ok' ? 'verified' : 'merge' };
});
