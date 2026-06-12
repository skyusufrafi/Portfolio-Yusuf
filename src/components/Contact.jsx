import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

// ── Section heading (same pattern as About/Projects) ─────────────────────────
function SectionHeading({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="ct-sh-wrap"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="ct-sh-line" />
      <h3 className="ct-sh">{children}</h3>
    </motion.div>
  );
}

// ── Info row ──────────────────────────────────────────────────────────────────
function InfoRow({ icon, label, value, href, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const inner = (
    <>
      <span className="ct-info-icon">{icon}</span>
      <div className="ct-info-body">
        <span className="ct-info-label">{label}</span>
        <span className="ct-info-value">{value}</span>
      </div>
    </>
  );
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -18 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.45 }}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="ct-info-row ct-info-link">{inner}</a>
      ) : (
        <div className="ct-info-row">{inner}</div>
      )}
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Contact() {
  const form = useRef();
  const [loading, setLoading]   = useState(false);
  const [sent, setSent]         = useState(false);
  const [focused, setFocused]   = useState("");
  const [vals, setVals]         = useState({ user_name: "", user_email: "", message: "" });

  const handleChange = (e) => setVals(v => ({ ...v, [e.target.name]: e.target.value }));

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_dvmou99", "template_bnreag9", form.current, "7o-Dq8uO5PLwQt8re")
      .then(() => {
        setSent(true);
        form.current.reset();
        setVals({ user_name: "", user_email: "", message: "" });
        setLoading(false);
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send ❌");
        setLoading(false);
      });
  };

  const socials = [
    { icon: <FaGithub />,    href: "https://github.com/skyusufrafi",                        label: "GitHub" },
    { icon: <FaLinkedin />,  href: "https://linkedin.com/in/shaikh-mohammed-yusuf-3a54a9381", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/mr_yusuf_2404",                   label: "Instagram" },
  ];

  return (
    <>
      <style>{`
        /* ── section ── */
        .ct-section {
          position: relative;
          background: #070d1a;
          padding: 7rem 1.5rem 6rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .ct-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .ct-glow {
          position: absolute; border-radius: 50%;
          filter: blur(130px); pointer-events: none;
        }
        .ct-glow-l {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%);
          top: -80px; left: -180px;
        }
        .ct-glow-r {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          bottom: 0; right: -120px;
        }

        /* ── inner ── */
        .ct-inner {
          position: relative; z-index: 1;
          max-width: 1000px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 3.5rem;
        }

        /* ── page title ── */
        .ct-title-wrap { display: flex; flex-direction: column; gap: 0.6rem; }
        .ct-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.16em;
          text-transform: uppercase; color: #00f5c4; font-weight: 700;
        }
        .ct-page-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          letter-spacing: -0.03em; color: #e8f0fe; line-height: 1.1;
        }
        .ct-page-title span {
          background: linear-gradient(135deg, #00f5c4 0%, #3b82f6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-page-sub {
          font-size: 0.92rem; color: #3a5070; max-width: 440px; line-height: 1.6; margin-top: 0.4rem;
        }

        /* ── section heading ── */
        .ct-sh-wrap { display: flex; align-items: center; gap: 0.9rem; margin-bottom: 1.4rem; }
        .ct-sh-line {
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #00f5c4, #3b82f6);
          border-radius: 2px; flex-shrink: 0;
        }
        .ct-sh {
          font-size: 1.1rem; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; color: #c8daf0;
        }

        /* ── two-col layout ── */
        .ct-cols {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 2rem;
          align-items: start;
        }

        /* ── left col ── */
        .ct-left { display: flex; flex-direction: column; gap: 1.8rem; }

        /* info rows */
        .ct-info-row {
          display: flex; align-items: center; gap: 1rem;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 1rem 1.2rem;
          transition: border-color 0.25s;
        }
        .ct-info-row:hover { border-color: rgba(0,245,196,0.2); }
        .ct-info-link { text-decoration: none; cursor: pointer; }
        .ct-info-link:hover .ct-info-value { color: #00f5c4; }
        .ct-info-icon {
          width: 40px; height: 40px; border-radius: 11px; font-size: 1.1rem;
          background: linear-gradient(135deg, rgba(0,245,196,0.12), rgba(59,130,246,0.12));
          border: 1px solid rgba(0,245,196,0.18);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ct-info-body { display: flex; flex-direction: column; gap: 0.15rem; }
        .ct-info-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.09em;
          text-transform: uppercase; color: #3a5070;
        }
        .ct-info-value { font-size: 0.85rem; font-weight: 600; color: #c8daf0; transition: color 0.2s; }

        /* whatsapp button */
        .ct-whatsapp {
          display: flex; align-items: center; justify-content: center; gap: 0.7rem;
          padding: 0.85rem 1.4rem; border-radius: 14px;
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.3);
          color: #25d366; font-size: 0.88rem; font-weight: 700; letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .ct-whatsapp:hover {
          background: rgba(37,211,102,0.18);
          border-color: rgba(37,211,102,0.5);
          box-shadow: 0 0 20px rgba(37,211,102,0.15);
        }
        .ct-whatsapp svg { font-size: 1.1rem; }

        /* social icons */
        .ct-socials { display: flex; gap: 0.7rem; }
        .ct-social-btn {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #5a7090; font-size: 1.1rem; text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .ct-social-btn:hover {
          background: rgba(0,245,196,0.08);
          border-color: rgba(0,245,196,0.25);
          color: #00f5c4;
          transform: translateY(-3px);
        }

        /* ── form card ── */
        .ct-form-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 22px; padding: 2.2rem;
          display: flex; flex-direction: column; gap: 1.2rem;
          position: relative; overflow: hidden;
          transition: border-color 0.3s;
        }
        .ct-form-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,245,196,0.35), transparent);
        }
        .ct-form-card:focus-within { border-color: rgba(0,245,196,0.15); }

        .ct-form-title {
          font-size: 1rem; font-weight: 700; color: #c8daf0;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .ct-form-title-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #00f5c4, #3b82f6);
        }

        /* field wrapper */
        .ct-field {
          display: flex; flex-direction: column; gap: 0.4rem;
        }
        .ct-field-label {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.09em;
          text-transform: uppercase; color: #3a5070;
          transition: color 0.2s;
        }
        .ct-field-label.focused { color: #00f5c4; }
        .ct-field-input, .ct-field-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 0.8rem 1rem;
          font-size: 0.88rem; color: #c8daf0;
          font-family: inherit; outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          width: 100%; box-sizing: border-box;
        }
        .ct-field-input::placeholder, .ct-field-textarea::placeholder { color: #2a4060; }
        .ct-field-input:focus, .ct-field-textarea:focus {
          border-color: rgba(0,245,196,0.35);
          background: rgba(0,245,196,0.03);
          box-shadow: 0 0 0 3px rgba(0,245,196,0.06);
        }
        .ct-field-textarea { resize: vertical; min-height: 130px; line-height: 1.6; }

        /* submit button */
        .ct-submit {
          padding: 0.9rem 1.5rem; border-radius: 13px; border: none; cursor: pointer;
          font-size: 0.9rem; font-weight: 700; letter-spacing: 0.05em;
          font-family: inherit;
          background: linear-gradient(135deg, rgba(0,245,196,0.18), rgba(59,130,246,0.18));
          border: 1px solid rgba(0,245,196,0.35);
          color: #00f5c4;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          transition: background 0.25s, box-shadow 0.25s, border-color 0.25s, transform 0.2s;
          position: relative; overflow: hidden;
        }
        .ct-submit:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(0,245,196,0.28), rgba(59,130,246,0.25));
          border-color: rgba(0,245,196,0.55);
          box-shadow: 0 0 24px rgba(0,245,196,0.2);
          transform: translateY(-2px);
        }
        .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .ct-submit-loader {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(0,245,196,0.3);
          border-top-color: #00f5c4;
          animation: ct-spin 0.7s linear infinite;
        }
        @keyframes ct-spin { to { transform: rotate(360deg); } }

        /* success banner */
        .ct-success {
          display: flex; align-items: center; gap: 0.7rem;
          padding: 0.85rem 1.1rem; border-radius: 12px;
          background: rgba(0,245,196,0.07);
          border: 1px solid rgba(0,245,196,0.25);
          font-size: 0.84rem; font-weight: 600; color: #00f5c4;
        }

        /* ── responsive ── */
        @media (max-width: 700px) {
          .ct-cols { grid-template-columns: 1fr; }
          .ct-form-card { padding: 1.5rem; }
        }
      `}</style>

      <section id="contact" className="ct-section">
        <div className="ct-glow ct-glow-l" />
        <div className="ct-glow ct-glow-r" />

        <div className="ct-inner">

          {/* ── Title ── */}
          <motion.div
            className="ct-title-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ct-eyebrow">// let's connect</span>
            <h2 className="ct-page-title">Get In <span>Touch</span></h2>
            <p className="ct-page-sub">
              Have an idea or project? I'm always open to building something amazing together.
            </p>
          </motion.div>

          {/* ── Two columns ── */}
          <div className="ct-cols">

            {/* LEFT */}
            <div className="ct-left">
              <div>
                <SectionHeading>Contact Info</SectionHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <InfoRow icon="📧" label="Email" value="msyusuf932@gmail.com" href="mailto:msyusuf932@gmail.com" delay={0.05} />
                  <InfoRow icon="📍" label="Location" value="Mumbai, India" delay={0.1} />
                  <InfoRow icon="🎓" label="Status" value="B.E. Computer Engineering · AIKTC" delay={0.15} />
                </div>
              </div>

              <div>
                <SectionHeading>Quick Chat</SectionHeading>
                <motion.a
                  href="https://wa.me/919321778926"
                  target="_blank" rel="noreferrer"
                  className="ct-whatsapp"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </motion.a>
              </div>

              <div>
                <SectionHeading>Socials</SectionHeading>
                <motion.div
                  className="ct-socials"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {socials.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank" rel="noreferrer"
                      className="ct-social-btn"
                      title={s.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <form ref={form} onSubmit={sendEmail} className="ct-form-card">
                <div className="ct-form-title">
                  <span className="ct-form-title-dot" />
                  Send a Message
                </div>

                {sent && (
                  <div className="ct-success">
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}

                <div className="ct-field">
                  <label className={`ct-field-label ${focused === "user_name" ? "focused" : ""}`}>Your Name</label>
                  <input
                    className="ct-field-input"
                    type="text" name="user_name" required
                    placeholder="Shaikh Mohammed Yusuf"
                    value={vals.user_name}
                    onChange={handleChange}
                    onFocus={() => setFocused("user_name")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                <div className="ct-field">
                  <label className={`ct-field-label ${focused === "user_email" ? "focused" : ""}`}>Email Address</label>
                  <input
                    className="ct-field-input"
                    type="email" name="user_email" required
                    placeholder="you@example.com"
                    value={vals.user_email}
                    onChange={handleChange}
                    onFocus={() => setFocused("user_email")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                <div className="ct-field">
                  <label className={`ct-field-label ${focused === "message" ? "focused" : ""}`}>Message</label>
                  <textarea
                    className="ct-field-textarea"
                    name="message" required
                    placeholder="Hey Yusuf, I have a project idea..."
                    value={vals.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                <button type="submit" className="ct-submit" disabled={loading}>
                  {loading ? (
                    <><span className="ct-submit-loader" /> Sending…</>
                  ) : (
                    <>Send Message <span>🚀</span></>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
