import React from "react";
import FadeIn from "./FadeIn";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">

      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        Hackathons & Achievements
      </h2>

      <div className="space-y-10 max-w-4xl mx-auto">

        {/* SMART INDIA HACKATHON */}
        <FadeIn>
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition">

            <h3 className="text-2xl font-bold text-cyan-400">
              Smart India Hackathon (SIH)
            </h3>

            <p className="text-gray-300 mt-3">
              Participated in India’s largest national-level hackathon focused on solving real-world problem statements provided by industries and government organizations.
            </p>

            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• Worked on real-world problem-solving approach</li>
              <li>• Collaborated in a team environment under time constraints</li>
              <li>• Developed scalable and innovative technical solutions</li>
              <li>• Gained experience in rapid prototyping and ideation</li>
            </ul>

            <div className="mt-4 text-sm text-gray-500">
              Skills: Problem Solving • Teamwork • Innovation • Development
            </div>

          </div>
        </FadeIn>

        {/* ALGORITHM X */}
        <FadeIn>
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition">

            <h3 className="text-2xl font-bold text-purple-400">
              Algorithm X – 32 Hour National Hackathon (AIKTC)
            </h3>

            <p className="text-gray-300 mt-3">
              Participated in a 32-hour national-level hackathon organized by the Programmers Club, Department of Computer Engineering at AIKTC.
            </p>

            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• Built project under intense 32-hour time constraint</li>
              <li>• Worked on real-time system development</li>
              <li>• Improved coding efficiency and debugging skills</li>
              <li>• Collaborated with team members for rapid execution</li>
            </ul>

            <div className="mt-4 text-sm text-gray-500">
              Skills: Full Stack Development • Time Management • Debugging • Collaboration
            </div>

          </div>
        </FadeIn>

        {/* TECHSPRINT */}
        <FadeIn>
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition">

            <h3 className="text-2xl font-bold text-pink-400">
              TechSprint Hackathon (GDG on Campus – AIKTC)
            </h3>

            <p className="text-gray-300 mt-3">
              Participated in an online hackathon organized by Google Developers Group on Campus, focusing on innovative and scalable tech solutions.
            </p>

            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• Developed innovative ideas using modern technologies</li>
              <li>• Learned industry-level problem-solving approaches</li>
              <li>• Enhanced knowledge of scalable application design</li>
              <li>• Worked in a competitive and collaborative environment</li>
            </ul>

            <div className="mt-4 text-sm text-gray-500">
              Skills: Innovation • System Design • Development • Problem Solving
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}