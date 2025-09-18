import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import { PrivateRoute } from './PrivateRoutes';
import DashBoard from '../pages/DashBoard';
import CreateUser from '../components/createUser';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
