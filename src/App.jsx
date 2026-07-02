import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import OrderDrawer from './components/OrderDrawer';
import OrderFormModal from './components/OrderFormModal';
import CommandCenter from './screens/CommandCenter';
import Warehouse from './screens/Warehouse';
import Supply from './screens/Supply';
import Production from './screens/Production';
import Logistics from './screens/Logistics';
import Payments from './screens/Payments';
import DataQuality from './screens/DataQuality';
import Orders from './screens/Orders';
import Clients from './screens/Clients';
import Sku from './screens/Sku';
import Settings from './screens/Settings';
import DesignSystem from './screens/DesignSystem';

const SCREENS = {
  command: CommandCenter,
  orders: Orders,
  warehouse: Warehouse,
  supply: Supply,
  production: Production,
  logistics: Logistics,
  payments: Payments,
  dataquality: DataQuality,
  clients: Clients,
  sku: Sku,
  settings: Settings,
  uikit: DesignSystem,
};

export default function App() {
  const [screen, setScreen] = useState('command');
  const [drawerOrderId, setDrawerOrderId] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const go = (key) => {
    setScreen(key);
    setDrawerOrderId(null);
  };

  const Screen = SCREENS[screen] || CommandCenter;

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', overflow: 'hidden', background: 'var(--app-bg)' }}>
      <Sidebar screen={screen} onNav={go} />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
        <Topbar screen={screen} onCreateOrder={() => setFormOpen(true)} />

        <div style={{ flex: 1, overflowY: 'auto', padding: '26px 30px 60px' }}>
          <Screen onNav={go} onOpenDrawer={setDrawerOrderId} />
        </div>
      </main>

      {drawerOrderId && <OrderDrawer orderId={drawerOrderId} onClose={() => setDrawerOrderId(null)} />}
      {formOpen && <OrderFormModal onClose={() => setFormOpen(false)} />}
    </div>
  );
}
