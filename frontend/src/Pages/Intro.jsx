import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[#ffb7d7] text-primary-text shadow-2xl">
      <div className="intro-content text-center text-[#ffffff] text-4xl md:text-6xl mb-24">
        <Typewriter
          options={{
            strings: ["Hi, I'm Diya Mahajan", "A Full-Stack Web Developer", "& a Web Designer"],
            autoStart: true,
            loop: true,
          }}
        />
        
      </div>
      <div className="absolute bottom-12 mb-14 flex flex-col items-center space-y-4">
        <div className="w-0.5 h-24 bg-primary-text mb-4"></div>
        <a href="https://github.com/Diya-Mahajan-2004" className="group" aria-label="GitHub">
          <FaGithub className="text-2xl text-accent1 group-hover:text-accent2 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/diya-mahajan-11948b21b/" className="group" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl text-accent2 group-hover:text-accent3 transition duration-300" />
        </a>
        <a href="#" className="group" aria-label="Profile">
          <CgProfile className="text-2xl text-accent3 group-hover:text-accent4 transition duration-300" />
        </a>
        <a href="https://wa.me/yourphonenumber" className="group" aria-label="WhatsApp">
          <FaWhatsapp className="text-2xl text-accent4 group-hover:text-accent1 transition duration-300" />
        </a>
        <a href="#" className="group" aria-label="Twitter">
          <FaTwitter className="text-2xl text-accent1 group-hover:text-accent2 transition duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Intro;