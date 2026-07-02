import Icon from '../components/ui/Icon';
import { cliRows } from '../data/clients';

export default function Clients() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          КАНОНИЧЕСКИЙ СПРАВОЧНИК · КОНЕЦ ДУБЛЯМ
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Клиенты</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Один клиент — одна карточка. 17 групп дублей слиты, 43 «клиента-числа» нормализованы.
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '13px 18px', fontWeight: 500 }}>Каноническое имя</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Заказов</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Выручка</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Канал</th>
              <th style={{ padding: '13px 18px', fontWeight: 500 }}>Состояние справочника</th>
            </tr>
          </thead>
          <tbody>
            {cliRows.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '13px 18px', fontWeight: 600 }}>{r.n}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r.ord}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600 }}>{r.rev}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)' }}>{r.ch}</td>
                <td style={{ padding: '13px 18px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      fontSize: 11.5,
                      fontWeight: 600,
                      padding: '3px 11px',
                      borderRadius: 20,
                      background: r.dupBg,
                      color: r.dupColor,
                    }}
                  >
                    <Icon name={r.dupIcon} size={15} />
                    {r.dup}
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
