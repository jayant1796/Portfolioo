import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Shield, Users, Lightbulb } from 'lucide-react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color, delay = 0, inView }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (inView) {
      timeoutId = setTimeout(() => {
        setWidth(percentage);
      }, delay);
    } else {
      setWidth(0);
    }
    
    return () => clearTimeout(timeoutId);
  }, [percentage, delay, inView]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; percentage: number; color: string }>;
  inView: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, inView }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <div>
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
            delay={index * 100}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const programmingSkills = [
    { name: 'Python', percentage: 90, color: 'bg-blue-600' },
    { name: 'C/C++', percentage: 85, color: 'bg-blue-500' },
    { name: 'Java', percentage: 80, color: 'bg-blue-600' },
    { name: 'JavaScript', percentage: 85, color: 'bg-blue-500' },
  ];
  
  const webSkills = [
    { name: 'HTML/CSS', percentage: 90, color: 'bg-purple-600' },
    { name: 'Bootstrap', percentage: 85, color: 'bg-purple-500' },
    { name: 'Responsive Design', percentage: 80, color: 'bg-purple-600' },
    { name: 'SEO', percentage: 75, color: 'bg-purple-500' },
  ];
  
  const securitySkills = [
    { name: 'Metasploit', percentage: 85, color: 'bg-red-600' },
    { name: 'Burp Suite', percentage: 90, color: 'bg-red-500' },
    { name: 'Wireshark', percentage: 80, color: 'bg-red-600' },
    { name: 'Nmap/Sqlmap', percentage: 85, color: 'bg-red-500' },
  ];
  
  const softSkills = [
    { name: 'Leadership', percentage: 85, color: 'bg-green-600' },
    { name: 'Problem-Solving', percentage: 90, color: 'bg-green-500' },
    { name: 'Communication', percentage: 80, color: 'bg-green-600' },
    { name: 'Project Management', percentage: 75, color: 'bg-green-500' },
  ];
  
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A diverse skill set spanning programming languages, web development, cybersecurity tools, and soft skills
            that enable me to tackle complex challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Programming Languages"
            icon={<Code className="text-blue-600 dark:text-blue-400" size={24} />}
            skills={programmingSkills}
            inView={isInView}
          />
          <SkillCategory 
            title="Web Development"
            icon={<Server className="text-purple-600 dark:text-purple-400" size={24} />}
            skills={webSkills}
            inView={isInView}
          />
          <SkillCategory 
            title="Security Tools"
            icon={<Shield className="text-red-600 dark:text-red-400" size={24} />}
            skills={securitySkills}
            inView={isInView}
          />
          <SkillCategory 
            title="Soft Skills"
            icon={<Users className="text-green-600 dark:text-green-400" size={24} />}
            skills={softSkills}
            inView={isInView}
          />
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">Technical Expertise</h3>
              <Database size={24} />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Database Management
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Network Analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                System Administration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Cloud Technologies
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">Security Focus</h3>
              <Shield size={24} />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Vulnerability Assessment
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Penetration Testing
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Security Auditing
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Incident Response
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-700 dark:from-green-600 dark:to-green-900 rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">Additional Skills</h3>
              <Lightbulb size={24} />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Technical Documentation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Research & Analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Agile Methodologies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Team Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;