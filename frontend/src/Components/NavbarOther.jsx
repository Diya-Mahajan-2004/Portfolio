import React, { useState } from "react";
import "../CSS/Intro.css"; // Ensure your CSS file is imported

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between flex-wrap bg-[#6b728e] p-5 shadow-lg border-b-2 border-[#2c3e50] tv-background">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-4 py-2 rounded-full text-[#2c3e50] focus:outline-none focus:ring-2 focus:ring-[#f0e7d8]"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "" : "hidden"}`}>
        <div className="text-md lg:flex-grow font-mono">
          <NavLink href="/" text="Home" className="mr-8 text-[#ffffff] text-[22px] hover:text-[#6b728e] hover:bg-white" />
          <NavLink href="/about" text="About" className="mr-8 text-[#ffffff] text-[22px] hover:text-[#6b728e] hover:bg-white" />
          <NavLink href="/skills" text="Skills" className="mr-8 text-[#ffffff] text-[22px] hover:text-[#6b728e] hover:bg-white" />
          <NavLink href="/projects" text="Projects" className="text-[#ffffff] text-[22px] hover:text-[#6b728e] hover:bg-white" />
        </div>
      </div>
      <button className="bg-[#ffffff] text-[#000000] text-[20px]  border-[#2c3e50] border-4 py-1 px-6 rounded-md mt-0 mr-8 hover:bg-[#f0e7d8] hover:text-[#2c3e50]">
          Hire Me
      </button>
    </nav>
  );
}

const NavLink = ({ href, text, className }) => (
  <a href={href} className={`block lg:inline-block lg:mt-0 px-4 py-2 transition duration-300 ease-in-out ${className}`}>
    {text}
  </a>
);

export default Navbar;
