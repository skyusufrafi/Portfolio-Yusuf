import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_dvmou99",     // ✅ service id
        "template_bnreag9",      // ❗ template id
        form.current,
        "7o-Dq8uO5PLwQt8re"      // ❗ public key
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send ❌");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact-container">

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let's Work Together 🚀</h2>
          <p>
            Have an idea or project? Let's build something amazing together.
          </p>

          <div className="contact-info">
            <p>📧 msyusuf932@gmail.com</p>

            <a
              href="https://wa.me/919321778926"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/skyusufrafi"><FaGithub /></a>
            <a href="https://linkedin.com/in/shaikh-mohammed-yusuf-3a54a9381"><FaLinkedin /></a>
            <a href="https://instagram.com/mr_yusuf_2404"><FaInstagram /></a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <h3>Send a Message</h3>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;