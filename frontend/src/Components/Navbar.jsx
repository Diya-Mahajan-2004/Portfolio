import React, { useState } from "react";

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between text-center text-[#0C2340] tracking-wide    flex-wrap  p-6 rounded-sm shadow-lg">
      <div className="text-md underline decoration-1 hover:text-[#FFFF00] lg:flex-grow">
        <a href="#contact">Contact Now!</a>
      </div>
    </nav>
  );
}

export default Navbar;
