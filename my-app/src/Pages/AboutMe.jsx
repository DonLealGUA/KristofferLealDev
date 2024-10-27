import React from "react";
import "./CSSFiles/About.css";
import { BackgroundBeams } from "../componentes/ui/AceternityUI/background-beams";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Aboutme() {
  return (
<div className="Aboutme flex flex-col items-center mt-4 relative w-full">
  {/* Header and Profile Section */}
  <div className="header-section flex items-center justify-between lg:w-[60%] ml-[20%] mr-[20%]">
    <div className="titlefield flex flex-col items-start text-left">
      <h1 className="text-4xl text-white font-bold">
        Hello! I’m <span className="gradient-text">Kristoffer Leal</span>,
      </h1>
      <h2 className="text-4xl font-bold mt-2"> and I’m a Software Developer.</h2>
    </div>
    <div className="profile-section flex flex-col items-center">
      <img
        src="/assets/1679746517761.jpg"
        alt="Kristoffer Leal"
        className="rounded-full mb-2"
      />
      <div className="flex space-x-4 mt-2">
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



      <div className="w-full mt-4 mx-auto px-[20%] relative z-10">
        <p id="topP" className="text-2xl mb-5 leading-relaxed">
          I am a software developer specializing in full-stack development. I
          hold a degree in System Development from Malmö University in Sweden,
          with a primary focus on backend development. My academic background
          also includes courses in frontend development, which, combined with my
          interest in design and attention to detail, enables me to excel as a
          full-stack developer.
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          I have experience with various programming languages and frameworks,
          including Java, C#, .NET, HTML, CSS, JavaScript, and frameworks like
          React and Svelte. Additionally, I have a keen interest in artificial
          intelligence and the Internet of Things.
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          Outside of work and study, my hobbies include bartending, watching
          football, collecting fragrances, and building LEGO sets. I also enjoy
          traveling and walking in nature.
        </p>
        <p className="text-2xl leading-relaxed mb-5">
          If you are interested in AI, you can read my Bachelor’s paper &nbsp;
          <a
            href="https://www.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=1&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=En+kritisk+granskning+p%C3%A5+studenters+anv%C3%A4ndning+av+AI-verktyg+och+dess+p%C3%A5verkan+p%C3%A5+deras+utbildning+inom+programmering&language=en&pid=diva2%3A1898616&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=author_sort_asc&onlyFullText=false&noOfRows=50&dswid=4648"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            A critical examination of student use of AI tools and its impact on
            their education in programming
          </a>
          . My study investigates the integration of AI tools in the Swedish
          education system, focusing on their use by programming students in the
          software development program. It aims to analyze how students use AI
          tools, such as GitHub Copilot, Tabnine, and ChatGPT, to solve
          programming tasks, as well as to identify perceived benefits and
          challenges.
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          Using qualitative interviews and quantitative surveys from second- and
          third-year students at Malmö University, the study seeks to understand
          students' experiences with AI tools and their overall impact on
          learning. Results indicate that AI tools enhance productivity,
          efficiency, coding speed, and motivation, primarily by generating
          simple code, aiding debugging, and assisting with syntax and language
          translation.
        </p>
        <p className="text-2xl mb-5 leading-relaxed">
          The conclusion emphasizes the positive potential of AI tools in
          education, while highlighting the need for careful guidelines to
          ensure ethical use. The findings contribute to discussions on
          digitalization in education and offer insights for policymakers.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Aboutme;
