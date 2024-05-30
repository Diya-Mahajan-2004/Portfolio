import React from "react";
import Intro from "./Intro";
import Navbar from "../Components/Navbar";
import bgVideo from "../assets/bgVideo.mp4";
import About from "./About";
import Skills from "./Skills";

function Home() {
  return (
   
     
        <div className=" absolute top-0 left-0 w-full h-full z-0">
      

        <div className="relative h-screen overflow-hidden">
          <Navbar />
          <div className="relative z-10 overflow-hidden bg-gradient-to-r from-[#272f42] to-[#212a40] bg-opacity-75">
            <Intro />
          </div>
        </div>
        </div>
      
  );
}

export default Home;
