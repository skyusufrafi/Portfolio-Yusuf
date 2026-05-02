import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Feel free to reach out for collaboration, opportunities, or projects 🚀
      </p>

      {/* EMAIL BUTTON */}
      <a href="mailto:msyusuf932@gmail.com" className="contact-btn email">
        📧 msyusuf932@gmail.com
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919321778926"
        target="_blank"
        className="contact-btn whatsapp"
      >
        <FaWhatsapp /> Chat on WhatsApp
      </a>

      {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a href="https://github.com/skyusufrafi"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shaikh-mohammed-yusuf-3a54a9381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        <a href="https://www.instagram.com/mr_yusuf_2404?igsh=MXR2OXM2bnVxZGxhbg=="><FaInstagram /></a>
      </div>

      {/* SEND MESSAGE FORM */}
      <div className="contact-form">
        <h3>Send a Message</h3>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>
      </div>

    </section>
  );
}

export default Contact;