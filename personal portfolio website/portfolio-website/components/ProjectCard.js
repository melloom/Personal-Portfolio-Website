import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/640x360.png?text=Project+Image";
          }}
        />
        {project.featured && (
          <div className="absolute top-0 right-0 px-3 py-1 m-2 text-xs font-semibold text-white bg-primary-light rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
        
        <div className="flex flex-wrap mb-4 gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs text-white rounded-full bg-primary-light"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-light hover:underline"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary-light hover:underline"
            >
              <FiGithub className="mr-1" /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
