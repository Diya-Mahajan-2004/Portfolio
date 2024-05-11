import React from "react";
import "../CSS/Intro.css";

function Intro() {
  return (
    <div>
      <div className=" justify-center align-middle text-center md:mt-52 font-semibold">
        <h1 className=" text-white md:text-[3rem]">
          Hi, I'm <span className="text-[#734697]">Diya Mahajan</span>{" "}
        </h1>
        <h1 className="md:text-[2.2rem] md:ml-3 text-white">
          A Full-Stack Developer <br /> & UI/UX Designer.
        </h1>
        <button className="hover:text-[#8121D0] hover:bg-white bold  hover:border-white bg-[#291C3A]  text-white font-semibold border-4 py-3 px-8 rounded-full mt-6 ">
          Contact Me For Work
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Intro;

/*
<div className='  text-2xl md:ml-28 '>
       
        <h1 className=' md:text-[3rem] md:mt-52'>Hi, I'm Diya </h1>
        <h1 className='md:text-[2rem] mt-8'>A Web Developer.</h1>


    </div>
*/
