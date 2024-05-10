import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaFileMedicalAlt } from "react-icons/fa";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import logo from "../assets/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between md:mr-1 md:ml-1 mt-1  flex-wrap bg-[#353940] p-[0.5rem] rounded-xl shadow-l">
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-4 py-2 rounded text-black border border-black hover:text-[#174046] hover:border-[#174046] focus:outline-none focus:ring-2 focus:ring-[#3EA4B4]">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center flex-shrink-0 ">
        <span className="rounded-full"><img className='rounded-full size-16 ml-4' src={logo} alt="" /></span>
      </div>
      <div className={`w-full  lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <NavLink href="#mednews" icon={<FaFileMedicalAlt size={20} />} text="Medical News" />
          <NavLink href="#appointments" icon={<LiaNotesMedicalSolid size={24} />} text="Appointments" />
          <NavLink href="#ai-bot" icon={<FaUserDoctor size={20} />} text="AI-bot" />
          <NavLink href="#understandayuv" icon={<MdOutlineHealthAndSafety size={24} />} text="About" />
        </div>
      </div>
      
     
    </nav>
  );
}

const NavLink = ({ href, icon, text }) => (
  <a href={href} className="block mt-4 lg:inline-block lg:mt-0 text-[#c3c3c3] hover:text-[#DAA520] px-4 py-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  </a>
);

export default Navbar;
