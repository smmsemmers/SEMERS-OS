import KpiCard from '../components/ui/KpiCard';
import StatusPill from '../components/ui/StatusPill';
import AlertBlock from '../components/ui/AlertBlock';
import { prodKpis, prodRows, shiftBars } from '../data/production';

export default function Production() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          ПЛАН ИЗ ОЧЕРЕДИ ЗАКАЗОВ · ФАКТ ПРОТИВ ПЛАНА
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Производство</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Что выпустить под заказы и под пополнение склада — план рождается из очереди.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12, marginBottom: 18 }}>
        {prodKpis.map((k, i) => (
          <KpiCard key={i} label={k.label} val={k.val} sub={k.sub} icon={k.icon} accent={k.accent} compact />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 18, alignItems: 'start' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>План смены · SKU</h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mut)', background: 'var(--cream)', padding: '2px 8px', borderRadius: 20 }}>
              26.06 · ночная смена
            </span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
                <th style={{ padding: '11px 20px', fontWeight: 500 }}>SKU · Название</th>
                <th style={{ padding: '11px 10px', fontWeight: 500, textAlign: 'right' }}>Под заказ</th>
                <th style={{ padding: '11px 10px', fontWeight: 500, textAlign: 'right' }}>Пополнение</th>
                <th style={{ padding: '11px 10px', fontWeight: 500 }}>Приоритет</th>
                <th style={{ padding: '11px 10px', fontWeight: 500 }}>Статус</th>
                <th style={{ padding: '11px 20px', fontWeight: 500 }}>Готовность</th>
              </tr>
            </thead>
            <tbody>
              {prodRows.map((r, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '13px 20px', fontWeight: 600 }}>{r.sku}</td>
                  <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600 }}>{r.ord}</td>
                  <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--sub)' }}>{r.rep}</td>
                  <td style={{ padding: '13px 10px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: r.prioColor }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: r.prioColor }} />
                      {r.prio}
                    </span>
                  </td>
                  <td style={{ padding: '13px 10px' }}>
                    <StatusPill label={r.stLabel} bg={r.stBg} color={r.stColor} />
                  </td>
                  <td style={{ padding: '13px 20px', color: '#5A5448', fontSize: 12.5 }}>{r.ready}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
            <h2 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 600 }}>Загрузка цеха</h2>
            <div style={{ fontSize: 11.5, color: 'var(--mut)', marginBottom: 16 }}>шт/день · рост ×4.5 за год</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 150 }}>
              {shiftBars.map((b, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--sub)' }}>{b.v}</div>
                  <div style={{ width: '100%', borderRadius: '5px 5px 0 0', height: b.barH, background: b.barColor }} />
                  <div style={{ fontSize: 9.5, color: 'var(--mut)' }}>{b.m}</div>
                </div>
              ))}
            </div>
          </div>

          <AlertBlock
            tone="warn"
            icon="notifications_active"
            title="Смена упаковки 35г Классика"
            desc="Новая обечайка не доведена до цеха — риск использования старой версии и возвратов. Уведомить смену."
          />
          <AlertBlock
            tone="crit"
            icon="trending_down"
            title="Отклонение от плана −21%"
            desc="Факт 6 240 из 7 900 шт на 14:00. Дефицит под заказ Корица 35г — 800 шт. Предложить переброс с формовки."
          />
        </div>
      </div>
    </div>
  );
}
