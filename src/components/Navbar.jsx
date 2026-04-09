import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full flex justify-between px-8 py-4 bg-[#0B0F19]/80 backdrop-blur-md z-50 border-b border-white/10"
    >
      <h1 className="text-cyan-400 font-bold">Yusuf</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Hackathons</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}