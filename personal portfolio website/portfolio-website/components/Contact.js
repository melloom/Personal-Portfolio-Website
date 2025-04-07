import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Temporary form submission function until Formspree is set up
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Alert with form data (for testing only)
      alert(`Form submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\nTo enable actual form submission, please set up Formspree.`);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "Melvin.a.p.cruz@gmail.com",
      link: "mailto:Melvin.a.p.cruz@gmail.com"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      content: "Laurel, MD 20708",
      link: null
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      content: "667-200-9784",
      link: "tel:6672009784"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-light">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-600 dark:text-gray-300 hover:text-primary-light">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 lg:col-span-2"
          >
            {submitted ? (
              <div className="p-6 text-center">
                <h3 className="mb-4 text-xl font-semibold text-primary-light">Message Sent!</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                <div className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                  <p>For full functionality, set up a free Formspree account</p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
