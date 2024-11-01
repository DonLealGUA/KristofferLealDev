import React, { useState } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi2'; 
import { HoverBorderGradient } from '../componentes/ui/AceternityUI/hover-border-gradient'; 
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import './CSSFiles/Contact.css'; 
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <div className="right-container">
      <div className="contact-header">
        <span className="text-5xl font-bold">{t('contact.displaytext.header')}</span>
        <HiOutlineSparkles className="sparkle-icon" />
    </div>
        <p className='Subheader'>{t('contact.displaytext.Desc')}</p>
        <div className="icon-bubble">
          <FaEnvelope className="icon" />
          <span className='ml-3'>nilskristofferleal@gmail.com</span>
        </div>
        <div className="icon-bubble">
          <FaPhoneAlt className="icon" />
          <span className='ml-3'>(+46) 735 418 637.</span>
        </div>
        <div className="icon-bubble">
          <FaLinkedin className="icon" />
          <a className='ml-3' href="https://www.linkedin.com/in/kristoffer-leal/" target="_blank" rel="noopener noreferrer">
            Kristoffer Leal
          </a>
        </div>
        <div className="icon-bubble">
          <FaGithub  className="icon" />
          <a className='ml-3' href="https://github.com/DonLealGUA" target="_blank" rel="noopener noreferrer">
            DonLealGUA
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
