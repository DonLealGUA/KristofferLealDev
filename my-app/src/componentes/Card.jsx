// src/Components/Card.js
import React from 'react';
import './ui/CSS/Card.css'; 
import { FaGithub } from 'react-icons/fa'; 
import { HoverBorderGradient } from './ui/AceternityUI/hover-border-gradient'; 

const Card = ({ title, description, link }) => {
  return (
    <div className="Card">
      <h2 className="CardTitle bold-text text-xl">{title}</h2>
      <p className="CardDescription">{description}</p>
      <div className="ButtonContainer">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
          onClick={() => window.open(link)} 
        >
             <FaGithub className="text-xl text-white" /> 
          <span className='text-white'>Check out the project</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Card;
