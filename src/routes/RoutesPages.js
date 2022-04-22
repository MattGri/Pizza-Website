import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import ProductPage from '../components/ProductPage/ProductPage';
import ContactPage from '../components/ContactPage/ContactPage';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/product" exact element={<ProductPage />} />
      <Route path="/contact" exact element={<ContactPage />} />
    </Routes>
  );
};

export default RoutesPages;
