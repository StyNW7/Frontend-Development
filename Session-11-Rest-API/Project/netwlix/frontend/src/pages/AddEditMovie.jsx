import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEditMovie = () => {

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    if (id) {

      const fetchMovie = async () => {
        const res = await axios.get(`http://localhost:5000/movies/${id}`);
        const { title, genre, description, poster, trailer } = res.data;
        setTitle(title);
        setGenre(genre);
        setDescription(description);
        setPoster(poster);
        setTrailer(trailer);
      };

      fetchMovie();

    }

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const movie = { title, genre, description, poster, trailer };

    if (id) {
      await axios.put(`http://localhost:5000/movies/${id}`, movie);
    } 
    
    else {
      await axios.post("http://localhost:5000/movies", movie);
    }

    navigate("/");

  };

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">{id ? "Edit Movie" : "Add Movie"}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          type="text"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          type="text"
          placeholder="Trailer URL"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        
      </form>

    </div>

  );

};

export default AddEditMovie;
