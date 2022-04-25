import Navigation from '../HomePage/Navigation';
import AsidePizza from './AsidePizza';
import About from './About';
import Footer from '../HomePage/Footer';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Page';
  }, []);

  return (
    <>
      <Navigation />
      <AsidePizza />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
