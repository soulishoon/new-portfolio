"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaDribbble, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-[#0b1221] via-[#0c1733] to-[#0e1f4b] 
                       text-gray-300 py-24 text-center relative overflow-hidden"
    >
      {/* ✨ Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,100,20,0.08),transparent_70%)] pointer-events-none" />

      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-10 px-6 relative z-10"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
          Let’s build something meaningful.
        </h3>
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 text-gray-400 text-2xl mb-12 relative z-10"
      >
        <a
          href="https://www.linkedin.com/in/donya-mehrzad-101b56299/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e36414] hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=donyamehrzad@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e36414] hover:scale-110 transition-all duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm relative z-10">
        © 2025 Donya Mehrzad — Designed with clarity & emotion.
        <br className="block md:hidden" /> +98 933 000 0661
      </p>
    </footer>
  );
}
