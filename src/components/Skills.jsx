import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaPython
} from "react-icons/fa";
import { SiMongodb, SiCplusplus } from "react-icons/si";

const skillData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt />, level: 85 },
      { name: "JavaScript", icon: <FaJs />, level: 88 },
      { name: "React", icon: <FaReact />, level: 85 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <FaPython />, level: 80 },
      { name: "C", icon: <span>💻</span>, level: 70 },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 85 },
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h2 className="skills-title">Technical Expertise</h2>

        <p className="skills-subtitle">
          Crafting scalable, high-performance applications using modern technologies.
          Focused on clean architecture, performance, and user experience.
        </p>

        <div className="skills-wrapper">

          {skillData.map((category, index) => (
            <motion.div
              className="skills-card"
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="skills-category">{category.title}</h3>

              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>

                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>

                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                </div>
              ))}

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}

export default Skills;