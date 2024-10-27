// src/Pages/Portfolio.js
"use client";
import React from "react";
import "./CSSFiles/Portfolio.css";
import Card from "../componentes/ProjectCard";
import { TypewriterEffectSmooth } from "../componentes/ui/AceternityUI/typewriter-effect";
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';

const Portfolio = () => {
  const projects = [
    {
        title: "HomeQuest",
        description: "HomeQuest is a pixel art RPG for all ages, featuring quests and exploration. Developed in Java without a game engine, it emphasizes creativity and accessibility with environmental sounds, character movement, and interactive NPCs. Players solve puzzles to unlock new areas, all while enjoying a smooth gameplay loop on Windows.",
        link: "https://github.com/harnesko/PuzzleQuest",
        imgURL: "/assets/Portfolio/HomeQuest.jpg",
    },
    {
        title: "Chatroom",
        description: "Java Chatroom is a real-time messaging platform with public and private chatrooms. Built using Java sockets, it features a GUI with user authentication, member lists, and direct messaging capabilities, designed to run with Java 8 or later on Windows.",
        link: "https://github.com/DonLealGUA/Chatroom",
        imgURL: "/assets/Portfolio/Chatroom.jpg",
    },
    {
        title: "JediArchives",
        description: "JediArchives is a React site for Star Wars fans to explore characters using the SWAPI API. Styled with Chakra UI, it provides a seamless interface for users to dive into Star Wars lore and discover details about their favorite characters.",
        link: "https://github.com/DonLealGUA/JediArchives",
        imgURL: "/assets/Portfolio/Jedi.jpg",
    },
    {
        title: "OogHub",
        description: "OogHub is a React app that offers users random quotes inspired by Master Oogway. Users can save quotes and learn about their authors, leveraging the Quotable and Wikipedia APIs for insightful content, enhanced by smooth animations and a responsive layout.",
        link: "https://github.com/YunboChow/OogHub",
        imgURL: "/assets/Portfolio/OogHub.jpg",
        weblink: "https://ooghub.vercel.app/", 
    },
    {
        title: "BlackJack",
        description: "The Blackjack Game is a C# application using Windows Forms and Entity Framework Core, bringing the classic card game to life. Players enjoy traditional gameplay with data persistence in a SQL Server database, managed through LINQ for efficient interactions.",
        link: "https://github.com/DonLealGUA/BlackJack",
        imgURL: "/assets/Portfolio/BlackJack.jpg",
    },
    {
        title: "ScreenScore",
        description: "ScreenScore is a React-based movie management app that lets users add, delete, and organize movies. It features a user-friendly interface, responsive design, and allows sorting by title or rating, enhancing the experience of managing a personal collection.",
        link: "https://github.com/DonLealGUA/ScreenScore",
        imgURL: "/assets/Portfolio/ScreenScore.jpg",
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
                imageUrl={project.imgURL}
                title={project.title}
                description={project.description}
                link={project.link}
                weblink={project.weblink}
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
