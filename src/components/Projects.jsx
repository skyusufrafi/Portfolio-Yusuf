import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    emoji: "📋",
    tag: "Productivity",
    tagBlue: false,
    title: "Attendify",
    subtitle: "Smart Attendance System",
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
      "Fast and scalable architecture",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/skyusufrafi/Attendify",
    live: "https://clever-qr-attnd.vercel.app/",
  },
  {
    id: 2,
    emoji: "🌱",
    tag: "AI · Sustainability",
    tagBlue: true,
    title: "EcoCanteen",
    subtitle: "Smart Food Waste Management System",
    desc: "An intelligent system focused on minimizing food waste using AI prediction and smart resource management.",
    features: [
      "AI-based food demand prediction",
      "Zero food waste strategy implementation",
      "Real-time order tracking system",
      "Inventory management system",
      "Waste analytics dashboard",
      "Smart Preordering system",
      "Sustainable food distribution",
      "User-friendly ordering interface",
      "Data-driven decision making",
    ],
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/skyusufrafi/Eco-Canteen",
    live: "https://smartcanteen-inky.vercel.app/",
  },
  {
    id: 3,
    emoji: "🚨",
    tag: "AI · Emergency",
    tagBlue: true,
    title: "Emergency Survival",
    subtitle: "AI Disaster Response System",
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
      "Decision support system",
    ],
    tech: ["React", "Node.js", "AI APIs"],
    github: "https://github.com/skyusufrafi/EmergencySurvival",
    live: "https://sentinel-ai-ebon.vercel.app/",
  },
  {
    id: 4,
    emoji: "🤝",
    tag: "Community · Featured",
    tagBlue: false,
    featured: true,
    title: "UnityLink",
    subtitle: "Community Resource Sharing Platform",
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
      "User-friendly interface",
    ],
    tech: ["HTML/CSS", "Python", "Google Sheets"],
    github: "https://github.com/skyusufrafi/UnityLink",
    live: "https://unitylink-peach.vercel.app/",
  },
  {
    id: 5,
    emoji: "🧠",
    tag: "AI · Career",
    tagBlue: true,
    title: "SkillSync AI",
    subtitle: "Smart Skill & Career Recommendation Platform",
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
      "Data-driven decision making",
    ],
    tech: ["HTML/CSS", "Python", "Google Sheets"],
    github: "https://github.com/skyusufrafi/SkillSync-AI",
    live: "https://skillsync-ai-fzhu.onrender.com/",
  },
];

// ── Tech colour map ───────────────────────────────────────────────────────────
const techColor = (t) => {
  const map = {
    React: { bg: "rgba(97,218,251,0.1)", border: "rgba(97,218,251,0.3)", color: "#61dafb" },
    "Node.js": { bg: "rgba(104,160,99,0.1)", border: "rgba(104,160,99,0.3)", color: "#68a063" },
    MongoDB: { bg: "rgba(77,179,61,0.1)", border: "rgba(77,179,61,0.3)", color: "#4db33d" },
    AI: { bg: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.3)", color: "#a855f7" },
    "AI APIs": { bg: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.3)", color: "#a855f7" },
    Python: { bg: "rgba(255,212,59,0.1)", border: "rgba(255,212,59,0.3)", color: "#ffd43b" },
    "HTML/CSS": { bg: "rgba(240,101,41,0.1)", border: "rgba(240,101,41,0.3)", color: "#f06529" },
    "Google Sheets": { bg: "rgba(14,165,95,0.1)", border: "rgba(14,165,95,0.3)", color: "#0ea55f" },
  };
  return map[t] || { bg: "rgba(0,245,196,0.08)", border: "rgba(0,245,196,0.2)", color: "#00f5c4" };
};

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="proj-sh-wrap"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="proj-sh-line" />
      <h3 className="proj-sh">{children}</h3>
    </motion.div>
  );
}

// ── Single project card ───────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`proj-card ${project.featured ? "proj-card-featured" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 2) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* header */}
      <div className="proj-card-header">
        <div className="proj-icon-wrap">{project.emoji}</div>
        <div className="proj-header-meta">
          <span className={`proj-tag ${project.tagBlue ? "blue" : ""}`}>{project.tag}</span>
        </div>
      </div>

      {/* title */}
      <div className="proj-title-block">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-subtitle">{project.subtitle}</p>
      </div>

      {/* desc */}
      <p className="proj-desc">{project.desc}</p>

      {/* features toggle */}
      <div className="proj-features-wrap">
        <button className="proj-toggle-btn" onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? "Hide" : "View"} Features</span>
          <span className={`proj-toggle-arrow ${expanded ? "open" : ""}`}>›</span>
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.ul
              className="proj-features"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <span className="proj-feat-dot" />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* tech */}
      <div className="proj-tech-row">
        {project.tech.map((t, i) => {
          const c = techColor(t);
          return (
            <span
              key={i}
              className="proj-tech-badge"
              style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}
            >
              {t}
            </span>
          );
        })}
      </div>

      {/* buttons */}
      <div className="proj-btn-row">
        <a href={project.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-ghost">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className="proj-btn proj-btn-primary">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <>
      <style>{`
        /* ── section ── */
        .proj-section {
          position: relative;
          background: #070d1a;
          padding: 7rem 1.5rem 6rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .proj-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .proj-glow {
          position: absolute; border-radius: 50%;
          filter: blur(130px); pointer-events: none;
        }
        .proj-glow-l {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%);
          top: -100px; left: -200px;
        }
        .proj-glow-r {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          bottom: 0; right: -120px;
        }
        .proj-glow-mid {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
        }

        /* ── inner ── */
        .proj-inner {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 3.5rem;
        }

        /* ── page title ── */
        .proj-title-wrap { display: flex; flex-direction: column; gap: 0.6rem; }
        .proj-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.16em;
          text-transform: uppercase; color: #00f5c4; font-weight: 700;
        }
        .proj-page-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          letter-spacing: -0.03em; color: #e8f0fe; line-height: 1.1;
        }
        .proj-page-title span {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .proj-page-sub {
          font-size: 0.92rem; color: #3a5070; margin-top: 0.5rem;
          max-width: 480px; line-height: 1.6;
        }

        /* ── section heading ── */
        .proj-sh-wrap {
          display: flex; align-items: center; gap: 0.9rem; margin-bottom: 1.6rem;
        }
        .proj-sh-line {
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
          border-radius: 2px; flex-shrink: 0;
        }
        .proj-sh {
          font-size: 1.1rem; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; color: #c8daf0;
        }

        /* ── grid ── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
        }
        .proj-grid > *:last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: 560px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── card ── */
        .proj-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 1.8rem;
          display: flex; flex-direction: column; gap: 1rem;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          position: relative; overflow: hidden;
        }
        .proj-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,245,196,0.3), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .proj-card:hover {
          border-color: rgba(0,245,196,0.2);
          background: rgba(0,245,196,0.02);
          transform: translateY(-4px);
        }
        .proj-card:hover::before { opacity: 1; }
        .proj-card-featured {
          border-color: rgba(0,245,196,0.25) !important;
          background: rgba(0,245,196,0.03) !important;
        }
        .proj-card-featured::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,245,196,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        .proj-featured-ribbon {
          position: absolute; top: 1.1rem; right: 1.1rem;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #00f5c4;
          background: rgba(0,245,196,0.08);
          border: 1px solid rgba(0,245,196,0.22);
          padding: 0.2rem 0.6rem; border-radius: 99px;
        }

        /* ── card header ── */
        .proj-card-header {
          display: flex; align-items: center; justify-content: space-between;
        }
        .proj-icon-wrap {
          width: 46px; height: 46px; border-radius: 13px; font-size: 1.3rem;
          background: linear-gradient(135deg, rgba(0,245,196,0.12), rgba(59,130,246,0.12));
          border: 1px solid rgba(0,245,196,0.18);
          display: flex; align-items: center; justify-content: center;
        }
        .proj-tag {
          font-size: 0.67rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 0.18rem 0.6rem; border-radius: 99px;
          background: rgba(0,245,196,0.07); border: 1px solid rgba(0,245,196,0.18); color: #00f5c4;
        }
        .proj-tag.blue {
          background: rgba(59,130,246,0.07); border-color: rgba(59,130,246,0.2); color: #60a5fa;
        }

        /* ── title ── */
        .proj-title-block { display: flex; flex-direction: column; gap: 0.2rem; }
        .proj-title {
          font-size: 1.12rem; font-weight: 800; color: #e8f0fe;
          margin: 0; line-height: 1.2;
        }
        .proj-subtitle {
          font-size: 0.78rem; color: #3b82f6; font-weight: 600;
          letter-spacing: 0.03em; margin: 0;
        }

        /* ── desc ── */
        .proj-desc {
          font-size: 0.84rem; line-height: 1.65; color: #5a7090; margin: 0;
        }

        /* ── features toggle ── */
        .proj-features-wrap { display: flex; flex-direction: column; gap: 0.5rem; }
        .proj-toggle-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px; padding: 0.4rem 0.9rem; cursor: pointer;
          font-size: 0.75rem; font-weight: 600; color: #7a90b0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          width: fit-content; font-family: inherit;
        }
        .proj-toggle-btn:hover { background: rgba(0,245,196,0.07); border-color: rgba(0,245,196,0.2); color: #00f5c4; }
        .proj-toggle-arrow {
          font-size: 1rem; line-height: 1; display: inline-block;
          transition: transform 0.25s; transform: rotate(0deg);
        }
        .proj-toggle-arrow.open { transform: rotate(90deg); }
        .proj-features {
          list-style: none; margin: 0; padding: 0;
          overflow: hidden;
          display: flex; flex-direction: column; gap: 0.45rem;
        }
        .proj-features li {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.8rem; color: #7a90b0; line-height: 1.4;
        }
        .proj-feat-dot {
          width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #00f5c4, #3b82f6);
        }

        /* ── tech ── */
        .proj-tech-row {
          display: flex; flex-wrap: wrap; gap: 0.45rem;
          margin-top: auto; padding-top: 0.5rem;
        }
        .proj-tech-badge {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.05em;
          padding: 0.22rem 0.65rem; border-radius: 99px;
        }

        /* ── buttons ── */
        .proj-btn-row { display: flex; gap: 0.7rem; flex-wrap: wrap; }
        .proj-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.04em;
          padding: 0.5rem 1.1rem; border-radius: 10px;
          text-decoration: none; transition: all 0.22s; border: 1px solid transparent;
        }
        .proj-btn-ghost {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
          color: #7a90b0;
        }
        .proj-btn-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          color: #c8daf0;
        }
        .proj-btn-primary {
          background: linear-gradient(135deg, rgba(0,245,196,0.15), rgba(59,130,246,0.15));
          border-color: rgba(0,245,196,0.3);
          color: #00f5c4;
        }
        .proj-btn-primary:hover {
          background: linear-gradient(135deg, rgba(0,245,196,0.25), rgba(59,130,246,0.25));
          border-color: rgba(0,245,196,0.5);
          box-shadow: 0 0 16px rgba(0,245,196,0.15);
        }

        /* ── stats bar ── */
        .proj-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
        }
        .proj-stat-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 1.2rem 1rem;
          display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
          transition: border-color 0.25s;
        }
        .proj-stat-card:hover { border-color: rgba(0,245,196,0.2); }
        .proj-stat-num {
          font-size: 1.8rem; font-weight: 800;
          background: linear-gradient(135deg, #00f5c4, #3b82f6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }
        .proj-stat-label {
          font-size: 0.7rem; color: #3a5070; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; text-align: center;
        }

        /* ── responsive ── */
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-grid > *:last-child:nth-child(odd) { grid-column: auto; max-width: 100%; }
          .proj-stats { grid-template-columns: 1fr 1fr; }
          .proj-stats > *:last-child { grid-column: 1 / -1; }
        }
      `}</style>

      <section id="projects" className="proj-section">
        <div className="proj-glow proj-glow-l" />
        <div className="proj-glow proj-glow-r" />
        <div className="proj-glow proj-glow-mid" />

        <div className="proj-inner">

          {/* ── Title ── */}
          <motion.div
            className="proj-title-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="proj-eyebrow">// what I've built</span>
            <h2 className="proj-page-title">My <span>Projects</span></h2>
            <p className="proj-page-sub">
              A collection of systems, tools, and platforms built to solve real problems —
              from AI-powered emergency response to community resource sharing.
            </p>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            className="proj-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {[
              { num: "5+", label: "Projects Built" },
              { num: "3", label: "AI-Powered" },
              { num: "100%", label: "Open Source" },
            ].map((s, i) => (
              <div className="proj-stat-card" key={i}>
                <span className="proj-stat-num">{s.num}</span>
                <span className="proj-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Grid ── */}
          <div>
            <SectionHeading>All Projects</SectionHeading>
            <div className="proj-grid">
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
