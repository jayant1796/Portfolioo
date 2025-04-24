import { useState } from 'react';
import { Code, Terminal, Tool, Users } from 'lucide-react';
import { personalData } from '../data/personalData';

const skillCategories = [
  { id: 'languages', icon: <Code size={20} />, label: 'Languages' },
  { id: 'frameworks', icon: <Terminal size={20} />, label: 'Frameworks' },
  { id: 'tools', icon: <Tool size={20} />, label: 'Tools' },
  { id: 'softSkills', icon: <Users size={20} />, label: 'Soft Skills' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
            <Code className="text-purple-600 dark:text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 mb-2 rounded-full transition-all duration-200 
                ${activeCategory === category.id 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'}`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {personalData.skills[activeCategory as keyof typeof personalData.skills].map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="mb-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${85 + Math.floor(Math.random() * 16)}%` }}
                  ></div>
                </div>
                <p className="font-medium text-gray-800 dark:text-gray-200">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;