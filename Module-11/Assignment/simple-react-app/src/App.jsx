import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Header title={'Simple React Apps'} />
      <Content />
      <Footer />
    </main>
  );
};

export default App;
