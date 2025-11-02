import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <div className="bg-white text-[#0b1221] py-24 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#0b1221] text-white p-3 rounded-full">
              <Briefcase size={22} />
            </div>
            <h2 className="text-2xl font-extrabold">Work Experience</h2>
          </div>

          <div className="flex flex-col gap-10 border-l border-gray-300 pl-6">
            {/* Job 1 */}
            <div>
              <h3 className="font-semibold text-lg">UI & UX Designer</h3>
              <p className="text-gray-600 text-sm mb-2">
                Mohaymen <span className="text-gray-400">•</span> June 2025 - Present
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
              </p>
            </div>

            {/* Job 2 */}
            <div>
              <h3 className="font-semibold text-lg">UI & UX Designer</h3>
              <p className="text-gray-600 text-sm mb-2">
                MAKEEN IDEAL MEDIA <span className="text-gray-400">•</span> Feb 2024 - June 2025
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#0b1221] text-white p-3 rounded-full">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-2xl font-extrabold">Education</h2>
          </div>

          <div className="flex flex-col gap-10 border-l border-gray-300 pl-6">
            

            {/* Education 2 */}
            <div>
              <h3 className="font-semibold text-lg">Bachelor of Industrial Design</h3>
              <p className="text-gray-600 text-sm mb-2">
                Islamic Azad University, Central Tehran Branch <span className="text-gray-400"></span> 
              </p>
            </div>

            {/* Education 3 */}
            <div>
              <h3 className="font-semibold text-lg">MAKEEN ACADEMY</h3>
              <p className="text-gray-600 text-sm mb-2">
              UX/UI Design <span className="text-gray-400"></span> 
              </p>
            </div>

            {/* Education 4 */}
            <div>
              <h3 className="font-semibold text-lg">Mohaymen Boot Camp</h3>
              <p className="text-gray-600 text-sm mb-2">
                Product Management <span className="text-gray-400"></span> 
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
