import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0B0F19] text-white">
      <Navbar />

      <div className="pt-20 px-6 md:px-20 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}