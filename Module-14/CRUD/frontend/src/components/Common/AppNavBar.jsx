import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link className='nav-link' to='/'>
            MERN CURD PROJECT
          </Link>
        </Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/create-product'>
            CreateProduct
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
