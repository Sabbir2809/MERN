import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/authSlice';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  // redux global state
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  // react state
  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    dispatch(logout());
    Swal.fire('Logout Successfully');
    navigate('/');
  };

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
            {isLogin && (
              <>
                <NavLink className='nav-link' to='/blogs'>
                  Blogs
                </NavLink>
                <NavLink className='nav-link' to='/my-blogs'>
                  My Blogs
                </NavLink>
              </>
            )}
          </Nav>
          <Nav>
            {!isLogin && (
              <>
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
                <NavLink className='nav-link' to='/register'>
                  Register
                </NavLink>
              </>
            )}
            {isLogin && (
              <NavLink onClick={handleLogout} className='nav-link' to='/logout'>
                Logout
              </NavLink>
            )}
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
