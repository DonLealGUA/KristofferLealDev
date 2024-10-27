import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ui/CSS/TechCard.css';

const TechCard = ({ imageUrl, skillName, rating }) => {
    return (
      <div className="card">
        <div className="card-image-container">
          <img src={imageUrl} alt={skillName} className="card-image" />
        </div>
        <div className="card-overlay">
          <div className="skill-name">{skillName}</div>
          <div className="stars">
            {/* Render stars based on rating */}
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </div>
        </div>
      </div>
    );
  };
  
  export default TechCard;