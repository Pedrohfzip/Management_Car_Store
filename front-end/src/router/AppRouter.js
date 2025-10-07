import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import CreateCar from '../components/dashboard/cars/createCar';
import { PrivateRoute } from './PrivateRoutes';
import PrivateLayout from '../components/dashboard/PrivateLayout';
import DashBoard from '../pages/DashBoard';
import CreateUser from '../components/dashboard/createUser';
import CarsDashboard from '../components/dashboard/cars';
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/cars" element={<CarsDashboard />} />
          <Route path="/cars/createCar" element={<CreateCar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
