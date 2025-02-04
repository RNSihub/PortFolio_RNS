import React from 'react';
import { motion } from 'framer-motion';

const Internships: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Hi, I'm Sanjay N, a passionate software developer with expertise in React, Node.js, and Python.
          I love building scalable web applications and solving complex problems.
        </p>
      </div>
    </motion.section>
  );
};

export default Internships;