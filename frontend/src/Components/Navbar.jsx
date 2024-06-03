import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between flex-wrap bg-[#ffffe4] p-5 shadow-2xl">

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-4 py-2 rounded-full text-[#012a4a] focus:outline-none focus:ring-2 focus:ring-[#eaeaea]"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "" : "hidden"}`}>
        <div className="text-md lg:flex-grow font-semibold">
          <NavLink href="/" text="Home" className="mr-8 hover:text-[#f975b1] hover:bg-[#f981b7] text-[#f981b7] hover:bg-opacity-25 hover:py-1 hover:px-4 hover:rounded-lg" />
          <NavLink href="/about" text="About" className="mr-8 hover:text-[#f975b1] hover:bg-[#f981b7] text-[#f981b7] hover:bg-opacity-25 hover:py-1 hover:px-4 hover:rounded-lg" />
          <NavLink href="/skills" text="Skills" className="mr-8 hover:text-[#f975b1] hover:bg-[#f981b7] text-[#f981b7] hover:bg-opacity-25 hover:py-1 hover:px-4 hover:rounded-lg" />
          <NavLink href="/projects" text="Projects" className="hover:text-[#f975b1] hover:bg-[#f981b7] text-[#f981b7] hover:bg-opacity-25 hover:py-1 hover:px-4 hover:rounded-lg" />
        </div>
      </div>
      <button className="bg-[#f981b7] text-[#ffffca]  border-[#f981b7] border-4 py-1 px-6 rounded-md mt-0 mr-8 hover:bg-[#ffffe4] hover:text-[#012a4a]">
        Hire Me
      </button>
    </nav>
  );
}

const NavLink = ({ href, text, className }) => (
  <a href={href} className={`block lg:inline-block lg:mt-0 bg-[#ffffe4] text-[#f981b7] px-4 py-2 transition duration-300 ease-in-out ${className}`}>
    {text}
  </a>
);

export default Navbar;
