import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
