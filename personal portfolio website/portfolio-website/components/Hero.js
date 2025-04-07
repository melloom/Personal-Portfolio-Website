import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="flex items-center min-h-screen pt-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I'm <span className="text-primary-light">Melvin Peralta</span>
            </motion.h1>
            <motion.p 
              className="mb-8 text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Experienced Customer Service & Claims Specialist with expertise in fleet insurance, sales, and tech solutions
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="#projects" className="btn-primary">View Projects</Link>
              <div className="flex gap-2">
                <Link 
                  href="/resume" 
                  className="px-6 py-3 font-semibold transition-colors border-2 rounded-lg border-primary-light text-primary-light hover:bg-primary-light hover:text-white"
                >
                  View Resume
                </Link>
                <Link 
                  href="/tech-resume" 
                  className="px-6 py-3 font-semibold text-white transition-colors border-2 rounded-lg bg-primary-light border-primary-light hover:bg-transparent hover:text-primary-light"
                >
                  Tech Resume
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="order-first md:order-last"
          >
            <div className="relative mx-auto overflow-hidden rounded-full w-72 h-72 md:w-96 md:h-96">
              <img 
                src="/profile.jpg" 
                alt="Melvin Peralta" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x400.png?text=Melvin+Peralta";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
