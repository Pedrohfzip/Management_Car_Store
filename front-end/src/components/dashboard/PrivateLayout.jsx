import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const sidebarOptions = [
  { label: 'Dashboard', icon: '🏠', path: '/dashboard' },
  { label: 'Cars', icon: '🚗', path: '/createCar' },
  { label: 'Users', icon: '👥', path: '/createUser' },
  { label: 'Sales', icon: '💰', path: '/sales' },
  { label: 'Reports', icon: '📊', path: '/reports' },
  { label: 'Settings', icon: '⚙️', path: '/settings' },
];

export default function PrivateLayout() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6fa' }}>
      <aside style={{ width: 220, color: '#fff', display: 'flex', background: '#23272F', flexDirection: 'column', padding: '32px 0', boxShadow: '2px 0 8px rgba(0,0,0,0.06)' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            alignSelf: 'flex-start',
            margin: '0 0 12px 18px',
            padding: '3px 12px',
            borderRadius: 6,
            border: 'none',
            background: '#fff',
            color: '#2575fc',
            fontWeight: 'bold',
            fontSize: 13,
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(37,117,252,0.08)',
            transition: 'background 0.2s',
            opacity: 0.85
          }}
        >
          ← Home
        </button>
        <div style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center', marginBottom: 32, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
          FleetManager
        </div>
        <nav style={{ flex: 1 }}>
          {sidebarOptions.map(opt => (
            <div key={opt.label} style={{ display: 'flex', alignItems: 'center', padding: '12px 32px', cursor: 'pointer', fontSize: 17 }}
              onClick={() => navigate(opt.path)}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseOut={e => e.currentTarget.style.background = 'none'}
            >
              <span style={{ marginRight: 14 }}>{opt.icon}</span> {opt.label}
            </div>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column', background: 'white' }}>
        <Outlet />
      </main>
    </div>
  );
}
