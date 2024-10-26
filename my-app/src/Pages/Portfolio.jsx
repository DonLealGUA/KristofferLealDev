// src/Pages/Portfolio.js
"use client";
import React from "react";
import "./CSSFiles/Portfolio.css";
import Card from "../componentes/Card";
import { TypewriterEffectSmooth } from "../componentes/ui/AceternityUI/typewriter-effect";
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';

const Portfolio = () => {
  const projects = [
    {
      title: "PuzzleQuest",
      description: "Description of Project 1",
      link: "https://github.com/harnesko/PuzzleQuest",
    },
    {
      title: "Chatroom",
      description: "",
      link: "https://github.com/DonLealGUA/Chatroom",
    },
    {
      title: "JediArchives",
      description: "",
      link: "https://github.com/DonLealGUA/JediArchives",
    },
    {
      title: "OogHub",
      description: "Description of Project 4",
      link: "https://github.com/YunboChow/OogHub",
    },
    {
      title: "BlackJack",
      description: "Description of Project 5",
      link: "https://github.com/DonLealGUA/BlackJack",
    },
    {
      title: "ScreenScore",
      description: "Description of Project 6",
      link: "https://github.com/DonLealGUA/ScreenScore",
    },
  ];

  const words = [
    {
      text: "My ",
    },
    {
      text: "Digital ",
    },
    {
      text: "Portfolio.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="Portfolio relative"> {/* Add relative positioning */}
      <div className="Container">
        <div className="Sidebarleft">{/* Left Sidebar Content */}</div>
        <div className="Content">
          <div className="Header">
            <div className="portfolio-header mb-8">
              <h1 className="text-5xl font-bold text-white mb-5">
                <TypewriterEffectSmooth words={words} />
              </h1>
              <p className="text-lg text-white mt-2">
                Explore a Selection of Innovative Projects and Creative
                Solutions.
              </p>
            </div>
          </div>

          <div className="CardContainer">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
        <div className="Sidebarright">{/* Right Sidebar Content */}</div>
      </div>
      <BackgroundBeams />
    </div>
);

};

export default Portfolio;
