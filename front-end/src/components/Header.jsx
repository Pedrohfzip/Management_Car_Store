

import { useSelector, useDispatch } from 'react-redux';
import { setUserDataLogged } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.userLogged);
	const dispatch = useDispatch();

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		dispatch(setUserDataLogged({}));
		navigate('/login');
	};

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

					{/* Botões de navegação centralizados */}
					<div style={{ display: 'flex', gap: 24 }}>
						<button
							onClick={() => navigate('/catalogo')}
							style={{
								background: 'none',
								border: 'none',
								color: '#fff',
								fontWeight: 500,
								fontSize: 16,
								cursor: 'pointer',
								padding: '8px 10px',
								transition: 'color 0.2s',
							}}
						>
							Catálogo
						</button>
						<button
							onClick={() => navigate('/empresa')}
							style={{
								background: 'none',
								border: 'none',
								color: '#fff',
								fontWeight: 500,
								fontSize: 16,
								cursor: 'pointer',
								padding: '8px 10px',
								transition: 'color 0.2s',
							}}
						>
							Empresa
						</button>
						<button
							onClick={() => navigate('/contato')}
							style={{
								background: 'none',
								border: 'none',
								color: '#fff',
								fontWeight: 500,
								fontSize: 16,
								cursor: 'pointer',
								padding: '8px 10px',
								transition: 'color 0.2s',
							}}
						>
							Contato
						</button>
					</div>

					{/* Botões à direita ou nome do usuário */}
					<div>
						{user && user.name ? (
							<>
								<span style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, marginRight: 10 }}>
									{user.name}
								</span>
								<button
									onClick={handleLogout}
									style={{
										padding: '6px 14px',
										borderRadius: 8,
										border: 'none',
										background: '#ff5e62',
										color: '#fff',
										fontWeight: 'bold',
										fontSize: 14,
										cursor: 'pointer',
										boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
										transition: 'background 0.2s',
									}}
								>
									Sair
								</button>
							</>
						) : (
							<>
								<button
									onClick={() => navigate('/login')}
									style={{
										marginRight: 8,
										padding: '6px 14px',
										borderRadius: 8,
										border: 'none',
										background: '#fff',
										color: '#2575fc',
										fontWeight: 'bold',
										fontSize: 14,
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
										padding: '6px 14px',
										borderRadius: 8,
										border: 'none',
										background: '#2575fc',
										color: '#fff',
										fontWeight: 'bold',
										fontSize: 14,
										cursor: 'pointer',
										boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
										transition: 'background 0.2s',
									}}
								>
									Registrar
								</button>
							</>
						)}
			</div>
		</header>
	);
}

export default Header;
