// src/Pages/Home.js
import React from 'react';
import './CSSFiles/Home.css';
import { BackgroundBeamsWithCollision} from '../componentes/ui/AceternityUI/background-beams-with-collision';
import { TextGenerateEffect } from "../componentes/ui/AceternityUI/text-generate-effect";

function Home() {
  const title = `Kristoffer Leal`;
  const desc = `I am a software developer with a degree in System Development from Malmö University in Sweden.`;

  return (
    <div className="home">
      {/* Main Content */}
      <div className="content-container relative z-10">
        {/* Left Side */}
        <div className="left-content">
          <h3 className="inter-header">Hi! my name is:</h3>
          <h1 className="inter-header">
          <TextGenerateEffect words={title} duration={5} filter={false} fontSize="5xl" />
        </h1>
          <p className="inter-body">
          <TextGenerateEffect words={desc} duration={2} filter={false} fontSize="2xl" />
          </p>
          <button className="relative inline-flex max-w-[160px] h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium backdrop-blur-3xl">
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent transition duration-300 ease-in-out">
                Read More →
              </span>
            </span>
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="right-content">
          <img src="/assets/IMG_0843.jpg" alt="Descriptive Alt Text" />
        </div>
      </div>
            {/* Background Effect */}
      <BackgroundBeamsWithCollision/>
    </div>
  );
}

export default Home;
