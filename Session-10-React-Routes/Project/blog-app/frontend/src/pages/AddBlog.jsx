import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = ({ addBlog }) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    // Tambahkan blog baru
    addBlog({ title, author, content });
    // Redirect ke halaman Home
    navigate('/');

  };

  return (

    <div className="container mx-auto py-6">

      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>

          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

        </div>

        <div>

          <label className="block font-medium">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Blog
        </button>

      </form>

    </div>

  );
};


export default AddBlog;