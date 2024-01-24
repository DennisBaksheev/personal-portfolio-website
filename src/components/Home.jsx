import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import NavBar from "./NavBar";

const AnimatedName = ({ firstName, lastName, isVisible }) => {
    return (
        <div className={`text-6xl font-bold text-white text-center my-6 ${!isVisible ? 'hidden' : ''}`}>
            <div>
                {firstName.split("").map((letter, index) => (
                    <span key={`first-${index}`} className="animated-letter">{letter}</span>
                ))}
            </div>
            <div>
                {lastName.split("").map((letter, index) => (
                    <span key={`last-${index}`} className="animated-letter">{letter}</span>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-sky-900 to-black pb-50">
            <NavBar onMenuToggle={handleMenuToggle} />
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full text-center">
                    <p className="text-3xl sm:text-4xl text-white mt-6">
                        Hey there! I'm
                    </p>
                    <AnimatedName firstName="Dennis" lastName="Baksheev" isVisible={!isMenuOpen} />
                    <p className="text-3xl sm:text-4xl text-white mt-6">
                        a passionate software developer from Toronto, ON who loves bringing ideas to life.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-r from-violet-700 to-violet-600 cursor-pointer"
                            onClick={handleLinkClick}
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
