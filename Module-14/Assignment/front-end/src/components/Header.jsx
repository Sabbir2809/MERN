import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/authSlice';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  // redux global state
  let isLogin = useSelector((state) => state.auth.isLogin);
  isLogin = isLogin || localStorage.getItem('userId');
  const dispatch = useDispatch();

  // react state
  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    dispatch(logout());
    // alert
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Logout Successfully',
      showConfirmButton: false,
      timer: 1000,
    });
    navigate('/login');
    localStorage.clear();
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className='nav-link'>
            Blog App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            {isLogin && (
              <>
                <NavLink to='/blogs' className='nav-link'>
                  Blogs
                </NavLink>
                <NavLink to='/my-blogs' className='nav-link'>
                  My Blogs
                </NavLink>
                <NavLink to='/create-blog' className='nav-link'>
                  Create blog
                </NavLink>
              </>
            )}
          </Nav>
          <Nav>
            {!isLogin && (
              <>
                <NavLink to='/login' className='nav-link'>
                  Login
                </NavLink>
                <NavLink to='/register' className='nav-link'>
                  Register
                </NavLink>
              </>
            )}
            {isLogin && (
              <NavLink to={'/login'} onClick={handleLogout} className='nav-link'>
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
