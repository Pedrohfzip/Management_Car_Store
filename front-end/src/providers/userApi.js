import api from './apiInstance';

function getUsers() {
  return api.get('/users').then(res => res.data);
}


function createUser(userData) {
  return api.post('/users', userData).then(res => res.data);
}

export { getUsers, createUser };

// Outras funções relacionadas a usuários podem ser adicionadas aqui
