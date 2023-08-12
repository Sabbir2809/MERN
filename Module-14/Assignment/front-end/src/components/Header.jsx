import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link className='nav-link' to='/'>
            Blog App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/'>
              Blogs
            </NavLink>
            <NavLink className='nav-link' to='/create-blog'>
              My Blogs
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
            <NavLink className='nav-link' to='/register'>
              Register
            </NavLink>
            <NavLink className='nav-link' to='/logout'>
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

{
  /* <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link className='nav-link' to='/'>
            MERN CURD PROJECT
          </Link>
        </Navbar.Brand>
        <Nav className='me-auto '>
          <NavLink className='nav-link' to='/login'>
            Login
          </NavLink>
          <NavLink className='nav-link' to='/register'>
            Register
          </NavLink>
          <NavLink className='nav-link' to='/logout'>
            Logout
          </NavLink>
        </Nav>
      </Container>
    </Navbar> */
}
