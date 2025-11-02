"use client";
import {
  Search,
  PenTool,
  Layout,
  UserCheck,
  Lightbulb,
  Scissors,
  Layers,
  Cpu,
  Shuffle,
  Figma,
  Cuboid,
} from "lucide-react";
import { motion } from "framer-motion";

const designSkills = [
  { name: "Design System", icon: <Layers />, desc: "Consistent UI patterns" },
  { name: "Responsive", icon: <Cpu />, desc: "Adaptive layouts" }, // ✅ منتقل شد اینجا
  { name: "Prototyping", icon: <Layout />, desc: "Interactive mockups" },
  { name: "Design Thinking", icon: <Lightbulb />, desc: "Creative ideation" },
  { name: "Wireframing", icon: <PenTool />, desc: "Page structure" },
  { name: "Information Architecture", icon: <Search />, desc: "Clear navigation" },
  { name: "Scrum Framework", icon: <Shuffle />, desc: "Agile process" },
  { name: "Usability Testing", icon: <UserCheck />, desc: "User feedback" },
];

const tools = [
  { name: "Figma", icon: <Figma />, desc: "Collaborative UI design" },
  { name: "Adobe XD", icon: <Layout />, desc: "Screen design & prototype" },
  {
    name: "Adobe Illustrator",
    icon: <PenTool />,
    desc: "Vector graphics & illustration",
  },
  {
    name: "Adobe Photoshop",
    icon: <Scissors />,
    desc: "Image editing & raster graphics",
  },
  {
    name: "Rhinoceros 3D",
    icon: <Cuboid />,
    desc: "3D modeling & industrial design",
  },
];

export default function SkillsTools() {
  return (
    <section className="bg-[#0A1433] text-white py-24 px-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto text-center space-y-24">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] to-[#e36414] bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A balance of creativity, process, and adaptability — tools evolve with purpose.
          </p>
        </div>

        {/* Design Skills */}
        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-10 tracking-wide uppercase">
            Design Skills
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 justify-items-center">
            {designSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="group relative bg-[#151E3A]/60 border border-white/5 
                           rounded-xl px-6 py-4 w-56 h-16 flex items-center gap-3 
                           hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] 
                           hover:border-blue-400/20 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white shadow-inner">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold tracking-tight">{skill.name}</span>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-11 left-1/2 -translate-x-1/2 bg-[#1B254B]/95 
                             text-gray-100 text-[11px] px-3 py-1.5 rounded-md border border-white/10 
                             opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 
                             whitespace-nowrap transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                  {skill.desc}
                  <div className="absolute left-1/2 bottom-[-5px] -translate-x-1/2 w-2.5 h-2.5 
                                  bg-[#1B254B]/95 rotate-45 border-b border-r border-white/10" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools I Use */}
        <div>
          <h3 className="text-xl font-semibold text-orange-300 mb-10 tracking-wide uppercase">
            Tools
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 justify-items-center">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                className="group relative bg-[#1A1E36]/60 border border-white/5 
                           rounded-xl px-6 py-4 w-56 h-16 flex items-center gap-3 
                           hover:shadow-[0_0_25px_rgba(227,100,20,0.25)] 
                           hover:border-[#e36414]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white shadow-inner">
                  {tool.icon}
                </div>
                <span className="text-sm font-semibold tracking-tight">{tool.name}</span>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-11 left-1/2 -translate-x-1/2 bg-[#2A1B1B]/95 
                             text-gray-100 text-[11px] px-3 py-1.5 rounded-md border border-white/10 
                             opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 
                             whitespace-nowrap transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                  {tool.desc}
                  <div className="absolute left-1/2 bottom-[-5px] -translate-x-1/2 w-2.5 h-2.5 
                                  bg-[#2A1B1B]/95 rotate-45 border-b border-r border-white/10" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
















// import {
//   Search,
//   PenTool,
//   Layout,
//   UserCheck,
//   Palette,
//   Lightbulb,
//   FileText,
//   Scissors,
// } from "lucide-react";
// import { motion } from "framer-motion"; // ✅ import motion

// const skills = [
//   { name: "UX Research", icon: <Search className="w-5 h-5" /> },
//   { name: "Wireframing", icon: <PenTool className="w-5 h-5" /> },
//   { name: "Prototyping", icon: <Layout className="w-5 h-5" /> },
//   { name: "Usability Testing", icon: <UserCheck className="w-5 h-5" /> },
//   { name: "UI Systems", icon: <Palette className="w-5 h-5" /> },
//   { name: "Product Thinking", icon: <Lightbulb className="w-5 h-5" /> },
//   { name: "Notion", icon: <FileText className="w-5 h-5" /> },
//   { name: "Photoshop", icon: <Scissors className="w-5 h-5" /> },
// ];

// export default function SkillsTools() {
//   return (
//     <section className="bg-[#0A1433] text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Header */}
//         <h2 className="text-2xl font-semibold mb-2">Skills & Tools</h2>
//         <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
//           Designing means learning — my tools evolve with my thinking.
//         </p>

//         {/* Skills Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#151E3A]/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#1E2952] transition-all duration-300 shadow-sm hover:shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.2, // ⏱ each card delayed by 0.2s
//               }}
//               viewport={{ once: true }}
//             >
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white mb-3">
//                 {skill.icon}
//               </div>
//               <span className="text-sm font-medium">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
