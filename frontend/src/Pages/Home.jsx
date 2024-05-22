import React from "react";
import Intro from "./Intro";
import Navbar from "../Components/Navbar";
import About from "./About";
import Skills from "./Skills"
function Home() {
  return (
    <div>
      <Navbar />
      <div className=" overflow-hidden bg-gradient-to-r from-[#272f42] to-[#212a40]  ">
        <Intro />
        <About/>
        <Skills/>
      </div>
    </div>
  );
}

export default Home;
