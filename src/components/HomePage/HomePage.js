import Navigation from './Navigation';
import MainPizza from './MainPizza';
import Footer from './Footer';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <>
      <Navigation />
      <MainPizza />
      <Footer />
    </>
  );
};

export default HomePage;
