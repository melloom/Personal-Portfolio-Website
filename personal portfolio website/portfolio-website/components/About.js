import { motion } from 'framer-motion';
import { FiDatabase, FiUsers, FiBarChart2, FiPhone } from 'react-icons/fi';

export default function About() {
  const skills = [
    { 
      name: 'Office & Systems', 
      icon: <FiDatabase className="w-8 h-8" />, 
      items: ['Microsoft Office Suite', 'CRM Systems', 'Data Entry', 'Call Center Systems'] 
    },
    { 
      name: 'Customer Service', 
      icon: <FiUsers className="w-8 h-8" />, 
      items: ['Claims Processing', 'Customer Relations', 'Problem-Solving', 'Active Listening'] 
    },
    { 
      name: 'Sales & Business', 
      icon: <FiBarChart2 className="w-8 h-8" />, 
      items: ['Outbound Sales', 'Lead Generation', 'Business Administration', 'Team Management'] 
    },
    { 
      name: 'Communication', 
      icon: <FiPhone className="w-8 h-8" />, 
      items: ['Time Management', 'Attention to Detail', 'Team Collaboration', 'Sales & Persuasion'] 
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
            Experienced professional with expertise in customer service, claims processing, and sales development. 
            I've worked with leading organizations like Kaiser Permanente, Element Fleet Management, and the 
            Baltimore City Health Department, delivering exceptional results in fast-paced environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 transition-shadow bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 mb-4 text-white rounded-full bg-primary-light">
                  {skill.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold">{skill.name}</h3>
                <ul className="space-y-2 text-center text-gray-600 dark:text-gray-300">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
