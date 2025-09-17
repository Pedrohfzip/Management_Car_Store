import api from './apiInstance';

export function getPosts() {
  return api.get('/posts').then(res => res.data);
}

// Outras funções relacionadas a posts podem ser adicionadas aqui
