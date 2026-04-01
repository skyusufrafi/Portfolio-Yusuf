import React from "react";

export default function Skills() {
  const skills = ["HTML","CSS","JavaScript","React","Node.js","MongoDB","Git","C++"];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl text-center hover:scale-110 transition shadow-lg hover:shadow-cyan-500/20">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}