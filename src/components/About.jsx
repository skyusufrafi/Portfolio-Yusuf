import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Animated CGPA bar ─────────────────────────────────────────────────────────
function CGPACard({ semester, score, max = 10, delay, best }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = (score / max) * 100;

  return (
    <motion.div
      ref={ref}
      className={`cgpa-card2 ${best ? "cgpa-best" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {best && <span className="cgpa-best-badge">Best ↑</span>}
      <div className="cgpa-top">
        <span className="cgpa-sem">{semester}</span>
        <span className="cgpa-score">{score}</span>
      </div>
      <div className="cgpa-track">
        <motion.div
          className="cgpa-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ delay: delay + 0.15, duration: 0.9, ease: "easeOut" }}
        />
      </div>
      <span className="cgpa-out">/ {max}.00 SGPA</span>
    </motion.div>
  );
}

// ── Detail row ────────────────────────────────────────────────────────────────
function DetailRow({ icon, label, value, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="detail-row"
      initial={{ opacity: 0, x: -18 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.45 }}
    >
      <span className="detail-icon">{icon}</span>
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </motion.div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="about-sh-wrap"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="about-sh-line" />
      <h3 className="about-sh">{children}</h3>
    </motion.div>
  );
}

// ── Main About ────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      <style>{`
        /* ── section ── */
        .about-section {
          position: relative;
          background: #070d1a;
          padding: 7rem 1.5rem 6rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }

        /* ── subtle bg grid (matches hero) ── */
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .about-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .about-glow-l {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(0,245,196,0.08) 0%, transparent 70%);
          top: 0; left: -180px;
        }
        .about-glow-r {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          bottom: 0; right: -100px;
        }

        /* ── container ── */
        .about-inner {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        /* ── page title ── */
        .about-title-wrap { display: flex; flex-direction: column; gap: 0.6rem; }
        .about-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #00f5c4;
          font-weight: 700;
        }
        .about-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #e8f0fe;
          line-height: 1.1;
        }
        .about-title span {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── intro card ── */
        .about-intro-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 2rem 2.2rem;
          display: flex;
          gap: 1.8rem;
          align-items: flex-start;
          backdrop-filter: blur(6px);
          transition: border-color 0.3s;
        }
        .about-intro-card:hover { border-color: rgba(0,245,196,0.2); }
        .about-intro-icon {
          font-size: 2rem;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .about-intro-text {
          font-size: clamp(0.93rem, 1.7vw, 1.02rem);
          line-height: 1.8;
          color: #7a90b0;
        }
        .about-intro-text strong {
          color: #00f5c4;
          font-weight: 700;
        }

        /* ── section heading ── */
        .about-sh-wrap {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 1.4rem;
        }
        .about-sh-line {
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .about-sh {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #c8daf0;
        }

        /* ── education card ── */
        .edu-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 1.6rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: border-color 0.3s, background 0.3s;
        }
        .edu-card:hover {
          border-color: rgba(0,245,196,0.2);
          background: rgba(0,245,196,0.03);
        }
        .edu-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(0,245,196,0.15), rgba(59,130,246,0.15));
          border: 1px solid rgba(0,245,196,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .edu-body { display: flex; flex-direction: column; gap: 0.3rem; }
        .edu-degree {
          font-size: 1.05rem;
          font-weight: 700;
          color: #e8f0fe;
        }
        .edu-college {
          font-size: 0.88rem;
          color: #5a7090;
        }
        .edu-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.3rem;
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
          background: rgba(0,245,196,0.08);
          border: 1px solid rgba(0,245,196,0.2);
          font-size: 0.7rem;
          color: #00f5c4;
          font-weight: 600;
          letter-spacing: 0.06em;
          width: fit-content;
        }

        /* ── CGPA ── */
        .cgpa-grid2 { display: flex; flex-direction: column; gap: 0.9rem; }
        .cgpa-card2 {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 1.1rem 1.5rem;
          position: relative;
          transition: border-color 0.3s;
        }
        .cgpa-card2:hover { border-color: rgba(0,245,196,0.2); }
        .cgpa-best {
          border-color: rgba(0,245,196,0.3) !important;
          background: rgba(0,245,196,0.04) !important;
        }
        .cgpa-best-badge {
          position: absolute;
          top: 0.75rem; right: 1rem;
          font-size: 0.66rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #00f5c4;
          font-weight: 700;
          background: rgba(0,245,196,0.1);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
          border: 1px solid rgba(0,245,196,0.25);
        }
        .cgpa-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.6rem;
        }
        .cgpa-sem {
          font-size: 0.82rem;
          color: #5a7090;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .cgpa-score {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00f5c4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cgpa-track {
          height: 5px;
          background: rgba(255,255,255,0.07);
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 0.4rem;
        }
        .cgpa-fill {
          height: 100%;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
          border-radius: 99px;
        }
        .cgpa-out {
          font-size: 0.7rem;
          color: #3a5070;
          letter-spacing: 0.04em;
        }

        /* ── personal details ── */
        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .detail-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 0.85rem 1.1rem;
          transition: border-color 0.25s;
        }
        .detail-row:hover { border-color: rgba(0,245,196,0.2); }
        .detail-icon { font-size: 1.1rem; flex-shrink: 0; }
        .detail-label {
          font-size: 0.74rem;
          color: #3a5070;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          flex-shrink: 0;
        }
        .detail-value {
          font-size: 0.88rem;
          color: #c8daf0;
          font-weight: 600;
          margin-left: auto;
          text-align: right;
        }

        /* ── responsive ── */
        @media (max-width: 600px) {
          .details-grid { grid-template-columns: 1fr; }
          .about-intro-card { flex-direction: column; gap: 1rem; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-glow about-glow-l" />
        <div className="about-glow about-glow-r" />

        <div className="about-inner">

          {/* ── Title ── */}
          <motion.div
            className="about-title-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about-eyebrow">// who I am</span>
            <h2 className="about-title">
              About <span>Me</span>
            </h2>
          </motion.div>

          {/* ── Intro ── */}
          <motion.div
            className="about-intro-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about-intro-icon">👨‍💻</span>
            <p className="about-intro-text">
              I'm <strong>Shaikh Mohammed Yusuf Mohd Rafi</strong> — a
              Software Developer and aspiring Cybersecurity expert pursuing
              B.E. Computer Engineering at AIKTC. I build secure, scalable,
              and intelligent systems, compete in hackathons, and continuously
              sharpen my skills across full-stack development and security domains.
            </p>
          </motion.div>

          {/* ── Education ── */}
          <div>
            <SectionHeading delay={0}>Education</SectionHeading>
            <motion.div
              className="edu-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55 }}
            >
              <div className="edu-icon-wrap">🎓</div>
              <div className="edu-body">
                <span className="edu-degree">B.E. Computer Engineering</span>
                <span className="edu-college">
                  Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC)
                </span>
                <span className="edu-tag">📍 Mumbai · Sep 2024 – Present</span>
              </div>
            </motion.div>
          </div>

          {/* ── Academic Performance ── */}
          <div>
            <SectionHeading delay={0}>Academic Performance</SectionHeading>
            <div className="cgpa-grid2">
              <CGPACard semester="Semester 1" score={7.07} delay={0.05} />
              <CGPACard semester="Semester 2" score={7.80} delay={0.15} />
              <CGPACard semester="Semester 3" score={9.41} delay={0.25} best />
            </div>
          </div>

          {/* ── Personal Details ── */}
          <div>
            <SectionHeading delay={0}>Personal Details</SectionHeading>
            <div className="details-grid">
              <DetailRow icon="🎂" label="Date of Birth" value="24 April 2006" delay={0.05} />
              <DetailRow icon="📍" label="Location"      value="Mumbai, India"  delay={0.1}  />
              <DetailRow icon="🎓" label="Degree"        value="B.E. Comp. Eng." delay={0.15} />
              <DetailRow icon="🌐" label="Languages"     value="English | Hindi | Marathi"  delay={0.2}  />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
