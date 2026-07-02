import Icon from '../components/ui/Icon';
import KpiCard from '../components/ui/KpiCard';
import AlertBlock from '../components/ui/AlertBlock';
import { logKpis, logRows, logDirs } from '../data/logistics';

export default function Logistics() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          ТРАНСПОРТ ПОД ГОТОВЫЙ ЗАКАЗ · КОНСОЛИДАЦИЯ
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Логистика</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Что и когда реально отгружать — бронь транспорта под расчётный срок готовности.
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <AlertBlock
          tone="crit"
          icon="local_fire_department"
          compact
          title={
            <>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--red-ink)' }}>Что горит сегодня: </span>
              <span style={{ fontSize: 13, color: '#8A4538', fontWeight: 400 }}>
                3 заказа готовы, транспорт не назначен — Beryozka (Болгария), Leis GmbH (Германия). Риск штрафа за срыв.
              </span>
            </>
          }
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 18 }}>
        {logKpis.map((k, i) => (
          <KpiCard key={i} label={k.label} val={k.val} icon={k.icon} accent={k.accent} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18, alignItems: 'start' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
                <th style={{ padding: '13px 18px', fontWeight: 500 }}>Заказ</th>
                <th style={{ padding: '13px 10px', fontWeight: 500 }}>Клиент</th>
                <th style={{ padding: '13px 10px', fontWeight: 500 }}>Направление</th>
                <th style={{ padding: '13px 10px', fontWeight: 500 }}>Отгрузка</th>
                <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'center' }}>Готов</th>
                <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'center' }}>Док-ты</th>
                <th style={{ padding: '13px 18px', fontWeight: 500 }}>Транспорт</th>
              </tr>
            </thead>
            <tbody>
              {logRows.map((r) => (
                <tr key={r.id} style={{ borderTop: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '13px 18px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>{r.id}</td>
                  <td style={{ padding: '13px 10px', fontWeight: 600 }}>{r.cl}</td>
                  <td style={{ padding: '13px 10px', color: '#5A5448' }}>{r.dir}</td>
                  <td style={{ padding: '13px 10px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{r.date}</td>
                  <td style={{ padding: '13px 10px', textAlign: 'center' }}>
                    <Icon name={r.readyIc} size={19} color={r.readyC} />
                  </td>
                  <td style={{ padding: '13px 10px', textAlign: 'center' }}>
                    <Icon name={r.docsIc} size={19} color={r.docsC} />
                  </td>
                  <td style={{ padding: '13px 18px', fontSize: 12.5, fontWeight: 500, color: r.trColor }}>{r.transport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
            <h2 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 600 }}>Направления отгрузок</h2>
            <div style={{ fontSize: 11.5, color: 'var(--mut)', marginBottom: 14 }}>Топ-3 = 76% объёма</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {logDirs.map((d, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 4 }}>
                    <span style={{ fontWeight: 500 }}>{d.n}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{d.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: '#F0ECE3', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: d.w, background: d.c, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--slate-soft)', border: '1px solid #C9DAE2', borderRadius: 14, padding: '16px 18px' }}>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <Icon name="hub" size={19} color="var(--slate-ink)" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--slate-ink)' }}>Консолидация: Германия</div>
                <div style={{ fontSize: 12, color: '#4E6675', marginTop: 3, lineHeight: 1.4 }}>
                  Langino и Leis GmbH — одно направление, 28.06. Объединить в один рейс: экономия пустого пробега.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
