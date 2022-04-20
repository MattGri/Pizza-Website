import Navigation from '../HomePage/Navigation';
import Menu from './Menu';
import Footer from '../HomePage/Footer';
import { useEffect } from 'react';

const ProductPage = () => {
  useEffect(() => {
    document.title = 'Product Page';
  }, []);
  return (
    <>
      <Navigation />
      <Menu />
      <Footer />
    </>
  );
};

export default ProductPage;
