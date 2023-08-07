import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <NavLink className='nav-link' to='/'>
            MERN CURD PROJECT
          </NavLink>
        </Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink className='nav-link' to='/'>
            Read
          </NavLink>
          <NavLink className='nav-link' to='/create'>
            Create
          </NavLink>
          <NavLink className='nav-link' to='/update'>
            Update
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
