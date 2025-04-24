import { Heart } from 'lucide-react';
import { personalData } from '../data/personalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Jayant Kumar
            </h2>
            <p className="mt-2 text-gray-400 max-w-md">
              Cybersecurity & Web Development Specialist
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${personalData.contact.email}`} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <a 
              href={`https://${personalData.contact.linkedin}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={`https://${personalData.contact.github}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Jayant Kumar. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Back to top
            </button>
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-gray-400 text-sm flex items-center">
              Built with <Heart size={14} className="mx-1 text-red-500" /> and React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;