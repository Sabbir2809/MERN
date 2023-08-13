import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './../assets/styles/form.css';

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/v1/blog/get-blog/${id}`);
        if (data.success) {
          setBlog(data?.data);
          setInputs({
            title: data?.data?.title,
            description: data?.data?.description,
            image: data?.data?.image,
          });
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [id]);

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    (async () => {
      const formBody = {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      };
      try {
        const { data } = await axios.put(`http://localhost:8000/api/v1/blog/update-blog/${id}`, formBody);
        if (data?.success) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Blog Updated Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/my-blogs');
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  };

  return (
    <div className='Auth-form-container'>
      <form className='Auth-form' onSubmit={handleUpdate}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Update Blog</h3>
          <div className='form-group mt-3'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              value={inputs.title}
              onChange={handleChange}
              required
              id='title'
              className='form-control mt-1'
              placeholder='Blog title'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              name='description'
              value={inputs.description}
              onChange={handleChange}
              id='description'
              required
              className='form-control mt-1'
              placeholder='Blog Description'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='image'>Image</label>
            <input
              type='text'
              className='form-control mt-1'
              name='image'
              value={inputs.image}
              onChange={handleChange}
              id='image'
              required
              placeholder='Image URL'
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-warning'>
              Update Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogDetails;
