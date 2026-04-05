import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Contact Me</h2>

      <div className="flex flex-col items-center gap-6">

        {/* Email */}
        <a
          href="mailto:msyusuf932@gmail.com"
          className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          <MdEmail /> msyusuf932@gmail.com
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919321778926"
          target="_blank"
          className="flex items-center gap-3 bg-green-500/20 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>

        {/* Social Links */}
        <div className="flex gap-6 text-3xl mt-6">

          <a href="https://github.com/skyusufrafi" target="_blank" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/shaikh-mohammed-yusuf-3a54a9381" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>

          <a href="https://instagram.com/mr_yusuf_2404" target="_blank" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>

        </div>

      </div>
    </section>
  );
}