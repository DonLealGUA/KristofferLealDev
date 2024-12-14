// src/Pages/Portfolio.js
"use client";
import React from "react";
import "./CSSFiles/Portfolio.css";
import Card from "../componentes/ProjectCard";
import { TypewriterEffectSmooth } from "../componentes/ui/AceternityUI/typewriter-effect";
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "MixItRight",
      description: t('portfolio.projects.HomeQuest.description'),
      link: "https://github.com/DonLealGUA/Mixitright",
      imgURL: "/assets/Portfolio/MixItRight.jpg",
      weblink: "https://mixitright.vercel.app/", 
  },
    {
      title: " Cocktail-Vault-API",
      description: t('portfolio.projects.HomeQuest.description'),
      link: "https://github.com/DonLealGUA/Cocktail-Vault-API",
      imgURL: "/assets/Portfolio/Cocktail-Vault-API.png",
  },
    {
        title: "HomeQuest",
        description: t('portfolio.projects.HomeQuest.description'),
        link: "https://github.com/harnesko/PuzzleQuest",
        imgURL: "/assets/Portfolio/HomeQuest.jpg",
    },
    {
        title: "Chatroom",
        description: t('portfolio.projects.Chatroom.description'),
        link: "https://github.com/DonLealGUA/Chatroom",
        imgURL: "/assets/Portfolio/Chatroom.jpg",
    },
    {
        title: "JediArchives",
        description: t('portfolio.projects.JediArchives.description'),
        link: "https://github.com/DonLealGUA/JediArchives",
        imgURL: "/assets/Portfolio/Jedi.jpg",
    },
    {
        title: "OogHub",
        description: t('portfolio.projects.OogHub.description'),
        link: "https://github.com/YunboChow/OogHub",
        imgURL: "/assets/Portfolio/OogHub.jpg",
        weblink: "https://ooghub.vercel.app/", 
    },
    {
        title: "BlackJack",
        description: t('portfolio.projects.BlackJack.description'),
        link: "https://github.com/DonLealGUA/BlackJack",
        imgURL: "/assets/Portfolio/BlackJack.jpg",
    },
    {
        title: "ScreenScore",
        description: t('portfolio.projects.ScreenScore.description'),
        link: "https://github.com/DonLealGUA/ScreenScore",
        imgURL: "/assets/Portfolio/ScreenScore.jpg",
    },
];

  const words = [
    {
      text: t('portfolio.words.0.text1'),
    },
    {
      text: t('portfolio.words.1.text2'),
    },
    {
      text: t('portfolio.words.2.text3'),
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="Portfolio relative">
      <div className="Container">
        <div className="Sidebarleft"></div>
        <div className="Content">
          <div className="Header">
            <div className="portfolio-header mb-8">
            <h1 className="introtitle custom-title">
              <TypewriterEffectSmooth words={words} />
            </h1>
              <p className="textbox text-lg text-white mt-2">
              {t('portfolio.pagetext.text1')}
              </p>
            </div>
          </div>

          <div className="CardContainer">
            {projects.map((project, index) => (
              <Card
                key={index}
                imageUrl={project.imgURL}
                title={project.title}
                description={project.description}
                link={project.link}
                weblink={project.weblink}
              />
            ))}
          </div>
        </div>
        <div className="Sidebarright"></div>
      </div>
      <BackgroundBeams />
    </div>
);

};

export default Portfolio;
