import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="container mx-auto py-6">
      {blog ? (
        <>
          <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-600 mb-4">Author: {blog.author}</p>
          <p className="text-gray-700">{blog.content}</p>
        </>
      ) : (
        <p>Blog not found!</p>
      )}
    </div>
  );
};

export default BlogDetail;
