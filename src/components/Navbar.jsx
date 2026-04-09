import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full bg-[#0B0F19]/90 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-cyan-400 font-bold text-xl">
          Yusuf
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#achievements" className="hover:text-white">Hackathons</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#0B0F19] text-gray-300">
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#achievements">Hackathons</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </div>
      )}
    </motion.nav>
  );
}