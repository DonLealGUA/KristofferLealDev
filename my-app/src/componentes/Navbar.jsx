import React, { useState } from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Desktop Navigation Links */}
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
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden text-2xl flex-1 text-right mr-8"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 space-y-4 flex flex-col items-end pr-4">
          {['home', 'about', 'resume', 'portfolio', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setMobileMenuOpen(false); 
              }}
              className={`block w-full text-right px-4 py-2 text-2xl transition-all duration-300 ${
                currentPage === page ? 'font-bold text-gray-300' : 'hover:text-gray-300'
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
