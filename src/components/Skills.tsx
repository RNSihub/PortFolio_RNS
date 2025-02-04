import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-r from-green-700 to-green-900"
    >
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-8 px-6">
        {profileData.skills.map((category) => (
          <motion.div
            key={category.category}
            className="bg-green-800/60 rounded-xl p-6 backdrop-blur-sm shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <motion.h3
              className="text-xl font-semibold text-green-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {category.category}
            </motion.h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <motion.div
                    className="h-2 bg-green-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
