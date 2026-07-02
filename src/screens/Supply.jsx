import { useState } from 'react';
import KpiCard from '../components/ui/KpiCard';
import StatusPill from '../components/ui/StatusPill';
import AlertBlock from '../components/ui/AlertBlock';
import { supKpis, supRows, supTabDefs } from '../data/supply';

export default function Supply() {
  const [filter, setFilter] = useState('all');

  const tabs = supTabDefs.map((t) => {
    const on = filter === t.k;
    return { ...t, tbg: on ? '#2E2B25' : '#fff', tcolor: on ? '#F4F1EA' : '#5A5448', tborder: on ? '#2E2B25' : 'var(--input-border)' };
  });

  const rows =
    filter === 'all'
      ? supRows
      : filter === 'urgent'
        ? supRows.filter((r) => r.tone === 'crit')
        : filter === 'flow'
          ? supRows.filter((r) => r.type === 'Флоупак')
          : filter === 'order'
            ? supRows.filter((r) => r.order !== '—')
            : supRows;

  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          УПАКОВКА И МАТЕРИАЛЫ · ТОЧКИ ПЕРЕЗАКАЗА
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Снабжение</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Упаковка не должна кончиться в момент отгрузки — видим дефицит заранее.
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <AlertBlock
          tone="crit"
          icon="error"
          title="Что нужно заказать сегодня — 4 критичные позиции"
          desc="Обечайки Микс PL (покрытие 0.6 мес, срок 50 дней) — нужно ~38 000. Ассорти на нуле. Вишня и Чёрная смородина — покрытие 0.5 мес. Стандарт делается 2 недели, флоупак — 40–50 дней: ждать нельзя."
          action={
            <button
              style={{
                flex: 'none',
                alignSelf: 'center',
                height: 38,
                padding: '0 16px',
                background: 'var(--red)',
                border: 'none',
                borderRadius: 9,
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Сформировать заявку
            </button>
          }
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 18 }}>
        {supKpis.map((k, i) => (
          <KpiCard key={i} label={k.label} val={k.val} icon={k.icon} accent={k.accent} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {tabs.map((t) => (
          <div
            key={t.k}
            onClick={() => setFilter(t.k)}
            style={{
              height: 34,
              display: 'flex',
              alignItems: 'center',
              padding: '0 14px',
              borderRadius: 9,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
              background: t.tbg,
              color: t.tcolor,
              border: `1px solid ${t.tborder}`,
            }}
          >
            {t.l}
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '13px 16px', fontWeight: 500 }}>Позиция</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Тип</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Остаток</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Расход/мес</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Покрытие</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Срок</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Точка заказа</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Заказать</th>
              <th style={{ padding: '13px 16px', fontWeight: 500 }}>Статус</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '13px 16px', fontWeight: 600 }}>{r.pos}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)', fontSize: 12 }}>{r.type}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r.rest}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--sub)' }}>{r.use}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: r.covColor }}>{r.cov} мес</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)', fontSize: 12 }}>{r.lead}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{r.rop}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, color: r.orderColor }}>{r.order}</td>
                <td style={{ padding: '13px 16px' }}>
                  <StatusPill label={r.stLabel} bg={r.stBg} color={r.stColor} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
