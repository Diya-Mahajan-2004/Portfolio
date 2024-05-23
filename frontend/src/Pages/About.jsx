import React from "react";
import PortfolioPic from "../assets/PortfolioPic.jpg";
import AboutMe from "../assets/AboutMe.jpg"

function About() {
  return (
    <div className=" text-white pt-20  pb-16 font-sans">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row relative space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0 relative">
          <img 
            className=" w-64 h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full border-2 border-[#f1d243] shadow-2xl" 
            src={PortfolioPic} 
            alt="About Me" 
          />
        </div>
        <div className="max-w-3xl text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 font-montserrat">About Me</h1>
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed font-open-sans">
            <span className="font-semibold text-[#f1d243]">Passionate and inventive</span>{" "}
            <span className="font-semibold text-[#f1d243]">Full Stack Web Developer</span>{" "}
            and{" "}
            <span className="font-semibold text-[#f1d243]">Web Designer</span>. 
            I started my coding journey at 16 and have since developed 
            impressive projects and participated in numerous hackathons. Recently, 
            I was honored in the prestigious{" "}
            <span className="font-semibold text-[#f1d243]">PepSheCo Sales Star competition</span>{" "}
            by Internshala. I've built a strong foundation through platforms like{" "}
            <span className="font-semibold text-[#f1d243]">Udemy</span>,{" "}
            <span className="font-semibold text-[#f1d243]">Coding Ninjas</span>,{" "}
            and <span className="font-semibold text-[#f1d243]">Codecademy</span>. Currently, 
            I am furthering my education in technology as a bachelor's student at{" "}
            <span className="font-semibold text-[#f1d243]">Symbiosis</span>.
          </p>
          <button className="bg-[#d1b535] text-white py-3 px-6 rounded-full hover:bg-[#291C3A] hover:border-4 hover:border-[#d1b535] hover:text-[#d1b535] transition duration-300 font-montserrat">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;



