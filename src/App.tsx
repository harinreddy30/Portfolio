import React, { useState } from 'react';
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaTerminal
} from 'react-icons/fa';

import { TbBrandNextjs } from 'react-icons/tb';

import {
  SiMongodb,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiVite,
  SiSpring,
  SiGraphql,
  SiPostman,
  SiCss3,
  SiHtml5,
  SiSwift
} from 'react-icons/si';

import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  FileText, 
  Mail, 
  Github, 
  Linkedin,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Target,
  Code,
  Heart
} from 'lucide-react';

function App() {
  type skills = {
    title: string;
    icon: React.ComponentType;
  };

  const skills = [
    { title: 'MongoDB', icon: SiMongodb },
    { title: 'SQL', icon: SiMysql },
    { title: 'GraphQL', icon: SiGraphql },
    { title: 'Node.js', icon: FaNodeJs },
    { title: 'NestJS', icon: SiNestjs },
    { title: 'PostgreSQL', icon: SiPostgresql },
    { title: 'Docker', icon: FaDocker },
    { title: 'Tailwind CSS', icon: SiTailwindcss },
    { title: 'JavaScript', icon: SiJavascript },
    { title: 'TypeScript', icon: SiTypescript },
    { title: 'Python', icon: FaPython },
    { title: 'Java', icon: FaJava },
    { title: '.NET', icon: SiDotnet },
    { title: 'Postman', icon: SiPostman },
    { title: 'PHP', icon: FaPhp },
    { title: 'CSS', icon: SiCss3 },
    { title: 'HTML', icon: SiHtml5 },
    { title: 'Swift', icon: SiSwift },
    { title: 'Linux', icon: FaLinux },
    { title: 'Bash', icon: FaTerminal },
    { title: 'Git', icon: FaGitAlt }
  ];

  const [activeSection, setActiveSection] = useState('personal');

  const navigationItems = [
    { id: 'personal', label: 'Personal Data', icon: User },
    { id: 'academic', label: 'Academic Credentials', icon: GraduationCap },
    { id: 'experience', label: 'Academic Work', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-indigo-600 transition-transform duration-300 hover:scale-105">
              Your Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              {navigationItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`py-2 px-3 ${
                    activeSection === id
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  } transition-colors duration-300`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/harinreddy30" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/harin-reddy-ramasani-330ab9326/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:harinreddy.can@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        {/* Personal Data Section */}
        <section className={activeSection === 'personal' ? 'block' : 'hidden'}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Bio */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <User className="mr-2" /> Bio
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <img
                    src="/profile.jpg"
                    alt="Professional headshot"
                    className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 ring-4 ring-indigo-100"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Harin Reddy Ramasani</h3>
                    <p className="text-gray-600 mb-4">
                      Computer Programming and Analysis student at George Brown College with a proven track record of academic excellence, consistently making the Dean’s Honour List each semester. Experienced peer tutor, passionate about empowering others through technical guidance and problem-solving. Skilled in full-stack development, database management, and AI strategies, with hands-on expertise in project-based learning.
                    </p>
                    <p className="text-gray-600 mb-4">
                      I thrive in collaborative environments and am eager to contribute my knowledge to innovative projects in the ever-evolving tech landscape.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {skills.map(({ title, icon: Icon }) => (
                        <div
                          key={title}
                          className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm transition-colors duration-300 hover:bg-indigo-200"
                        >
                          <Icon className="w-5 h-5" />
                          <span>{title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Philosophy */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="mr-2" /> Career Philosophy
                </h2>
                <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600 mb-6">
                  "We are the facilitators of our own creative evolution" - Bill Hicks
                </blockquote>
                <p className="text-gray-600 mb-4">
                  As a developer, I believe in the power of technology to transform and improve lives. My work is driven by 
                  the desire to create solutions that not only solve technical challenges but also enhance human experiences. 
                  Drawing from my background in computer science and years of practical experience, I strive to bridge the gap 
                  between complex technical systems and user-friendly applications.
                </p>
                <p className="text-gray-600">
                  Looking ahead, I aim to continue pushing the boundaries of what's possible in web development while mentoring 
                  the next generation of developers. My goal is to contribute to projects that make a meaningful impact on society 
                  while maintaining the highest standards of code quality and user experience.
                </p>
              </div>

              {/* Resume & Cover Letter */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <FileText className="mr-2" /> Resume
                  </h2>
                  <a 
                    href="/assets/certifications/Resume.pdf"
                    download="Resume.pdf"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
                  >
                    Download Resume <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <FileText className="mr-2" /> Cover Letter
                  </h2>
                  <a 
                    href="/assets/certifications/CV.pdf"
                    download="CV.pdf"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
                  >
                    View Cover Letter <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Credentials Section */}
        <section className={activeSection === 'academic' ? 'block' : 'hidden'}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Academic Achievements */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <GraduationCap className="mr-2" /> Academic Achievements
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="text-xl font-semibold">Advanced Diploma in Computer Programming</h3>
                    <p className="text-gray-600">George Brown College, 2022-2025</p>
                    <p className="text-gray-500">GPA: 3.89/4.0</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition duration-300 hover:shadow-xl">
                <Certifications />
              </div>
            </div>
          </div>
        </section>

        {/* Academic Work Experience Section */}
        <section className={activeSection === 'experience' ? 'block' : 'hidden'}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:shadow-xl">
                <Experience />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Harin Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
