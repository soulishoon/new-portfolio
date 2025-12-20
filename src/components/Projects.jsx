"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import book1 from "../assets/project-image/ketab1.png";
import database1 from "../assets/project-image/database1.png";
import dorna1 from "../assets/project-image/dornatour1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const concepts = [
    {
        title: "Kherad Khan",
        description: "Designed a visually immersive website for cake recipes, combining delightful UI elements with",
        image: book1,
        urllink: "/KheradKhan",
    },
    {
        title: "Dorna",
        description: "Developed a cinematic movie platform with intuitive navigation",
        image: dorna1,
        urllink: "/Dorna",
    },
    {
        title: "CloudBase Database",
        description: "A vibrant music streaming app with personalized playlists and fluid navigation",
        image: database1,
        urllink: "/CloudDataBase",
    },

];


export default function Projects() {
    const swiperRef = useRef(null);

    return (
        <section
            id="concepts"
            className="relative   text-white py-16 sm:py-20 px-4 sm:px-8 md:px-10 overflow-visible"
        >
            <div className="max-w-6xl mx-auto text-center relative">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl  mb-3 sm:mb-4 text-black font-bold">
                    PROJECTS
                </h2>
                <p className="text-gray-700 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    Personal explorations and design experiments focused on motion, form, and clarity.
                </p>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={24}
                        centeredSlides={false}
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
                                    className="bg-l-to-b rounded-2xl overflow-hidden 
                         shadow-lg hover:shadow-2xl transition-all duration-500 transform 
                         hover:-translate-y-1 cursor-pointer  backdrop-blur-md border  border-[#0a1433a3]"
                                >
                                    <Link to={item.urllink}>
                                        {/* Image Wrapper */}
                                        <div className="relative w-full  bg-[#0a1433] flex items-center justify-center aspect-16/10 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-105"
                                            />
                                        </div>
                                    </Link>

                                    {/* Text */}
                                    <div className="p-5 sm:p-6 text-left">
                                        <h3 className="text-base sm:text-lg font-semibold text-black mb-1 tracking-wide">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                  
                </div>

                {/* Pagination Bullets */}
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-10 sm:translate-y-14 z-20">
                    <div className="custom-pagination flex justify-center"></div>
                </div>
            </div>
        </section>
    );
}
