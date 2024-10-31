import React from "react";
import "./CSSFiles/About.css";
import { BackgroundBeams } from "../componentes/ui/AceternityUI/background-beams";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Aboutme = () => {
  const { t } = useTranslation();

  return (
    <div className="Aboutme flex flex-col items-center mt-4 relative w-full">
      {/* Header and Profile Section */}
      <div className="header-section flex items-center justify-between lg:w-[60%] ml-[20%] mr-[20%]">
        <div className="titlefield flex flex-col items-start text-left">
          <h1 className="text-4xl text-white font-bold">
           {t('header.title')} <span className="gradient-text">Kristoffer Leal</span>,
          </h1>
          <h2 className="text-4xl font-bold mt-2">{t('header.subtitle')}</h2>
        </div>
        <div className="profile-section flex flex-col items-center">
          <img
            src="/assets/1679746517761.jpg"
            alt="Profile picture of Kristoffer Leal"
            className="rounded-full mb-2"
          />
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/DonLealGUA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub className="text-2xl hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kristoffer-leal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="text-2xl hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="textdiv w-full mt-4 mx-auto px-[20%] relative z-10">
        <p id="topP" className="text-2xl mb-5 leading-relaxed">
          {t('introduction.paragraph1')}
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          {t('introduction.paragraph2')}
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          {t('introduction.paragraph3')}
        </p>


        
        <p className="text-2xl leading-relaxed mb-5">
          {t('introduction.aiStudy.p1')} &nbsp;
          <a
            href="https://www.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=1&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=En+kritisk+granskning+p%C3%A5+studenters+anv%C3%A4ndning+av+AI-verktyg+och+dess+p%C3%A5verkan+p%C3%A5+deras+utbildning+inom+programmering&language=en&pid=diva2%3A1898616&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=author_sort_asc&onlyFullText=false&noOfRows=50&dswid=4648"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            {t('introduction.aiStudy.linkText')}
          </a>
          {t('introduction.aiStudy.p2')}     
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          {t('introduction.aiStudy.p3')}
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          {t('introduction.aiStudy.p4')}
        </p>
        

      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Aboutme;
