// src/Pages/Resume.js
import React, { useState } from 'react';
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';
import './CSSFiles/Resume.css';
import { HoverBorderGradient } from '../componentes/ui/AceternityUI/hover-border-gradient'; 
import { PiReadCvLogo } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai"; 

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (language) => {
    const fileName = language === 'swedish' ? 'CV.pdf' : 'Resume.pdf';
    const link = document.createElement('a');
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
          <img className="leftimage" src="/assets/ab742d7f-e174-462e-bab0-3522a467a20c.jpg" alt="Descriptive Alt Text" />
          
          {/* Button Container */}
          <div className="ButtonContainer">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <span className='text-white'>Download My CV</span>
              <PiReadCvLogo className="icon" />
            </HoverBorderGradient>
          </div>
        </div>

        {/* Right Side */}
        <div className="resume-right-content">
        <div className='ResumeInfoDisplay'>
          <h1> Softwere Developer</h1>
          <h2>Back-end / Fullstack</h2>
          <p className='mb-2'>Driven and recently graduated Software Engineer with comprehensive knowledge in programming, web development, and design. I have a strong interest in IT and a passion for combining technology with aesthetic design. After completing my degree, I am ready to take on new challenges in the industry and contribute my expertise in a dynamic workplace.</p>
          <p className='mb-2'>I have developed a strong foundation in backend programming, with hands-on experience primarily in Java, as well as in C# .NET and database management. While my expertise lies in backend development, I also have a passion for frontend technologies such as React and Svelte, enabling me to create seamless and dynamic user experiences. I thrive in collaborative environments where I can leverage my backend skills while contributing to frontend innovation, combining technical expertise with leadership to drive projects forward.</p>
          <p className='mb-6'>I am quick to learn new technologies and open to new ideas and lessons. My ability to adapt to new tools and workflows efficiently makes me a flexible and effective team member. </p>
          <h2 className="text-xl font-semibold mb-4">Technical Skills:</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Programming Languages:</strong> Java, JavaScript, C#, jQuery</li>
                <li><strong>Web Development:</strong> HTML, CSS, Javalin, React, Node.js, Svelte</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
                <li><strong>Version Control:</strong> Git</li>
                <li><strong>Platforms and Operating Systems:</strong> Windows, macOS</li>
                <li><strong>Design and Multimedia:</strong> Adobe Illustrator, Photoshop, Premiere Pro, Adobe XD, Figma</li>
                <li><strong>Development Tools:</strong> Arduino, Visual Paradigm</li>
                <li><strong>Productivity:</strong> Office 365, Google Workspace</li>
                <li><strong>Project Management:</strong> Agile methodologies, YouTrack</li>
                <li><strong>Project Tools:</strong> Docker, Strapi</li>
            </ul>

            <p className='font-bold'>Soft Skills and Communication:</p>
            <p className='mb-2'>Excellent collaboration skills, multilingual communication, capable of taking initiative.</p>

            <p className='font-bold'>Languages:</p>
            <p className='mb-6'>Fluent in Swedish and English, native Spanish speaker; professional level proficiency.</p>

            <h2 className="text-xl font-semibold mb-5">Experience:</h2>

            <h3 className="text-lg font-semibold mb-2">Malmö University's Police Program (Polis+)</h3>
            <p className="mb-2 font-bold">Fullstack Developer <br /> Aug 2023 – Jan 2024</p>
            <ul className="list-disc list-inside mb-4">
                <li>Developed Polis+, an interactive tool for scenario creation for Malmö University's Police Program, enabling teachers to create over 20 unique training scenarios for over 50 police students.</li>
                <li>Enhanced user interaction by creating an intuitive and responsive web interface with JavaScript, HTML, CSS, and Svelte; contributed to a 30% increase in user satisfaction according to student feedback surveys.</li>
                <li>Implemented Strapi as a headless CMS for easy content management, reducing development time by 20% through containerization with Docker.</li>
                <li>Coordinated Git version control, improving team collaboration, reducing operational errors by 25%, and improving code review processing time by 40%.</li>
                <li>Collaborated with teachers to create a feature plan, prioritizing the three most requested features, which raised overall course satisfaction among students.</li>
                <li>Authored comprehensive documentation on best practices for navigating the codebase, reducing onboarding time for new developers by about three days with clear, day-one guidelines.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">HomeQuest</h3>
            <p className="mb-2 font-bold">Backend Developer <br /> Jan 2022 – Jun 2022</p>
            <ul className="list-disc list-inside mb-4">
                <li>Designed and developed a 2D top-down game with Java, focusing on gameplay mechanics and user experience, improving game performance by 15% through targeted optimizations.</li>
                <li>Led an agile group of 5 developers and applied object-oriented programming principles to structure the code for easy functionality expansion.</li>
                <li>Facilitated testing and optimizations, enhancing game performance and overall user experience.</li>
                <li>Implemented YouTrack for project management, tracking over 15 development tasks, streamlining communication and collaboration, and improving team workflow during feature updates.</li>
                <li>Presented sprint results to stakeholders at the end of each sprint, reporting progress, addressing challenges, and aligning future development goals with project objectives, ensuring consistent engagement from stakeholders and project transparency.</li>
                <li>Engaged players through feedback sessions to gather insights on gameplay and user interface, informing iterative design improvements and enhancing overall user satisfaction.</li>
            </ul>
        </div>
      </div>
      </div>

      {/* Background Effect */}
      <BackgroundBeams />

      {/* Modal for Language Selection */}
      {isModalOpen && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Choose Language Version</h3>
                    <button
                      className="text-gray-500 hover:text-gray-800"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <AiOutlineClose size={24} />
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Please select the version you want to download:</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col sm:px-6">
                  <button
                    type="button"
                    className="mb-2 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                    onClick={() => { handleDownload('swedish'); setIsModalOpen(false); }}
                  >
                    Download Swedish CV
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    onClick={() => { handleDownload('english'); setIsModalOpen(false); }}
                  >
                    Download English CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
