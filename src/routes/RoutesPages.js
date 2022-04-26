import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import ProductPage from '../components/ProductPage/ProductPage';
import ContactPage from '../components/ContactPage/ContactPage';
import AboutPage from '../components/AboutPage/AboutPage';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/product" exact element={<ProductPage />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="/about" exact element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesPages;
