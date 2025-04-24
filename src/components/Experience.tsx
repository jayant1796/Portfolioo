import { Briefcase, Calendar } from 'lucide-react';
import { personalData } from '../data/personalData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
            <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {personalData.experience.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < personalData.experience.length - 1 && (
                <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li 
                      key={respIndex}
                      className="flex text-gray-700 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;