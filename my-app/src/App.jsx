// src/App.js
import React, { useState } from 'react';
import Home from './Pages/Home'; 
import Aboutme from './Pages/AboutMe'; 
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Navbar from './componentes/Navbar'; 
import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState('contact'); 

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

export default App; 
