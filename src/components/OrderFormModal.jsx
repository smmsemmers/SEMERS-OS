import { useState } from 'react';
import Icon from './ui/Icon';
import { C } from '../theme';
import { formComp } from '../data/orderForm';

function Field({ label, required, children }) {
  return (
    <div>
      <label style={{ fontSize: 11.5, color: '#7C7565', fontWeight: 500, display: 'block', marginBottom: 5 }}>
        {label} {required && <span style={{ color: 'var(--red)' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function StaticInput({ children, muted, error, icon }) {
  return (
    <div
      style={{
        height: 38,
        border: error ? '1.5px solid var(--red)' : '1px solid var(--input-border)',
        borderRadius: 8,
        background: muted ? '#F0ECE3' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: icon ? 'space-between' : 'flex-start',
        padding: '0 11px',
        fontSize: 13,
        color: muted ? 'var(--sub)' : error ? 'var(--mut)' : 'inherit',
        gap: 7,
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>{children}</span>
      {icon && <Icon name={icon} size={18} color={error ? 'var(--red)' : '#A79F8E'} />}
    </div>
  );
}

export default function OrderFormModal({ onClose }) {
  const [checked, setChecked] = useState(false);

  const checkBg = checked ? C.greenSoft : '#fff';
  const checkBorder = checked ? '#BBD4A3' : 'var(--input-border)';
  const checkColor = checked ? C.greenInk : '#5A5448';
  const checkLabel = checked ? 'Остатки проверены · 1 дефицит' : 'Проверить остатки';
  const checkIcon = checked ? 'fact_check' : 'inventory';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 20px', overflowY: 'auto' }}>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim-modal)', animation: 'scl-overlay .2s ease both' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 1000, background: '#F7F5F0', borderRadius: 16, boxShadow: 'var(--shadow-modal)', overflow: 'hidden' }}>
        <div style={{ padding: '20px 26px', background: '#fff', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="add_shopping_cart" size={20} color="var(--green)" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Приём заказа</h2>
            <div style={{ fontSize: 12, color: 'var(--mut)' }}>Единая точка входа — чистые данные с первого касания</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--amber-ink)', background: 'var(--amber-soft)', padding: '3px 10px', borderRadius: 20 }}>
            ЧЕРНОВИК
          </span>
          <div style={{ flex: 1 }} />
          <Icon name="close" size={24} color="var(--mut)" style={{ cursor: 'pointer' }} onClick={onClose} />
        </div>

        <div style={{ padding: '24px 26px', maxHeight: 'calc(100vh - 220px)', overflowY: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 14 }}>ПАРАМЕТРЫ ЗАКАЗА</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px 16px', marginBottom: 8 }}>
            <Field label="Order ID">
              <StaticInput muted>2026-0001</StaticInput>
            </Field>
            <Field label="Клиент" required>
              <StaticInput icon="expand_more">futurus food</StaticInput>
            </Field>
            <Field label="Менеджер" required>
              <StaticInput icon="expand_more" error>
                Не выбран
              </StaticInput>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: 'var(--red)' }}>
                <Icon name="error" size={14} />
                Обязательное поле — назначьте владельца
              </div>
            </Field>
            <Field label="Канал заказа">
              <StaticInput icon="expand_more">Почта</StaticInput>
            </Field>

            <Field label="Страна / рынок">
              <StaticInput icon="expand_more">Латвия</StaticInput>
            </Field>
            <Field label="Дата приёма">
              <StaticInput icon="calendar_today">26.06.2026</StaticInput>
            </Field>
            <Field label="Плановая отгрузка" required>
              <StaticInput icon="calendar_today">28.06.2026</StaticInput>
            </Field>
            <Field label="Факт. отгрузка">
              <StaticInput muted>—</StaticInput>
            </Field>

            <Field label="Сумма инвойса">
              <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 11px', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                4 280.00
              </div>
            </Field>
            <Field label="Валюта">
              <StaticInput icon="expand_more">EUR</StaticInput>
            </Field>
            <Field label="Статус заказа">
              <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', gap: 7, padding: '0 11px', fontSize: 13 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--slate)' }} />
                Принят
              </div>
            </Field>
            <Field label="Статус оплаты">
              <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', gap: 7, padding: '0 11px', fontSize: 13 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)' }} />
                Не оплачен
              </div>
            </Field>

            <Field label="Дата оплаты">
              <StaticInput muted>—</StaticInput>
            </Field>
            <Field label="Тип проблемы">
              <StaticInput icon="expand_more">Нехватка товара</StaticInput>
            </Field>
            <Field label="Ответств. за склад">
              <StaticInput>Михаил</StaticInput>
            </Field>
            <Field label="Ответств. за упаковку">
              <StaticInput>Владислав</StaticInput>
            </Field>

            <div style={{ gridColumn: 'span 2' }}>
              <Field label="Ссылка на бланк заказа">
                <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', gap: 7, padding: '0 11px', fontSize: 13, color: 'var(--green)' }}>
                  <Icon name="link" size={17} />
                  order_2026-0001.pdf
                </div>
              </Field>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <Field label="Примечание">
                <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 11px', fontSize: 13, color: '#5A5448' }}>
                  сетевой, ~300 магазинов Maxima
                </div>
              </Field>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '22px 0 12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E' }}>СОСТАВ ЗАКАЗА</span>
            <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
            <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="add" size={16} />
              Добавить SKU
            </span>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
              <thead>
                <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 10.5, letterSpacing: '.3px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
                  <th style={{ padding: '10px 12px', fontWeight: 500 }}>SKU</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Штрихкод</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Вариант</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500, textAlign: 'right' }}>Кол-во</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Упаковка</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Язык</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500 }}>Стикеры</th>
                  <th style={{ padding: '10px 8px', fontWeight: 500, textAlign: 'center' }}>Шоубокс</th>
                  <th style={{ padding: '10px 12px', fontWeight: 500 }}>Остаток</th>
                </tr>
              </thead>
              <tbody>
                {formComp.map((r, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '11px 12px', fontWeight: 600 }}>{r.sku}</td>
                    <td style={{ padding: '11px 8px', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#8C8576' }}>{r.bc}</td>
                    <td style={{ padding: '11px 8px', color: '#5A5448' }}>{r.variant}</td>
                    <td style={{ padding: '11px 8px', textAlign: 'right' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, border: `1px solid ${r.qtyBorder}`, borderRadius: 6, padding: '3px 8px', display: 'inline-block' }}>
                        {r.qty}
                      </span>
                    </td>
                    <td style={{ padding: '11px 8px', color: '#5A5448' }}>{r.pack}</td>
                    <td style={{ padding: '11px 8px', color: '#5A5448' }}>{r.lang}</td>
                    <td style={{ padding: '11px 8px', color: '#5A5448' }}>{r.stick}</td>
                    <td style={{ padding: '11px 8px', textAlign: 'center', fontFamily: 'var(--font-mono)', color: '#5A5448' }}>{r.show}</td>
                    <td style={{ padding: '11px 12px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <Icon name={r.mark} size={17} color={r.mc} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--sub)' }}>
                          {r.stock} · {r.note}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 11, color: 'var(--mut)', marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
            <Icon name="info" size={15} color="var(--apple)" />
            Метаданные обновления заполнятся автоматически: «Кто обновил» и «Дата последнего обновления».
          </div>
        </div>

        <div style={{ padding: '16px 26px', background: '#fff', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => setChecked(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              height: 40,
              padding: '0 16px',
              borderRadius: 9,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              background: checkBg,
              border: `1px solid ${checkBorder}`,
              color: checkColor,
            }}
          >
            <Icon name={checkIcon} size={18} />
            {checkLabel}
          </button>
          <div style={{ flex: 1 }} />
          <button
            onClick={onClose}
            style={{ height: 40, padding: '0 18px', borderRadius: 9, border: '1px solid var(--input-border)', background: '#fff', color: '#5A5448', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
          >
            Сохранить черновик
          </button>
          <button
            style={{ height: 40, padding: '0 22px', borderRadius: 9, border: 'none', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer', opacity: 0.55 }}
          >
            Создать заказ
          </button>
        </div>
      </div>
    </div>
  );
}
