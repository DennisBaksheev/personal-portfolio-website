import React, { useState } from "react";
import imgofme from "../assets/newheroImage.JPG";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div name="about" className="w-full bg-gradient-to-b from-black to-sky-900 text-white pb-40">
      <div className="text-center pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-violet-700 mt-5">
          About Me
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-start w-full">
        <div className="md:w-1/3 mb-4 md:mb-0 flex justify-start md:pr-4">
          {/* Image here */}
          <img src={imgofme} alt="Dennis" className="rounded-lg about-img"/>
        </div>

        <div className="md:w-2/3 flex flex-col justify-start md:pl-4">
          {/* Tab Buttons */}
          <div className="btn-container flex justify-center md:justify-start my-4">
            <button className={`tab-btn ${activeTab === "overview" ? "active" : ""}`} onClick={() => handleTabClick("overview")}>
              Overview
            </button>
            <button className={`tab-btn ${activeTab === "education" ? "active" : ""}`} onClick={() => handleTabClick("education")}>
              Education
            </button>
            <button className={`tab-btn ${activeTab === "hobbies" ? "active" : ""}`} onClick={() => handleTabClick("hobbies")}>
              Hobbies
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content text-xl">
            {activeTab === "overview" && (
              <p>I'm a passionate computer programming student currently enrolled in the CPA program at Seneca College. Coding is my passion, and I enjoy working on personal programming projects. My goal is to make a meaningful impact in the technology world and craft innovative and practical software solutions that solve real-world problems and improve people's lives.</p>
            )}
            {activeTab === "education" && (
  <div className="text-xl">
    <p className="font-bold text-2xl ">Computer Programming and Analysis</p>
    <p className="mt-2">Seneca College, Toronto, ON</p>
    <p className="font-bold mt-4">January 2021 - Present</p>
    <ul className="list-disc list-inside mt-4">
      <li>President's Honor List Award for academic excellence and receiving a perfect GPA (4 / 4): Summer 2022</li>
      <li className="mt-2">President's Honor List Award for academic excellence and receiving a perfect GPA (4 / 4): Winter 2023</li>
    </ul>
  </div>
)}
            {activeTab === "hobbies" && (
              <p>In my free time, my passion for self-improvement takes center stage. I am an avid weightlifter. Playing sports has always been a significant part of my life. I love playing basketball, soccer, and tennis. I have played all 3 sports at a high level since I was young and each game teaches me something new about strategy, teamwork, and perseverance. My love for tennis led me to volunteer at the O'Connor Tennis Camp in Toronto, where I helped campers learn the nuances of the game. This experience was not just about teaching tennis but also about learning patience, communication, and the joy of seeing others grow and succeed. Besides sports, I have a huge passion for technology and coding. I love diving into new coding projects, experimenting with different technologies, and picking up new programming languages. There's always something new to learn in tech, and that's what keeps me hooked. Whether it's developing a new app, automating a task, or just tinkering around to see what I can create, coding gives me a sense of creativity and achievement that I really enjoy.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
