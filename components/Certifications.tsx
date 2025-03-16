import React from "react";
import { FileText, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuedBy: string;
  date: string;
  skills: string;
  file: string;
}

interface DeansLetter {
  title: string;
  file: string;
}

const certifications: Certification[] = [
  {
    title: "Certificate of Training & Project Completion",
    issuedBy: "Qbits Learning",
    date: "Feb 2025",
    skills: "MongoDB, Express.js, React.js, Node.js, Postman API, Git",
    file: "/assets/certificates/training_project.pdf",
  },
  {
    title: "Programming in C# Certification",
    issuedBy: "Sololearn",
    date: "Aug 2023",
    skills: "C#",
    file: "/assets/certificates/csharp.pdf",
  },
  {
    title: "Programming in HTML5 with JavaScript",
    issuedBy: "Sololearn",
    date: "Aug 2023",
    skills: "JavaScript, HTML5, CSS",
    file: "/assets/certificates/javascript.pdf",
  },
  {
    title: "SQL Certification",
    issuedBy: "Sololearn",
    date: "Aug 2023",
    skills: "SQL",
    file: "/assets/certificates/sql.pdf",
  },
];

const deansLetters: DeansLetter[] = [
  { title: "Dean’s Honour List - Term 1", file: "/assets/dean_letters/dean_letter1.pdf" },
  { title: "Dean’s Honour List - Term 2", file: "/assets/dean_letters/dean_letter2.pdf" },
  { title: "Dean’s Honour List - Term 3", file: "/assets/dean_letters/dean_letter3.pdf" },
  { title: "Dean’s Honour List - Term 4", file: "/assets/dean_letters/dean_letter4.pdf" },
  { title: "Dean’s Honour List - Term 5", file: "/assets/dean_letters/dean_letter5.pdf" },
];

const Certifications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10">
        {/* Header */}
        <header className="mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 flex items-center">
            🎓 Certifications & Awards
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            A showcase of my achievements and certifications.
          </p>
        </header>

        {/* Certifications Section */}
        <section>
          <h3 className="text-3xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-6">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl bg-white hover:bg-white/95 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-indigo-500"
                tabIndex={0}
              >
                <h4 className="text-xl font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-gray-600 mt-2 flex items-center">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                    {cert.issuedBy}
                  </span>
                  <span className="ml-3 text-base text-gray-500">({cert.date})</span>
                </p>
                <p className="text-base text-gray-700 mt-3">
                  <strong>Skills:</strong> {cert.skills}
                </p>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-base font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <FileText className="mr-2" size={20} />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Dean's Honour List Section */}
        <section className="mt-12">
          <h3 className="text-3xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-6">
            Dean's Honour List
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {deansLetters.map((letter, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl bg-white hover:bg-white/95 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-indigo-500"
                tabIndex={0}
              >
                <h4 className="text-xl font-semibold text-gray-800">{letter.title}</h4>
                <a
                  href={letter.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-base font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <ExternalLink className="mr-2" size={20} />
                  View Letter
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
