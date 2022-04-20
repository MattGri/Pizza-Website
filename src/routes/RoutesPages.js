import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import ProductPage from '../components/ProductPage/ProductPage';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/product" exact element={<ProductPage />} />
    </Routes>
  );
};

export default RoutesPages;
