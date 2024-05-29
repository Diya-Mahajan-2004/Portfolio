import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { FaWhatsapp } from "react-icons/fa";

function Intro() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[#BCD4E6] text-primary-text shadow-2xl">
      <div className="intro-content text-center text-[#012a4a] text-4xl md:text-5xl mb-24">
        <Typewriter
          options={{
            strings: ["Hi, I'm Diya Mahajan", "A Full-Stack Web Developer", "& a Web Designer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="absolute bottom-12 mb-14 right-8 flex flex-col items-center">
        <div className="w-0.5 h-24 bg-primary-text mb-4"></div>
        <a href="https://github.com/Diya-Mahajan-2004">
          <FaGithub className="text-2xl text-accent1 hover:text-accent2 my-2" />
        </a>
        <a href="https://www.linkedin.com/in/diya-mahajan-11948b21b/">
          <FaLinkedin className="text-2xl text-accent2 hover:text-accent3 my-2" />
        </a>
        <a href="">
          <CgProfile className="text-2xl text-accent3 hover:text-accent4 my-2" />
        </a>
        <a href="">
          <FaWhatsapp className="text-2xl text-accent4 hover:text-accent1 my-2" />
        </a>
        <a href="">
          <FaXTwitter className="text-2xl text-accent1 hover:text-accent2 my-2" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
