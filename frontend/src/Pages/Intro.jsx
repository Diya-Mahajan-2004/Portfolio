import React from "react";
import "../CSS/Intro.css";

function Intro() {
  return (
    <div>
      <div className=" justify-center align-middle text-center md:mt-64">
        <h1 className=" text-white md:text-[3rem]">
          Hi, I'm <span className="text-[#DAA520]">Diya Mahajan</span>{" "}
        </h1>
        <h1 className="md:text-[2.2rem] md:ml-3 text-white">
          A Full-Stack Developer.
        </h1>
        <button className="text-[#DAA520] bg-[#353940] border-[#DAA520] border-4 py-3 px-8 rounded-full mt-6 hover:bg-[#DAA520]  hover:text-white">
          Contact Me For Work
        </button>
      </div>
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
