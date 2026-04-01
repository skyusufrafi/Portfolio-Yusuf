import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between px-8 py-4 bg-black/40 backdrop-blur-md z-50">
      <h1 className="font-bold">Yusuf</h1>

      <div className="flex gap-6">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}