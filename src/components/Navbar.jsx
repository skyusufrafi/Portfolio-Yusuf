import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between px-8 py-4 bg-[#0B0F19]/80 backdrop-blur-md z-50 border-b border-white/10">
      <h1 className="font-bold text-cyan-400">Yusuf</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Projects</a>
      </div>
    </nav>
  );
}