import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../providers/loginProvider';
import { useDispatch ,useSelector } from 'react-redux';
import { setUserDataLogged } from '../store/userSlice';
import Header from './Header';
import styles from '../styles/Login.module.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
      .then(data => {
        console.log('Login successful:', data.user);
        console.log(user.userLogged);
        dispatch(setUserDataLogged(data.user));
        navigate('/');
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Tratar erro de login
      });
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <Header />
      <div className={styles.loginBg}>
        <div className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Entrar no AutoCar</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <input
                type="email" 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div style={{ marginBottom: 22 }}>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <button
              type="submit"
              className={styles.button}
            >
              Entrar
            </button>
          </form>
          <button
            onClick={handleRegisterClick}
            className={styles.linkButton}
          >
            Não tem conta? Registrar-se
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;