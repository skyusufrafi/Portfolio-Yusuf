import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Project 1 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition">

          <h3 className="text-2xl font-bold text-cyan-400">
            Smart Attendance System (QR)
          </h3>

          <p className="text-gray-300 mt-3">
            A smart QR-based attendance system designed for institutions to automate attendance tracking efficiently.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2 text-sm">
            <li>• QR-based attendance scanning</li>
            <li>• Real-time attendance tracking</li>
            <li>• Authentication system for students</li>
            <li>• Admin dashboard for monitoring</li>
            <li>• Automated attendance reports</li>
            <li>• Secure data handling</li>
          </ul>

          <a href="https://clever-qr-attnd.vercel.app/" target="_blank">
            <button className="mt-5 bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition">
              Live Demo
            </button>
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition">

          <h3 className="text-2xl font-bold text-purple-400">
            Eco Canteen (Zero Waste System)
          </h3>

          <p className="text-gray-300 mt-3">
            An intelligent canteen system focused on minimizing food waste using smart prediction and tracking.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2 text-sm">
            <li>• Food demand prediction system</li>
            <li>• Waste tracking and analytics</li>
            <li>• Smart ordering system</li>
            <li>• Resource optimization</li>
            <li>• Sustainability-focused design</li>
            <li>• Efficient inventory management</li>
          </ul>

          <a href="https://smartcanteen-inky.vercel.app/" target="_blank">
            <button className="mt-5 bg-purple-400 text-black px-4 py-2 rounded-lg hover:bg-purple-300 transition">
              Live Demo
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}