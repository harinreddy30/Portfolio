import React from "react";
import { Code, BookOpen, ExternalLink, Download } from "lucide-react";

// Define the structure for projects
interface CapstoneFile {
  name: string;
  file: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
}

const capstoneFiles: CapstoneFile[] = [
  { name: "Project Summary", file: "/project_summary.docx" },
  { name: "Project Vision", file: "/project_vision.docx" },
  { name: "Project/Business Requirement", file: "/Requirements_Analysis_Design.docx" },
  { name: "Project Plan", file: "/Project_Plan.docx" },
  { name: "Requirement Analysis and Design", file: "/Requirements_Analysis_Design.docx" },
  { name: "Figma Wireframes", file: "https://www.figma.com/design/qNMGxyYU0z3mR1Q3DOXkSC/ShiftSmart?m=auto&t=4jZNkIYSHGtsvKDo-6" },
  { name: "Figma Prototype", file: "https://www.figma.com/proto/qNMGxyYU0z3mR1Q3DOXkSC?node-id=116-13899&t=4jZNkIYSHGtsvKDo-6" },
  { name: "Status Reports", file: "/Status_Reports.docx" },
];

const academicProjects: Project[] = [
  {
    title: "Employee Management System (GraphQL API)",
    description: "A GraphQL-based Employee Management System with authentication, CRUD operations, and secure authorization.",
    technologies: ["Node.js", "Express.js", "GraphQL", "MongoDB", "Mongoose", "JWT"],
    github: "https://github.com/harinreddy30/COMP3133_101425325_Assignment01",
    image: "https://techrseries.com/wp-content/uploads/2022/11/Key-Characteristics-of-an-Effective-Employee-Management-System.jpg",
  },
  {
    title: "Event Booking Management (Java Spring Boot)",
    description: "A web-based event booking system built with Java and Spring Boot, featuring microservices architecture and RESTful APIs.",
    technologies: ["Java", "Spring Boot", "Microservices", "REST API", "Docker"],
    github: "https://github.com/harinreddy30/Assignment1-COMP095/tree/main",
    image: "https://www.eventbookings.com/wp-content/uploads/2024/01/eb-logo-1200x675-1.jpg",
  },
  {
    title: "Travel Booking Management System (.NET)",
    description: "A .NET-based travel booking system that allows users to book flights, hotels, and manage their travel itineraries with real-time updates.",
    technologies: [".NET Core", "C#", "SQL Server", "Entity Framework", "REST API"],
    github: "https://github.com/harinreddy30/COMP2139-2024/tree/main/GBC_Travel-Group-54",
    image: "https://ik.imagekit.io/travelsoftwares/otrams/wp-content/uploads/2023/03/everything-you-need-to-know-travel-booking-engine.jpg",
  },
  {
    title: "ShiftSmart - Worker Scheduling System",
    description: "A MERN stack application that streamlines shift management, payroll, and analytics.",
    technologies: ["MERN", "Postman", "Socket.IO"],
    github: "https://github.com/harinreddy30/capstone-frontend",
    image: "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/time/web/graphic-elements/screen-shots/time-tracking-scheduling-app.png",
  },
  {
    title: "ShiftSmart Punch (iOS, Swift)",
    description: "An iOS application that allows employees to clock in and out with location tracking, authentication, and schedule management integrated with ShiftSmart.",
    technologies: ["Swift", "iOS", "CoreLocation", "Firebase Auth", "ShiftSmart API"],
    github: "https://github.com/harinreddy30/ShiftSmart-Punch",
    image: "https://repository-images.githubusercontent.com/301532995/4b7c4400-3e46-11eb-8b58-3b72a346dee0",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Capstone Project */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10 transition duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg shadow-md">
            <Code className="mr-2 text-white" /> Capstone Project
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">ShiftSmart - Worker Scheduling System</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            ShiftSmart is a full-stack worker scheduling application built with React, Node.js, Express, and MongoDB.
            It supports real-time shift tracking, payroll analytics, and dynamic role-based operations.
          </p>
          <div className="flex flex-wrap gap-3">
            {["React", "MongoDB", "Node.js", "Express", "Postman", "Socket.IO"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Capstone Files - Download Links */}
          <div className="mt-6">
            {capstoneFiles.map((file, index) => (
              <div key={index} className="mt-2">
                {file.file.includes("figma.com") ? (
                  <a href={file.file} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium transition">
                    <ExternalLink className="mr-2" size={16} />
                    {file.name}
                  </a>
                ) : (
                  <a href={file.file} download className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium transition">
                    <Download className="mr-2" size={16} />
                    {file.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic Projects Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 transition duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg shadow-md">
            <BookOpen className="mr-2 text-white" /> Academic Work Samples
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:border-indigo-500">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">{project.title}</h3>
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4 shadow-sm" />
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium transition hover:scale-105">
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
