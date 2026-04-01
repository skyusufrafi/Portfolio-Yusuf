import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold">Smart Attendance System</h3>
          <p className="text-gray-400 mt-2">
            QR-based attendance with real-time tracking and automation.
          </p>
          <a href="https://clever-qr-attnd.vercel.app/" target="_blank">
            <button className="mt-4 bg-white text-black px-4 py-2 rounded">
              Live Demo
            </button>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold">Eco Canteen System</h3>
          <p className="text-gray-400 mt-2">
            Zero waste smart canteen with intelligent tracking.
          </p>
          <a href="https://smartcanteen-inky.vercel.app/" target="_blank">
            <button className="mt-4 bg-white text-black px-4 py-2 rounded">
              Live Demo
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}