import React, { useState } from 'react';
import { Shield, Server, Search, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DDoS Simulator',
    period: 'Aug 2024 - Oct 2024',
    description: 'A sophisticated simulation tool designed to test network security by safely replicating various DDoS attack vectors and defense mechanisms.',
    technologies: ['Python', 'Socket Programming', 'Multi-threading', 'Network Protocols'],
    features: [
      'Simulates multiple DDoS attack types including SYN floods, UDP floods, HTTP floods',
      'Tests anti-DDoS defense mechanisms in controlled environments',
      'Implements scalable simulation capabilities to test varying loads',
      'Provides detailed analytics on network behavior during attacks'
    ],
    icon: <Shield className="text-red-600 dark:text-red-400" size={28} />,
    githubUrl: 'https://github.com/jayant1796/ddos-simulator',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'security'
  },
  {
    id: 2,
    title: 'Check5',
    period: 'July 2024 - Aug 2024',
    description: 'An automated vulnerability scanner for web applications that detects common security vulnerabilities and provides mitigation recommendations.',
    technologies: ['Python', 'Flask', 'BeautifulSoup', 'SQLAlchemy', 'JavaScript'],
    features: [
      'Detects SQL injection, XSS, and session hijacking vulnerabilities',
      'Generates comprehensive security reports with severity ratings',
      'Provides actionable remediation steps for identified vulnerabilities',
      'Features an intuitive web interface for scan configuration and management'
    ],
    icon: <Search className="text-blue-600 dark:text-blue-400" size={28} />,
    githubUrl: 'https://github.com/jayant1796/check5',
    imageUrl: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'security'
  },
  {
    id: 3,
    title: 'NTA Tool',
    period: 'June 2024 - July 2024',
    description: 'A real-time network traffic analyzer that monitors network activity, detects anomalies, and provides comprehensive traffic visualization.',
    technologies: ['Python', 'Pcap', 'D3.js', 'Machine Learning', 'WebSockets'],
    features: [
      'Real-time packet capture and protocol analysis',
      'Anomaly detection using statistical models and machine learning',
      'Interactive data visualization dashboards',
      'Custom alert system for suspicious network activities'
    ],
    icon: <Server className="text-purple-600 dark:text-purple-400" size={28} />,
    githubUrl: 'https://github.com/jayant1796/nta-tool',
    imageUrl: 'https://images.pexels.com/photos/4527437/pexels-photo-4527437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'security'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A selection of my recent projects showcasing my skills in cybersecurity, 
            web development, and software engineering.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('security')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'security' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Web Dev
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        {project.icon}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">{project.period}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-2 flex items-center text-sm font-medium text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-2 flex items-center text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;