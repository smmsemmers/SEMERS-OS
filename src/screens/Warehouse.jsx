import { useState } from 'react';
import Icon from '../components/ui/Icon';
import StatusPill from '../components/ui/StatusPill';
import { C } from '../theme';
import { whOrders, whStatusMeta, whTabDefs } from '../data/warehouse';

export default function Warehouse({ onOpenDrawer }) {
  const [filter, setFilter] = useState('all');

  const tabs = whTabDefs.map((t) => {
    const on = filter === t.k;
    return {
      ...t,
      tbg: on ? '#2E2B25' : '#fff',
      tcolor: on ? '#F4F1EA' : '#5A5448',
      tborder: on ? '#2E2B25' : 'var(--input-border)',
      tcbg: on ? 'rgba(255,255,255,.15)' : t.crit ? C.redSoft : t.warn ? C.amberSoft : '#F0ECE3',
      tccolor: on ? '#F4F1EA' : t.crit ? C.redInk : t.warn ? C.amberInk : '#7C7565',
    };
  });

  let rows = filter === 'all' ? whOrders : filter === 'tomorrow' ? whOrders.filter((o) => /завтра/.test(o.date)) : whOrders.filter((o) => o.status === filter);
  rows = rows.map((o) => {
    const sm = whStatusMeta(o.status);
    return {
      ...o,
      stBg: sm[1],
      stColor: sm[2],
      stLabel: sm[0],
      goodsIcon: o.goods === 'ok' ? 'check_circle' : o.goods === 'warn' ? 'error' : 'cancel',
      goodsColor: o.goods === 'ok' ? C.green : o.goods === 'warn' ? C.amber : C.red,
      packIcon: o.pack === 'ok' ? 'check_circle' : o.pack === 'warn' ? 'error' : 'cancel',
      packColor: o.pack === 'ok' ? C.green : o.pack === 'crit' ? C.red : C.amber,
    };
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
            ДИСПЕТЧЕР СКЛАДА · УПРАВЛЕНИЕ ПО ИСКЛЮЧЕНИЯМ
          </div>
          <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Кладовщик</h1>
          <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
            Что собрать прямо сейчас — система знает срок сама, вы реагируете на исключения.
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ background: 'var(--dark-card)', borderRadius: 12, padding: '14px 18px', color: '#EDE9E0', minWidth: 300 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A6C97F', marginBottom: 8 }}>
            КАЛЬКУЛЯТОР СРОКА ГОТОВНОСТИ
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600 }}>3</div>
              <div style={{ fontSize: 10, color: '#8B8474' }}>фасовщ.</div>
            </div>
            <span style={{ color: '#6E685A' }}>×</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600 }}>6 290</div>
              <div style={{ fontSize: 10, color: '#8B8474' }}>шт/смену</div>
            </div>
            <span style={{ color: '#6E685A' }}>=</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: '#A6C97F' }}>18 870</div>
              <div style={{ fontSize: 10, color: '#8B8474' }}>мощность</div>
            </div>
            <div style={{ width: 1, height: 34, background: 'rgba(255,255,255,.12)', margin: '0 4px' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: '#E8C97F' }}>30.06</div>
              <div style={{ fontSize: 10, color: '#8B8474' }}>очередь готова</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
        {tabs.map((t) => (
          <div
            key={t.k}
            onClick={() => setFilter(t.k)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              height: 34,
              padding: '0 13px',
              borderRadius: 9,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
              background: t.tbg,
              color: t.tcolor,
              border: `1px solid ${t.tborder}`,
            }}
          >
            {t.label}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                fontWeight: 600,
                padding: '1px 6px',
                borderRadius: 20,
                background: t.tcbg,
                color: t.tccolor,
              }}
            >
              {t.c}
            </span>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '13px 16px', fontWeight: 500 }}>Заказ</th>
              <th style={{ padding: '13px 12px', fontWeight: 500 }}>Клиент</th>
              <th style={{ padding: '13px 12px', fontWeight: 500 }}>Дата отгрузки</th>
              <th style={{ padding: '13px 12px', fontWeight: 500, textAlign: 'center' }}>Товар</th>
              <th style={{ padding: '13px 12px', fontWeight: 500, textAlign: 'center' }}>Упаковка</th>
              <th style={{ padding: '13px 12px', fontWeight: 500 }}>Статус</th>
              <th style={{ padding: '13px 12px', fontWeight: 500 }}>Что сделать</th>
              <th style={{ padding: '13px 16px', fontWeight: 500 }}></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} onClick={() => onOpenDrawer(o.id)} style={{ borderTop: '1px solid var(--line-soft)', cursor: 'pointer' }}>
                <td style={{ padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>{o.id}</td>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>{o.cl}</td>
                <td style={{ padding: '14px 12px', color: '#5A5448', fontSize: 12.5 }}>{o.date}</td>
                <td style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <Icon name={o.goodsIcon} size={20} color={o.goodsColor} />
                </td>
                <td style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <Icon name={o.packIcon} size={20} color={o.packColor} />
                </td>
                <td style={{ padding: '14px 12px' }}>
                  <StatusPill label={o.stLabel} bg={o.stBg} color={o.stColor} />
                </td>
                <td style={{ padding: '14px 12px', color: '#5A5448', fontSize: 12.5 }}>{o.todo}</td>
                <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                  <Icon name="chevron_right" size={20} color="#B4AD9C" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, fontSize: 12.5, color: '#8C8576' }}>
        <Icon name="lightbulb" size={17} color="var(--apple)" />
        Сигналы: <span style={{ color: 'var(--green)', fontWeight: 600 }}>зелёный</span> — обеспечено,{' '}
        <span style={{ color: 'var(--amber)', fontWeight: 600 }}>янтарный</span> — упаковка на грани,{' '}
        <span style={{ color: 'var(--red)', fontWeight: 600 }}>красный</span> — нехватка товара. Кликните строку, чтобы открыть карточку заказа.
      </div>
    </div>
  );
}
