"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft } from "lucide-react";

import mockupdora1 from "../assets/mockups/mockupdora1.png";
import mockupdora2 from "../assets/mockups/mockupdora2.png";
import mockupdora3 from "../assets/mockups/mockupdora3.png";
import mockupdora4 from "../assets/mockups/mockupdora4.png";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const conceptImages = [
  { id: 1, src: mockupdora1, title: "Fluid Navigation" },
  { id: 2, src: mockupdora2, title: "Modern UI System" },
  { id: 3, src: mockupdora3, title: "Futuristic Dashboard" },
  { id: 4, src: mockupdora4, title: "AI Workflow Assistant" },
];

export default function DoraDetail() {
  const [selected, setSelected] = useState(conceptImages[0]);
  const details = [
    "A luxury fashion website designed with a minimalist and elegant style.",
    "It highlights collections through refined visuals and a smooth user journey, focusing on brand storytelling and aesthetic harmony.",
  ];

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
      className="min-h-screen bg-gradient-to-b from-[#050b1f] via-[#0a1638] to-[#101b4a]
       text-white flex flex-col items-center px-6 md:px-10 py-16 md:py-24 font-[Poppins] overflow-hidden"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full max-w-6xl flex justify-start mb-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-md"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 flex flex-col justify-center text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#e36414] to-[#ffb077] bg-clip-text text-transparent">
            Dora
          </h1>

          <div className="space-y-6">
            {details.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="relative mt-2 shrink-0">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#e36414]/40 shadow-[0_0_10px_rgba(227,100,20,0.4)]" />
                </div>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            {conceptImages.map((img) => (
              <motion.div
                key={img.id}
                whileHover={{ scale: 1.08 }}
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
                  className="w-24 h-16 sm:w-28 sm:h-20 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative flex justify-center items-center mt-10 md:mt-0"
        >
          <motion.div
            className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#e36414]/25 via-blue-400/15 to-transparent blur-3xl opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={selected.src}
              src={selected.src}
              alt={selected.title}
              className="relative z-10 w-3/4 sm:w-2/3 md:w-full max-w-md rounded-3xl border border-blue-400/20 bg-[#0b1633]/80 shadow-[0_0_35px_rgba(59,130,246,0.25)] backdrop-blur-xl object-contain"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
