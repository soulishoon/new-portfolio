"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft } from "lucide-react";
import mockup1 from "../assets/mockups/mockup1.png";
import mockup2 from "../assets/mockups/mockup2.png";

import mockup3 from "../assets/mockups/mockup3.png";
import mockup4 from "../assets/mockups/mockup4.png";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const conceptImages = [
  { id: 1, src: mockup1, title: "Fluid Navigation" },
  { id: 2, src: mockup2, title: "Modern UI System" },
  { id: 3, src: mockup3, title: "Futuristic Dashboard" },
  { id: 4, src: mockup4, title: "AI Workflow Assistant" },
];

export default function SweetcraftDetail() {
  const [selected, setSelected] = useState(conceptImages[0]);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const details = [
    "Designed an intuitive baking platform that delivers high-quality recipe videos and step-by-step instructions.",
    "Empowered users to personalize their learning journey by saving, organizing, and sharing recipes.",
    "Prioritized simplicity and accessibility to ensure an inclusive, engaging experience for users of all skill levels.",
  ];

  // 🎯 Parallax setup (disabled for mobile)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx / 10);
    y.set(dy / 10);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section

      className="min-h-screen bg-linear-to-b from-[#050b1f] via-[#0a1638] to-[#101b4a] 

                 text-white flex flex-col items-center px-4 sm:px-6 md:px-10 py-14 md:py-24 
                 font-[Poppins] overflow-hidden"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 🔙 Back button */}
      <div className="w-full max-w-6xl flex justify-start mb-10 md:mb-12">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 
                     bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white 
                     transition-all duration-200 backdrop-blur-md text-sm md:text-base"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      </div>

      {/* 🌟 Content grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 flex flex-col justify-center h-full text-center md:text-left"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#e36414] to-[#ffb077] bg-clip-text text-transparent leading-tight">

            Sweetcraft
          </h1>

          <div className="space-y-4 sm:space-y-6">
            {details.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
                className="flex items-start gap-4 justify-center md:justify-start"
              >

                <div className="relative mt-2 shrink-0">

                  <div className="w-3.5 h-3.5 rounded-full bg-[#e36414]/40 shadow-[0_0_10px_rgba(227,100,20,0.4)]" />
                  <div className="absolute inset-0 blur-md bg-[#e36414]/20 rounded-full" />
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-md">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Thumbnails */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8 justify-center md:justify-start">
            {conceptImages.map((img) => (
              <motion.div
                key={img.id}
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseEnter={() => setSelected(img)}
                onClick={() => setSelected(img)}
                className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selected.id === img.id
                    ? "border-[#e36414] shadow-[0_0_15px_rgba(227,100,20,0.4)]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-24 h-16 sm:w-28 sm:h-20 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Parallax mockup */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={isMobile ? {} : { rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Glow aura */}
          <motion.div

            className="absolute -inset-10 rounded-full bg-linear-to-tr from-[#e36414]/25 via-blue-400/15 to-transparent blur-3xl opacity-40"

            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Moving shadow */}
          {!isMobile && (
            <motion.div
              style={{ x, y, scale: 1.1 }}
              className="absolute w-[80%] h-[85%] bottom-[-10%] rounded-3xl bg-black/30 blur-3xl opacity-40"
            />
          )}

          {/* Main mockup */}
          <AnimatePresence mode="wait">
            <motion.img
              key={selected.src}
              src={selected.src}
              alt={selected.title}
              className="relative z-10 w-[85%] sm:w-[70%] md:w-full max-w-md rounded-3xl border border-blue-400/20 
                         bg-[#0b1633]/80 shadow-[0_0_35px_rgba(59,130,246,0.25)] backdrop-blur-xl object-contain"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
