import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const profileData = {
  skills: [
    {
      category: 'Full Stack Development',
      items: [
        { name: 'React', proficiency: 90 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'MongoDB', proficiency: 80 },
        { name: 'Express.js', proficiency: 75 },
      ],
    },
    {
      category: '2D Gaming',
      items: [
        { name: 'Unity', proficiency: 70 },
        { name: 'C#', proficiency: 75 },
        { name: 'Game Design', proficiency: 80 },
      ],
    },
    {
      category: 'Software Testing',
      items: [
        { name: 'Selenium', proficiency: 85 },
        { name: 'JUnit', proficiency: 80 },
        { name: 'Automation Testing', proficiency: 78 },
      ],
    },
    {
      category: 'UI & UX',
      items: [
        { name: 'Figma', proficiency: 90 },
        { name: 'Adobe XD', proficiency: 85 },
        { name: 'User Research', proficiency: 80 },
      ],
    },
    {
      category: 'Gen AI & Machine Learning',
      items: [
        { name: 'TensorFlow', proficiency: 75 },
        { name: 'PyTorch', proficiency: 70 },
        { name: 'NLP', proficiency: 80 },
        { name: 'Computer Vision', proficiency: 78 },
      ],
    },
  ],
};

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-green-950 py-20 px-4">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-green-800 opacity-30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          background: [
            'linear-gradient(135deg, #064e3b, #10b981)',
            'linear-gradient(135deg, #10b981, #059669)',
            'linear-gradient(135deg, #059669, #064e3b)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-56 h-56 bg-green-400 rounded-full opacity-30"
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-48 h-48 bg-green-500 rounded-full opacity-20"
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.skills.map((category) => (
            <motion.div
              key={category.category}
              className="bg-white/10 rounded-xl p-6 backdrop-blur-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
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
      </div>
    </div>
  );
};

export default Skills;
