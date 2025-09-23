import React from 'react';


function CarCard({ car }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      padding: 20,
      margin: 12,
      minWidth: 260,
      maxWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center',
    }}>
      {car.image_url && (
        <img
          src={car.image_url}
          alt={car.name}
          style={{ width: '100%', maxHeight: 160, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }}
        />
      )}
      <h3 style={{ color: '#2575fc', margin: 0 }}>{car.name}</h3>
      <div style={{ fontSize: 15, color: '#444' }}>
        <strong>Placa:</strong> {car.license_plate}
      </div>
      <div style={{ fontSize: 15 }}>
        <strong>Cor:</strong> {car.color}
      </div>
      <div style={{ fontSize: 15 }}>
        <strong>Câmbio:</strong> {car.transmission_type}
      </div>
      <div style={{ fontSize: 15 }}>
        <strong>Combustível:</strong> {car.fuel_type}
      </div>
      <div style={{ fontSize: 15 }}>
        <strong>Portas:</strong> {car.doors}
      </div>
      <div style={{ fontSize: 15 }}>
        <strong>Quilometragem:</strong> {car.mileage} km
      </div>
    </div>
  );
}

export default CarCard;
