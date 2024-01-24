import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import cpppp from "../assets/cpppp.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import c from "../assets/c.png";
import csharp from "../assets/csharp.png";
import java from "../assets/java.png";
import nodejs from "../assets/nodejs.png";
import nextjs from "../assets/nextjs.png";
import expressjs from "../assets/expressjs.jpg";
import mongodb from "../assets/mongodb.png";
import azure from "../assets/azure.png";
import aws from "../assets/aws.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cpppp,
      title: "C++",
      style: "shadow-white",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: c,
      title: "C",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: csharp,
      title: "C#",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: nodejs,
      title: "Node.js",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: nextjs,
      title: "Next.js",
      style: "shadow-sky-400",
    },
    {
      id: 13,
      src: azure,
      title: "Azure",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: aws,
      title: "AWS",
      style: "shadow-sky-400",
    },
    {
      id: 15,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-sky-400",
    },
    {
      id: 15,
      src: expressjs,
      title: "Express.js",
      style: "shadow-sky-400",
    },
    
    ];

    return (
      <div name="experience" className="w-full bg-gradient-to-b from-black to-sky-900 pb-50">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="text-center">
            <p className="text-4xl font-bold border-b-4 border-violet-700 p-2 inline-block">
              Experience
            </p>
            <p className="py-6">Languages and Technologies I've Worked With!</p>
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default Experience;