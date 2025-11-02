import { motion } from "framer-motion";
import Donya from "../assets/Hero.png";


export default function AboutMe() {
  return (
    <section className="bg-[#F8FAFC] text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={Donya}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
          As a UX/UI Designer with a background in Industrial Design, I combine creativity and problem-solving to craft human-centered digital experiences. 
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
          I’m passionate about accessible, seamless design and thrive in collaborative environments that collaborative environments that foster innovation.
           I value clarity, precision, and thoughtful solutions that create real impact.
          </p>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 text-sm border-t border-gray-200 pt-6">
            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-medium text-gray-900">Tehran, Iran</p>
            </div>
            <div>
              <p className="text-gray-500">Experience</p>
              <p className="font-medium text-gray-900">2+ Years</p>
            </div>
            <div>
              <p className="text-gray-500">Focus</p>
              <p className="font-medium text-gray-900">Product & UX/UI</p>
            </div>
            <div>
              <p className="text-gray-500">Availability</p>
              <p className="font-medium text-gray-900">Open to projects</p>
            </div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}

//imdnfisdfhiusufuhsf
