import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8">About Me</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-lg lg:text-xl leading-8 mb-8">
            <span className="font-bold text-[#f1d243]">Passionate and inventive</span>{" "}
            <span className="font-bold text-[#f1d243]">Full Stack Web Developer</span>{" "}
            and{" "}
            <span className="font-bold text-[#f1d243]">Web Designer</span>. 
            I started my coding journey at 16 and have since developed 
            impressive projects and participated in numerous hackathons. Recently, 
            I was honored in the prestigious{" "}
            <span className="font-bold text-[#f1d243]">PepSheCo Sales Star competition</span>{" "}
            by Internshala. I've built a strong foundation through platforms like{" "}
            <span className="font-bold text-[#f1d243]">Udemy</span>,{" "}
            <span className="font-bold text-[#f1d243]">Coding Ninjas</span>,{" "}
            and <span className="font-bold text-[#f1d243]">Codecademy</span>. Currently, 
            I am furthering my education in technology as a bachelor's student at{" "}
            <span className="font-bold text-[#f1d243]">Symbiosis</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

