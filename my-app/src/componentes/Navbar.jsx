// src/components/Navbar.js
import React from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 flex-1 justify-center text-2xl">
          {['home', 'about', 'resume', 'portfolio', 'contact'].map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`relative transition-all duration-300 ${
                  currentPage === page ? 'font-bold text-gray-300' : 'hover:text-gray-300'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1).replace('_', ' ')}
                {currentPage === page && (
                  <span className="absolute block w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 -bottom-1 rounded-lg"></span>
                )}
              </button>
            </li>
          ))}
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
