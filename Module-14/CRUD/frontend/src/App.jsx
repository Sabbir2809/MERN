import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReadPage from './pages/ReadPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ReadPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/update' element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
