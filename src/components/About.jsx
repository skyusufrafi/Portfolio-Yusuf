import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl mb-6">About Me</h2>

      <p className="text-gray-300 max-w-2xl leading-relaxed">
        I am a Computer Engineering student passionate about cybersecurity and full-stack development.
        I focus on building intelligent systems that solve real-world problems efficiently.
      </p>

      <div className="mt-6 text-gray-400">
        <p>CGPA:</p>
        <p>Sem 1: 7.07</p>
        <p>Sem 2: 7.80</p>
        <p>Sem 3: 9.41</p>
      </div>
    </section>
  );
}