import { Award, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personalData';

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg mb-4">
            <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Certifications & Courses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalData.certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Award className="text-white" size={28} />
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 dark:text-gray-300">{cert.issuer}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <a 
                  href={cert.link} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;