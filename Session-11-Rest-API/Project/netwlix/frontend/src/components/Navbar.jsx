import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="bg-gray-800 p-4">

      <div className="container mx-auto flex justify-between">

        <Link to="/" className="text-white font-bold text-lg">
          MovieApp
        </Link>

        <Link
          to="/movies/add"
          className="text-white bg-blue-500 px-4 py-2 rounded"
        >
          Add Movie
        </Link>
        
      </div>

    </nav>

  );

};

export default Navbar;