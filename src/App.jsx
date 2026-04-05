import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0B0F19] text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-24 space-y-40 px-6 md:px-24 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}