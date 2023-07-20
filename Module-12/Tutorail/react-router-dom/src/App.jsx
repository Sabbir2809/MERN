import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
