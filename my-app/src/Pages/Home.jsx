// src/Pages/Home.js
import React from 'react';
import './CSSFiles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="content-container">
        {/* Left Side */}
        <div className="left-content">
          <h3 className="inter-header">Hi! my name is:</h3>
          <h1 className="inter-header">Kristoffer Leal</h1>
          <p className="inter-body">I am a software developer with a degree in System Development from Malmö University in Sweden.</p>
          <button className="intro-button">Read More →</button>
        </div>

        {/* Right Side (Image) */}
        <div className="right-content">
          <img src="/assets/IMG_0843.jpg" alt="Descriptive Alt Text" />
        </div>
      </div>
    </div>
  );
}

export default Home;
