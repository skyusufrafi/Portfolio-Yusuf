import React from "react";
import FadeIn from "./FadeIn";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* NAME */}
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Shaikh Mohammed Yusuf
        </h1>
      </FadeIn>

      {/* ROLE */}
      <FadeIn>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Software Developer • Cybersecurity Enthusiast
        </p>
      </FadeIn>

      {/* DESCRIPTION */}
      <FadeIn>
        <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed">
          Passionate about building secure, scalable, and intelligent systems.
          I specialize in full-stack development and actively participate in
          hackathons to solve real-world problems using technology.
        </p>
      </FadeIn>

      {/* CTA BUTTONS */}
      <FadeIn>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          <a href="#projects">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg">
              View Projects
            </button>
          </a>
        </div>
      </FadeIn>

    </section>
  );
}