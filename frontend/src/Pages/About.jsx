import React from 'react';
import { FaFlag, FaLaptopCode, FaTrophy, FaReact, FaBullseye, FaPalette } from 'react-icons/fa';
import Navbar from "../Components/Navbar";

function About() {
  const timelineEvents = [
    {
      date: '2022',
      title: 'Started My Coding Journey',
      description: 'I embarked on an exciting journey into the world of coding, diving into the fundamentals of HTML, CSS, and JavaScript through engaging online courses and tutorials.',
      icon: <FaFlag />,
    },
    {
      date: '2023',
      title: 'First Website Project',
      description: 'I crafted my inaugural website project, a creative canvas to display and share my burgeoning skills with the world.',
      icon: <FaLaptopCode />,
    },
    {
      date: '2023',
      title: 'Embraced React and DSA',
      description: 'I delved deeper into the realm of web development, mastering React.js and honing my problem-solving abilities with Data Structures & Algorithms.',
      icon: <FaReact />,
    },
    {
      date: '2024',
      title: 'Hackathon Participation',
      description: 'I joined forces with fellow enthusiasts in hackathons, fostering teamwork and innovation while tackling real-world challenges.',
      icon: <FaTrophy />,
    },
    {
      date: '2024',
      title: 'Ventured into UI/UX Design and Backend',
      description: 'I explored the captivating domains of UI/UX design principles and backend development, blending creativity with technical prowess.',
      icon: <FaPalette />,
    },
    {
      date: '2024',
      title: 'Mastered Advanced JS Frameworks',
      description: 'I continued my learning journey with modern JS frameworks like React and Angular, unlocking new possibilities for dynamic web applications.',
      icon: <FaReact />,
    },
    {
      date: 'Present',
      title: 'Aiming for FAANG',
      description: 'With a steadfast focus on personal and professional growth, I am honing my skills to secure a coveted position within a FAANG company, driven by passion and determination.',
      icon: <FaBullseye />,
    },
  ];

  return (
    <div>
      <Navbar/>
      <div className="about-page p-10 bg-gradient-to-r from-[#3b4660] to-[#364468] text-white min-h-screen flex justify-center items-center">
      <div className="max-w-lg">
        <h1 className="text-5xl mb-8 text-center font-bold">My Journey</h1>
        <div className="timeline relative">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event flex items-start mb-8">
              <div className="timeline-icon bg-white text-[#3b4660] rounded-full p-3 shadow-lg mr-4">
                {event.icon}
              </div>
              <div className="flex flex-col">
                <div className="timeline-date text-xl mb-2">{event.date}</div>
                <h2 className="text-xl mb-2 font-semibold">{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
    
  );
}

export default About;
