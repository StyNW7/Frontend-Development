import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditMovie from "./pages/AddEditMovie";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEditMovie />} />
          <Route path="/edit/:id" element={<AddEditMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
