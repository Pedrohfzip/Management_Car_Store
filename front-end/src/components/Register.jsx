import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../providers/userApi';

import { setUserData } from '../store/userSlice';
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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    }}>
      <div 
        style={{
          background: '#fff',
          padding: '2.5rem 2.5rem 2rem 2.5rem',
          borderRadius: '20px',
          boxShadow: '0 6px 32px rgba(0,0,0,0.13)',
          minWidth: 340,
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 18
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#ff9966"/>
            <text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">TS</text>
          </svg>
        </div>
        <h2 style={{ color: '#ff5e62', marginBottom: 24, fontWeight: 700, fontSize: 28 }}>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <input
              type="text"
              placeholder="Nome completo"
              defaultValue={user.userData.name}
              onChange={e => dispatch(setUserData({ ...user.userData, name: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1.5px solid #ff9966',
                fontSize: 17,
                marginBottom: 6,
                background: '#f9f9f9',
                outline: 'none',
                transition: 'border 0.2s',
              }}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user.userData.email}
              onChange={e => dispatch(setUserData({ ...user.userData, email: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1.5px solid #ff9966',
                fontSize: 17,
                marginBottom: 6,
                background: '#f9f9f9',
                outline: 'none',
                transition: 'border 0.2s',
              }}
            />
          </div>
          <div style={{ marginBottom: 22 }}>
            <input
              type="password"
              placeholder="Senha"
              defaultValue={user.userData.password}
              onChange={e => dispatch(setUserData({ ...user.userData, password: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1.5px solid #ff9966',
                fontSize: 17,
                background: '#f9f9f9',
                outline: 'none',
                transition: 'border 0.2s',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 17,
              cursor: 'pointer',
              marginBottom: 16,
              boxShadow: '0 2px 8px rgba(255,153,102,0.10)'
            }}
          >
            Registrar
          </button>
        </form>
        <button
          onClick={() => navigate('/login')}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff5e62',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: 16,
            fontWeight: 500
          }}
        >
          Já tem conta? Entrar
        </button>
      </div>
    </div>
  );
}

export default Register;