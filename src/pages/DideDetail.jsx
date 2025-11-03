
"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft } from "lucide-react";
import mockupdesktop1 from "../assets/mockups/mockupdesktop1.png";
import mockupdesktop2 from "../assets/mockups/mockupdesktop2.png";
import mockupdesktop3 from "../assets/mockups/mockupdesktop3.png";
import mockupdesktop4 from "../assets/mockups/mockupdesktop4.png";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const conceptImages = [
  { id: 1, src: mockupdesktop1, title: "Fluid Navigation" },
  { id: 2, src: mockupdesktop4, title: "Modern UI System" },
  { id: 3, src: mockupdesktop2, title: "Futuristic Dashboard" },
  { id: 4, src: mockupdesktop3, title: "AI Workflow Assistant" },
];

export default function DideDetail() {
  const [selected, setSelected] = useState(conceptImages[0]);

  const details = [
    "Designed a cinematic movie platform with intuitive navigation, detailed movie pages, and personalized watchlists.",
     "Emphasized visual storytelling and a user-centric experience for film discovery and engagement."
  ];

  

  // 🎯 پارالاکس موکاپ با حرکت موس
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx / 10);
    y.set(dy / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      className="max-h-screen min-h-screen bg-linear-to-b from-[#050b1f] via-[#0a1638] to-[#101b4a]
       text-white flex flex-col items-center px-8 py-16 md:py-24 font-[Poppins]"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 🔙 Back button */}
      <div className="w-full max-w-6xl flex justify-start mb-12">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-md"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* 🌟 Content grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8 flex flex-col justify-center h-full"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#e36414] to-[#ffb077] bg-clip-text text-transparent leading-tight tracking-tight">
            Dide
          </h1>

          <div className="space-y-6">
            {details.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="relative mt-2">
                  <div className="w-4 h-4 rounded-full bg-[#e36414]/30 shadow-[0_0_10px_rgba(227,100,20,0.4)]" />
                  <div className="absolute inset-0 blur-md bg-[#e36414]/20 rounded-full" />
                </div>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Thumbnails */}
          <div className="flex flex-wrap gap-4 pt-8">
            {conceptImages.map((img) => (
              <motion.div
                key={img.id}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseEnter={() => setSelected(img)}
                className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selected.id === img.id
                    ? "border-[#e36414] shadow-[0_0_15px_rgba(227,100,20,0.4)]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-28 h-20 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Parallax mockup */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative flex justify-center items-center perspective-1000 h-full"
        >
          {/* Glow aura */}
          <motion.div
            className="absolute -inset-10 rounded-full bg-linear-to-tr from-[#e36414]/25 via-blue-400/15 to-transparent blur-3xl opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Moving shadow */}
          <motion.div
            style={{ x, y, scale: 1.1 }}
            className="absolute w-[80%] h-[85%] bottom-[-10%] rounded-3xl bg-black/30 blur-3xl opacity-40"
          />

          {/* Main mockup */}
          <AnimatePresence mode="wait">
            <motion.img
              key={selected.src}
              src={selected.src}
              alt={selected.title}
              className="relative z-10 w-full max-w-md rounded-3xl border border-blue-400/20 bg-[#0b1633]/80 shadow-[0_0_35px_rgba(59,130,246,0.25)] backdrop-blur-xl object-contain"
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
