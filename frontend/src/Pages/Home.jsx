import { useState } from "react";
import Intro from "./Intro";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[#72A0C1] ">
        <Navbar />
        <Intro />
      </div>
    </>
  );
}

export default Home;

// {/*bg-gradient-to-r from-[#0d1826] via-[#2e5586]   to-[#5dafed]*/}