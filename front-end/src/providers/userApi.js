import api from './apiInstance';

function getUsers() {
  return api.get('/users/').then(res => res.data);
}

function createUser(userData) {
  console.log(userData);
  return api.post('/users/register', userData).then(res => res.data);
}

export { getUsers, createUser };

// Outras funções relacionadas a usuários podem ser adicionadas aqui
