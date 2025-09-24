import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../providers/userApi';
import { setUserData } from '../../store/userSlice';
import styles from '../../styles/CreateUser.module.css';
function CreateUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user.userData);  
    await createUser(user.userData)
      .then(() => {
        dispatch(setUserData({ name: '', email: '', password: '', role: '' }));
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Criar Usuário</h2>
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
          <div style={{ marginBottom: 22 }}>
            <select
              defaultValue={user.userData.role}
              onChange={e => dispatch(setUserData({ ...user.userData, role: e.target.value }))}
              required
              className={styles.select}
            >
              <option value="admin">Dono/Administrador</option>
              <option value="estoquista">Estoquista</option>
              <option value="vendedor">Vendedor</option>
              <option value="mecanico">Mecânico</option>
              <option value="cliente">Cliente (site)</option>
            </select>
          </div>
          <button
            type="submit"
            className={styles.button}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;