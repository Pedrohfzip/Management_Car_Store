

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
					background: 'transparent',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '3rem 2rem',
					boxShadow: '0 2px 8px rgba(215, 215, 215, 0.05)',
					zIndex: 1000,
				}}
			>
					<div >
						<img
							src={process.env.PUBLIC_URL + '/logo.png'}
							alt="AutoCarStore"
							style={{ cursor: 'pointer', width: 140 }}
							onClick={() => navigate('/')}
						/>
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
