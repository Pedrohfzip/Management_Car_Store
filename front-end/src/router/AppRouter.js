import { BrowserRouter as Router } from 'react-router-dom';
import HomeRouter from './HomeRouter';

function AppRouter() {
  return (
    <Router>
      <HomeRouter />
    </Router>
  );
}

export default AppRouter;
