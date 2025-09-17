import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';

function AboutRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      {/* Outras rotas do About podem ser adicionadas aqui */}
    </Routes>
  );
}

export default AboutRouter;
