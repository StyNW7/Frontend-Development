import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("http://localhost:5000/movies");
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Movie Collection</h1>
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
        >
          Add Movie
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="group">
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-md group-hover:opacity-75"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-400">{movie.genre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
