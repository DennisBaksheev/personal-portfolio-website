import React, { useState } from "react";
import fragmentui from "../assets/portfolio/fragmentui.jpg";
import ShowBiz from "../assets/portfolio/ShowBiz.png";
import Arkanoid from "../assets/portfolio/Arkanoid.png";
import PythonPygameChess from "../assets/portfolio/Python-Pygame-Chess.png"; 
import personalportfoliowebsite from "../assets/portfolio/personalportfoliowebsite.png";
import BookWorm from "../assets/portfolio/BookWorm.png";
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      title: "Fragment UI & Fragments Microservice",
      src: fragmentui,
      description: `The "Fragment UI & Fragments Microservice" project represents a comprehensive full-stack development effort, combining a front-end web application with a cloud-based microservice backend. The Fragments UI provides a user-friendly interface for managing text, images, and JSON data, and features Docker integration, multi-stage builds, Nginx for static site serving, integrated AWS Cognito for security, and AWS backend integration. The Fragments Microservice, designed for handling a variety of data sources, includes features like CRUD operations, data conversion, enhanced security, and scalability. Deployed on AWS, it employs GitHub Actions for CI/CD and Docker Compose for container management, showcasing a sophisticated, scalable, and user-focused software development approach.`,
      shortDescription: "The Fragment UI & Fragments Microservice project represents a comprehensive full-stack project, combining a front-end web application with a cloud-based microservice backend.",
      stack: ["Docker",
      "Nginx",
      "AWS Cognito",
      "Netlify",
      "AWS Elastic Container Service (ECS)",
      "Amazon Elastic Container Registry (ECR)",
      "Amazon S3",
      "Amazon DynamoDB",
      "AWS CloudWatch",
      "CI/CD with GitHub Actions",
      "JavaScript",
      "React",
      "Node.js",
      "HTML",],
      github: ["https://github.com/DennisBaksheev/fragments-ui", "https://github.com/DennisBaksheev/fragments-Microservice"],
    // live: "https://incandescent-madeleine-e2b4c2.netlify.app/",
    },
  
    {
      id: 2,
      title: "Show Biz",
      src: ShowBiz,
      description: "Show Biz is a TV Production Management App it is an innovative web application designed to optimize TV production management. This app serves as a comprehensive tool for managing actors, TV series, and episodes with precision and ease. It features user roles like Executive, Coordinator, and Admin, each tailored with specific access levels to streamline the production process. The application stands out for its rich text support, enhancing actor biographies and show descriptions, and its ability to handle diverse multimedia uploads. Seamlessly integrated with Microsoft Azure for reliable hosting, it represents a pinnacle of web application development, showcasing proficiency in ASP.NET, C#, Entity Framework, and Azure deployment. This project is a testament to advanced web programming skills, emphasizing security, data management, and user-friendly design.",
      shortDescription: "Show Biz is a TV Production Management App it is an innovative web application designed to optimize TV production management. This app serves as a comprehensive tool for managing actors, TV series, and episodes with precision and ease.",
      stack: ["ASP.NET", "C#", "JavaScript","HTML", "Entity Framework", "Microsoft Azure"],
      github: "https://github.com/DennisBaksheev/Show-Biz"
      
    },

    {
      id: 3,
      title: "Arkanoid",
      src: Arkanoid,
      description: "The 3D Arkanoid Game project revitalizes the iconic Arkanoid game with a contemporary 3D perspective, achieved through the adept use of OpenGL. This rendition, set within a 1024x768 window, invites players to a dynamic and immersive experience from a static 3/4 view. The game is distinguished by its 3D graphics, interactive controls utilizing keyboard arrows for navigation and a spacebar for sphere launch, and an escape key for exiting. It features advanced collision detection between the sphere and bricks, enriched by unique textures for visual appeal. The game poses an additional challenge, ending if the sphere is missed, thereby raising the stakes. Technically, the game stands out for its OpenGL-based 3D rendering, sophisticated collision detection, and first-time texture mapping. As a personal endeavor, this project pushed the boundaries of my capabilities in game development, particularly in texture mapping and collision mechanics. Future enhancements may include new challenging levels, power-ups for an exhilarating experience, and a competitive scoring system with leaderboards.",
      shortDescription: "The 3D Arkanoid Game project revitalizes the iconic Arkanoid game with a contemporary 3D perspective, achieved through the adept use of OpenGL. This rendition, set within a 1024x768 window, invites players to a dynamic and immersive experience from a static 3/4 view.",
      stack: ["OpenGL", "C++"],
      github: "https://github.com/DennisBaksheev/Arkanoid-",
    },

    {
      id: 4,
      title: "PythonPygameChess",
      src: PythonPygameChess,  // Use the imported image variable
      description: "This Python-Pygame Chess Game project is an interactive and user-friendly chess application developed in Python, utilizing the Pygame library for graphical rendering. Aimed at providing a classic chess experience, it supports two-player gameplay where individuals can challenge each other in a strategic battle of minds. The game faithfully adheres to traditional chess rules, ensuring a familiar and authentic experience for chess enthusiasts.",
      shortDescription: "This Python-Pygame Chess Game project is an interactive and user-friendly chess application developed in Python, utilizing the Pygame library for graphical rendering.",
      stack: ["Python", "Pygame"],
      github: "https://github.com/DennisBaksheev/Python-Pygame-Chess",
      
    },

    {
      id: 5,
      title: "Personal Portfolio Website",
      src: personalportfoliowebsite,
      description: `My Personal Portfolio Website is a dynamic showcase of my software development journey, crafted using JavaScript and React with styling from Tailwind CSS, and efficiently deployed on Netlify. This project exemplifies my skills in creating responsive, user-friendly web interfaces, incorporating features like smooth scrolling with react-scroll, social media integration, custom Google Fonts, and a visually appealing gradient background. Designed to highlight my professional experiences and projects, this website stands as a testament to my proficiency in web development and my passion for blending functionality with aesthetic design.`,
      shortDescription: "My Personal Portfolio Website is a dynamic showcase of my software development journey, crafted using JavaScript and React with styling from Tailwind CSS, and efficiently deployed on Netlify.",
      stack: ["JavaScript", "React", "HTML", "Tailwind CSS", "Netlify"],
      github: "https://github.com/DennisBaksheev/personal-portfolio-website?tab=readme-ov-file",
      live: "https://shimmering-pixie-ac3f24.netlify.app/",
    },

    {
      id: 6,
      title: "BookWorm",
      src: BookWorm,
      description: 
      `The Bookworm Web App is a dynamic and intuitive platform for book enthusiasts, revolutionizing book discovery through the Google Books API. It simplifies managing personal reading lists, offering a user-friendly experience. Developed using advanced technologies like Node.js, Express.js, MongoDB, Mongoose, and EJS, the app provides a robust backend and a seamless frontend. It incorporates secure Google OAuth for user authentication, ensuring privacy and streamlined access. Additionally, the app uses Passport.js for authentication and Axios for efficient API interactions. Its straightforward installation process makes it easily accessible for local browser use. From signing up and logging in to book searching and list management, the Bookworm Web App delivers a comprehensive and engaging user experience, showcasing a commitment to sophisticated, user-centric web development.`,
      shortDescription: "The Bookworm Web App is a dynamic and intuitive platform for book enthusiasts, revolutionizing book discovery through the Google Books API. It simplifies managing personal reading lists, offering a user-friendly experience.",
      stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "EJS", "Google Books API", "Google OAuth", "Passport.js", "Axios"],
      github: "https://github.com/DennisBaksheev/BookWorm",
      live: "https://reflective-voracious-provelone.glitch.me/",
    },
    
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.classList.add('modal-open');
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open');
  };

  const renderModal = () => {
    const openGitHubLinks = () => {
      if (Array.isArray(selectedProject.github)) {
        selectedProject.github.forEach(link => {
          window.open(link, '_blank');
        });
      } else {
        window.open(selectedProject.github, '_blank');
      }
    };
  
    const handleBackdropClick = (event) => {
      if (event.currentTarget === event.target) {
        closeProjectDetails();
      }
    };
  
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-content">
          <button onClick={closeProjectDetails} className="modal-close-button">&times;</button>
          <div className="modal-inner">
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-image-container">
              <img src={selectedProject.src} alt={selectedProject.title} className="modal-project-image" />
            </div>
            <p className="modal-description modal-description-full">{selectedProject.description}</p>
            <p className="modal-description modal-description-short">{selectedProject.shortDescription}</p>
            <div className="modal-buttons">
              <button onClick={openGitHubLinks} className="modal-button github">
                <i className="fab fa-github"></i> View on GitHub
              </button>
              {selectedProject.live && 
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-button live">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              }
            </div>
            <div className="modal-stack">
              <h3 className="stack-title">Technologies & Tools</h3>
              <ul className="stack-list">
                {selectedProject.stack && selectedProject.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    
      <div name="portfolio" className="w-full h-full bg-gradient-to-b from-sky-900 to-black text-white  pb-60">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="text-center pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-violet-700">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here!</p>
          </div>
  

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
  {portfolios.map((project) => (
    <div key={project.id} className="shadow-md shadow-violet-700 rounded-lg cursor-pointer" onClick={() => openProjectDetails(project)}>
      <img src={project.src} alt={project.title} className="rounded-md duration-200 hover:scale-105 portfolio-image" />
      <div className="flex items-center justify-center flex-col p-4">
        <h3 className="text-lg text-white font-medium">{project.title}</h3>
        <p className="text-violet-600 hover:text-violet-700 transition duration-200">Click here!</p>
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