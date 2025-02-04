import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-green-950 py-20 px-4">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>

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

      <div className="grid md:grid-cols-2 gap-8 px-6">
        {profileData.projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-green-800/70 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg transform transition-transform duration-300 p-4 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="flex-grow p-4 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-green-300 mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-500/30 text-green-500 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 justify-center">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-500 hover:text-green-400 transition-colors"
                  >
                    <span className="material-icons">launch</span> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-500 hover:text-green-400 transition-colors"
                  >
                    <span className="material-icons">code</span> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
