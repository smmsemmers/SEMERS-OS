import Icon from '../components/ui/Icon';
import StatusPill from '../components/ui/StatusPill';
import { ordRows } from '../data/orders';

export default function Orders() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
            ЕДИНЫЙ РЕЕСТР · ВСЕ КАНАЛЫ В ОДНОЙ ТОЧКЕ
          </div>
          <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Заказы</h1>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 11px', background: '#fff', border: '1px solid var(--input-border)', borderRadius: 8, fontSize: 12.5, color: '#5A5448' }}>
            <Icon name="filter_list" size={17} color="#A79F8E" />
            Фильтры
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 11px', background: '#fff', border: '1px solid var(--input-border)', borderRadius: 8, fontSize: 12.5, color: '#5A5448' }}>
            Статус: Все
            <Icon name="expand_more" size={17} color="#A79F8E" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 11px', background: '#fff', border: '1px solid var(--input-border)', borderRadius: 8, fontSize: 12.5, color: '#5A5448' }}>
            Оплата: Все
            <Icon name="expand_more" size={17} color="#A79F8E" />
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '13px 18px', fontWeight: 500 }}>Заказ</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Клиент</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Менеджер</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Страна</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Отгрузка</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Сумма</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Статус</th>
              <th style={{ padding: '13px 18px', fontWeight: 500 }}>Оплата</th>
            </tr>
          </thead>
          <tbody>
            {ordRows.map((r) => (
              <tr key={r.id} style={{ borderTop: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '13px 18px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>{r.id}</td>
                <td style={{ padding: '13px 10px', fontWeight: 600 }}>{r.cl}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)' }}>{r.mgr}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)' }}>{r.ctry}</td>
                <td style={{ padding: '13px 10px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{r.date}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600 }}>{r.sum}</td>
                <td style={{ padding: '13px 10px' }}>
                  <StatusPill label={r.stLabel} bg={r.stBg} color={r.stColor} />
                </td>
                <td style={{ padding: '13px 18px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 500, color: r.payColor }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: r.payColor }} />
                    {r.payLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
