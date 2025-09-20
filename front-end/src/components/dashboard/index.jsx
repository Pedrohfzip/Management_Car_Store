import React from 'react';
import { useSelector } from 'react-redux';

const sidebarOptions = [
	{ label: 'Dashboard', icon: '🏠' },
	{ label: 'Cars', icon: '🚗' },
	{ label: 'Users', icon: '👥' },
	{ label: 'Sales', icon: '💰' },
	{ label: 'Reports', icon: '📊' },
	{ label: 'Settings', icon: '⚙️' },
];

function Dashboard() {
	const user = useSelector((state) => state.user.userLogged);

	return (
		<div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6fa' }}>
			{/* Sidebar */}
			<aside style={{
				width: 220,
				background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
				color: '#fff',
				display: 'flex',
				flexDirection: 'column',
				padding: '32px 0',
				boxShadow: '2px 0 8px rgba(0,0,0,0.06)',
			}}>
				<div style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center', marginBottom: 32 }}>
					FleetManager
				</div>
				<nav style={{ flex: 1 }}>
					{sidebarOptions.map(opt => (
						<div key={opt.label} style={{
							display: 'flex',
							alignItems: 'center',
							padding: '12px 32px',
							cursor: 'pointer',
							fontSize: 17,
							transition: 'background 0.2s',
							borderLeft: '4px solid transparent',
						}}
						onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
						onMouseOut={e => e.currentTarget.style.background = 'none'}
						>
							<span style={{ marginRight: 14 }}>{opt.icon}</span> {opt.label}
						</div>
					))}
				</nav>
			</aside>

			{/* Main content */}
			<main style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column' }}>
				{/* Topbar */}
				<div style={{
					height: 64,
					background: '#fff',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					padding: '0 32px',
					boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
				}}>
					<span style={{ color: '#2575fc', fontWeight: 600, fontSize: 17 }}>
						{user && user.name ? user.name : 'Usuário'}
					</span>
				</div>
				{/* Conteúdo principal */}
				<div style={{ flex: 1, padding: 40 }}>
					<h2>Bem-vindo ao Dashboard!</h2>
					<p>Este é um protótipo de layout com sidebar e topbar.</p>
				</div>
			</main>
		</div>
	);
}

export default Dashboard;
