import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  // Instructions for starting the project
  const startupInstructions = {
    setup: [
      "1. Open command prompt/terminal and navigate to the project folder",
      "2. Run 'npm install' to install all dependencies",
      "3. Run 'npm run dev' to start the development server",
      "4. Open http://localhost:3000 in your browser"
    ],
    contactForm: [
      "To enable the contact form, consider one of these options:",
      "1. Sign up at formspree.io for a free account",
      "2. Update the Contact.js component with your Formspree ID",
      "3. Or use the temporary email alert solution already implemented"
    ],
    deployment: [
      "When ready to deploy:",
      "1. Run 'npm run build' to create an optimized production build",
      "2. Deploy to Vercel by installing Vercel CLI and running 'vercel' command",
      "3. Or deploy to Netlify by connecting your GitHub repository"
    ]
  };

  // Remove these console logs before deployment
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log("✅ PORTFOLIO SETUP INSTRUCTIONS:");
    console.log(startupInstructions.setup.join("\n"));
    console.log("\n📧 CONTACT FORM SETUP:");
    console.log(startupInstructions.contactForm.join("\n"));
    console.log("\n🚀 DEPLOYMENT INSTRUCTIONS:");
    console.log(startupInstructions.deployment.join("\n"));
  }

  return (
    <>
      <Head>
        <title>Melvin Peralta | Professional Portfolio</title>
        <meta name="description" content="Professional portfolio of Melvin Peralta, showcasing experience in customer service, sales, and technical solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
}
