import Icon from '../components/ui/Icon';
import KpiCard from '../components/ui/KpiCard';
import StatusPill from '../components/ui/StatusPill';
import { kpis, flags, revBars, cmdFilters, topClients, topManagers, dataErrors, probOrders } from '../data/command';

export default function CommandCenter({ onNav, onOpenDrawer }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
            ПУЛЬС КОМПАНИИ · 27 ИЮНЯ 2026
          </div>
          <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Command Center</h1>
          <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
            Весь бизнес за пять минут — деньги, риски и красные флаги.
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cmdFilters.map((f, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                height: 34,
                padding: '0 11px',
                background: '#fff',
                border: '1px solid var(--input-border)',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 12.5,
                color: '#5A5448',
              }}
            >
              <span style={{ color: '#A79F8E' }}>{f.k}</span>
              <span style={{ fontWeight: 600, color: '#3A362E' }}>{f.v}</span>
              <Icon name="expand_more" size={17} color="#B4AD9C" />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 18 }}>
        {kpis.map((k, i) => (
          <KpiCard key={i} label={k.label} val={k.val} sub={k.sub} icon={k.icon} accent={k.accent} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 18, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* RED FLAGS */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
              <Icon name="flag" size={20} color="var(--red)" />
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Красные флаги</h2>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--mut)',
                  background: 'var(--cream)',
                  padding: '2px 8px',
                  borderRadius: 20,
                }}
              >
                {flags.length} активных
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {flags.map((f, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: 12, padding: '12px 14px', background: f.fbg, borderRadius: 10, alignItems: 'flex-start' }}
                >
                  <Icon name={f.ficon} size={19} color={f.fbar} style={{ marginTop: 1 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: '#33302A' }}>{f.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--sub)', marginTop: 3, lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                  <div
                    onClick={() => onNav(f.to)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      flex: 'none',
                      alignSelf: 'center',
                      fontSize: 12,
                      fontWeight: 600,
                      color: f.fic,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {f.act}
                    <Icon name="chevron_right" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REVENUE CHART */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Выручка по месяцам</h2>
              <span style={{ fontSize: 12, color: 'var(--mut)' }}>2026 · тыс. €</span>
              <div style={{ flex: 1 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: 'var(--sub)' }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: 'var(--apple)' }} />
                Выручка
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, height: 180, padding: '0 6px' }}>
              {revBars.map((b, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: '#3A362E' }}>{b.v}</div>
                  <div style={{ width: '100%', maxWidth: 46, borderRadius: '7px 7px 0 0', height: b.barH, background: b.barColor }} />
                  <div style={{ fontSize: 12, color: '#8C8576', fontWeight: 500 }}>{b.m}</div>
                </div>
              ))}
            </div>
          </div>

          {/* PROBLEM ORDERS */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px 6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 6 }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Проблемные заказы</h2>
              <div style={{ flex: 1 }} />
              <span style={{ fontSize: 12.5, color: 'var(--green)', fontWeight: 600, cursor: 'pointer' }} onClick={() => onNav('orders')}>
                Все заказы →
              </span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Заказ</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Клиент</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Менеджер</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Страна</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500, textAlign: 'right' }}>Сумма</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Отгрузка</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Проблема</th>
                </tr>
              </thead>
              <tbody>
                {probOrders.map((o) => (
                  <tr
                    key={o.id}
                    onClick={() => onOpenDrawer(o.id)}
                    style={{ borderTop: '1px solid var(--line-soft)', cursor: 'pointer' }}
                  >
                    <td style={{ padding: '11px 8px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>{o.id}</td>
                    <td style={{ padding: '11px 8px', fontWeight: 500 }}>{o.cl}</td>
                    <td style={{ padding: '11px 8px', color: 'var(--sub)' }}>{o.mgr}</td>
                    <td style={{ padding: '11px 8px', color: 'var(--sub)' }}>{o.ctry}</td>
                    <td style={{ padding: '11px 8px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{o.sum}</td>
                    <td style={{ padding: '11px 8px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{o.date}</td>
                    <td style={{ padding: '11px 8px' }}>
                      <StatusPill label={o.prob} bg={o.probBg} color={o.probColor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
            <h2 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 600 }}>Top clients</h2>
            <div style={{ fontSize: 11.5, color: 'var(--mut)', marginBottom: 14 }}>Топ-10 = 47% выручки</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {topClients.map((c, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                    <span style={{ fontWeight: 500 }}>{c.n}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4A463C' }}>
                      {c.v} · {c.pct}
                    </span>
                  </div>
                  <div style={{ height: 6, background: '#F0ECE3', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: c.barW, background: 'var(--apple)', borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
            <h2 style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 600 }}>Top managers · каналы</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {topManagers.map((m, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 11, paddingBottom: 11, borderBottom: '1px solid #F1EDE4' }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: '#F0ECE3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--sub)',
                      flex: 'none',
                    }}
                  >
                    {m.orders}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{m.n}</div>
                    <div style={{ fontSize: 11, color: 'var(--mut)' }}>
                      {m.role} · чек {m.chk}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600 }}>{m.v}</div>
                    <div style={{ fontSize: 10.5, color: m.payColor }}>оплата {m.pay}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={() => onNav('dataquality')}
            style={{ background: 'var(--dark-card)', borderRadius: 14, padding: '18px 20px', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Icon name="rule" size={19} color="#A6C97F" />
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#F4F1EA' }}>Критичные ошибки данных</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
              {dataErrors.map((e, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600, color: e.mc, lineHeight: 1 }}>{e.v}</div>
                  <div style={{ fontSize: 11.5, color: '#CFC9BC', marginTop: 4, lineHeight: 1.3 }}>{e.t}</div>
                  <div style={{ fontSize: 10.5, color: '#857E6E' }}>{e.base}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
