import React from 'react';
import styles from '../styles/CarCard.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function CarCard({ car }) {
  return (
    <div className={styles.card}>
      {car.image_url && (
        <img
          className={styles.cardImage}
          src={`http://localhost:8080${car.image_url}`}
          alt={car.name}
        />
      )}
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{car.name}</h1>
        <hr />
        <p><strong style={{ marginRight: '4px' }}>Câmbio:</strong> {car.transmission_type}</p>
        <p><strong style={{ marginRight: '4px' }}>KM:</strong> {car.mileage}</p>
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.moreBtn}>Ver mais</button>
        <a
          href={`https://wa.me/55SEUNUMERO?text=Olá, tenho interesse no ${car.name}`}
          target="_blank"
          // rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          <FaWhatsapp size={18} className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </a>
      </div>
    </div>
  );
}

export default CarCard;
