import React from 'react';

const Header = () => {

  return (

    <header className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0 left-0">

      <nav className="flex justify-between">

        <div className="font-bold text-xl">My Portfolio</div>

        <div className="space-x-4">

          <a href="#about" className="hover:text-yellow-400 delay-100 text-sm sm:text-base">About</a>
          <a href="#skills" className="hover:text-yellow-400 delay-100 text-sm sm:text-base">Skills</a>
          <a href="#projects" className="hover:text-yellow-400 delay-100 text-sm sm:text-base">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 delay-100 text-sm sm:text-base">Contact</a>

        </div>

      </nav>

    </header>

  );
}

export default Header;