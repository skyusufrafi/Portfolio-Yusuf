import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ── Floating particle canvas ──────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 55;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,196,${p.alpha})`;
        ctx.fill();
      });

      // draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          );
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,245,196,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ── Magnetic button ───────────────────────────────────────────────────────────
function MagneticButton({ href, primary, children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.28);
    y.set((e.clientY - cy) * 0.28);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.95 }}
      className={primary ? "btn-mag-primary" : "btn-mag-secondary"}
    >
      {children}
    </motion.a>
  );
}

// ── Stat pill ─────────────────────────────────────────────────────────────────
function StatPill({ value, label, delay }) {
  return (
    <motion.div
      className="stat-pill"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
const ROLES = [
  "Full-Stack Developer",
  "Cybersecurity Enthusiast",
  "Hackathon Builder",
  "Open-Source Contributor",
];

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 2000);

  return (
    <>
      <style>{`
        /* ── reset / base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── section ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #070d1a;
          overflow: hidden;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          padding: 6rem 1.5rem 4rem;
        }

        /* ── radial glow bg ── */
        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-glow-teal {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0,245,196,0.13) 0%, transparent 70%);
          top: -120px; left: 50%;
          transform: translateX(-50%);
        }
        .hero-glow-blue {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%);
          bottom: 0; right: 5%;
        }

        /* ── grid lines ── */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        /* ── content ── */
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 860px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        /* ── badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          border-radius: 99px;
          border: 1px solid rgba(0,245,196,0.25);
          background: rgba(0,245,196,0.06);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00f5c4;
          font-weight: 600;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00f5c4;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* ── name ── */
        .hero-name {
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #e8f0fe;
        }
        .hero-name-accent {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── typewriter ── */
        .hero-role-wrap {
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: #8ba3c7;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .hero-role-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #00f5c4;
          border-radius: 1px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
          margin-left: 1px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* ── divider line ── */
        .hero-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
          border-radius: 2px;
        }

        /* ── description ── */
        .hero-desc {
          max-width: 560px;
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          line-height: 1.75;
          color: #7a90b0;
          font-weight: 400;
        }

        /* ── stats row ── */
        .stats-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.25rem;
        }
        .stat-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.7rem 1.4rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
          gap: 0.15rem;
          min-width: 90px;
          transition: border-color 0.25s, background 0.25s;
        }
        .stat-pill:hover {
          border-color: rgba(0,245,196,0.3);
          background: rgba(0,245,196,0.05);
        }
        .stat-value {
          font-size: 1.55rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00f5c4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.7rem;
          color: #5a7090;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        /* ── buttons ── */
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }
        .btn-mag-primary, .btn-mag-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.9rem;
          border-radius: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          cursor: pointer;
          transition: box-shadow 0.25s, background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .btn-mag-primary {
          background: linear-gradient(135deg, #00f5c4 0%, #0abf9a 100%);
          color: #070d1a;
          box-shadow: 0 0 0 0 rgba(0,245,196,0.4);
        }
        .btn-mag-primary:hover {
          box-shadow: 0 0 28px rgba(0,245,196,0.4);
        }
        .btn-mag-secondary {
          background: transparent;
          color: #00f5c4;
          border: 1px solid rgba(0,245,196,0.35);
        }
        .btn-mag-secondary:hover {
          background: rgba(0,245,196,0.06);
          border-color: rgba(0,245,196,0.65);
        }

        /* ── scroll indicator ── */
        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: #3a5070;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          z-index: 1;
        }
        .scroll-mouse {
          width: 22px; height: 34px;
          border: 1.5px solid rgba(0,245,196,0.25);
          border-radius: 11px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
        .scroll-wheel {
          width: 3px; height: 6px;
          background: #00f5c4;
          border-radius: 2px;
          animation: scroll-anim 1.6s ease-in-out infinite;
        }
        @keyframes scroll-anim {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        /* ── responsive ── */
        @media (max-width: 520px) {
          .stats-row { gap: 0.85rem; }
          .btn-mag-primary, .btn-mag-secondary { padding: 0.75rem 1.4rem; font-size: 0.88rem; }
        }
      `}</style>

      <section className="hero-section">
        {/* Background layers */}
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-teal" />
        <div className="hero-glow hero-glow-blue" />
        <ParticleCanvas />

        <div className="hero-content">
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge-dot" />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Shaikh Mohammed{" "}
            <span className="hero-name-accent">Yusuf</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="hero-role-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <span>{role}</span>
            <span className="hero-role-cursor" />
          </motion.div>

          {/* Divider */}
          <motion.div
            className="hero-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          />

          {/* Description */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: "easeOut" }}
          >
            Passionate about building secure, scalable, and intelligent systems.
            I specialise in full-stack development and love competing in hackathons
            to ship solutions that tackle real-world problems.
          </motion.p>

          {/* Stats */}
          <div className="stats-row">
            <StatPill value="10+" label="Projects" delay={0.65} />
            <StatPill value="5+"  label="Hackathons" delay={0.75} />
            <StatPill value="2+"  label="Years Exp." delay={0.85} />
          </div>

          {/* CTA buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.55, ease: "easeOut" }}
          >
            <MagneticButton href="#projects" primary>
              View Projects →
            </MagneticButton>
            <MagneticButton href="#contact">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          Scroll
        </motion.div>
      </section>
    </>
  );
}
