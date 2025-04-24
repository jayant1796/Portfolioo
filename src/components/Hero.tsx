import { ChevronDown } from 'lucide-react';
import { personalData } from '../data/personalData';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMzAgNWwxLjUgMS41TTUgMzBsMS41IDEuNU0zMCA1NWwxLjUgLTEuNU01NSAzMGwxLjUgLTEuNSIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            {personalData.name}
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-delayed">
          {personalData.title}
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-delayed-more">
          {personalData.summary}
        </p>
        
        <div className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            aria-label="Scroll to about section"
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;