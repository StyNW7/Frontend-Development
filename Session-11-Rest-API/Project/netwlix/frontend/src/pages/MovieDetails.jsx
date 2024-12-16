import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const MovieDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`http://localhost:5000/movies/${id}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/movies/${id}`);
    navigate("/");
  };

  if (!movie) return <div>Loading...</div>;

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-400 mb-4">{movie.genre}</p>
      <p className="mb-6">{movie.description}</p>

      <ReactPlayer url={movie.trailer} controls className="mb-6" />

      <div className="space-x-4">

        <Link
          to={`/`}
          className="bg-green-600 hover:bg-yellow-800 text-white px-4 py-2 rounded"
        >
          Back
        </Link>

        <Link
          to={`/edit/${movie.id}`}
          className="bg-yellow-600 hover:bg-yellow-800 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  );
};

export default MovieDetails;
