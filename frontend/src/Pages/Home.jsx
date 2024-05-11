import React from "react";
import Intro from "./Intro";
import Navbar from "../Components/Navbar";
function Home() {
  return (
    <div>
      <Navbar/>
    <div className="h-[750px] overflow-hidden bg-gradient-to-r from-[#331C52] to-[#291C3A]  ">
      
     
      <Intro />
     
    </div>
    </div>

  );
}

export default Home;
