// src/Pages/Resume.js
import "./CSSFiles/Resume.css";
import React from "react";
import { BackgroundBeams } from "../componentes/ui/AceternityUI/background-beams";
import { HoverBorderGradient } from "../componentes/ui/AceternityUI/hover-border-gradient";
import { Timeline } from "../componentes/ui/AceternityUI/Timeline";
import { PiReadCvLogo } from "react-icons/pi";
import TechCard from "../componentes/TechStackCard";

const Resume = () => {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-3xl font-semibold mb-2">Project: HomeQuest</h3>
          <p className="mb-2 font-bold">Backend Developer</p>
          <p className="mb-4">
          In 2022, I contributed to the development of HomeQuest, a 2D top-down game where I focused on optimizing gameplay mechanics and user experience as a Backend Developer. Leading a team of five, I employed object-oriented programming principles to structure the code, resulting in a 15% performance boost. I facilitated effective project management through YouTrack, tracked over 15 tasks, and maintained transparency by presenting sprint results to stakeholders, ensuring alignment on development goals. Engaging players through feedback sessions informed iterative improvements, enhancing overall satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-3xl font-semibold mb-2">Project: Polis+</h3>
          <p className="mb-2 font-bold">Fullstack Developer</p>
          <p className="mb-4">
          In 2023, as a Fullstack Developer for Polis+, I designed an application for Malmö University's Police Program, enabling educators to create immersive training scenarios. Utilizing JavaScript, HTML, CSS, and Svelte, I prioritized responsive design and user-friendliness. I implemented Strapi as a headless CMS, streamlining content management and used Docker to create a consistent development environment. Through effective Git version control, I improved team collaboration and efficiency, contributing to a successful project outcome.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-3xl font-semibold mb-2">Graduation</h3>
          <p className="mb-2 font-bold">Bachelor of Computer Science (System Developer)</p>
          <p className="mb-4">
            In 2024, I proudly graduated from Malmö University after completing a comprehensive three-year program in System Development. This experience equipped me with a solid foundation in software engineering principles, programming languages, and problem-solving skills, preparing me to excel in the dynamic field of technology. My education not only deepened my technical knowledge but also fostered my passion for developing innovative solutions and collaborating in diverse team environments.
          </p>
        </div>
      ),
    },
  ];    
  

  const handleDownload = (language) => {
    const fileName = language === "swedish" ? "CV.pdf" : "Resume.pdf";
    const link = document.createElement("a");
    link.href = `/assets/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      {/* Main Content */}
      <div className="resume-content-container">
        {/* Left Side */}
        <div className="resume-left-content">
          <img
            className="leftimage"
            src="/assets/ab742d7f-e174-462e-bab0-3522a467a20c.jpg"
            alt="Descriptive Alt Text"
          />

          {/* Button Container */}
          <div className="ButtonContainer">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
              onClick={() => handleDownload("english")}
            >
              <span className="text-white">Download My CV</span>
              <PiReadCvLogo className="icon" />
            </HoverBorderGradient>
          </div>
        </div>

        {/* Right Side */}
        <div className="resume-right-content">
          <div className="ResumeInfoDisplay">
          <h1 class="developer-title">Software Developer</h1>
          <h2 class="developer-subtitle">Back-end / Fullstack</h2>

            <div className="intro mt-20">
            <p className="mb-5 mt-5">
              Driven and recently graduated Software Engineer with comprehensive
              knowledge in programming, web development, and design. I have a
              strong interest in IT and a passion for combining technology with
              aesthetic design. After completing my degree, I am ready to take
              on new challenges in the industry and contribute my expertise in a
              dynamic workplace.
            </p>
            <p className="mb-5">
              I have developed a strong foundation in backend programming, with
              hands-on experience primarily in Java, as well as in C# .NET and
              database management. While my expertise lies in backend
              development, I also have a passion for frontend technologies such
              as React and Svelte, enabling me to create seamless and dynamic
              user experiences. I thrive in collaborative environments where I
              can leverage my backend skills while contributing to frontend
              innovation, combining technical expertise with leadership to drive
              projects forward.
            </p>
            <p className="mb-5">
              I am quick to learn new technologies and open to new ideas and
              lessons. My ability to adapt to new tools and workflows
              efficiently makes me a flexible and effective team member.
            </p>
            </div>

            <div className="right-hidden">
          <img
            className="rightimage"
            src="/assets/ab742d7f-e174-462e-bab0-3522a467a20c.jpg"
            alt="Descriptive Alt Text"
          />

          {/* Button Container */}
          <div className="ButtonContainer">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
              onClick={() => handleDownload("english")}
            >
              <span className="text-white">Download My CV</span>
              <PiReadCvLogo className="icon" />
            </HoverBorderGradient>
          </div>
          </div>
           
           {/* TechCard Section */}
    <h2 className="text-4xl font-semibold mb-10 mt-20">Main Skills:</h2>
    <div className="tech-and-experience-container">
        <div className="experience-card">
            <h3 className="text-8xl font-bold mb-10">1</h3>
            <h3 className="text-3xl font-bold">Year</h3>
            <h3 className="text-3xl font-bold">Experience Working</h3>
        </div>

        <div className="tech-cards-container">
            <TechCard imageUrl="/assets/TeckStackPng/Java.png" skillName="Java" rating={5} />
            <TechCard imageUrl="/assets/TeckStackPng/Csharp.png" skillName="C#" rating={4} />
            <TechCard imageUrl="/assets/TeckStackPng/js.png" skillName="JavaScript" rating={3} />
            <TechCard imageUrl="/assets/TeckStackPng/Postgresql.png" skillName="Postgres SQL" rating={4} />
            <TechCard imageUrl="/assets/TeckStackPng/html.png" skillName="HTML" rating={4} />
            <TechCard imageUrl="/assets/TeckStackPng/css.png" skillName="CSS" rating={4} />
            <TechCard imageUrl="/assets/TeckStackPng/react.png" skillName="React" rating={3} />
            <TechCard imageUrl="/assets/TeckStackPng/Svelte.png" skillName="Svelte" rating={3} />
        </div>
    </div>


            <div className="add-tech-cards-container">
              <h2 className="addtext text-4xl font-semibold mb-10">
                Additional TechStack:
              </h2>
              <div className="tech-images-grid">
                <img
                  src="/assets/TeckStackPng/git.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/docker.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/strapi.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/jquery.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/YouTrack.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/Visual Paradigm.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/Figma.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/Illustrator.png"
                  alt="Tech 1"
                  className="tech-image"
                />
                <img
                  src="/assets/TeckStackPng/photoshop.png"
                  alt="Tech 1"
                  className="tech-image"
                />
              </div>
            </div>
            <div className="RestSkills">
          <p className="font-bold text-xl mt-10">Soft Skills and Communication:</p>
          <p className="mb-10">
            Excellent collaboration skills, multilingual communication, capable of taking initiative.
          </p>

          <p className="font-bold text-xl">Languages:</p>
            <p className="mb-6">
              Fluent in Swedish and English, native Spanish speaker;
              professional level proficiency.
            </p>
        </div>
        <div className="w-full">
      <Timeline data={data} />
    </div>
          </div>
        </div>
      </div>
      <BackgroundBeams className="Bg" />
    </div>
  );
};

export default Resume;
