import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './../assets/styles/form.css';

const Register = () => {
  // react state
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
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
      const formBody = {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      };
      try {
        const { data } = await axios.post('http://localhost:8000/api/v1/user/register', formBody);
        if (data.success) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Registration Successfully',
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/login');
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
          <h3 className='Auth-form-title'>Register</h3>
          <div className='form-group mt-3'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              value={inputs.username}
              onChange={handleChange}
              className='form-control mt-1'
              id='username'
              placeholder='Enter your username'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              className='form-control mt-1'
              id='email'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control mt-1'
              id='password'
              name='password'
              value={inputs.password}
              onChange={handleChange}
              placeholder='Enter your  password'
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
            <p className='text-center mt-2'>
              Already Register ?<Link to='/login'> Please Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
