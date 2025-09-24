import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // Altere para a URL da sua API se necessário
});


// Adiciona o token JWT em todas as requisições, se existir
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
