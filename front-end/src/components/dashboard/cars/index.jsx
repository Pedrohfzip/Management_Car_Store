import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarCard from '../../CarCard';
import CreateCar from './createCar';
import styles from '../../../styles/CreateCar.module.css';
import { getCars } from '../../../providers/carsProvider';
import { setVehicles, setFilter } from '../../../store/catalogSlice';
import { useNavigate } from 'react-router-dom';

function CarsDashboard() {
  const [showCreate, setShowCreate] = useState(false);
  const vehicles = useSelector((state) => state.catalog.vehicles);
  const filter = useSelector((state) => state.catalog.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = filter.value ? { search: filter.value } : {};
    getCars(params)
      .then(data => {
        dispatch(setVehicles(data));
      })
      .catch(() => {
        // erro opcional
      });
  }, [filter, showCreate]);

  const handleCreateCar = () => {
    navigate('/cars/createCar');
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 18, padding: 20 }}>
        <button
          className={styles.button}
          style={{ fontSize: 14, padding: '6px 16px', borderRadius: 8, minWidth: 0, width: 'auto' }}
          onClick={handleCreateCar}
        >
          + Criar Carro
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Pesquisar carros por nome, cor, placa, etc..."
          onChange={e => dispatch(setFilter({ value: e.target.value }))}
          style={{ width: 320, padding: '10px 18px', borderRadius: 30, border: '1.5px solid #2575fc', fontSize: 16, outline: 'none', boxShadow: '0 2px 12px rgba(37,117,252,0.08)' }}
        />
      </div>
      {showCreate && (
        <CreateCar onClose={() => setShowCreate(false)} />
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {vehicles.length === 0 ? (
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
  );
}

export default CarsDashboard;
