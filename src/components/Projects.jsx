import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Attendify – Smart QR Based Attendance System",
    desc: "An advanced QR-based attendance system for automating classroom tracking in educational institutions.",
    features: [
      "QR-based attendance marking",
      "Real-time attendance updates",
      "Secure authentication system",
      "Admin dashboard",
      "Student-wise tracking",
      "Automated reports",
      "Analytics & insights",
      "Proxy-free attendance",
      "Cloud-based storage",
      "Fast & scalable system"
    ],
    tech: "React • Node • MongoDB",
    link: "#"
  },
  {
    title: "Eco-Canteen – Smart Canteen Intelligence & Zero Waste System",
    desc: "An intelligent canteen system focused on minimizing food waste using AI prediction and data-driven decision making.",
    features: [
      "AI-based food demand prediction",
      "Zero food waste strategy implementation",
      "Real-time order tracking",
      "Inventory management system",
      "Waste analytics dashboard",
      "Smart resource allocation",
      "Sustainable food distribution",
      "User-friendly ordering interface",
      "Data-driven decision making",
      "Eco-friendly system design"
    ],
    tech: "React • Node • MongoDB • AI Logic",
    link: "#"
  },
  {
    title: "Emergency Survival – AI Disaster Response Assistant",
    desc: "An AI-powered system providing real-time assistance, alerts, and survival guidance during disasters.",
    features: [
      "AI-based emergency detection",
      "Real-time disaster alerts",
      "Location-based help system",
      "Shelter & resource tracking",
      "Live monitoring system",
      "Emergency contacts integration",
      "Instant survival guidance",
      "Communication support",
      "Decision support system",
      "Fast response UI"
    ],
    tech: "React • AI APIs",
    link: "https://sentinel-ai-ebon.vercel.app/"
  },
  {
    title: "UnityLink – Hyper-Local Community Resource Orchestrator",
    desc: "A platform connecting communities to share resources and coordinate services efficiently.",
    features: [
      "Community resource sharing",
      "Real-time communication",
      "Service coordination",
      "Dashboard for resource management",
      "Request handling system",
      "Emergency response features",
      "Optimized allocation system",
      "Scalable architecture",
      "User-friendly interface",
      "Community collaboration tools"
    ],
    tech: "HTML/CSS • Python(Flask) • Google Sheets API",
    link: "https://unitylink.vercel.app/"
  },
  {
    title: "SkillSync-AI – Smart Freelancer Hiring System",
    desc: "An AI-powered platform that matches freelancers with clients based on skills and project requirements.",
    features: [
      "AI-based skill matching",
      "Freelancer recommendation system",
      "Client dashboard",
      "Project posting system",
      "Real-time hiring process",
      "Secure authentication",
      "Profile ranking system",
      "Smart filtering system",
      "User-friendly UI",
      "Scalable backend architecture"
    ],
    tech: "",
    link: "https://skillsync-ai-fzhu.onrender.com/"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <ul>
                {project.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <p className="tech">{project.tech}</p>

              <a href={project.link} target="_blank" className="project-btn">
                Live Demo
              </a>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Projects;