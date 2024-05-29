import React from "react";
import Navbar from "../Components/Navbar";
import pythonLogo from "../assets/pythonLogo.png";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAngular, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiThreedotjs, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={60} /> },
    { name: "React", icon: <FaReact className="text-blue-500" size={60} /> },
    { name: "Angular", icon: <FaAngular className="text-red-600" size={60} /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" size={60} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={60} /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={60} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-300" size={60} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={60} /> },
    { name: "Three.js", icon: <SiThreedotjs className="text-black" size={60} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={60} /> },
    { name: "Python", icon: <img src={pythonLogo} alt="Python Logo" className="w-16 h-16" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" size={60} /> },
  ];

  return (
<div className="py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-r from-[#0f0f0f] to-[#2b2b2b] text-[#ffffff]">
      <Navbar />
      <div className="py-16 px-4 md:px-8 lg:px-20 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-montserrat text-center">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1F1E25] p-6 rounded-lg shadow-lg hover:bg-[#2D2C33] transition-all duration-300 ease-in-out">
      <div className="text-8xl mb-4">{skill.icon}</div>
      <p className="text-xl font-semibold">{skill.name}</p>
    </div>
  );
};

export default Skills;
