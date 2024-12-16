import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import BlogDetail from './pages/BlogDetail';

function App() {
  
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'React Basics', author: 'John Doe', content: 'Learn React step by step.' },
    { id: 2, title: 'Advanced React', author: 'Jane Doe', content: 'Explore advanced concepts.' },
  ]);

  // Fungsi untuk menambahkan blog baru
  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/add" element={<AddBlog addBlog={addBlog} />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;