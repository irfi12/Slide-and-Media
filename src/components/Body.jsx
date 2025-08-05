import React from 'react';
import { motion } from 'framer-motion';
import bgImg from '../assets/bg-img.jpg';

const Body = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div 
        className="relative bg-cover bg-center text-white py-20 px-4 sm:py-32 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Welcome to Slide & Media Studio
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl"
          >
            Your one-stop solution for creative and professional media services. We bring your ideas to life.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Body;
