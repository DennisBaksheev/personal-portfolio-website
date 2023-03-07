import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-44">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-5">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I'm a passionate computer programming student currently enrolled in the CPP program at Seneca College. Coding is my passion and I love learning about computer programming and software development. I enjoy working on personal programming projects and contributing to open-source software initiatives. My goal is to make a meaningful impact in the world of technology, and craft innovative and practical software solutions that solve real-world problems and improve people's lives. I aspire to work as a software developer in a fast-paced and dynamic environment where I can put my skills and knowledge to use in creating high-quality software products.
        </p>

        <br />

        
      </div>
    </div>
  );
};

export default About;