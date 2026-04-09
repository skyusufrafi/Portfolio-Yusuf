import React from "react";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* PROJECT 1 */}
        <FadeIn>
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-cyan-500/20 transition duration-300">

            <h3 className="text-2xl font-bold text-cyan-400">
              Smart Attendance System (QR-Based)
            </h3>

            <p className="text-gray-300 mt-3">
              A modern QR-based attendance system designed to automate and secure student attendance tracking with real-time monitoring.
            </p>

            {/* FEATURES */}
            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• QR code-based attendance marking</li>
              <li>• Real-time attendance updates</li>
              <li>• Secure login and authentication system</li>
              <li>• Admin dashboard for attendance management</li>
              <li>• Automated attendance reports and analytics</li>
              <li>• Student-wise attendance tracking</li>
              <li>• Fast and scalable system for institutions</li>
            </ul>

            {/* TECH STACK */}
            <div className="mt-4 text-sm text-gray-500">
              Tech: React • Node.js • MongoDB • QR Integration
            </div>

            {/* BUTTON */}
            <a href="https://clever-qr-attnd.vercel.app/" target="_blank">
              <button className="mt-5 bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition">
                Live Demo
              </button>
            </a>

          </div>
        </FadeIn>

        {/* PROJECT 2 */}
        <FadeIn>
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-purple-500/20 transition duration-300">

            <h3 className="text-2xl font-bold text-purple-400">
              Smart Canteen Intelligence (Eco Canteen)
            </h3>

            <p className="text-gray-300 mt-3">
              A smart and sustainable canteen management system focused on reducing food waste using intelligent predictions and real-time monitoring.
            </p>

            {/* FEATURES */}
            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• Food demand prediction system</li>
              <li>• Zero waste management strategy</li>
              <li>• Smart ordering and tracking system</li>
              <li>• Waste analytics and reporting dashboard</li>
              <li>• Inventory and resource optimization</li>
              <li>• Sustainable and eco-friendly approach</li>
              <li>• Efficient food distribution system</li>
            </ul>

            {/* TECH STACK */}
            <div className="mt-4 text-sm text-gray-500">
              Tech: React • Node.js • MongoDB • AI Logic
            </div>

            {/* BUTTON */}
            <a href="https://smartcanteen-inky.vercel.app/" target="_blank">
              <button className="mt-5 bg-purple-400 text-black px-4 py-2 rounded-lg hover:bg-purple-300 transition">
                Live Demo
              </button>
            </a>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}