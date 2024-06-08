// Intro.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "../Components/Navbar";

function Intro() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow-2xl">
        <div className="intro-content text-center md:text-[6rem] text-6xl mb-24">
          <Typewriter
            options={{
              strings: [
                "Hi, I'm Diya Mahajan",
                "A Full-Stack Web Developer",
                "& a Web Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex justify-center space-x-8">
          <SocialLink
            href="https://github.com/Diya-Mahajan-2004"
            icon="github"
          />
          <SocialLink
            href="https://www.linkedin.com/in/diya-mahajan-11948b21b/"
            icon="linkedin"
          />
          <SocialLink href="#" icon="profile" />
          <SocialLink href="https://wa.me/yourphonenumber" icon="whatsapp" />
          <SocialLink href="#" icon="twitter" />
        </div>
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="text-3xl hover:text-gray-300 transition duration-300"
  >
    <i className={`fab fa-${icon}`} />
  </a>
);

export default Intro;
