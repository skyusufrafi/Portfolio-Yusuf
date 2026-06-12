import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── Shared certificates link ──────────────────────────────────────────────────
const CERT_LINK = "https://drive.google.com/drive/folders/1pfXK-J7ovh4TbB0rNOL4x5VyymPniwS_";

// ── Data ──────────────────────────────────────────────────────────────────────
const hackathons = [
  {
    title: "Hackovium – Vibe Craft Edition",
    achievement: "🏆 Participant",
    badge: "HACKATHON",
    color: "#a78bfa",
    icon: "🎨",
    year: "2025",
    duration: "Online",
    desc: "Participated in Hackovium's Vibe Craft Edition — a creative-tech hackathon challenging participants to blend design thinking with cutting-edge development.",
    points: [
      "Built a visually immersive, fully functional web experience",
      "Combined UI/UX design principles with rapid development",
      "Delivered a polished product under competition time constraints",
      "Explored creative problem-solving beyond traditional dev boundaries",
    ],
    skills: ["UI/UX", "React", "Creative Dev", "Design Thinking"],
  },
  {
    title: "TechSprint Hackathon",
    achievement: "🚀 Top 10 Finalist",
    badge: "TOP 10",
    color: "#00f5c4",
    icon: "⚡",
    year: "2025",
    duration: "GDG on Campus · AIKTC",
    desc: "Top 10 finalist at an online hackathon organized by Google Developer Groups on Campus — built and pitched an innovative tech solution under tight constraints.",
    points: [
      "Developed innovative solutions using modern technologies",
      "Learned industry-level problem-solving approaches",
      "Enhanced knowledge of scalable application design",
      "Worked in a highly competitive environment against top teams",
    ],
    skills: ["Innovation", "System Design", "Full Stack", "Problem Solving"],
  },
  {
    title: "Algorithm X – 32 Hour Hackathon",
    achievement: "🏆 Top 60 Teams",
    badge: "TOP 60",
    color: "#3b82f6",
    icon: "🧠",
    year: "2024",
    duration: "32 hrs · AIKTC National",
    desc: "Selected among the top 60 teams in a 32-hour national-level hackathon organized by the Programmers Club at AIKTC.",
    points: [
      "Built a complete working project under 32-hour pressure",
      "Worked on real-time system development",
      "Improved debugging and coding efficiency under stress",
      "Collaborated with teammates for rapid execution",
    ],
    skills: ["Full Stack", "Time Management", "Debugging", "Collaboration"],
  },
  {
    title: "Smart India Hackathon (SIH)",
    achievement: "✅ Cleared Internal Round",
    badge: "SIH",
    color: "#fb923c",
    icon: "🇮🇳",
    year: "2024",
    duration: "National · Government of India",
    desc: "Cleared the internal college round of India's largest national hackathon, solving real-world problem statements from industries and government organizations.",
    points: [
      "Solved government-issued real-world problem statements",
      "Collaborated in a team under strict national-level evaluation",
      "Designed scalable and innovative technical solutions",
      "Gained hands-on experience in ideation and rapid prototyping",
    ],
    skills: ["Problem Solving", "Teamwork", "Innovation", "Prototyping"],
  },
  {
    title: "ByteBattle Hackathon",
    achievement: "🎯 Organizer",
    badge: "ORGANIZER",
    color: "#f43f5e",
    icon: "🏗️",
    year: "2026",
    duration: "15 hrs · Solo Online · AIKTC",
    desc: "Organized ByteBattle — an official 15-hour solo online hackathon by the Department of Computer Engineering, AIKTC. Managed all logistics end-to-end.",
    points: [
      "Designed problem statements and evaluation rubrics",
      "Coordinated with department faculty, mentors, and sponsors",
      "Managed participant onboarding and technical infrastructure",
      "Successfully hosted 50+ participants across multiple rounds",
    ],
    skills: ["Event Management", "Leadership", "Coordination", "Problem Design"],
  },
];

const certificates = [
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    icon: "🤖",
    color: "#00f5c4",
    year: "2024",
    desc: "Comprehensive training on designing, training & deploying generative AI models.",
  },
  {
    title: "Technoscope Project-Based Learning Program",
    issuer: "AIKTC",
    icon: "🔬",
    color: "#3b82f6",
    year: "2024",
    desc: "Interdisciplinary engineering program focused on real-world IoT & AI integrated solutions.",
  },
  {
    title: "TechSprint Hackathon – Top 10 Certificate",
    issuer: "GDG on Campus · AIKTC",
    icon: "⚡",
    color: "#a78bfa",
    year: "2025",
    desc: "Certificate of achievement for reaching Top 10 in the GDG TechSprint hackathon.",
  },
  {
    title: "ByteBattle Organizer Certificate",
    issuer: "Dept. of Computer Engineering · AIKTC",
    icon: "🏗️",
    color: "#f43f5e",
    year: "2026",
    desc: "Recognition for successfully organizing and managing ByteBattle, an official department hackathon.",
  },
];

// ── Hackathon Card ────────────────────────────────────────────────────────────
function HackCard({ h, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="hk-card"
      style={{ "--hk-color": h.color }}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hk-bar" style={{ background: `linear-gradient(90deg, ${h.color}, transparent)` }} />
      <div className="hk-body">
        <div className="hk-header">
          <div className="hk-icon-wrap" style={{ background: `${h.color}18`, borderColor: `${h.color}30` }}>
            <span>{h.icon}</span>
          </div>
          <div className="hk-meta">
            <span className="hk-badge" style={{ color: h.color, background: `${h.color}15`, borderColor: `${h.color}30` }}>
              {h.badge}
            </span>
            <span className="hk-year">{h.year} · {h.duration}</span>
          </div>
        </div>

        <h3 className="hk-title">{h.title}</h3>
        <p className="hk-achievement" style={{ color: h.color }}>{h.achievement}</p>
        <p className="hk-desc">{h.desc}</p>

        <motion.div
          className="hk-points-wrap"
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <ul className="hk-points">
            {h.points.map((p, i) => (
              <li key={i}>
                <span className="hk-check" style={{ color: h.color }}>✔</span> {p}
              </li>
            ))}
          </ul>
        </motion.div>

        <button
          className="hk-toggle"
          style={{ color: h.color, borderColor: `${h.color}30` }}
          onClick={() => setOpen(!open)}
        >
          {open ? "Show less ↑" : "Show details ↓"}
        </button>

        <div className="hk-skills">
          {h.skills.map((s) => (
            <span key={s} className="hk-skill"
              style={{ color: h.color, background: `${h.color}10`, borderColor: `${h.color}28` }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Certificate Card ──────────────────────────────────────────────────────────
function CertCard({ c, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="cert-card"
      style={{ "--cert-color": c.color }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cert-left">
        <div className="cert-icon-wrap" style={{ background: `${c.color}15`, borderColor: `${c.color}28` }}>
          <span>{c.icon}</span>
        </div>
      </div>
      <div className="cert-body">
        <div className="cert-top">
          <span className="cert-title">{c.title}</span>
          <span className="cert-year" style={{ color: c.color }}>{c.year}</span>
        </div>
        <span className="cert-issuer">{c.issuer}</span>
        <p className="cert-desc">{c.desc}</p>
      </div>
    </motion.div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SH({ eyebrow, title, accent, sub }) {
  return (
    <motion.div className="ach-sh"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="ach-eyebrow">{eyebrow}</div>
      <h2 className="ach-title">{title} <span>{accent}</span></h2>
      {sub && <p className="ach-sub">{sub}</p>}
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Achievements() {
  return (
    <>
      <style>{`
        .ach-section {
          position: relative;
          background: #070d1a;
          padding: 7rem 1.5rem 6rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .ach-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px);
          background-size: 60px 60px; pointer-events: none;
        }
        .ach-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); pointer-events: none;
        }
        .ach-glow-l {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%);
          top: -80px; left: -160px;
        }
        .ach-glow-r {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%);
          top: 30%; right: -100px;
        }
        .ach-glow-b {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          bottom: 0; left: 20%;
        }
        .ach-inner {
          position: relative; z-index: 1;
          max-width: 1080px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 4rem;
        }

        /* heading */
        .ach-sh { display: flex; flex-direction: column; gap: 0.5rem; }
        .ach-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase;
          color: #00f5c4; font-weight: 700;
        }
        .ach-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          letter-spacing: -0.03em; color: #e8f0fe; line-height: 1.1; margin: 0;
        }
        .ach-title span {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ach-sub { font-size: 0.95rem; color: #4a6280; max-width: 500px; line-height: 1.7; margin: 0; }

        /* hackathon grid */
        .hk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        /* hackathon card */
        .hk-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, background 0.3s;
          display: flex; flex-direction: column;
        }
        .hk-card:hover {
          border-color: color-mix(in srgb, var(--hk-color) 28%, transparent);
          background: rgba(255,255,255,0.032);
          transform: translateY(-4px);
        }
        .hk-bar { height: 3px; flex-shrink: 0; }
        .hk-body { padding: 1.4rem 1.5rem 1.5rem; display: flex; flex-direction: column; gap: 0.7rem; flex: 1; }
        .hk-header { display: flex; align-items: center; gap: 0.75rem; }
        .hk-icon-wrap {
          width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0;
          border: 1px solid; display: flex; align-items: center;
          justify-content: center; font-size: 1.2rem;
        }
        .hk-meta { display: flex; flex-direction: column; gap: 0.2rem; }
        .hk-badge {
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 0.15rem 0.55rem;
          border-radius: 99px; border: 1px solid; width: fit-content;
        }
        .hk-year { font-size: 0.68rem; color: #3a5070; font-weight: 500; }
        .hk-title { font-size: 0.98rem; font-weight: 800; color: #e8f0fe; line-height: 1.35; margin: 0; }
        .hk-achievement { font-size: 0.82rem; font-weight: 700; margin: 0; }
        .hk-desc { font-size: 0.78rem; color: #5a7090; line-height: 1.6; margin: 0; }
        .hk-points { list-style: none; padding: 0; margin: 0.4rem 0 0; display: flex; flex-direction: column; gap: 0.45rem; }
        .hk-points li { font-size: 0.76rem; color: #8ba3c7; line-height: 1.5; display: flex; gap: 0.4rem; }
        .hk-check { flex-shrink: 0; font-size: 0.72rem; margin-top: 0.15rem; }
        .hk-toggle {
          background: none; border: 1px solid; border-radius: 8px;
          padding: 0.35rem 0.85rem; font-size: 0.72rem; font-weight: 700;
          cursor: pointer; letter-spacing: 0.04em; width: fit-content;
          transition: background 0.2s; margin-top: 0.2rem; font-family: inherit;
        }
        .hk-toggle:hover { background: rgba(255,255,255,0.05); }
        .hk-skills { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; padding-top: 0.5rem; }
        .hk-skill {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.05em;
          padding: 0.2rem 0.65rem; border-radius: 99px; border: 1px solid;
          transition: transform 0.2s;
        }
        .hk-skill:hover { transform: scale(1.07); }

        /* ── certificates section ── */
        .cert-section-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .cert-view-all {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em;
          text-decoration: none; color: #00f5c4;
          padding: 0.55rem 1.2rem; border-radius: 10px;
          background: rgba(0,245,196,0.07);
          border: 1px solid rgba(0,245,196,0.25);
          transition: background 0.25s, box-shadow 0.25s, border-color 0.25s;
          white-space: nowrap; flex-shrink: 0; align-self: flex-start; margin-top: 0.4rem;
        }
        .cert-view-all:hover {
          background: rgba(0,245,196,0.14);
          border-color: rgba(0,245,196,0.45);
          box-shadow: 0 0 16px rgba(0,245,196,0.14);
        }
        .cert-view-all svg { flex-shrink: 0; }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.9rem;
        }
        .cert-card {
          display: flex; align-items: flex-start; gap: 1rem;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 1.2rem 1.4rem;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .cert-card:hover {
          border-color: color-mix(in srgb, var(--cert-color) 25%, transparent);
          background: rgba(255,255,255,0.032);
          transform: translateY(-2px);
        }
        .cert-left { flex-shrink: 0; }
        .cert-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          border: 1px solid; display: flex; align-items: center;
          justify-content: center; font-size: 1.2rem;
        }
        .cert-body { flex: 1; display: flex; flex-direction: column; gap: 0.2rem; min-width: 0; }
        .cert-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.8rem; }
        .cert-title { font-size: 0.88rem; font-weight: 700; color: #d0e0f0; line-height: 1.4; }
        .cert-year { font-size: 0.72rem; font-weight: 700; flex-shrink: 0; }
        .cert-issuer { font-size: 0.72rem; color: #3a5070; font-weight: 600; }
        .cert-desc { font-size: 0.75rem; color: #5a7090; line-height: 1.55; margin: 0.25rem 0 0; }

        /* responsive */
        @media (max-width: 900px) {
          .hk-grid { grid-template-columns: repeat(2, 1fr); }
          .cert-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .hk-grid { grid-template-columns: 1fr; }
          .hk-card:hover { transform: none; }
          .cert-section-header { flex-direction: column; align-items: flex-start; }
          .cert-view-all { width: 100%; justify-content: center; }
        }
      `}</style>

      <section id="hackathons" className="ach-section">
        <div className="ach-glow ach-glow-l" />
        <div className="ach-glow ach-glow-r" />
        <div className="ach-glow ach-glow-b" />

        <div className="ach-inner">

          {/* ── Hackathons ── */}
          <SH
            eyebrow="// battle-tested"
            title="Hackathons &"
            accent="Competitions"
            sub="Competing, building, and shipping under pressure — from national stages to 15-hour solo battles."
          />
          <div className="hk-grid">
            {hackathons.map((h, i) => <HackCard key={h.title} h={h} index={i} />)}
          </div>

          {/* ── Certificates ── */}
          <div>
            <div className="cert-section-header">
              <SH
                eyebrow="// verified skills"
                title="Certificates &"
                accent="Recognition"
                sub="Formal certifications and official recognition across AI, engineering, and community leadership."
              />
              <a
                href={CERT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-view-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                View All Certificates
              </a>
            </div>
            <div style={{ marginTop: "1.8rem" }}>
              <div className="cert-grid">
                {certificates.map((c, i) => <CertCard key={c.title} c={c} index={i} />)}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
