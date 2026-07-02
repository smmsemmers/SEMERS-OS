import Icon from '../components/ui/Icon';
import KpiCard from '../components/ui/KpiCard';
import StatusPill from '../components/ui/StatusPill';
import { payKpis, payRows } from '../data/payments';

export default function Payments() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          КОНТУР ДЕБИТОРКИ · СТАРЕНИЕ ПО СЕГМЕНТАМ
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Оплаты и дебиторка</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Вернуть в управление €202k: кто, сколько и сколько дней — плюс авто-напоминания.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 18 }}>
        {payKpis.map((k, i) => (
          <KpiCard key={i} label={k.label} val={k.val} sub={k.sub} icon={k.icon} accent={k.accent} />
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Зависшая дебиторка по клиентам</h2>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 12.5, color: 'var(--green)', fontWeight: 600, cursor: 'pointer' }}>Отправить напоминания →</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '12px 20px', fontWeight: 500 }}>Клиент</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Канал</th>
              <th style={{ padding: '12px 10px', fontWeight: 500, textAlign: 'right' }}>Сумма</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Последний заказ</th>
              <th style={{ padding: '12px 10px', fontWeight: 500, textAlign: 'right' }}>Возраст</th>
              <th style={{ padding: '12px 10px', fontWeight: 500 }}>Сегмент</th>
              <th style={{ padding: '12px 20px', fontWeight: 500, textAlign: 'right' }}>Действие</th>
            </tr>
          </thead>
          <tbody>
            {payRows.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '13px 20px', fontWeight: 600 }}>{r.cl}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)' }}>{r.ch}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600 }}>{r.sum}</td>
                <td style={{ padding: '13px 10px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{r.last}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: r.daysColor }}>{r.days} дн</td>
                <td style={{ padding: '13px 10px' }}>
                  <StatusPill label={r.segLabel} bg={r.segBg} color={r.segColor} />
                </td>
                <td style={{ padding: '13px 20px', textAlign: 'right' }}>
                  <Icon name="mail" size={19} color="var(--green)" style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
