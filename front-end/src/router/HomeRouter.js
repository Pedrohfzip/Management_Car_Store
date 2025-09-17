import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../components/Register';
import Login from '../components/Login';

function HomeRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      {/* Outras rotas da Home podem ser adicionadas aqui */}
    </Routes>
  );
}

export default HomeRouter;
