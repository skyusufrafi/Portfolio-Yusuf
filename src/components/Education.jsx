import React from "react";
import { motion } from "framer-motion";
import "./education.css";

const educationData = [
  {
    title: "Bachelor of Engineering (Computer Engineering)",
    institute: "Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC)",
    location: "New Panvel, Navi Mumbai",
    year: "2024 – 2028",
    score: "Pursuing",
    highlight: true
  },
  {
    title: "Second Year Junior COllege (HSC - 12th)",
    institute: "Maharashtra College of Arts, Science and Commerce",
    location: "Nagpada, Mumbai - 400010",
    year: "2023 – 2024",
    score: "61.17%"
  },
  {
    title: "Secondary School (SSC - 10th)",
    institute: "Dr. B.R. Ambedkar Vidyalaya",
    location: "Dharavi, Mumbai - 400017",
    year: "2021 – 2022",
    score: "79.40%"
  }
];

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`education-card ${edu.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3>{edu.title}</h3>

            <p className="institute">{edu.institute}</p>
            <p className="location">{edu.location}</p>

            <div className="edu-meta">
              <span>{edu.year}</span>
              <span className="score">{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;