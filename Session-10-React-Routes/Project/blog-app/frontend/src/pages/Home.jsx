import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ blogs }) => {

  return (

    <div className="container mx-auto py-6">

      <h2 className="text-2xl font-bold mb-4">Blog List</h2>

      <div className="space-y-4">

        {blogs.map((blog) => (

          <div key={blog.id} className="p-4 bg-white shadow rounded">

            <h3 className="text-xl font-semibold">{blog.title}</h3>

            <p className="text-gray-600">Author: {blog.author}</p>

            <Link
              to={`/blog/${blog.id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>

          </div>

        ))}

      </div>

    </div>

  );
};

export default Home;