"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import mockupretro1 from "../assets/mockups/mockupretro1.png";
import mockupretro2 from "../assets/mockups/mockupretro2.png";

export default function RitmoDetail() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx / 5);
    y.set(dy / 5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const details = [
    "A vibrant music streaming app with personalized playlists and fluid navigation.",
    "The design balances energy and clarity, encouraging exploration and daily engagement.",
  ];

  return (
    <motion.section
      className="min-h-screen bg-linear-to-b from-[#050b1f] via-[#0a1638] to-[#101b4a]
                 text-white flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24 font-[Poppins]"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* 🔙 Back Button */}
      <div className="w-full max-w-6xl flex justify-start mb-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 
                     bg-white/5 text-gray-200 hover:bg-[#e36414]/10 hover:border-[#e36414]/30 
                     hover:text-[#e36414] transition-all duration-200 backdrop-blur-md"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* ⚡ Content Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* 🧠 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#e36414] to-[#ffb077] 
                         bg-clip-text text-transparent leading-tight tracking-tight">
            Ritmo
          </h1>

          {/* 📋 Bullet Points */}
          <div className="space-y-6">
            {details.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="relative mt-2">
                  <div className="w-4 h-4 rounded-full bg-[#e36414]/30 shadow-[0_0_10px_rgba(227,100,20,0.4)]" />
                  <div className="absolute inset-0 blur-md bg-[#e36414]/20 rounded-full" />
                </div>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-md">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 📱 Mockup Section */}

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className=" relative flex justify-center md:justify-end items-center gap-6 md:gap-10"
        >
          {/* Ambient Light Layer */}
          <div className="absolute  inset-0 rounded-full blur-3xl bg-linear-to-r from-[#e36414]/20 via-[#ffb077]/15 to-transparent pointer-events-none" />

          {/* Left Phone */}
          <div className="  transition-transform duration-300 hover:scale-105  rotate-16       rounded-4xl  translate-y-8 shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(227,100,20,0.3)]">

          <motion.img
            src={mockupretro1}
            alt="Ritmo app screen 1"
            className="w-[130px] md:w-[180px]  rotate-12 "
          />
          </div>

          {/* Center Phone */}
         <div className=" z-10 scale-110 hover:scale-[1.15] transition-transform duration-300 rotate-16         shadow-[0_35px_65px_rgba(0,0,0,0.55),0_0_40px_rgba(255,140,70,0.4)] rounded-[36px]">
         <motion.img
            src={mockupretro2}
            alt="Ritmo app screen 2"
            className="w-[150px] md:w-[220px] rotate-12
           "
          />
         </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
