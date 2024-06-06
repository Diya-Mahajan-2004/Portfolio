import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavbarOther.css"; // Import your CSS file for styling

function NavbarOther() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-other">
      <div className="navbar-other-inner">
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
            <svg
              className="menu-icon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        <nav className="navbar flex items-center justify-between flex-wrap align-middle p-5 shadow-xl border-b-4 border-[#2c3e50] ">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/skills" className="nav-link" activeClassName="active">
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active">
            Projects
          </NavLink>
        </nav>
      </div>
      <button className="hire-btn">Hire Me</button>
    </nav>
  );
}

export default NavbarOther;
