import { personalData } from '../data/personalData';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
            <User className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/3 lg:w-2/5">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-blue-500 to-teal-500 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <span className="text-6xl font-bold">JK</span>
                  <div className="mt-2 text-sm font-medium">Cybersecurity & Web Development</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/5">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {personalData.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">B.Tech in Computer Science and Engineering</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interests</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Cybersecurity</li>
                  <li>Web Development</li>
                  <li>Scalable Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;