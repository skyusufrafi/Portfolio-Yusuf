import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-10">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="text-gray-300 max-w-xl">
          Computer Engineering student with CGPA 8.09(Till Sem 3). 
          Passionate about cybersecurity and building real-world impactful systems.
        </p>
      </motion.div>
    </section>
  );
}