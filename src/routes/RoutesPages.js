import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
    </Routes>
  );
};

export default RoutesPages;
