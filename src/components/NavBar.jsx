import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = ({ onMenuToggle }) => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
        if (onMenuToggle) {
            onMenuToggle(!nav);
        }
    };

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
      <div className="navbar flex justify-between items-center w-full h-20 px-4 bg-violet-700 fixed">
          <div>
              <h1 className="text-5xl font-Luckiest-Guy ml-2 text-white">DB</h1>
          </div>

          <ul className="hidden md:flex">
              {links.map(({ id, link }) => (
                  <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
                      <Link to={link} smooth duration={500} className="text-white">
                          {link}
                      </Link>
                  </li>
              ))}
          </ul>

          <div onClick={toggleNav} className="cursor-pointer pr-4 z-10 md:hidden">
              {nav ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-white" />}
          </div>

          {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
                  {links.map(({ id, link }) => (
                      <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-white">
                          <Link 
                              onClick={() => {
                                  setNav(false);
                                  if (onMenuToggle) {
                                      onMenuToggle(false);
                                  }
                              }} 
                              to={link} 
                              smooth 
                              duration={500}>
                                  {link}
                          </Link>
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
};

export default NavBar;
