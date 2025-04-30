import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
          Jayant<span className="text-blue-600 dark:text-blue-400">   Kumar</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/jayant1796" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/jayant-kumar1796" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            fixed inset-0 z-50 bg-white dark:bg-gray-900 pt-24 px-6 transition-transform duration-300 ease-in-out transform 
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
            md:hidden
          `}
        >
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-xl font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex space-x-6">
            <a 
              href="https://github.com/jayant1796" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/jayant-kumar1796" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jayantchoudhary1414@gmail.com" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;