// src/App.js
import React, { useState } from 'react';
import Home from './Pages/Home'; 
import Aboutme from './Pages/AboutMe'; 
import Navbar from './componentes/Navbar'; 
import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState('about'); 

  const renderComponent = () => {
    switch (currentPage) {
      case 'home':
        return <Home/>;
      case 'about':
        return <Aboutme/>;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div className="home">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App; // Corrected from exporting Home to exporting App
