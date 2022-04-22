import Navigation from '../HomePage/Navigation';
import ContactForm from './ContactForm';
import Footer from '../HomePage/Footer';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Page';
  }, []);
  return (
    <>
      <Navigation />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
