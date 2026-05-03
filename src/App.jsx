import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function BackgroundGlow() {
  return (
    <div className="bg-glow">
      <div className="glow g1"></div>
      <div className="glow g2"></div>
      <div className="glow g3"></div>
    </div>
  );
}

<div className="glass-card">...</div>

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
      <BackgroundGlow />
    </div>
  );
}