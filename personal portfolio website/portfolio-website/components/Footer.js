import { FiGithub, FiLinkedin, FiTwitter, FiCodepen } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FiCodepen />, url: "https://codepen.io/yourusername" }
  ];

  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label={`Visit my ${link.url.split('.com/')[0].split('//')[1]} profile`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
