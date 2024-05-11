import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between flex-wrap bg-gradient-to-r from-[#8121D0] to-[#291C3A] p-5 shadow-2xl">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center flex-shrink-0">
        <img
          className="rounded-full ml-4"
          src={logo}
          alt="Logo"
          width="40"
          height="40"
        />
      </div>
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="text-md lg:flex-grow font-semibold">
          <NavLink href="#mednews" text="Home" />
          <NavLink href="#appointments" text="About" />
          <NavLink href="#ai-bot" text="Skills" />
          <NavLink href="#understandayuv" text="Project" />
        </div>
      </div>
      <button className="text-[#8121D0] bg-white border-white border-4 py-1 px-6 rounded-full mt-0 mr-8 hover:bg-[#291C3A] hover:text-white">
        Hire Me
      </button>
    </nav>
  );
}

const NavLink = ({ href, text }) => (
  <a
    href={href}
    className="block lg:inline-block lg:mt-0 text-white hover:text-[#DCCFED] px-4 py-2 transition duration-300 ease-in-out"
  >
    {text}
  </a>
);

export default Navbar;
