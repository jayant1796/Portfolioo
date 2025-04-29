import React from 'react';
import { BookOpen, Code, ShieldAlert, Users, Brain, Cpu } from 'lucide-react';

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 hover:shadow-lg">
      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Currently pursuing B.Tech in Computer Science and Engineering with a passion for solving complex security challenges, 
            web development, and building scalable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutCard 
            icon={<ShieldAlert className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Cybersecurity Specialist"
            description="Passionate about identifying and solving security vulnerabilities in web applications and network systems."
          />
          <AboutCard 
            icon={<Code className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Web Developer"
            description="Experience in creating responsive and user-friendly web interfaces using modern technologies and frameworks."
          />
          <AboutCard 
            icon={<BookOpen className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Continuous Learner"
            description="Always exploring new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape."
          />
          <AboutCard 
            icon={<Users className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Team Player"
            description="Strong collaboration skills with experience working in diverse teams to achieve common goals and objectives."
          />
          <AboutCard 
            icon={<Brain className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Problem Solver"
            description="Analytical thinker with a knack for breaking down complex problems and finding efficient solutions."
          />
          <AboutCard 
            icon={<Cpu className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Innovation Driven"
            description="Constantly looking for innovative approaches to improve security measures and development practices."
          />
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                <p className="font-medium text-gray-800 dark:text-white">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400">Current</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Specializing in Cybersecurity and Web Development
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Interests</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                  Solving complex security challenges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                  Web development and UI/UX design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                  Building scalable and secure systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                  Participating in CTF competitions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
                  Exploring new technologies and frameworks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;