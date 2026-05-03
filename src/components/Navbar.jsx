import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <h2 className="logo">Yusuf</h2>

        {/* DESKTOP MENU */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#education" onClick={() => setOpen(false)}>Education</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#hackathons" onClick={() => setOpen(false)}>Hackathons</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;