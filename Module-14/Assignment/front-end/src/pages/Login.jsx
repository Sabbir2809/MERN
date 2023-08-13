import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/auth/authSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import './../assets/styles/form.css';

const Login = () => {
  // redux global State
  const dispatch = useDispatch();
  // react state
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    (async () => {
      try {
        const formBody = {
          email: inputs.email,
          password: inputs.password,
        };
        const { data } = await axios.post('http://localhost:8000/api/v1/user/login', formBody);
        if (data.success) {
          // get id localStorage
          localStorage.setItem('userId', data?.data?.id);
          // dispatch action
          dispatch(login());
          // alert
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'User Login Successfully',
            showConfirmButton: false,
            timer: 1000,
          });
          // navigate
          navigate('/blogs');
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  };

  return (
    <div className='Auth-form-container'>
      <form className='Auth-form' onSubmit={handleSubmit}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Login</h3>
          <div className='form-group mt-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              className='form-control mt-1'
              id='email'
              placeholder='Enter Your email'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={inputs.password}
              onChange={handleChange}
              className='form-control mt-1'
              id='password'
              placeholder='Enter  Your Password'
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
            <p className='text-center mt-2'>
              Not registered yet? <Link to='/register'> Please Register</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
