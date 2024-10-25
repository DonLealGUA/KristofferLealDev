// src/App.js
import React from 'react';
import Home from './Pages/Home'; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <div className="home">
      <Home />
    </div>
  );
}

export default App; // Corrected from exporting Home to exporting App
