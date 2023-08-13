import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import UserBlogs from './pages/UserBlogs';
import CreateBlog from './pages/CreateBlog';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-blogs' element={<UserBlogs />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
