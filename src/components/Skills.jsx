import React from "react";

export default function Skills() {
  const skills = ["HTML","CSS","JavaScript","React","Node","MongoDB","Git","C++"];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center hover:scale-110 transition shadow-lg">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}