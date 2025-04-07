import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '/resume', text: 'Resume' },
    { href: '/tech-resume', text: 'Tech Resume' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Melvin Peralta
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              href={link.href} 
              key={link.href}
              className="text-gray-700 hover:text-primary-light dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {link.text}
            </Link>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800"
            aria-label="Open menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                href={link.href} 
                key={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-primary-light dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
