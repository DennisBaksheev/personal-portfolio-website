import React, { useState } from "react";
import fragmentui from "../assets/portfolio/fragmentui.jpg";
import ShowBiz from "../assets/portfolio/ShowBiz.png";
import Arkanoid from "../assets/portfolio/Arkanoid.png";
import PythonPygameChess from "../assets/portfolio/Python-Pygame-Chess.png"; 
import personalportfoliowebsite from "../assets/portfolio/personalportfoliowebsite.png";
// Import additional project images and details

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      title: "Fragment UI & Fragments Microservice",
      src: fragmentui,
      description: 
      `The "Fragment UI & Fragments Microservice" project represents a comprehensive full-stack development effort, combining a front-end web application with a cloud-based microservice backend. The Fragments UI provides a user-friendly interface for managing text, images, and JSON data, and features Docker integration, multi-stage builds, Nginx for static site serving, integrated AWS Cognito for security, and is hosted on Netlify with AWS backend integration. The Fragments Microservice, designed for handling a variety of data sources, includes features like CRUD operations, data conversion, enhanced security, and scalability. Deployed on AWS, it employs GitHub Actions for CI/CD and Docker Compose for container management, showcasing a sophisticated, scalable, and user-focused software development approach.`
    ,
      github: "https://github.com/link-to-fragment-ui",
      live: "https://live-link-to-fragment-ui",
    },
    {
      id: 2,
      title: "Show Biz",
      src: ShowBiz,
      description: "Show Biz is a TV Production Management App it is an innovative web application designed to optimize TV production management. Developed as part of the WEB524 course, this app serves as a comprehensive tool for managing actors, TV series, and episodes with precision and ease. It features user roles like Executive, Coordinator, and Admin, each tailored with specific access levels to streamline the production process. The application stands out for its rich text support, enhancing actor biographies and show descriptions, and its ability to handle diverse multimedia uploads. Seamlessly integrated with Microsoft Azure for reliable hosting, it represents a pinnacle of web application development, showcasing proficiency in ASP.NET, C#, Entity Framework, and Azure deployment. This project is a testament to advanced web programming skills, emphasizing security, data management, and user-friendly design.",
      github: "https://github.com/DennisBaksheev/Show-Biz",
      live: "https://dbaksheev-a5.azurewebsites.net/",
    },

    {
      id: 3,
      title: "Arkanoid",
      src: Arkanoid,
      description: "The 3D Arkanoid Game project revitalizes the iconic Arkanoid game with a contemporary 3D perspective, achieved through the adept use of OpenGL. This rendition, set within a 1024x768 window, invites players to a dynamic and immersive experience from a static 3/4 view. The game is distinguished by its 3D graphics, interactive controls utilizing keyboard arrows for navigation and a spacebar for sphere launch, and an escape key for exiting. It features advanced collision detection between the sphere and bricks, enriched by unique textures for visual appeal. The game poses an additional challenge, ending if the sphere is missed, thereby raising the stakes. Technically, the game stands out for its OpenGL-based 3D rendering, sophisticated collision detection, and first-time texture mapping. As a personal endeavor, this project pushed the boundaries of my capabilities in game development, particularly in texture mapping and collision mechanics. Future enhancements may include new challenging levels, power-ups for an exhilarating experience, and a competitive scoring system with leaderboards.",
      github: "https://github.com/DennisBaksheev/Show-Biz",
    },

    {
      id: 4,
      title: "PythonPygameChess",
      src: PythonPygameChess,  // Use the imported image variable
      description: "This Python-Pygame Chess Game project is an interactive and user-friendly chess application developed in Python, utilizing the Pygame library for graphical rendering. Aimed at providing a classic chess experience, it supports two-player gameplay where individuals can challenge each other in a strategic battle of minds. The game faithfully adheres to traditional chess rules, ensuring a familiar and authentic experience for chess enthusiasts.",
      github: "https://github.com/DennisBaksheev/Python-Pygame-Chess",
      
    },

    {
      id: 5,
      title: "Personal Portfolio Website",
      src: personalportfoliowebsite,
      description: 
      `My Personal Portfolio Website is a dynamic showcase of my software development journey, crafted using JavaScript and React with styling from Tailwind CSS, and efficiently deployed on Netlify. This project exemplifies my skills in creating responsive, user-friendly web interfaces, incorporating features like smooth scrolling with react-scroll, social media integration, custom Google Fonts, and a visually appealing gradient background. Designed to highlight my professional experiences and projects, this website stands as a testament to my proficiency in web development and my passion for blending functionality with aesthetic design.`
    ,
      github: "https://github.com/link-to-fragment-ui",
      live: "https://live-link-to-fragment-ui",
    },
    
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const renderModal = () => (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">{selectedProject.title}</h2>
  
        {/* Project Image */}
        <img src={selectedProject.src} alt={selectedProject.title} className="modal-project-image" />
  
        <p className="modal-description">{selectedProject.description}</p>
    
        <div className="modal-buttons">
          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-button github">View on GitHub</a>
          <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-button live">Live Demo</a>
        </div>
        <button onClick={closeProjectDetails} className="modal-close-button">Close</button>
      </div>
    </div>
  );

  return (
    <div name="portfolio" className="bg-gradient-to-b from-sky-900 to-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-700">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((project) => (
            <div key={project.id} className="shadow-md shadow-violet-700 rounded-lg" onClick={() => openProjectDetails(project)}>
              <img src={project.src} alt={project.title} className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Details</button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && renderModal()}
      </div>
    </div>
  );
};

export default Portfolio;
