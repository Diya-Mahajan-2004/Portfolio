import React from "react";
import Intro from "./Intro";
import Navbar from "../Components/Navbar";
function Home() {
  return (
    <div className="h-[750px] overflow-hidden bg-[#353940] ">
      <Navbar/>
      <Intro />
    </div>
  );
}

export default Home;
