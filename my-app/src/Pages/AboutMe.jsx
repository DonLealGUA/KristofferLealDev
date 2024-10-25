// src/Pages/Home.js
import React from 'react';
import './CSSFiles/About.css';
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';

// Import icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Example icons from react-icons

function Aboutme() {
  return (
    <div className="Aboutme flex flex-col items-center mt-4"> {/* Main flex container */}
      <div className="flex items-center w-full"> {/* Align headings and image/icons horizontally */}
        {/* Left Content (Header Section) */}
        <div className="flex flex-col items-start ml-[20%]"> {/* Align items in a column with left margin */}
          <h1 className="text-4xl font-bold text-center"> {/* Heading */}
            Hello! I’m <span className="gradient-text">Kristoffer Leal</span>, and I’m a
          </h1>
          <h2 className="text-4xl font-bold text-center mt-2"> {/* Subtitle */}
            a Swedish-Guatemalan software developer.
          </h2>
        </div>

        {/* Right Content (Profile Image and Icons Section) */}
        <div className="flex flex-col items-center ml-[9%] mr-[20%] relative"> {/* Add relative positioning */}
            <img 
                src="/assets/IMG_0843.jpg" 
                alt="Kristoffer Leal" 
                className="w-32 h-32 rounded-full mb-2" // Adjusted size
            />
            <div className="flex space-x-4 relative z-10"> {/* Ensure the button container has a higher z-index */}
                <a 
                href="https://github.com/DonLealGUA" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <FaGithub className="text-2xl hover:text-gray-300" />
                </a>
                <a 
                href="https://www.linkedin.com/in/kristoffer-leal/" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <FaLinkedin className="text-2xl hover:text-gray-300" />
                </a>
            </div>
            </div>
      </div>

      {/* Additional Text Section with 20% Left/Right Borders */}
      <div className="w-full mt-4 mx-auto px-[20%]"> {/* Center the text below with 20% padding */}
        <p id="topP" className="text-2xl mb-5 leading-relaxed">
          I am a software developer specializing in full-stack development. I hold a degree in System Development from Malmö University in Sweden, with a primary focus on backend development. My academic background also includes courses in frontend development, which, combined with my interest in design and attention to detail, enables me to excel as a full-stack developer.
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          I have experience with various programming languages and frameworks, including Java, C#, .NET, HTML, CSS, JavaScript, and frameworks like React and Svelte. Additionally, I have a keen interest in artificial intelligence and the Internet of Things.
        </p>
        <p className="text-2xl leading-relaxed">
          Outside of work and study, my hobbies include bartending, fragrance collecting, fashion, and building LEGO sets. I also enjoy traveling and walking in nature.
        </p>
      </div>
          <BackgroundBeams/>
    </div>
  );
}

export default Aboutme;
