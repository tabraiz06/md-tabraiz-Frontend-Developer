import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full   fixed z-50">
      <div className="flex justify-between items-center min-h-[100px] px-6 md:px-16">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-24 md:w-32" />
        </div>

        {/* Desktop Menu */}
        <div className="menus hidden md:flex w-[653px] h-[64px] items-center justify-evenly">
          <span>Features</span>
          <span>Why Us</span>
          <span>Tokenomics</span>
          <span>Roadmap</span>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className=" bg-blue-500 text-white text-center px-8 py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <button className="btn2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Whitepaper
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 flex flex-col space-y-4">
          <span>Features</span>
          <span>Why Us</span>
          <span>Tokenomics</span>
          <span>Roadmap</span>
          <div className="flex gap-3">
            <button className="btn1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
            <button className="btn2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              Whitepaper
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
