import { useEffect } from "react";

import React, { useState } from "react";

import "../CSS/Intro.css";

function Intro() {
  const texts = [
    "Hi, I'm Diya Mahajan",
    "A Full-Stack Web Developer",
    "& a Web Designer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
  }, [currentIndex, texts]);

  return (
    <div>
      <div className=" justify-center align-middle text-center md:mt-72 font-semibold">
        <h1 className=" text-white md:text-[3rem]">{texts[currentIndex]}</h1>
      </div>
    </div>
  );
}

export default Intro;
