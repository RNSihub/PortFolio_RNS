import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold mb-10 text-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Education
        </motion.h1>

        <motion.ul
          className="space-y-6 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.li
            className="relative bg-green-600 hover:bg-green-500 transition-colors duration-300 p-6 rounded-lg shadow-xl transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">Bachelor of Engineering in Computer Science</h3>
            <p className="text-sm mt-2">XYZ University (2020-2024)</p>
            <motion.div
              className="absolute inset-0 w-full h-full bg-green-500/60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/path/to/your/certificate-image.jpg')`, // Replace with your certificate image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className="text-white font-semibold text-lg">View Certificate</p>
            </motion.div>
          </motion.li>

          <motion.li
            className="relative bg-green-600 hover:bg-green-500 transition-colors duration-300 p-6 rounded-lg shadow-xl transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">High School</h3>
            <p className="text-sm mt-2">ABC School (2018-2020)</p>
            <motion.div
              className="absolute inset-0 w-full h-full bg-green-500/60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/path/to/your/certificate-image.jpg')`, // Replace with your certificate image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className="text-white font-semibold text-lg">View Certificate</p>
            </motion.div>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Education;
