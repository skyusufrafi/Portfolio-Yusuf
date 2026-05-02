import React from "react";
import { motion } from "framer-motion";
import "./achievements.css";

const hackathons = [
  {
    title: "Smart India Hackathon (SIH)",
    achievement: "🏆 Cleared Internal College SIH Round",
    desc: "Participated in India's largest national-level hackathon focused on solving real-world problem statements provided by industries and government organizations.",
    points: [
      "Worked on real-world problem-solving approach",
      "Collaborated in a team under strict deadlines",
      "Designed scalable and innovative technical solutions",
      "Gained hands-on experience in ideation and rapid prototyping"
    ],
    skills: ["Problem Solving", "Teamwork", "Innovation", "Development"]
  },
  {
    title: "Algorithm X – 32 Hour National Hackathon (AIKTC)",
    achievement: "🏆 Selected in Top 60 Teams",
    desc: "Participated in a 32-hour national-level hackathon organized by the Programmers Club at AIKTC.",
    points: [
      "Built a complete working project under 32-hour pressure",
      "Worked on real-time system development",
      "Improved debugging and coding efficiency",
      "Collaborated with team members for rapid execution"
    ],
    skills: ["Full Stack Development", "Time Management", "Debugging", "Collaboration"]
  },
  {
    title: "TechSprint Hackathon (GDG on Campus – AIKTC)",
    achievement: "🚀 Top 10 Finalist",
    desc: "Participated in an online hackathon organized by Google Developer Groups.",
    points: [
      "Developed innovative solutions using modern technologies",
      "Learned industry-level problem-solving approaches",
      "Enhanced knowledge of scalable application design",
      "Worked in a competitive environment"
    ],
    skills: ["Innovation", "System Design", "Development", "Problem Solving"]
  }
];

function Achievements() {
  return (
    <section className="hackathons-section" id="hackathons">
      <h2 className="section-title">Hackathons & Achievements</h2>

      <div className="hackathon-container">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={index}
            className="hackathon-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.4 }}
          >
            <h3>{hackathon.title}</h3>

            <p className="achievement">{hackathon.achievement}</p>

            <p className="desc">{hackathon.desc}</p>

            <ul>
              {hackathon.points.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>

            <div className="skills-container">
              {hackathon.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;