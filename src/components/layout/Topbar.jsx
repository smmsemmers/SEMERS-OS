import Icon from '../ui/Icon';
import { crumbs } from '../../data/nav';

export default function Topbar({ screen, onCreateOrder }) {
  const [crumbIcon, crumbTitle] = crumbs[screen] || crumbs.command;
  return (
    <header
      style={{
        flex: 'none',
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--line)',
        padding: '0 26px',
        height: 62,
        display: 'flex',
        alignItems: 'center',
        gap: 18,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#8C8576', minWidth: 0 }}>
        <Icon name={crumbIcon} size={18} color="#A39C8B" />
        <span style={{ color: '#B4AD9C' }}>SEMERS OS</span>
        <span style={{ color: '#CFC8B8' }}>/</span>
        <span style={{ color: '#3A362E', fontWeight: 600, whiteSpace: 'nowrap' }}>{crumbTitle}</span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ position: 'relative', width: 300 }}>
        <Icon
          name="search"
          size={18}
          color="#A39C8B"
          style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          placeholder="Поиск: заказ, клиент, SKU…"
          style={{
            width: '100%',
            height: 38,
            border: '1px solid var(--input-border)',
            background: '#fff',
            borderRadius: 9,
            padding: '0 12px 0 36px',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'var(--ink)',
            outline: 'none',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: '#fff',
          border: '1px solid var(--input-border)',
          borderRadius: 9,
          height: 38,
          padding: '0 12px',
          cursor: 'pointer',
        }}
      >
        <Icon name="calendar_today" size={17} color="#7E776A" />
        <span style={{ fontSize: 12.5, color: '#4A463C', fontWeight: 500 }}>Июнь 2026</span>
        <Icon name="expand_more" size={18} color="#A39C8B" />
      </div>
      <div
        style={{
          position: 'relative',
          width: 38,
          height: 38,
          border: '1px solid var(--input-border)',
          background: '#fff',
          borderRadius: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Icon name="notifications" size={19} color="#6E675A" />
        <span
          style={{
            position: 'absolute',
            top: 7,
            right: 8,
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'var(--red)',
            border: '1.5px solid #fff',
          }}
        />
      </div>
      <button
        onClick={onCreateOrder}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          height: 38,
          padding: '0 15px',
          background: 'var(--green)',
          border: 'none',
          borderRadius: 9,
          color: '#fff',
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        <Icon name="add" size={18} />
        Создать заказ
      </button>
    </header>
  );
}
