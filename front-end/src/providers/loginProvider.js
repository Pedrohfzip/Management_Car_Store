import api from './apiInstance';

function login(data) {
  return api.post('/login/login', data).then(res =>  { 
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
    }
    return res.data;
  });
}




export { login };

// Outras funções relacionadas a usuários podem ser adicionadas aqui
