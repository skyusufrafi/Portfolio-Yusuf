import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaPython, FaShieldAlt, FaServer
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiLinux, SiKalilinux } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";

const skillData = [
  {
    category: "Frontend",
    icon: "🖥️",
    color: "#00f5c4",
    desc: "Building responsive, pixel-perfect UIs",
    skills: [
      { name: "HTML5",      icon: <FaHtml5 />,       level: 90, color: "#e34f26" },
      { name: "CSS3",       icon: <FaCss3Alt />,      level: 85, color: "#264de4" },
      { name: "JavaScript", icon: <FaJs />,           level: 88, color: "#f7df1e" },
      { name: "React",      icon: <FaReact />,        level: 85, color: "#61dafb" },
      { name: "Tailwind",   icon: <SiTailwindcss />,  level: 78, color: "#38bdf8" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#3b82f6",
    desc: "Scalable server-side systems & APIs",
    skills: [
      { name: "Node.js",  icon: <FaNodeJs />,   level: 75, color: "#339933" },
      { name: "Express",  icon: <SiExpress />,  level: 72, color: "#ffffff" },
      { name: "MongoDB",  icon: <SiMongodb />,  level: 70, color: "#4db33d" },
    ],
  },
  {
    category: "Languages",
    icon: "💡",
    color: "#a78bfa",
    desc: "Core programming proficiency",
    skills: [
      { name: "Python", icon: <FaPython />,        level: 80, color: "#3776ab" },
      { name: "C",      icon: <VscTerminalCmd />,  level: 70, color: "#a8b9cc" },
    ],
  },
  {
    category: "Cybersecurity",
    icon: "🔐",
    color: "#f43f5e",
    desc: "Offensive & defensive security tools",
    skills: [
      { name: "Kali Linux", icon: <SiKalilinux />,  level: 72, color: "#268bcd" },
      { name: "Linux",      icon: <SiLinux />,       level: 75, color: "#fcc624" },
      { name: "Networking", icon: <FaServer />,      level: 68, color: "#00f5c4" },
      { name: "Pen Testing",icon: <FaShieldAlt />,   level: 65, color: "#f43f5e" },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "#fb923c",
    desc: "Dev workflow & version control",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f05032" },
    ],
  },
];

// ── Skill row with animated bar ───────────────────────────────────────────────
function SkillRow({ skill, delay, catColor }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="sk-row"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sk-row-top">
        <span className="sk-icon" style={{ color: skill.color }}>{skill.icon}</span>
        <span className="sk-name">{skill.name}</span>
        <span className="sk-pct" style={{ color: hovered ? catColor : undefined }}>
          {skill.level}%
        </span>
      </div>
      <div className="sk-track">
        <motion.div
          className="sk-fill"
          style={{ background: `linear-gradient(90deg, ${catColor}cc, ${catColor})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: delay + 0.15, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// ── Category card ─────────────────────────────────────────────────────────────
function SkillCard({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="sk-card"
      style={{ "--cat-color": cat.color }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* top accent bar */}
      <div className="sk-card-bar" style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />

      <div className="sk-card-body">
        {/* header */}
        <div className="sk-card-header">
          <div className="sk-cat-icon-wrap" style={{ background: `${cat.color}18`, borderColor: `${cat.color}30` }}>
            <span className="sk-cat-icon">{cat.icon}</span>
          </div>
          <div>
            <div className="sk-cat-title" style={{ color: cat.color }}>{cat.category}</div>
            <div className="sk-cat-desc">{cat.desc}</div>
          </div>
          <div className="sk-cat-count">{cat.skills.length}</div>
        </div>

        {/* divider */}
        <div className="sk-divider" style={{ background: `linear-gradient(90deg, ${cat.color}30, transparent)` }} />

        {/* skills */}
        <div className="sk-rows">
          {cat.skills.map((skill, i) => (
            <SkillRow key={skill.name} skill={skill} delay={i * 0.07} catColor={cat.color} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Skills() {
  const totalSkills = skillData.reduce((a, c) => a + c.skills.length, 0);

  return (
    <>
      <style>{`
        /* ── section ── */
        .skills-section {
          position: relative;
          background: #070d1a;
          padding: 7rem 1.5rem 6rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .skills-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .sk-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); pointer-events: none;
        }
        .sk-glow-l {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%);
          top: -80px; left: -160px;
        }
        .sk-glow-r {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          bottom: 0; right: -100px;
        }

        /* ── inner ── */
        .sk-inner {
          position: relative; z-index: 1;
          max-width: 1080px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 3rem;
        }

        /* ── heading ── */
        .sk-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.16em;
          text-transform: uppercase; color: #00f5c4; font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .sk-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          letter-spacing: -0.03em; color: #e8f0fe; line-height: 1.1; margin: 0 0 0.7rem;
        }
        .sk-title span {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sk-subtitle {
          font-size: 0.95rem; color: #4a6280; max-width: 520px; line-height: 1.7;
        }

        /* ── stat pills row ── */
        .sk-stats {
          display: flex; gap: 1rem; flex-wrap: wrap;
        }
        .sk-stat {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.4rem 1rem; border-radius: 99px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 0.78rem; color: #5a7090;
          transition: border-color 0.25s;
        }
        .sk-stat:hover { border-color: rgba(0,245,196,0.2); }
        .sk-stat strong { color: #00f5c4; font-weight: 800; font-size: 0.9rem; }

        /* ── grid ── */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }
        /* last row: if 5 cards, last card spans 1 and the empty spans 1 — center it */
        .sk-grid > .sk-card:last-child:nth-child(3n - 1) {
          grid-column: span 1;
        }

        /* ── card ── */
        .sk-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, background 0.3s;
        }
        .sk-card:hover {
          border-color: color-mix(in srgb, var(--cat-color) 30%, transparent);
          background: rgba(255,255,255,0.035);
          transform: translateY(-4px);
        }
        .sk-card-bar { height: 3px; }
        .sk-card-body { padding: 1.4rem 1.5rem 1.6rem; }

        /* card header */
        .sk-card-header {
          display: flex; align-items: flex-start; gap: 0.9rem; margin-bottom: 1rem;
        }
        .sk-cat-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          border: 1px solid; display: flex; align-items: center;
          justify-content: center; font-size: 1.2rem;
        }
        .sk-cat-title {
          font-size: 1rem; font-weight: 800; letter-spacing: -0.01em;
        }
        .sk-cat-desc { font-size: 0.72rem; color: #3a5070; margin-top: 0.15rem; }
        .sk-cat-count {
          margin-left: auto; flex-shrink: 0;
          font-size: 1.5rem; font-weight: 800; color: rgba(255,255,255,0.05);
          line-height: 1;
        }

        .sk-divider {
          height: 1px; margin-bottom: 1.1rem; border-radius: 1px;
        }

        /* ── skill rows ── */
        .sk-rows { display: flex; flex-direction: column; gap: 0.85rem; }
        .sk-row { display: flex; flex-direction: column; gap: 0.38rem; cursor: default; }
        .sk-row-top {
          display: flex; align-items: center; gap: 0.6rem;
        }
        .sk-icon {
          font-size: 1.05rem; flex-shrink: 0; width: 20px;
          display: flex; align-items: center; justify-content: center;
        }
        .sk-name {
          font-size: 0.84rem; font-weight: 600; color: #c8daf0; flex: 1;
        }
        .sk-pct {
          font-size: 0.78rem; font-weight: 700; color: #3a5070;
          transition: color 0.25s; letter-spacing: 0.03em;
        }
        .sk-track {
          height: 4px; background: rgba(255,255,255,0.06);
          border-radius: 99px; overflow: hidden;
        }
        .sk-fill { height: 100%; border-radius: 99px; }

        /* ── responsive ── */
        @media (max-width: 900px) {
          .sk-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .sk-grid { grid-template-columns: 1fr; }
          .sk-card:hover { transform: none; }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="sk-glow sk-glow-l" />
        <div className="sk-glow sk-glow-r" />

        <div className="sk-inner">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sk-eyebrow">// what I work with</div>
            <h2 className="sk-title">Technical <span>Expertise</span></h2>
            <p className="sk-subtitle">
              Building secure, scalable systems across the full stack — from pixel-perfect
              UIs to hardened back-ends and security tooling.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="sk-stats"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="sk-stat"><strong>{totalSkills}</strong> Skills</div>
            <div className="sk-stat"><strong>{skillData.length}</strong> Categories</div>
            <div className="sk-stat"><strong>2+</strong> Years Experience</div>
            <div className="sk-stat"><strong>MERN</strong> Stack</div>
          </motion.div>

          {/* Grid */}
          <div className="sk-grid">
            {skillData.map((cat, i) => (
              <SkillCard key={cat.category} cat={cat} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
