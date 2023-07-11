import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  const api = {
    title: 'Beginning React.js',
    footerContent: 'All Rights Reserved',
  };

  const something = () => {
    alert('Hello Function');
  };

  return (
    <div>
      <Header api={api} />
      <Hero something={something} />
      <ContactForm />
      <Footer api={api} />
    </div>
  );
};

export default Home;
