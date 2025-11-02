  import React, { useState } from "react";
  import { motion } from "framer-motion";
  import * as Dialog from "@radix-ui/react-dialog";
  import dornacasestudy from "../assets/DornaCaseStudy.png"
  import kheradkhancasestudy from "../assets/KheradKhanCaseStudy.png"
  import dorna from "../assets/Dorna.png";
  import kherad from "../assets/Kheradkhan.png";

  export default function SelectedProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
      {
        title: "Travel Booking Platform Redesign",
        tag: "Website",
        description:
          "Redesigning a modern travel booking experience focused on simplicity, accessibility, and visual harmony.",
        image: dorna,
        casestudy : dornacasestudy
      },
      {
        title: "Digital Reading Platform",
        tag: "Website",
        description:
          "Designing an intuitive platform for discovering, managing, and reading books with a focus on accessibility and minimal aesthetics.",
        image: kherad,
        casestudy: kheradkhancasestudy
      },
    ];

    return (
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Selected Projects
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            A selection of my latest product and interface design works.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover relative left-4
                   w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 text-left">
                <span className="inline-block bg-[#0b1221]/10 text-[#0b1221] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-500">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium tracking-wide transition-opacity duration-500">
                  View Project →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Drawer */}
    <Dialog.Root open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
    <Dialog.Portal>
      {/* Overlay */}
      <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-700" />

      {/* Drawer Content */}
      <Dialog.Content asChild>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 120) setSelectedProject(null);
          }}
          className="fixed z-50 bottom-0 left-0 right-0 h-[89vh] bg-white text-gray-900
                    rounded-t-3xl shadow-2xl p-0 overflow-y-auto  cursor-grab active:cursor-grabbing"
        >
          {/* Drag Handle */}
          <div className="w-14 h-1.5 bg-gray-300 rounded-full mx-auto my-4" />

          {/* Fixed Header */}
          <div className="sticky top-0 w-full bg-white z-10 border-b border-gray-200">
            <div className="flex justify-between items-center py-4 px-6">
              <div>
                <Dialog.Title className="text-xl font-semibold">
                  {selectedProject?.title}
                </Dialog.Title>
                <Dialog.Description className="text-gray-500 text-sm">
                  {selectedProject?.tag}
                </Dialog.Description>
              </div>

              <Dialog.Close asChild>
                <button className="text-gray-500 hover:text-gray-800 transition">
                  ✕
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="p-6">
          <img
          src={selectedProject?.casestudy}
          alt={selectedProject?.title}
          className="rounded-lg w-full h-auto mb-4 shadow-md translate-x-[10px]"
          />


            <p className="text-gray-600 text-sm leading-relaxed">
              {selectedProject?.description}
            </p>

            {/* Extra space for scrolling */}
            <div className="h-40" />
          </div>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>


      </section>
    );
  }
