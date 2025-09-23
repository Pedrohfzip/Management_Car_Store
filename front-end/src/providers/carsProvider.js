import api from './apiInstance';

function createCar(carData) {
  return api.post('/cars', carData).then(res => res.data);
}

function getCars() {
  return api.get('/cars').then(res => res.data);
}

export { createCar, getCars };

// Outras funções relacionadas a carros podem ser adicionadas aqui
