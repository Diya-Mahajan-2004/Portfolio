import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Typewriter from "typewriter-effect";
import "../CSS/Intro.css"; // Ensure your CSS file is imported

function Intro() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[#6b728e] text-[#f0e7d8] shadow-xl tv-background">
      <div className="intro-content text-center text-4xl md:text-6xl mb-24 font-mono">
        <Typewriter
          options={{
            strings: ["Hi, I'm Diya Mahajan", "A Full-Stack Web Developer", "& a Web Designer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="absolute bottom-12 right-12 mb-14 flex flex-col space-y-4">
        <div className="w-0.5 h-24 bg-[#f0e7d8] mb-4"></div>
        <a href="https://github.com/Diya-Mahajan-2004" className="group" aria-label="GitHub">
          <FaGithub className="text-3xl text-[#f0e7d8] group-hover:text-[#ddeefe] hover:text-5xl transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/diya-mahajan-11948b21b/" className="group" aria-label="LinkedIn">
          <FaLinkedin className="text-3xl text-[#f0e7d8] group-hover:text-[#ddeefe] hover:text-5xl transition duration-300" />
        </a>
        <a href="#" className="group" aria-label="Profile">
          <CgProfile className="text-3xl font-bold text-[#f0e7d8] group-hover:text-[#ddeefe] hover:text-5xl transition duration-300" />
        </a>
        <a href="https://wa.me/yourphonenumber" className="group" aria-label="WhatsApp">
          <FaWhatsapp className="text-3xl text-[#f0e7d8] group-hover:text-[#ddeefe] hover:text-5xl transition duration-300" />
        </a>
        <a href="#" className="group" aria-label="Twitter">
          <FaTwitter className="text-3xl text-[#f0e7d8] group-hover:text-[#ddeefe] hover:text-5xl transition duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
