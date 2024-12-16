import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import BlogDetail from './pages/BlogDetail';
import axios from 'axios';

const API_URL = 'http://localhost:5000/blogs';

function App() {
  
  const [blogs, setBlogs] = useState([]);

  // Load data blogs dari backend
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setBlogs(response.data);
    });
  }, []);

  // Tambahkan blog baru
  const addBlog = (newBlog) => {
    axios.post(API_URL, newBlog).then((response) => {
      setBlogs([...blogs, response.data]); // Update state blogs
    });
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