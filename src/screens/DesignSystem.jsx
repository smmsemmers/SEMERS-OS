import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import StatusPill from '../components/ui/StatusPill';
import Tag from '../components/ui/Tag';
import { C, palette } from '../theme';

export default function DesignSystem() {
  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.4px', color: '#A79F8E', marginBottom: 5 }}>
          КОМПОНЕНТНАЯ СИСТЕМА · ОДИН ЯЗЫК НА ВСЕ ЭКРАНЫ
        </div>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 600, letterSpacing: '-.3px' }}>Design System</h1>
        <div style={{ fontSize: 13.5, color: 'var(--sub)', marginTop: 4 }}>
          IBM Plex Sans + Mono · тёплая палитра · светлый фон · смысловые цвета статусов.
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 20, marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 14 }}>
          ПАЛИТРА И СМЫСЛ ЦВЕТА
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12 }}>
          {palette.map((p, i) => (
            <div key={i}>
              <div style={{ height: 56, borderRadius: 10, background: p.c, border: '1px solid rgba(0,0,0,.05)' }} />
              <div style={{ fontSize: 12, fontWeight: 600, marginTop: 8 }}>{p.n}</div>
              <div style={{ fontSize: 10.5, color: 'var(--mut)' }}>{p.r}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 20 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 14 }}>КНОПКИ</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 20 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 14 }}>
            STATUS PILLS · TAGS
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <StatusPill label="Норма" bg={C.greenSoft} color={C.greenInk} />
            <StatusPill label="Внимание" bg={C.amberSoft} color={C.amberInk} />
            <StatusPill label="Критично" bg={C.redSoft} color={C.redInk} />
            <StatusPill label="В работе" bg={C.slateSoft} color={C.slateInk} />
            <Tag>35 г</Tag>
            <Tag>Флоупак</Tag>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 20 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 14 }}>
            ПОЛЯ ВВОДА · DROPDOWN · ВАЛИДАЦИЯ
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 11px', fontSize: 13, color: 'var(--mut)' }}>
              Текстовое поле
            </div>
            <div style={{ height: 38, border: '1px solid var(--input-border)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 11px', fontSize: 13 }}>
              <span>Dropdown</span>
              <Icon name="expand_more" size={18} color="#A79F8E" />
            </div>
            <div>
              <div style={{ height: 38, border: '1.5px solid var(--red)', borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 11px', fontSize: 13, color: 'var(--mut)' }}>
                Поле с ошибкой
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: 'var(--red)' }}>
                <Icon name="error" size={14} />
                Обязательное поле
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 20 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '1px', color: '#A79F8E', marginBottom: 14 }}>
            ALERT BLOCKS · EMPTY STATE
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '11px 13px', background: C.redSoft, borderRadius: 10, marginBottom: 10 }}>
            <Icon name="error" size={18} color={C.red} />
            <span style={{ fontSize: 12.5, color: C.redInk, fontWeight: 500 }}>Критичный алерт — требует действия сегодня</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 18, border: '1px dashed #D9D2C4', borderRadius: 10, textAlign: 'center' }}>
            <Icon name="inbox" size={28} color="#C3BCAC" />
            <div style={{ fontSize: 12.5, color: 'var(--mut)', marginTop: 6 }}>Нет данных по фильтру</div>
          </div>
        </div>
      </div>
    </div>
  );
}
