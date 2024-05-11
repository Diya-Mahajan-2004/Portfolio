import React, { useState, useEffect } from "react";
import "../CSS/Intro.css";
import Typewriter from 'typewriter-effect';
function Intro() {
  
  return (
    <div className="intro-content justify-center align-middle text-center md:mt-64  text-white md:text-[44px]">

    <Typewriter
  options={{
    strings: [ "Hi, I'm Diya Mahajan",
    "A Full-Stack Web Developer",
    "& a Web Designer"],
    autoStart: true,
    loop: true,
  }}
/>
</div>
  );
}

export default Intro;

