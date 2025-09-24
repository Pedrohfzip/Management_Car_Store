import React from 'react';
import styles from '../styles/CarCard.module.css';


function CarCard({ car }) {
  return (
    <div className={styles.card}>
      {car.image_url && (
        <img
          className={styles.cardImage}
          src={car.image_url.startsWith('http') ? car.image_url : `http://localhost:8080${car.image_url}`}
          alt={car.name}
        />
      )}
      <h3 className={styles.cardTitle}>{car.name}</h3>
      <div className={styles.cardInfo}>
        <strong>Placa:</strong> {car.license_plate}
      </div>
      <div className={styles.cardInfo}>
        <strong>Cor:</strong> {car.color}
      </div>
      <div className={styles.cardInfo}>
        <strong>Câmbio:</strong> {car.transmission_type}
      </div>
      <div className={styles.cardInfo}>
        <strong>Combustível:</strong> {car.fuel_type}
      </div>
      <div className={styles.cardInfo}>
        <strong>Portas:</strong> {car.doors}
      </div>
      <div className={styles.cardInfo}>
        <strong>Quilometragem:</strong> {car.mileage} km
      </div>
    </div>
  );
}

export default CarCard;
