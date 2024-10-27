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
      title: "PuzzleQuest",
      description: "HomeQuest is a pixel art, top-down RPG designed for young players and nostalgic adults alike, offering an immersive world of quests, puzzles, and exploration. Developed in Java without a game engine, HomeQuest emphasizes in-house creativity and accessibility, featuring environmental sounds, character movement, and interactive NPCs that enrich the storyline. The game follows an open-world format where players solve puzzles and earn keys to unlock new areas. Built using a flexible, incremental process with a Model-View-Controller (MVC) structure, HomeQuest ensures an intuitive experience and a smooth gameplay loop on Windows, with potential macOS support.",
      link: "https://github.com/harnesko/PuzzleQuest",
    },
    {
      title: "Chatroom",
      description: "Java Chatroom Application is a real-time messaging platform that enables users to communicate through both public and private chatrooms. Built in Java using sockets and a client-server architecture, the application provides a login system for authentication and a GUI interface created with Java Swing. Users can view a list of connected members, send direct messages, and exchange images. This project is designed to run with Java 8 or later, and is compatible with Windows.",
      link: "https://github.com/DonLealGUA/Chatroom",
    },
    {
      title: "JediArchives",
      description: "JediArchives is a React-based website that allows Star Wars fans to search and explore characters from the Star Wars universe through a seamless, user-friendly interface. Built with the SWAPI API for character data, Axios for efficient API requests, and styled with Chakra UI for a responsive and visually appealing design, JediArchives enables users to dive into Star Wars lore and discover new details about their favorite characters in a straightforward and engaging way.",
      link: "https://github.com/DonLealGUA/JediArchives",
    },
    {
      title: "OogHub",
      description: "OogHub is a React application inspired by the wisdom of Master Oogway, offering users an intuitive platform to view random quotes on demand. Users can save favorite quotes and explore more information about their authors, blending simplicity with insightful content. OogHub leverages the Quotable and Wikipedia APIs for quote and author data, while Framer Motion and Chakra UI enhance its design with smooth animations and a clean, responsive layout.",
      link: "https://github.com/YunboChow/OogHub",
    },
    {
      title: "BlackJack",
      description: "The Blackjack Game with Windows Forms and Entity Framework Core is a C# application that brings the classic Blackjack card game to life through a simple Windows Forms graphical user interface. Players can enjoy traditional gameplay, including player versus dealer scenarios and card shuffling. The game uses Entity Framework Core for data persistence, storing player information and game results in a local SQL Server database with a Code First approach. All database interactions are handled via LINQ, ensuring efficient and readable code. The technology stack includes C#, .NET 6, Windows Forms, a local SQL Server instance, Entity Framework Core 6, and LINQ. To get started, users need the .NET 6 SDK and a local SQL Server installation.",
      link: "https://github.com/DonLealGUA/BlackJack",
    },
    {
      title: "ScreenScore",
      description: "ScreenScore is a React-based movie management application that enables users to efficiently add, delete, and organize movies according to their titles and ratings. With a user-friendly interface, it enhances the experience of managing a personal movie collection. Key features include the ability to add and remove movies, sort them by title or rating, and a responsive design achieved through React Bootstrap, ensuring a visually appealing layout. The technology stack consists of JavaScript (ES6+), React, Bootstrap for styling, and React's useState hook for state management.",
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
