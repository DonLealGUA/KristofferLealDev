// src/App.js
import React from 'react';
import Home from './Pages/Home'; // Ensure this path is correct
import Header from './componentes/Header'; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <div className="home">
      <Header/>
      <div>
      <Home />
      </div>
    </div>
  );
}

export default App; // Corrected from exporting Home to exporting App
