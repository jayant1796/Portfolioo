import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  badgeColor: string;
}

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  result: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Network Traffic Analyzer',
    issuer: 'IBM',
    date: 'July 2024',
    credentialId: 'NTA-2024-JK789',
    credentialUrl: 'https://www.coursera.org/account/accomplishments',
    skills: ['Wireshark', 'TCP/IP', 'Network Security', 'Packet Analysis'],
    badgeColor: 'from-blue-500 to-blue-700'
  },
  {
    id: 2,
    title: 'Introduction to Cyber Security',
    issuer: 'Coursera',
    date: 'May 2024',
    credentialId: 'CS-2024-JK456',
    credentialUrl: 'https://www.coursera.org/account/accomplishments',
    skills: ['Security Fundamentals', 'Threat Detection', 'Risk Assessment'],
    badgeColor: 'from-purple-500 to-purple-700'
  },
  {
    id: 3,
    title: 'Mastering Data Structures & Algorithms',
    issuer: 'Udemy',
    date: 'November 2023',
    credentialId: 'DSA-2023-JK123',
    credentialUrl: 'https://www.udemy.com/certificate/',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Time Complexity'],
    badgeColor: 'from-green-500 to-green-700'
  }
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'PicoCTF 2025',
    organization: 'picoCTF',
    date: 'April 2025',
    description: 'Participated in this prestigious global cybersecurity competition focused on web exploitation, cryptography, binary exploitation, and reverse engineering.',
    result: 'Global Rank: 437',
   
  }
  
];

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
      <div className={`h-2 bg-gradient-to-r ${certification.badgeColor}`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{certification.title}</h3>
          <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar size={14} className="mr-1" />
            {certification.date}
          </span>
        </div>
        
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{certification.issuer}</p>
        
        {certification.credentialId && (
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-medium">Credential ID:</span> {certification.credentialId}
          </div>
        )}
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {certification.credentialUrl && (
          <a 
            href={certification.credentialUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Verify Credential
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{achievement.title}</h3>
            <p className="text-blue-600 dark:text-blue-400">{achievement.organization}</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 rounded-full px-3 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-300">
            {achievement.date}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {achievement.description}
        </p>
        
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 text-center">
          <p className="font-medium text-gray-800 dark:text-white">{achievement.result}</p>
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Professional certifications and notable achievements in competitions and hackathons.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <Award className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map(certification => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <Award className="text-yellow-600 dark:text-yellow-400 mr-2" size={24} />
            Competitions & Hackathons
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map(achievement => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
            
            <div className="bg-gray-100 dark:bg-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">More Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Actively participating in cybersecurity competitions and hackathons to enhance skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;