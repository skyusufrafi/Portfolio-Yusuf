import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Education",  href: "#education" },
  { label: "Skills",     href: "#skills" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Projects",   href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("");
  const menuRef = useRef(null);

  // scroll shadow + active section tracker
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLink = (href) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <>
      <style>{`
        /* ── base ── */
        .nb {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          transition: background 0.35s, box-shadow 0.35s, backdrop-filter 0.35s;
        }
        .nb-scrolled {
          background: rgba(7,13,26,0.85);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          box-shadow: 0 1px 0 rgba(0,245,196,0.07), 0 4px 32px rgba(0,0,0,0.4);
        }
        .nb-top {
          background: transparent;
        }

        /* ── top grid line (always visible) ── */
        .nb::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(0,245,196,0.15) 30%, rgba(59,130,246,0.15) 70%, transparent 100%);
          opacity: 0; transition: opacity 0.35s;
        }
        .nb-scrolled::after { opacity: 1; }

        /* ── inner ── */
        .nb-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center;
          padding: 0 1.5rem; height: 64px;
          position: relative;
        }

        /* ── logo ── */
        .nb-logo {
          font-size: 1.35rem; font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer; user-select: none;
          text-decoration: none;
          position: relative; flex-shrink: 0;
        }
        .nb-logo::after {
          content: '.dev';
          font-size: 0.7rem; font-weight: 600;
          color: #3a5070;
          -webkit-text-fill-color: #3a5070;
          margin-left: 1px; vertical-align: super;
          letter-spacing: 0.04em;
        }

        /* ── desktop links ── */
        .nb-links {
          display: flex; align-items: center; gap: 0.25rem;
          margin-left: auto;
        }
        .nb-link {
          position: relative;
          font-size: 0.82rem; font-weight: 600;
          letter-spacing: 0.04em;
          color: #5a7090;
          text-decoration: none;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nb-link:hover {
          color: #c8daf0;
          background: rgba(255,255,255,0.04);
        }
        .nb-link-active {
          color: #00f5c4 !important;
        }
        .nb-link-active::after {
          content: '';
          position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 16px; height: 2px; border-radius: 99px;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
        }

        /* ── contact button ── */
        .nb-contact {
          margin-left: 0.6rem;
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.48rem 1.2rem; border-radius: 10px;
          text-decoration: none;
          background: linear-gradient(135deg, rgba(0,245,196,0.15), rgba(59,130,246,0.15));
          border: 1px solid rgba(0,245,196,0.3);
          color: #00f5c4;
          transition: background 0.25s, box-shadow 0.25s, border-color 0.25s;
          white-space: nowrap;
        }
        .nb-contact:hover {
          background: linear-gradient(135deg, rgba(0,245,196,0.28), rgba(59,130,246,0.22));
          border-color: rgba(0,245,196,0.55);
          box-shadow: 0 0 18px rgba(0,245,196,0.18);
          color: #00f5c4;
        }

        /* ── hamburger ── */
        .nb-burger {
          display: none;
          flex-direction: column; justify-content: center; align-items: center;
          gap: 5px;
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; margin-left: auto; flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .nb-burger:hover { background: rgba(0,245,196,0.07); border-color: rgba(0,245,196,0.2); }
        .nb-burger span {
          display: block; height: 2px; border-radius: 99px;
          background: #7a90b0; transition: all 0.3s;
        }
        .nb-burger span:nth-child(1) { width: 18px; }
        .nb-burger span:nth-child(2) { width: 14px; }
        .nb-burger span:nth-child(3) { width: 18px; }
        .nb-burger-open span:nth-child(1) {
          width: 18px; transform: translateY(7px) rotate(45deg); background: #00f5c4;
        }
        .nb-burger-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-burger-open span:nth-child(3) {
          width: 18px; transform: translateY(-7px) rotate(-45deg); background: #00f5c4;
        }

        /* ── mobile overlay backdrop ── */
        .nb-backdrop {
          position: fixed; inset: 0; z-index: 998;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
        }

        /* ── mobile drawer ── */
        .nb-mobile {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: min(300px, 80vw);
          z-index: 999;
          background: #0b1425;
          border-left: 1px solid rgba(0,245,196,0.1);
          display: flex; flex-direction: column;
          padding: 0;
          overflow: hidden;
        }

        /* mobile drawer header */
        .nb-mobile-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nb-mobile-logo {
          font-size: 1.2rem; font-weight: 800;
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nb-close-btn {
          width: 32px; height: 32px; border-radius: 8px; cursor: pointer;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: #5a7090; font-size: 1rem; line-height: 1;
          transition: background 0.2s, color 0.2s;
        }
        .nb-close-btn:hover { background: rgba(0,245,196,0.08); color: #00f5c4; }

        /* mobile nav links */
        .nb-mobile-links {
          flex: 1; padding: 1.2rem 1rem; display: flex; flex-direction: column; gap: 0.3rem;
          overflow-y: auto;
        }
        .nb-mobile-link {
          display: flex; align-items: center; gap: 0.9rem;
          padding: 0.85rem 1rem; border-radius: 12px;
          text-decoration: none;
          color: #7a90b0; font-size: 0.9rem; font-weight: 600;
          letter-spacing: 0.03em;
          transition: background 0.2s, color 0.2s;
          border: 1px solid transparent;
        }
        .nb-mobile-link:hover {
          background: rgba(255,255,255,0.04);
          color: #c8daf0;
          border-color: rgba(255,255,255,0.06);
        }
        .nb-mobile-link-active {
          background: rgba(0,245,196,0.06) !important;
          color: #00f5c4 !important;
          border-color: rgba(0,245,196,0.15) !important;
        }
        .nb-mobile-link-num {
          font-size: 0.65rem; font-weight: 700; color: #2a4060;
          letter-spacing: 0.08em; min-width: 20px;
        }
        .nb-mobile-link-active .nb-mobile-link-num { color: rgba(0,245,196,0.4); }

        /* mobile contact */
        .nb-mobile-footer {
          padding: 1.2rem 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .nb-mobile-contact {
          display: block; text-align: center; text-decoration: none;
          font-size: 0.85rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #00f5c4;
          padding: 0.8rem; border-radius: 12px;
          background: linear-gradient(135deg, rgba(0,245,196,0.12), rgba(59,130,246,0.12));
          border: 1px solid rgba(0,245,196,0.25);
          transition: background 0.25s, box-shadow 0.25s;
        }
        .nb-mobile-contact:hover {
          background: linear-gradient(135deg, rgba(0,245,196,0.22), rgba(59,130,246,0.18));
          box-shadow: 0 0 20px rgba(0,245,196,0.15);
        }

        /* ── responsive ── */
        @media (max-width: 768px) {
          .nb-links { display: none; }
          .nb-burger { display: flex; }
        }
        @media (min-width: 769px) {
          .nb-mobile, .nb-backdrop { display: none !important; }
        }
      `}</style>

      {/* ── Navbar bar ── */}
      <nav ref={menuRef} className={`nb ${scrolled ? "nb-scrolled" : "nb-top"}`}>
        <div className="nb-inner">
          <a href="#hero" className="nb-logo">Yusuf</a>

          {/* Desktop links */}
          <div className="nb-links">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nb-link ${active === l.href ? "nb-link-active" : ""}`}
                onClick={() => handleLink(l.href)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nb-contact" onClick={() => handleLink("#contact")}>
              Contact
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nb-burger ${open ? "nb-burger-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="nb-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="nb-mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {/* header */}
              <div className="nb-mobile-header">
                <span className="nb-mobile-logo">Yusuf.dev</span>
                <button className="nb-close-btn" onClick={() => setOpen(false)}>✕</button>
              </div>

              {/* links */}
              <div className="nb-mobile-links">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    className={`nb-mobile-link ${active === l.href ? "nb-mobile-link-active" : ""}`}
                    onClick={() => handleLink(l.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <span className="nb-mobile-link-num">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                ))}
              </div>

              {/* footer contact */}
              <div className="nb-mobile-footer">
                <a
                  href="#contact"
                  className="nb-mobile-contact"
                  onClick={() => handleLink("#contact")}
                >
                  ✉ Get In Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
