"use client";
import React, { useState } from "react";
import { PROJECTS_INFO } from "@/constants";

const Projects = () => {
  const ProjectItem = ({ project, isExpanded, onToggle }) => {
    return (
      <div
        className={`mb-4 p-6 rounded-xl transition-all duration-300 ${isExpanded ? 'bg-green-50' : 'bg-gray-100 hover:bg-green-200'
          }`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <h2 className="text-xl font-bold md:text-2xl">{project.name}</h2>
          <span className="text-green-500 text-base md:text-lg">{String(project.id + 1).padStart(2, '0')}</span>
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600 mb-6 text-base md:text-lg">{project.summary}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col">
                <ul className="list-none space-y-4 text-gray-600 text-lg md:text-xl">
                  {project.text.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-green-500 w-6 h-6"> ➜ </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const [expandedId, setExpandedId] = useState(0);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">Our Projects</h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Discover our innovative projects that provided custom process engineering solutions,
              covering everything from design to lifecycle analysis,
              to enhance operational efficiency and offer valuable consultancy for your business needs
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 md:text-2xl">Key Highlights</h2>
            <ul className="space-y-2 text-base md:text-lg">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>User-centric approach</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Innovative solutions</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Scalable technologies</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          {PROJECTS_INFO.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
