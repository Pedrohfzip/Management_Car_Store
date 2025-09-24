


import { useSelector, useDispatch } from 'react-redux';
import { setUserDataLogged } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import React, { useEffect, useState } from 'react';

function Header() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.userLogged);
	const dispatch = useDispatch();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 60);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		dispatch(setUserDataLogged({}));
		navigate('/login');
	};

	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 700);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 700);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Fecha menu ao navegar
	useEffect(() => { setMenuOpen(false); }, [window.location.pathname]);

	return (
		<>
			{/* Banner visual atrás do header, só na Home */}
			{window.location.pathname === '/' && (
				<div className={styles.bannerBg}>
					<img src="/banner.jpg" alt="Banner" className={styles.bannerImg} />
				</div>
			)}
			<header className={scrolled ? styles.headerSolid : styles.headerTransparent}>
				<div className={styles.logo} onClick={() => navigate('/')}
					style={isMobile ? { margin: 0, justifyContent: 'flex-start' } : {}}>
					<img
						src={process.env.PUBLIC_URL + '/logo.png'}
						alt="AutoCarStore"
						style={{ cursor: 'pointer', width: 140 }}
						onClick={() => navigate('/')}
					/>
				</div>
				{/* Mobile: menu hamburguer */}
				{isMobile ? (
					<div className={styles.menuWrapper}>
						<button
							className={styles.menuButton}
							onClick={() => setMenuOpen((v) => !v)}
							aria-label="Abrir menu"
						>
							<span className={styles.menuIcon}>
								<span></span>
								<span></span>
								<span></span>
							</span>
						</button>
						{menuOpen && (
							<div className={styles.menuDropdown}>
								{user && user.name ? (
									<>
										<span className={styles.userName}>{user.name}</span>
										<button onClick={() => navigate('/dashboard')} className={styles.menuItem}>Dashboard</button>
										<button onClick={handleLogout} className={styles.menuItem}>Sair</button>
									</>
								) : (
									<>
										<button onClick={() => navigate('/login')} className={styles.menuItem}>Login</button>
										<button onClick={() => navigate('/register')} className={styles.menuItem}>Registrar</button>
									</>
								)}
							</div>
						)}
					</div>
				) : (
					<div>
						{user && user.name ? (
							<>
								<span className={styles.userName}>{user.name}</span>
								<button
									onClick={() => navigate('/dashboard')}
									className={`${styles.button} ${styles.dashboardBtn}`}
								>
									Dashboard
								</button>
								<button
									onClick={handleLogout}
									className={`${styles.button} ${styles.logoutBtn}`}
								>
									Sair
								</button>
							</>
						) : (
							<>
								<button
									onClick={() => navigate('/login')}
									className={`${styles.button} ${styles.loginBtn}`}
								>
									Login
								</button>
								<button
									onClick={() => navigate('/register')}
									className={`${styles.button} ${styles.registerBtn}`}
								>
									Registrar
								</button>
							</>
						)}
					</div>
				)}
			</header>
		</>
	);
}

export default Header;
