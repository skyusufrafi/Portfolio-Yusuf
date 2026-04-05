import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between px-8 py-4 bg-[#0B0F19]/80 backdrop-blur-md z-50 border-b border-white/10">
      <h1 className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition duration-300">Yusuf</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Projects</a>
      </div>
    </nav>
  );
}