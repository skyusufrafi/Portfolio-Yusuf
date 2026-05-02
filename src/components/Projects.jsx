import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

const projects = [
  {
    title: "Attendify – Smart Attendance System",
    desc: "An advanced QR-based attendance system designed to automate student attendance tracking with real-time updates and analytics.",
    features: [
      "QR-based student attendance system",
      "Real-time attendance tracking",
      "Admin dashboard for monitoring",
      "Student-wise attendance records",
      "Automated report generation",
      "Analytics and insights dashboard",
      "Prevents proxy attendance",
      "Cloud-based storage system",
      "Fast and scalable architecture"
    ],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/skyusufrafi/Attendify",
    live: "https://clever-qr-attnd.vercel.app/"
  },

  {
    title: "EcoCanteen – Smart Food Waste Management System",
    desc: "An intelligent system focused on minimizing food waste using AI prediction and smart resource management.",
    features: [
      "AI-based food demand prediction",
      "Zero food waste strategy implementation",
      "Real-time order tracking system",
      "Inventory management system",
      "Waste analytics dashboard",
      "Smart resource allocation",
      "Sustainable food distribution",
      "User-friendly ordering interface",
      "Data-driven decision making"
    ],
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/skyusufrafi/Eco-Canteen",
    live: "https://smartcanteen-inky.vercel.app/"
  },

  {
    title: "Emergency Survival – AI Disaster Response System",
    desc: "An AI-powered system providing real-time assistance, alerts, and survival guidance during emergencies.",
    features: [
      "AI-based emergency detection",
      "Real-time alert system",
      "Location-based help services",
      "Resource tracking system",
      "Live monitoring dashboard",
      "Emergency contacts integration",
      "Instant survival guidance",
      "Communication support system",
      "Decision support system"
    ],
    tech: ["React", "Node.js", "AI APIs"],
    github: "https://github.com/skyusufrafi/EmergencySurvival",
    live: "https://sentinel-ai-ebon.vercel.app/"
  },

  {
    title: "UnityLink – Community Resource Sharing Platform",
    featured: true,
    desc: "A platform for connecting communities to share resources and coordinate services efficiently.",
    features: [
      "Community resource sharing system",
      "Real-time communication",
      "Service collaboration features",
      "Dashboard for resource management",
      "Request handling system",
      "Emergency assistance feature",
      "Optimized resource allocation",
      "Scalable backend architecture",
      "User-friendly interface"
    ],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/skyusufrafi/UnityLink",
    live: "https://unitylink-peach.vercel.app/"
  },

  {
    title: "SkillSync AI – Smart Skill & Career Recommendation Platform",
    desc: "An AI-powered platform that analyzes user skills and provides personalized career recommendations, learning paths, and job insights.",
    features: [
      "AI-based skill analysis system",
      "Personalized career roadmap generation",
      "Skill gap detection with suggestions",
      "Job role recommendation engine",
      "Smart course suggestions",
      "Real-time analytics dashboard",
      "Interactive UI/UX design",
      "Scalable full-stack architecture",
      "Data-driven decision making"
    ],
    tech: ["React", "Node.js", "MongoDB", "AI/ML", "APIs"],
    github: "https://github.com/skyusufrafi/SkillSync-AI",
    live: "https://skillsync-ai-fzhu.onrender.com/"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${project.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <h3>{project.title}</h3>

            <p className="desc">{project.desc}</p>

            <ul className="features">
              {project.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;