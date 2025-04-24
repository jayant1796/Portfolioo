import { Trophy } from 'lucide-react';
import { personalData } from '../data/personalData';

const Competitions = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-orange-100 dark:bg-orange-900 rounded-lg mb-4">
            <Trophy className="text-orange-600 dark:text-orange-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Competitive Programming & Hackathons
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {personalData.competitions.map((comp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden mb-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
                    {comp.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 text-sm font-medium">
                    {comp.achievement}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {comp.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 italic">
              Always looking for new challenges and opportunities to showcase my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;