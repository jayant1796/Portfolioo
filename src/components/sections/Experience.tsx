import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Front-End Developer Intern',
    company: 'Tulip Dsign',
    location: 'Remote',
    period: 'Mar 2024 - May 2024',
    description: 'Worked on developing responsive and visually appealing websites for various clients, focusing on user experience and performance optimization.',
    responsibilities: [
      'Developed and maintained responsive websites using HTML, CSS, and JavaScript',
      'Implemented SEO best practices to improve website visibility and ranking',
      'Optimized website performance by reducing load times and enhancing user experience',
      'Collaborated with design and backend teams to implement new features and functionalities'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO', 'Performance Optimization']
  }
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{experience.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300">
            {experience.period}
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{experience.location}</span>
          <span className="mx-2">•</span>
          <Calendar size={16} className="mr-1" />
          <span>{experience.period}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 mr-2"></div>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            My professional journey and work experience in the tech industry.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-blue-200 dark:bg-blue-900 transform md:translate-x-px"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 shadow-lg transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                
                {/* Card positioning */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-8 md:ml-0' : 'md:pl-12 ml-8 md:ml-auto'}`}>
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Future/Open position */}
          <div className="relative mt-12">
            <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">+</span>
            </div>
            
            <div className="md:w-1/2 md:pl-12 ml-8 md:ml-auto">
              <div className="bg-gray-100 dark:bg-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Open to New Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently looking for internships and opportunities in Cybersecurity and Web Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;