import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-4xl font-extrabold text-[#697328] mb-4"  style={{
              fontFamily: "Dancing Script, Brush Script MT, cursive",
            }}>
            About Our Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of creators, designers, and storytellers dedicated to delivering high-quality media solutions with impact and elegance.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {[{
            title: "Our Mission",
            description: "To empower individuals and businesses with compelling visual content that communicates their message effectively and leaves a lasting impression.",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12h18" />
            )
          }, {
            title: "Our Vision",
            description: "To be a leading provider of innovative and accessible media services, recognized for our creativity, quality, and commitment to client success.",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            )
          }].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#697328] text-white hover:scale-110 transition-transform">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
