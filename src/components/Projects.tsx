import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-r from-green-700 to-green-900"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 px-6">
        {profileData.projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10 }}
            className="bg-green-800/50 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg transform transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-green-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
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
    </motion.section>
  );
};

export default Projects;
