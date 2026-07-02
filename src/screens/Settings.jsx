import Icon from '../components/ui/Icon';

const roles = [
  { init: 'ГЛ', bg: '#FBE9E5', color: '#C7503F', name: 'Глеб', role: 'Управляющий · полный доступ' },
  { init: 'МХ', bg: '#E7EEF2', color: '#3C5563', name: 'Михаил', role: 'Кладовщик · склад, логистика' },
  { init: 'ВЛ', bg: '#EAF1E1', color: '#3E6B2C', name: 'Владислав', role: 'Производство · выпуск, план' },
  { init: 'ЖН', bg: '#FAF0DC', color: '#8A5A12', name: 'Жанна', role: 'Продажи ЕС · свои клиенты' },
];

const sources = [
  { icon: 'database', color: 'var(--green)', name: '1С — деньги и продажи', sub: 'источник истины · этап 1', status: 'подключено' },
  { icon: 'table_chart', color: 'var(--green)', name: 'SEMERS Group — выпуск', sub: 'Владислав · конец смены', status: 'подключено' },
  { icon: 'mail', color: 'var(--amber)', name: 'Корпоративная почта', sub: 'входящие заказы', status: 'настройка' },
  { icon: 'inventory_2', color: 'var(--green)', name: 'Остатки упаковки Рига', sub: 'учёт посуточно', status: 'подключено' },
];

export default function Settings() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          РОЛИ · ИСТОЧНИКИ · ПЕРИОД ДОВЕРИЯ
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Настройки</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
          <h2 style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 600 }}>Роли и доступы</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {roles.map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  paddingBottom: i < roles.length - 1 ? 11 : 0,
                  borderBottom: i < roles.length - 1 ? '1px solid #F1EDE4' : 'none',
                }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 8, background: r.bg, color: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>
                  {r.init}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--mut)' }}>{r.role}</div>
                </div>
                <Icon name="toggle_on" size={20} color="var(--green)" />
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
          <h2 style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 600 }}>Источники данных (MCP)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {sources.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  paddingBottom: i < sources.length - 1 ? 11 : 0,
                  borderBottom: i < sources.length - 1 ? '1px solid #F1EDE4' : 'none',
                }}
              >
                <Icon name={s.icon} size={20} color={s.color} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--mut)' }}>{s.sub}</div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: s.status === 'подключено' ? 'var(--green-ink)' : 'var(--amber-ink)',
                    background: s.status === 'подключено' ? 'var(--green-soft)' : 'var(--amber-soft)',
                    padding: '2px 9px',
                    borderRadius: 20,
                  }}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px', gridColumn: 'span 2' }}>
          <h2 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 600 }}>Период доверия и нормативы</h2>
          <div style={{ fontSize: 12, color: 'var(--mut)', marginBottom: 16 }}>
            Временные страховки на время калибровки расчёта — снимаются, когда система доказала точность.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            <div style={{ border: '1px solid #EFEBE2', borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 12, color: '#7C7565', marginBottom: 6 }}>Отметка «собрано»</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Включена</span>
                <Icon name="toggle_on" size={22} color="var(--green)" />
              </div>
            </div>
            <div style={{ border: '1px solid #EFEBE2', borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 12, color: '#7C7565', marginBottom: 6 }}>Недельная сверка</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Пятница</span>
                <Icon name="expand_more" size={18} color="#A79F8E" />
              </div>
            </div>
            <div style={{ border: '1px solid #EFEBE2', borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 12, color: '#7C7565', marginBottom: 6 }}>Норматив фасовщика</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600 }}>6 290 шт/смену</span>
                <Icon name="edit" size={18} color="#A79F8E" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
