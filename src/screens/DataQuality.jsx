import StatusPill from '../components/ui/StatusPill';
import { dqKpis, dqRows } from '../data/dataQuality';

export default function DataQuality() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          ХРАНИТЕЛЬ ИИ · ФУНДАМЕНТ АВТОМАТИЗАЦИИ
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Data Quality</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Без достоверных данных остальные дашборды врут — чиним сверху вниз по критичности.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 10, marginBottom: 18 }}>
        {dqKpis.map((k, i) => (
          <div key={i} style={{ background: 'var(--dark-card)', borderRadius: 12, padding: '13px 13px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600, color: k.mc, lineHeight: 1 }}>{k.val}</div>
            <div style={{ fontSize: 10.5, color: '#CFC9BC', marginTop: 7, lineHeight: 1.3 }}>{k.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Очередь исправлений</h2>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mut)', background: 'var(--cream)', padding: '2px 8px', borderRadius: 20 }}>
            по приоритету критичности
          </span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '12px 20px', fontWeight: 500 }}>Тип ошибки</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Сущность</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Описание</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Критичность</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Ответственный</th>
              <th style={{ padding: '12px 20px', fontWeight: 500 }}>Статус</th>
            </tr>
          </thead>
          <tbody>
            {dqRows.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '13px 20px', fontWeight: 600, whiteSpace: 'nowrap' }}>{r.type}</td>
                <td style={{ padding: '13px 10px', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#5A5448', whiteSpace: 'nowrap' }}>{r.ent}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)', fontSize: 12, maxWidth: 340 }}>{r.desc}</td>
                <td style={{ padding: '13px 10px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: r.critColor }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: r.critColor }} />
                    {r.crit}
                  </span>
                </td>
                <td style={{ padding: '13px 10px', color: '#5A5448', fontSize: 12.5 }}>{r.who}</td>
                <td style={{ padding: '13px 20px' }}>
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
