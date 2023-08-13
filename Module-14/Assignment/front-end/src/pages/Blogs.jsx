import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  // react state
  const [blogs, setBlogs] = useState([]);

  // get blogs
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/v1/blog/all-blog');
        if (data?.success) {
          setBlogs(data?.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);
  return (
    <>
      {blogs && (
        <div className='containerCard'>
          {blogs.map((blog) => (
            <div className='card' key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
