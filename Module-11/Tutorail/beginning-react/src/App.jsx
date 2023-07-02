import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: 'skyblue' }}>Beginning React.js</h1>
      <h2>Time: {new Date().getFullYear()}</h2>
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
