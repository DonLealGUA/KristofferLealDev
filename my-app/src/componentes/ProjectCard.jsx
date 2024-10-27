// src/Components/Card.js
import React from 'react';
import './ui/CSS/Card.css'; 
import { FaGlobe, FaGithub } from 'react-icons/fa'; 
import { HoverBorderGradient } from './ui/AceternityUI/hover-border-gradient'; 

const Card = ({ title, description, imageUrl, link, weblink }) => {
  return (
    <div className="Card">
      {imageUrl && <img src={imageUrl} alt={title} className="CardImage" />}
      
      <h2 className="CardTitle">{title}</h2>
      <p className="CardDescription">{description}</p>
      
      <div className="ButtonContainer">
        {weblink && (
          <FaGlobe
            className="GlobeIcon"
            onClick={() => window.open(weblink)} // Opens the web link
          />
        )}
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
          onClick={() => window.open(link)} // Opens the GitHub link
        >
          <FaGithub className="text-xl text-white" />
          <span className="text-white">Check out the project</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Card;
