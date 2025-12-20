"use client";
import { motion } from "framer-motion";
import Donya from "../assets/Hero.png";
import OrangeShape from "../assets/orange-shape.svg";

export default function Hero() {
  return (
    <section id="home" className="bg-[#0A1433] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between min-h-[85vh] py-16 md:py-20 gap-12">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center md:text-left w-full md:w-1/2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug tracking-tight">
            Hi, I'm <span className="text-[#E36414]">Donya Mehrzad</span>
          </h1>

          <p className="text-gray-300 font-medium text-base sm:text-lg leading-relaxed tracking-wide max-w-md mx-auto md:mx-0">
            Product Designer who turns tangled workflows into calm, intuitive
            experiences — shaping complexity into clarity.
          </p>

          <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.querySelector("#projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#E36414] text-white font-semibold px-7 py-2.5 rounded-full hover:bg-[#ff7b33] hover:shadow-lg transition-all duration-300"
            >
              View My Projects
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center w-[220px] sm:w-[260px] md:w-[320px] lg:w-[340px] h-[220px] sm:h-[260px] md:h-80 lg:h-[340px]"
        >
          <div className="relative w-full h-full">
            <img
              src={OrangeShape}
              alt="Decorative orange shape"
              className="absolute inset-0 w-[85%] h-[85%] object-contain z-0 opacity-90 m-auto"
            />
            <img
              src={Donya}
              alt="Portrait of Donya Mehrzad"
              className="relative z-10 w-full h-full object-contain rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
