import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import ProductPage from '../components/ProductPage/ProductPage';
import ContactPage from '../components/ContactPage/ContactPage';
import AboutPage from '../components/AboutPage/AboutPage';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/product" exact element={<ProductPage />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="/about" exact element={<AboutPage />} />
    </Routes>
  );
};

export default RoutesPages;
