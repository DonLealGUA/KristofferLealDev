// src/components/Navbar.js
import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 flex-1 justify-center text-2xl">
          <li><button onClick={() => setCurrentPage('home')} className="hover:text-gray-300">Home</button></li>
          <li><button onClick={() => setCurrentPage('about')} className="hover:text-gray-300">About Me</button></li>
          <li><button onClick={() => setCurrentPage('resume')} className="hover:text-gray-300">Resume</button></li>
          <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-gray-300">Portfolio</button></li>
          <li><button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300">Contact</button></li>
        </ul>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl flex-1 text-right">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
