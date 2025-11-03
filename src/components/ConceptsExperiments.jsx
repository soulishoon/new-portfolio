"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Dide from "../assets/concept images/Dide.png";
import Dora from "../assets/concept images/Dora.png";
import Driveo from "../assets/concept images/Driveo.png";
import Ritmo from "../assets/concept images/Ritmo.png";
import SweetCraft from "../assets/mockups/mockup1.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const concepts = [
  {
    title: "SweetCraft",
    description: "Designed a visually immersive website for cake recipes, combining delightful UI elements with",
    image: SweetCraft,
    urllink: "/ConceptDetail",
  },
  {
    title: "Driveo",
    description: "A modern car rental app with real-time availability and a fast booking process",
    image: Driveo,
    urllink: "/DriveoDetail",
  },
  {
    title: "Dide",
    description: "Developed a cinematic movie platform with intuitive navigation",
    image: Dide,
    urllink: "/DideDetail",
  },
  {
    title: "Ritmo",
    description: "A vibrant music streaming app with personalized playlists and fluid navigation",
    image: Ritmo,
    urllink: "/RitmoDetail",
  },
  {
    title: "Dora",
    description: "A luxury fashion website designed with a minimalist and elegant style",
    image: Dora,
    urllink: "/DoraDetail",
  },
];


export default function ConceptsExperiments() {
  const swiperRef = useRef(null);

  return (
   <section
  id="concepts"
  className="relative bg-[#0A1433] text-white py-16 sm:py-20 px-4 sm:px-8 md:px-10 overflow-visible"
>
  <div className="max-w-6xl mx-auto text-center relative">
    {/* Header */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#60a5fa] to-[#e36414] bg-clip-text text-transparent">
      CONCEPTS
    </h2>
    <p className="text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
      Personal explorations and design experiments focused on motion, form, and clarity.
    </p>

    {/* Swiper Carousel */}
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        centeredSlides={false}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-2.5 h-2.5 rounded-full inline-block mx-1"></span>`,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-20 sm:pb-24"
      >
        {concepts.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-[#111C45]/90 to-[#0A1433]/90 rounded-2xl overflow-hidden 
                         shadow-lg hover:shadow-2xl transition-all duration-500 transform 
                         hover:-translate-y-1 cursor-pointer backdrop-blur-md border border-white/10"
            >
              <Link to={item.urllink}>
                {/* Image Wrapper */}
                <div className="bg-white relative w-full bg-[#0C1845] flex items-center justify-center aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
              </Link>

              {/* Text */}
              <div className="p-5 sm:p-6 text-left">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="hidden md:flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute -left-10 lg:-left-16 top-1/2 -translate-y-1/2 border border-[#96b9ff]/60 bg-transparent
           text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg 
           hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 z-30"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute -right-10 lg:-right-16 top-1/2 -translate-y-1/2 border border-[#96b9ff]/60 bg-transparent
           text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg 
           hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 z-30"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>

    {/* Pagination Bullets */}
    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-10 sm:translate-y-14 z-20">
      <div className="custom-pagination flex justify-center"></div>
    </div>
  </div>
</section>
  );
}
