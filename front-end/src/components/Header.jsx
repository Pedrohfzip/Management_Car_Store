
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();

	return (
		<header
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: 64,
				background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '0 2rem',
				boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
				zIndex: 1000,
			}}
		>
			{/* Logo à esquerda */}
			<div
				style={{
					color: '#fff',
					fontWeight: 'bold',
					fontSize: 24,
					letterSpacing: 1,
					cursor: 'pointer',
				}}
				onClick={() => navigate('/')}
			>
				FleetManager
			</div>

			{/* Botões à direita */}
			<div>
				<button
					onClick={() => navigate('/login')}
					style={{
						marginRight: 16,
						padding: '8px 20px',
						borderRadius: 8,
						border: 'none',
						background: '#fff',
						color: '#2575fc',
						fontWeight: 'bold',
						fontSize: 15,
						cursor: 'pointer',
						boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
						transition: 'background 0.2s',
					}}
				>
					Login
				</button>
				<button
					onClick={() => navigate('/register')}
					style={{
						padding: '8px 20px',
						borderRadius: 8,
						border: 'none',
						background: '#2575fc',
						color: '#fff',
						fontWeight: 'bold',
						fontSize: 15,
						cursor: 'pointer',
						boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
						transition: 'background 0.2s',
					}}
				>
					Registrar
				</button>
			</div>
		</header>
	);
}

export default Header;
