import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, ShieldAlert, FileCode } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'Cybersecurity Specialist & Web Developer';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-7/12 mb-10 md:mb-0">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Jayant Kumar
            </h1>
            <div className="h-8">
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                {text}
                <span className={`inline-block w-1 h-6 bg-blue-600 ml-1 ${isComplete ? 'animate-pulse' : 'animate-blink'}`}></span>
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
              A passionate B.Tech CSE student with expertise in solving complex security challenges,
              web development, and building scalable systems. Currently focused on cybersecurity research
              and creating secure web applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center"
              >
                View Projects
                <Code className="ml-2" size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white font-medium rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="src\components\Layout\cv.pdf" 
                download="JayantKumar_Resume.pdf"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors flex items-center"
              >
                Download CV
                <FileCode className="ml-2" size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center">
            {/* <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 dark:opacity-20 animate-pulse-slow"></div>
              <div className="absolute top-0 right-0 -mr-4 -mt-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center transform rotate-12 shadow-lg">
                  <ShieldAlert className="text-blue-600 dark:text-blue-400" size={48} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 -ml-4 -mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center transform -rotate-12 shadow-lg">
                  <Code className="text-purple-600 dark:text-purple-400" size={48} />
                </div>
              </div>
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 border-8 border-white dark:border-gray-800 shadow-xl overflow-hidden flex items-center justify-center">
                <div className="text-6xl font-bold text-gray-400 dark:text-gray-500">JK</div>
              </div>
            </div> */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 dark:opacity-20 animate-pulse-slow"></div>

  <div className="absolute top-0 right-0 -mr-4 -mt-4">
    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center transform rotate-12 shadow-lg">
      <ShieldAlert className="text-blue-600 dark:text-blue-400" size={48} />
    </div>
  </div>

  <div className="absolute bottom-0 left-0 -ml-4 -mb-4">
    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center transform -rotate-12 shadow-lg">
      <Code className="text-purple-600 dark:text-purple-400" size={48} />
    </div>
  </div>

  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 border-8 border-white dark:border-gray-800 shadow-xl overflow-hidden flex items-center justify-center">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQFhedbH5p4HZA/profile-displayphoto-shrink_400_400/B56ZaGWS6pHsAk-/0/1746010714973?e=1751500800&v=beta&t=c2zLdXNcK16rNq0cFTb_g88FuS4mzIgqPkP_OrNghJ4"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="text-blue-600 dark:text-blue-400" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;