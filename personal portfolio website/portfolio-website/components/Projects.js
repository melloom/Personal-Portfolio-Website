import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Booking System",
      description: "A comprehensive booking system for scheduling appointments and managing reservations.",
      image: "/projects/booking-system.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://booking-system-demo.com",
      github: "https://github.com/yourusername/booking-system",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with product management, cart, and payment processing.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization.",
      image: "/projects/dashboard.jpg",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      demo: "https://dashboard-demo.com",
      github: "https://github.com/yourusername/dashboard"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Productivity app for organizing tasks, setting deadlines, and tracking progress.",
      image: "/projects/task-app.jpg",
      technologies: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
      demo: "https://task-app-demo.com",
      github: "https://github.com/yourusername/task-app"
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleProjects(projects.length)}
              className="btn-primary"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
