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
    title: "Second Year Junior College (HSC - 12th)",
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
    <section className="education-section" id="education" aria-label="Education history">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <motion.article
            key={index}
            className={`education-card ${edu.highlight ? "highlight" : ""}`}
            aria-label={edu.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 className="edu-title">{edu.title}</h3>
            <p className="institute" aria-label="Institute">{edu.institute}</p>
            <p className="location" aria-label="Location">{edu.location}</p>

            <div className="edu-meta">
              <span className="year">{edu.year}</span>
              <span className={`score ${edu.highlight ? "highlight-score" : ""}`} aria-label="Score or status">
                {edu.score}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
