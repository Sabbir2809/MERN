import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const UserBlogs = () => {
  // react state
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const id = localStorage.getItem('userId');
        const { data } = await axios.get(`http://localhost:8000/api/v1/blog/user-blog/${id}`);
        if (data.success) {
          setBlogs(data?.data?.blogs);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <>
      {blogs ? (
        <div className='containerCard'>
          {blogs.map((blog) => (
            <div className='card' key={blog._id}>
              <BlogCard blog={blog} isUser={localStorage.getItem('userId') === blog?.user} />
            </div>
          ))}
        </div>
      ) : (
        <h2 className='text-center text-success mt-4'>You have created a New Blog</h2>
      )}
    </>
  );
};

export default UserBlogs;
