import React from "react";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="py-20">

        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-gray-300 max-w-3xl leading-relaxed">
          I am <span className="text-white font-semibold">Shaikh Mohammed Yusuf Mohd Rafi</span>, 
          a passionate Software Developer and aspiring Cybersecurity expert currently pursuing 
          <span className="text-white"> Computer Engineering at AIKTC</span>.
          I am deeply interested in building secure, scalable, and intelligent systems that solve real-world problems.
        </p>

        <p className="text-gray-400 mt-4 max-w-3xl">
          I actively participate in hackathons, develop innovative projects, and continuously enhance my technical skills 
          in full-stack development and security domains.
        </p>

        {/* EDUCATION */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-cyan-400">Education</h3>
          <p className="text-gray-300 mt-2">
            B.E. Computer Engineering <br />
            Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC)
          </p>
        </div>

        {/* CGPA */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-purple-400">Academic Performance</h3>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>Sem 1: 7.07</li>
            <li>Sem 2: 7.80</li>
            <li>Sem 3: 9.41</li>
          </ul>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-pink-400">Personal Details</h3>
          <p className="text-gray-300 mt-2">
            Date of Birth: 24 April 2006
          </p>
        </div>

      </section>
    </FadeIn>
  );
}