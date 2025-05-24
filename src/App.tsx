import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessPage from './pages/BusinessPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/francopizzas" element={<BusinessPage />} />
    </Routes>
  );
}

export default App;