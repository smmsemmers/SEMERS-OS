import Icon from './ui/Icon';
import StatusPill from './ui/StatusPill';
import { C } from '../theme';
import { whOrders, whStatusMeta } from '../data/warehouse';

export default function OrderDrawer({ orderId, onClose }) {
  if (!orderId) return null;
  const o = whOrders.find((x) => x.id === orderId) || whOrders[0];
  const sm = whStatusMeta(o.status);
  const comp = o.comp.map((c) => ({
    ...c,
    mark: c.ok ? 'check_circle' : 'error',
    mc: c.ok ? C.green : C.red,
    lack: c.ok ? '' : '−' + (c.qty - c.stock),
  }));
  const packs = o.packs.map((p) => ({ ...p, mark: p.ok ? 'check_circle' : 'error', mc: p.ok ? C.green : C.red }));
  const allOk = o.comp.every((c) => c.ok) && o.packs.every((p) => p.ok);
  const dHintColor = allOk ? C.greenInk : C.amberInk;
  const dHintBg = allOk ? C.greenSoft : C.amberSoft;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex', justifyContent: 'flex-end' }}>
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'var(--scrim)', animation: 'scl-overlay .2s ease both' }}
      />
      <div
        style={{
          position: 'relative',
          width: 430,
          height: '100%',
          background: 'var(--header-bg)',
          boxShadow: 'var(--shadow-drawer)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'scl-drawer .26s cubic-bezier(.22,.61,.36,1) both',
        }}
      >
        <div style={{ padding: '20px 22px', borderBottom: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>{o.id}</span>
            <StatusPill label={sm[0]} bg={sm[1]} color={sm[2]} />
            <div style={{ flex: 1 }} />
            <Icon name="close" size={22} color="var(--mut)" style={{ cursor: 'pointer' }} onClick={onClose} />
          </div>
          <h2 style={{ margin: '10px 0 2px', fontSize: 19, fontWeight: 600 }}>{o.cl}</h2>
          <div style={{ fontSize: 12.5, color: '#8C8576' }}>
            Отгрузка {o.date} · готовность {o.ready}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 22px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '11px 14px', borderRadius: 10, background: dHintBg, marginBottom: 18 }}>
            <Icon name="insights" size={19} color={dHintColor} />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: dHintColor }}>
              {allOk ? 'Все позиции обеспечены — можно собирать' : 'Есть нехватка — нужен дозаказ / допроизводство'}
            </span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 10 }}>
            СОСТАВ ЗАКАЗА · ХВАТАЕТ ЛИ ТОВАРА
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden', marginBottom: 18 }}>
            {comp.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: '1px solid #F1EDE4' }}>
                <Icon name={c.mark} size={19} color={c.mc} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{c.sku}</div>
                  <div style={{ fontSize: 11, color: 'var(--mut)' }}>
                    остаток {c.stock} шт {c.lack}
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600 }}>{c.qty}</span>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 10 }}>
            ХВАТАЕТ ЛИ УПАКОВКИ
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden', marginBottom: 18 }}>
            {packs.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: '1px solid #F1EDE4' }}>
                <Icon name={p.mark} size={19} color={p.mc} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{p.n}</div>
                  <div style={{ fontSize: 11, color: 'var(--mut)' }}>остаток {p.stock}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600 }}>нужно {p.need}</span>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 10 }}>
            КОММЕНТАРИИ
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 14, fontSize: 12.5, color: '#5A5448', lineHeight: 1.5 }}>
            {o.note || '—'}
          </div>
        </div>

        <div style={{ padding: '14px 22px', borderTop: '1px solid var(--line)', background: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
          <button style={{ height: 40, borderRadius: 9, border: 'none', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            Готов к сборке
          </button>
          <button style={{ height: 40, borderRadius: 9, border: '1px solid var(--input-border)', background: '#fff', color: 'var(--red-ink)', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            Не хватает товара
          </button>
          <button style={{ height: 40, borderRadius: 9, border: '1px solid var(--input-border)', background: '#fff', color: 'var(--amber-ink)', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            Не хватает упаковки
          </button>
          <button style={{ height: 40, borderRadius: 9, border: '1px solid var(--input-border)', background: '#fff', color: '#5A5448', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            Проблема
          </button>
        </div>
      </div>
    </div>
  );
}
