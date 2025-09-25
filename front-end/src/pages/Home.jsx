import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import { getCars } from '../providers/carsProvider';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setVehicles, setFilter } from '../store/catalogSlice';
function Home() {
  const [error, setError] = useState('');
  const vehicles = useSelector((state) => state.catalog.vehicles);
  const filter = useSelector((state) => state.catalog.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    // Busca inicial e sempre que o filtro mudar
    const params = filter.value ? { search: filter.value } : {};
    getCars(params)
      .then(data => {
        dispatch(setVehicles(data));
      })
      .catch(() => {
        setError('Erro ao carregar carros.');
      });
  }, [filter]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Pesquisar carros por nome, ou cor..."
            onChange={e => dispatch(setFilter({ value: e.target.value }))}
            className={styles.input}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.cardsWrapper}>
          {vehicles.length === 0 && !error ? (
            <div style={{ color: '#888', fontSize: 20, margin: '40px auto', textAlign: 'center', width: '100%' }}>
              Não temos nada no estoque ...
            </div>
          ) : (
            vehicles.map(car => (
              <CarCard key={car.id} car={car} />
            ))
          )}
        </div>
      </div>
    </>
  );


}

export default Home;
