// src/Pages/Resume.js
import "./CSSFiles/Resume.css";
import React from "react";
import { BackgroundBeams } from "../componentes/ui/AceternityUI/background-beams";
import { HoverBorderGradient } from "../componentes/ui/AceternityUI/hover-border-gradient";
import { Timeline } from "../componentes/ui/AceternityUI/Timeline";
import { PiReadCvLogo } from "react-icons/pi";
import TechCard from "../componentes/TechStackCard";
import { useTranslation } from 'react-i18next';



const Resume = () => {
  const { t } = useTranslation();

  
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-3xl font-semibold mb-2">{t('resume.projects.2022.project')}</h3>
          <p className="mb-2 font-bold">{t('resume.projects.2022.role')}</p>
          <p className="mb-4">{t('resume.projects.2022.description')}</p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-3xl font-semibold mb-2">{t('resume.projects.2023.project')}</h3>
          <p className="mb-2 font-bold">{t('resume.projects.2023.role')}</p>
          <p className="mb-4">{t('resume.projects.2023.description')}</p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-3xl font-semibold mb-2">{t('resume.projects.2024.project')}</h3>
          <p className="mb-2 font-bold">{t('resume.projects.2024.role')}</p>
          <p className="mb-4">{t('resume.projects.2024.description')}</p>
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
               <span className="text-white">{t('resume.summary.button.text')}</span>
              <PiReadCvLogo className="icon" />
            </HoverBorderGradient>
          </div>
        </div>

        {/* Right Side */}
        <div className="resume-right-content">
          <div className="ResumeInfoDisplay">
          <h1 class="developer-title">{t('resume.summary.title')}</h1>
          <h2 class="developer-subtitle">Back-end / Fullstack</h2>

            <div className="intro mt-20">
            <p className="mb-5 mt-5">
            {t('resume.summary.introduction.paragraph1')}
            </p>
            <p className="mb-5">
            {t('resume.summary.introduction.paragraph2')}
            </p>
            <p className="mb-5">
            {t('resume.summary.introduction.paragraph3')}
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
              <span className="text-white">{t('resume.summary.button.text')}</span>
              <PiReadCvLogo className="icon" />
            </HoverBorderGradient>
          </div>
          </div>
           
           {/* TechCard Section */}
    <h2 className="text-4xl font-semibold mb-10 mt-20">{t('resume.skills.mainSkills.description')}</h2>
    <div className="tech-and-experience-container">
        <div className="experience-card">
            <h3 className="text-8xl font-bold mb-10">1</h3>
            <h3 className="text-3xl font-bold">{t('resume.summary.experience.description1')}</h3>
            <h3 className="text-3xl font-bold">{t('resume.summary.experience.description2')}</h3>
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
              {t('resume.skills.additionalSkills.description')}
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
          <p className="font-bold text-xl mt-10">{t('resume.summary.softSkills.Title1')}</p>
          <p className="mb-10">
          {t('resume.skills.softSkills.description')}
          </p>

          <p className="font-bold text-xl">{t('resume.summary.softSkills.Title2')}</p>
            <p className="mb-6">
            {t('resume.skills.softSkills.languages')}
            </p>
        </div>
        <div className="timeline  w-full">
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
