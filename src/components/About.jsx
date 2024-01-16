import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-sky-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-700 mt-5">
            <br />
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I'm a passionate computer programming student enrolled in the CPA program at Seneca College.
        <p className="text-xl mt-5"></p>
        I enjoy working on personal projects and contributing to open-source software initiatives.
        </p>
        <p className="text-xl mt-5">
        My goal is to develop software solutions that address real-world problems and enhance people's lives.
        </p>

        

        
      </div>
    </div>
  );
};

export default About;