import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import { getCars } from '../providers/carsProvider';
import styles from '../styles/Home.module.css';

function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
      const [filteredCars, setFilteredCars] = useState([]);
    const [search, setSearch] = useState('');


  useEffect(() => {
    getCars()
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao carregar carros.');
        setLoading(false);
      });
  }, []);
      useEffect(() => {
      if (!search) {
        setFilteredCars(cars);
      } else {
        setFilteredCars(
          cars.filter(car =>
            car.name.toLowerCase().includes(search.toLowerCase()) ||
            car.license_plate.toLowerCase().includes(search.toLowerCase()) ||
            car.color.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    }, [search, cars]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Pesquisar carros por nome, placa ou cor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.input}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.cardsWrapper}>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );


}

export default Home;
