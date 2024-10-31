import React from 'react';
import './ui/CSS/Card.css'; 
import { FaGlobe, FaGithub } from 'react-icons/fa'; 
import { HoverBorderGradient } from './ui/AceternityUI/hover-border-gradient'; 
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, imageUrl, link, weblink }) => {
  const { t } = useTranslation();

  return (
    <div className="Card">
      {imageUrl && <img src={imageUrl} alt={title} className="CardImage" />}
      
      <h2 className="CardTitle">{title}</h2>
      <p className="CardDescription">{description}</p>
      
      <div className="ButtonContainer">
        {weblink && (
          <FaGlobe
            className="GlobeIcon"
            onClick={() => window.open(weblink)} 
          />
        )}
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
          onClick={() => window.open(link)} 
        >
          <FaGithub className="text-xl text-white" />
          <span className="text-white">{t('portfolio.buttontext.text')}</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Card;
