import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ui/CSS/Navbar.css';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Set default page identifier as "home"
  useEffect(() => {
    setCurrentPage("home");
  }, [setCurrentPage]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setDropdownOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const pages = ["home", "about", "cv", "portfolio", "contact"];

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Desktop Navigation Links */}
        <ul className="pageselector hidden md:flex space-x-10 flex-1 justify-center text-2xl">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`relative transition-all duration-300 ${
                  currentPage === page ? 'font-bold text-gray-300' : 'hover:text-gray-300'
                }`}
              >
                {t(`Navbar.${page}`).charAt(0).toUpperCase() + t(`Navbar.${page}`).slice(1)}
                {currentPage === page && (
                  <span className="gradientline absolute block w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 -bottom-1 rounded-lg"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Language Selector Dropdown */}
        <div className="languagediv relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="languagebutton flex items-center bg-black px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
          >
            <img 
              src={`/assets/languages/${currentLanguage}.png`} 
              alt={currentLanguage} 
              className="w-6 h-4 mr-2" 
            />
            {currentLanguage.toUpperCase()}
            {isDropdownOpen ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg z-10">
              {['en', 'sv', 'es'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="flex items-center w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
                >
                  <img src={`/assets/languages/${lang}.png`} alt={lang} className="w-6 h-4 mr-2" />
                  {lang === 'en' ? 'English' : lang === 'sv' ? 'Svenska' : 'Español'}
                </button>
              ))}
            </div>
          )}
        </div>

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
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`block w-full text-right px-4 py-2 text-2xl transition-all duration-300 ${
                currentPage === page ? 'font-bold text-gray-300' : 'hover:text-gray-300'
              }`}
            >
              {t(`Navbar.${page}`).charAt(0).toUpperCase() + t(`Navbar.${page}`).slice(1)}
            </button>
          ))}
          
          {/* Display Language Names in Mobile Menu */}
          <div className="flex flex-col items-end mt-4 space-y-2">
            {['en', 'sv', 'es'].map((lang) => (
              <button key={lang} onClick={() => handleLanguageChange(lang)} className="flex items-center text-gray-300 hover:text-gray-400">
                <img src={`/assets/languages/${lang}.png`} alt={lang} className="w-6 h-4 mr-2" /> 
                {lang === 'en' ? 'English' : lang === 'sv' ? 'Svenska' : 'Español'}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
