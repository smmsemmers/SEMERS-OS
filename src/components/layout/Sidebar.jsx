import Icon from '../ui/Icon';
import { navDef } from '../../data/nav';

function NavGroup({ title, items, screen, onNav }) {
  return (
    <>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9.5,
          letterSpacing: 1.2,
          color: '#6E685A',
          padding: '16px 10px 6px',
        }}
      >
        {title}
      </div>
      {items.map((item) => {
        const on = screen === item.key;
        return (
          <div
            key={item.key}
            onClick={() => onNav(item.key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              padding: '9px 11px',
              borderRadius: 8,
              cursor: 'pointer',
              marginBottom: 2,
              fontSize: 13.5,
              color: on ? '#F4F1EA' : '#B7B1A2',
              background: on ? 'rgba(127,164,92,.16)' : 'transparent',
              fontWeight: on ? 600 : 500,
            }}
          >
            <Icon name={item.icon} size={19} color={on ? '#A6C97F' : '#857E6E'} />
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.badge && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  background: item.crit ? 'rgba(199,80,63,.22)' : 'rgba(255,255,255,.09)',
                  color: item.crit ? '#E8917F' : '#B7B1A2',
                  padding: '1px 6px',
                  borderRadius: 20,
                  fontWeight: 600,
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}

export default function Sidebar({ screen, onNav }) {
  return (
    <aside
      style={{
        width: 236,
        flex: 'none',
        background: 'var(--sidebar-bg)',
        color: 'var(--sidebar-fg)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        style={{
          padding: '22px 20px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          borderBottom: '1px solid rgba(255,255,255,.07)',
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: 'var(--apple)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'none',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16, color: '#1B1A16' }}>S</span>
        </div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: '#F4F1EA', letterSpacing: '.2px' }}>SEMERS OS</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--sidebar-fg-mut)', letterSpacing: '.5px' }}>
            v1.0 · OPERATIONS
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 8px' }}>
        <NavGroup title="УПРАВЛЕНИЕ" items={navDef.top} screen={screen} onNav={onNav} />
        <NavGroup title="РОЛЕВЫЕ ПАНЕЛИ" items={navDef.roles} screen={screen} onNav={onNav} />
        <NavGroup title="ДАННЫЕ" items={navDef.data} screen={screen} onNav={onNav} />
      </nav>

      <div
        style={{
          padding: 12,
          borderTop: '1px solid rgba(255,255,255,.07)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'var(--red)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: 13,
            flex: 'none',
          }}
        >
          ГЛ
        </div>
        <div style={{ flex: 1, lineHeight: 1.2, minWidth: 0 }}>
          <div style={{ fontSize: 13, color: '#EDE9E0', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Глеб
          </div>
          <div style={{ fontSize: 11, color: 'var(--sidebar-fg-mut)' }}>Управляющий</div>
        </div>
        <Icon name="unfold_more" size={18} color="var(--sidebar-fg-mut)" style={{ cursor: 'pointer' }} />
      </div>
    </aside>
  );
}
