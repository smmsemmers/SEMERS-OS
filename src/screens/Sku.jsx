import StatusPill from '../components/ui/StatusPill';
import { skuRows } from '../data/sku';

export default function Sku() {
  return (
    <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          КАРТОЧКА ПРОДУКТА · ВЕРСИЯ УПАКОВКИ · ОСТАТОК
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>SKU / Номенклатура</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          Один объект на SKU: штук в коробке, актуальная упаковка, переводы — убирает возвраты по старой упаковке.
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--mut)', fontSize: 11, letterSpacing: '.4px', textTransform: 'uppercase', background: 'var(--header-bg)' }}>
              <th style={{ padding: '13px 18px', fontWeight: 500 }}>SKU</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Линейка</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Вкус</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Отгружено всего</th>
              <th style={{ padding: '13px 10px', fontWeight: 500, textAlign: 'right' }}>Остаток</th>
              <th style={{ padding: '13px 10px', fontWeight: 500 }}>Упаковка</th>
              <th style={{ padding: '13px 18px', fontWeight: 500 }}>Версия</th>
            </tr>
          </thead>
          <tbody>
            {skuRows.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '13px 18px', fontWeight: 600 }}>{r.sku}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)' }}>{r.line}</td>
                <td style={{ padding: '13px 10px', color: 'var(--sub)' }}>{r.fl}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--sub)' }}>{r.ship}</td>
                <td style={{ padding: '13px 10px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600 }}>{r.stock}</td>
                <td style={{ padding: '13px 10px', color: '#5A5448' }}>{r.pack}</td>
                <td style={{ padding: '13px 18px' }}>
                  <StatusPill label={r.ver} bg={r.verBg} color={r.verColor} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
