import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Shaikh Mohammed Yusuf
        </h1>

        <p className="hero-role">
          Software Developer • Cybersecurity Enthusiast
        </p>

        <p className="hero-desc">
          Passionate about building secure, scalable, and intelligent systems.
          I specialize in full-stack development and actively participate in
          hackathons to solve real-world problems using technology.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;