import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-sm">{movie.genre}</p>
      <p className="mt-2">{movie.description}</p>
      <Link
        to={`/movies/${movie.id}`}
        className="text-blue-400 mt-4 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
