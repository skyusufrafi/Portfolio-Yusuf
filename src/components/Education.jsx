import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    icon: "🎓",
    level: "Undergraduate",
    title: "Bachelor of Engineering",
    stream: "Computer Engineering",
    institute: "Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC)",
    location: "New Panvel, Navi Mumbai",
    year: "2024 – 2028",
    score: "Pursuing",
    scorePending: true,
    current: true,
  },
  {
    icon: "🏫",
    level: "Higher Secondary",
    title: "HSC – 12th Standard",
    stream: "Science",
    institute: "Maharashtra College of Arts, Science and Commerce",
    location: "Nagpada, Mumbai – 400010",
    year: "2023 – 2024",
    score: "61.17%",
    scorePending: false,
  },
  {
    icon: "📚",
    level: "Secondary",
    title: "SSC – 10th Standard",
    stream: "",
    institute: "Dr. B.R. Ambedkar Vidyalaya",
    location: "Dharavi, Mumbai – 400017",
    year: "2021 – 2022",
    score: "79.40%",
    scorePending: false,
  },
];

// ── Timeline connector dot ────────────────────────────────────────────────────
function TimelineDot({ active }) {
  return (
    <div className={`edu-dot ${active ? "edu-dot-active" : ""}`}>
      {active && <span className="edu-dot-ping" />}
    </div>
  );
}

// ── Single education card ─────────────────────────────────────────────────────
function EduCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`edu-row ${edu.current ? "edu-row-current" : ""}`}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* timeline spine */}
      <div className="edu-spine">
        <TimelineDot active={edu.current} />
        {index < educationData.length - 1 && <div className="edu-line" />}
      </div>

      {/* card body */}
      <div className={`edu-card ${edu.current ? "edu-card-current" : ""}`}>
        {/* top bar */}
        <div className="edu-card-top">
          <div className="edu-icon-wrap">{edu.icon}</div>
          <div className="edu-meta-right">
            <span className="edu-eyebrow">{edu.level}</span>
            <span className={`edu-badge ${edu.scorePending ? "edu-badge-pending" : ""}`}>
              {edu.scorePending ? "⏳ Pursuing" : edu.score}
            </span>
          </div>
        </div>

        {/* title block */}
        <div className="edu-title-block">
          <h3 className="edu-title">{edu.title}</h3>
          {edu.stream && <span className="edu-stream">{edu.stream}</span>}
        </div>

        {/* institute */}
        <p className="edu-institute">{edu.institute}</p>

        {/* footer */}
        <div className="edu-footer">
          <span className="edu-location">📍 {edu.location}</span>
          <span className="edu-year">{edu.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section heading (same as About) ──────────────────────────────────────────
function SectionHeading({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="edu-sh-wrap"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="edu-sh-line" />
      <h3 className="edu-sh">{children}</h3>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <>
      <style>{`
        /* ── section ── */
        .edu-section {
          position: relative;
          background: #070d1a;
          padding: 7rem 1.5rem 6rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .edu-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .edu-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .edu-glow-l {
          width: 440px; height: 440px;
          background: radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%);
          top: -80px; left: -160px;
        }
        .edu-glow-r {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          bottom: 40px; right: -100px;
        }

        /* ── inner ── */
        .edu-inner {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* ── page title ── */
        .edu-title-wrap { display: flex; flex-direction: column; gap: 0.6rem; }
        .edu-eyebrow-page {
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #00f5c4;
          font-weight: 700;
        }
        .edu-page-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #e8f0fe;
          line-height: 1.1;
        }
        .edu-page-title span {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── section heading ── */
        .edu-sh-wrap {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 1.6rem;
        }
        .edu-sh-line {
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .edu-sh {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #c8daf0;
        }

        /* ── timeline row ── */
        .edu-row {
          display: flex;
          gap: 1.4rem;
          align-items: flex-start;
        }

        /* ── spine ── */
        .edu-spine {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 0.3rem;
          width: 20px;
        }
        .edu-dot {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: rgba(0,245,196,0.2);
          border: 2px solid rgba(0,245,196,0.4);
          position: relative;
          flex-shrink: 0;
          z-index: 1;
        }
        .edu-dot-active {
          background: rgba(0,245,196,0.35);
          border-color: #00f5c4;
          box-shadow: 0 0 10px rgba(0,245,196,0.4);
        }
        .edu-dot-ping {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,245,196,0.4);
          animation: ping 2s ease-in-out infinite;
        }
        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0; }
        }
        .edu-line {
          width: 2px;
          flex: 1;
          min-height: 2.5rem;
          background: linear-gradient(180deg, rgba(0,245,196,0.2), rgba(59,130,246,0.1));
          margin-top: 0.3rem;
          border-radius: 2px;
        }

        /* ── card ── */
        .edu-card {
          flex: 1;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 1.6rem 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.6rem;
          transition: border-color 0.3s, background 0.3s;
          backdrop-filter: blur(6px);
        }
        .edu-card:hover {
          border-color: rgba(0,245,196,0.2);
          background: rgba(0,245,196,0.02);
        }
        .edu-card-current {
          border-color: rgba(0,245,196,0.25) !important;
          background: rgba(0,245,196,0.035) !important;
        }

        /* ── card top ── */
        .edu-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .edu-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0,245,196,0.12), rgba(59,130,246,0.12));
          border: 1px solid rgba(0,245,196,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }
        .edu-meta-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }
        .edu-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3a5070;
          font-weight: 700;
        }
        .edu-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.22rem 0.7rem;
          border-radius: 99px;
          background: rgba(0,245,196,0.08);
          border: 1px solid rgba(0,245,196,0.22);
          font-size: 0.75rem;
          color: #00f5c4;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .edu-badge-pending {
          background: rgba(59,130,246,0.08);
          border-color: rgba(59,130,246,0.25);
          color: #60a5fa;
        }

        /* ── title block ── */
        .edu-title-block {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.5rem;
        }
        .edu-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #e8f0fe;
          margin: 0;
          line-height: 1.3;
        }
        .edu-stream {
          font-size: 0.78rem;
          color: #00f5c4;
          font-weight: 600;
          background: rgba(0,245,196,0.07);
          padding: 0.15rem 0.55rem;
          border-radius: 99px;
          border: 1px solid rgba(0,245,196,0.15);
          letter-spacing: 0.04em;
        }

        /* ── institute ── */
        .edu-institute {
          font-size: 0.88rem;
          color: #5a7090;
          line-height: 1.5;
          margin: 0;
        }

        /* ── footer ── */
        .edu-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 0.6rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .edu-location {
          font-size: 0.76rem;
          color: #3a5070;
          font-weight: 500;
        }
        .edu-year {
          font-size: 0.76rem;
          color: #4a6080;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        /* ── responsive ── */
        @media (max-width: 480px) {
          .edu-card { padding: 1.3rem 1.2rem; }
          .edu-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section id="education" className="edu-section">
        <div className="edu-glow edu-glow-l" />
        <div className="edu-glow edu-glow-r" />

        <div className="edu-inner">

          {/* ── Title ── */}
          <motion.div
            className="edu-title-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="edu-eyebrow-page">// academic journey</span>
            <h2 className="edu-page-title">
              My <span>Education</span>
            </h2>
          </motion.div>

          {/* ── Timeline ── */}
          <div>
            <SectionHeading>Qualifications</SectionHeading>
            <div>
              {educationData.map((edu, i) => (
                <EduCard key={i} edu={edu} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}