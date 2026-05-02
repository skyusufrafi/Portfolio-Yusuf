import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* TITLE */}
        <h2 className="about-title">About Me</h2>

        {/* INTRO */}
        <p className="about-text">
          I am <span>Shaikh Mohammed Yusuf Mohd Rafi</span>, a passionate 
          Software Developer and aspiring Cybersecurity expert currently 
          pursuing Computer Engineering at AIKTC. I am deeply interested 
          in building secure, scalable, and intelligent systems that solve 
          real-world problems.
        </p>

        <p className="about-text">
          I actively participate in hackathons, develop innovative projects, 
          and continuously enhance my technical skills in full-stack development 
          and security domains.
        </p>

        {/* EDUCATION */}
        <div className="about-block">
          <h3 className="about-subtitle">Education</h3>
          <p>
            <strong>B.E. Computer Engineering</strong><br />
            Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC)
          </p>
        </div>

        {/* CGPA */}
        <div className="about-block">
          <h3 className="about-subtitle">Academic Performance</h3>

          <div className="cgpa-grid">
            <div className="cgpa-card">
              <span>Semester 1</span>
              <h4>7.07</h4>
            </div>

            <div className="cgpa-card">
              <span>Semester 2</span>
              <h4>7.80</h4>
            </div>

            <div className="cgpa-card highlight">
              <span>Semester 3</span>
              <h4>9.41</h4>
            </div>
          </div>
        </div>

        {/* PERSONAL */}
        <div className="about-block">
          <h3 className="about-subtitle">Personal Details</h3>
          <p>Date of Birth: <strong>24 April 2006</strong></p>
        </div>

      </motion.div>

    </section>
  );
}

export default About;