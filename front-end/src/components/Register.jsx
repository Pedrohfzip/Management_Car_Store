import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../providers/userApi';
import { setUserData } from '../store/userSlice';
import styles from '../styles/Register.module.css';
function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await createUser(user.userData)
      .then(() => {
        dispatch(setUserData({ name: '', email: '', password: '' }));
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
    navigate('/login');
  };

  return (
    <div className={styles.registerBg}>
      <div className={styles.registerBox}>
        <div className={styles.registerLogo}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#ff9966"/>
            <text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">TS</text>
          </svg>
        </div>
        <h2 className={styles.registerTitle}>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <input
              type="text"
              placeholder="Nome completo"
              defaultValue={user.userData.name}
              onChange={e => dispatch(setUserData({ ...user.userData, name: e.target.value }))}
              required
              className={styles.input}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user.userData.email}
              onChange={e => dispatch(setUserData({ ...user.userData, email: e.target.value }))}
              required
              className={styles.input}
            />
          </div>
          <div style={{ marginBottom: 22 }}>
            <input
              type="password"
              placeholder="Senha"
              defaultValue={user.userData.password}
              onChange={e => dispatch(setUserData({ ...user.userData, password: e.target.value }))}
              required
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
          >
            Registrar
          </button>
        </form>
        <button
          onClick={() => navigate('/login')}
          className={styles.linkButton}
        >
          Já tem conta? Entrar
        </button>
      </div>
    </div>
  );
}

export default Register;