import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../src/assets/Logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#efeee7] flex items-center justify-between px-6 py-7 md:px-16 shadow-md">
      {/* Logo + Title */}
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          
          <h1
            className="text-4xl text-[#697328] tracking-wide leading-tight cursor-pointer"
            style={{
              fontFamily: "Dancing Script, Brush Script MT, cursive",
            }}
          >
            <Link to="/">Slide & Media</Link>
          </h1>
          <div className="flex items-center justify-center mt-1">
            <div className="h-px bg-black flex-1"></div>
            <span className="px-3 text-xs font-sans uppercase tracking-[0.25em] text-black cursor-pointer font-medium">
              STUDIO
            </span>
            <div className="h-px bg-gray-400 flex-1"></div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-13 text-[#697328] font-medium items-center">
        <li
          className="hover:underline cursor-pointer text-4xl"
          style={{
            fontFamily:
              "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
          }}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          className="hover:underline cursor-pointer text-4xl"
          style={{
            fontFamily:
              "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
          }}
        >
          <Link to="/services">Our Services</Link>
        </li>

        <li
          className="hover:underline cursor-pointer text-4xl"
          style={{
            fontFamily:
              "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
          }}
        >
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Hamburger and Mobile Dropdown */}
      <div className="md:hidden relative p-4 ">
        
        <button onClick={toggleMenu} className="text-black cursor-pointer focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute right-0 mt-2 w-56 bg-[#efeee7] text-[#697328] rounded-md shadow-lg z-50 p-6"
            >
              <li
                className="block px-4 py-2 hover:underline cursor-pointer text-2xl "
                style={{
                  fontFamily:
                    "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
                }}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                className="block px-4 py-2 hover:underline cursor-pointer text-lg "
                style={{
                  fontFamily:
                    "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
                }}
              >
               <Link to="/services">Our Services</Link>
              </li>

              <li
                className="block px-4 py-2 hover:underline  cursor-pointer text-lg"
                style={{
                  fontFamily:
                    "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
                }}
              >
                <Link to="/about">About</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
