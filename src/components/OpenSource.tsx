import { GitBranch } from 'lucide-react';
import { personalData } from '../data/personalData';

const OpenSource = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
            <GitBranch className="text-gray-600 dark:text-gray-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Open Source Contributions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {personalData.openSource}
            </p>
            
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full">
              <GitBranch className="text-gray-800 dark:text-gray-200" size={32} />
            </div>
            
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Follow my GitHub to stay updated with my latest contributions and projects.
            </p>
            
            <a 
              href={`https://${personalData.contact.github}`} 
              className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors md:py-4 md:text-lg md:px-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;