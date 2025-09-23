import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import { getCars } from '../providers/carsProvider';

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
      <div style={{ maxWidth: 1200, margin: '80px auto 0 auto', padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <input
              type="text"
              placeholder="Pesquisar carros por nome, placa ou cor..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className='mt-5'
              style={{
                width: 400,
                padding: '14px 20px',
                borderRadius: 30,
                border: '1.5px solid #2575fc',
                fontSize: 18,
                outline: 'none',
                boxShadow: '0 2px 12px rgba(37,117,252,0.08)',
                transition: 'border 0.2s',
                background: '#f9f9f9'
              }}
            />
          </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );


}

export default Home;
