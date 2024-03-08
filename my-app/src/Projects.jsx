import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: "Game Launch Page",
      description: "A Game Launch Page using React, blending dynamic visual effects, interactive forms, and a countdown timer for engaging user experience.",
      technologies: ["HTML", "CSS", "Javascript", "React"],
      githubLink: "https://github.com/tran-matt/game-launch-page",
      liveDemoLink: "https://www.loom.com/embed/a8142f2d9c7a4dae83cc311dc64429d7?sid=4f87b132-aebd-4626-9b47-ede3383cd62e",
      imageUrl: "GL1.png",
    },
    {
      name: "Fitness Tracker",
      description: "A Fitness Tracker CLI application, allowing users to create, manage workouts, and track exercises with a robust set of commands.",
      technologies: ["Python", "Flask", "SQLAlchemy"],
      githubLink: "https://github.com/tran-matt/personal-finance-tracker",
      liveDemoLink: "https://www.loom.com/embed/0eaf8a55179d4bbab78eac7ff996b4cb?sid=f248c9bb-8f84-476b-9246-04286a8a6fde",
      imageUrl: "FA2.png",
    },
    {
      name: "Exchange Ease",
      description: "An item trading site for listing and managing exchange with other users.",
      technologies: ["HTML", "CSS", "React", "Python", "SQLAlchemy", "Flask"],
      githubLink: "https://github.com/tran-matt/exchange-ease",
      liveDemoLink: "https://www.loom.com/embed/2b7c1757f9ad4e80a9fc1f4eb3d41693?sid=d19886ce-1b66-4cf8-93ce-077e2518826c",
      imageUrl: "EE3.png",
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Projects</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <p className="mt-2 text-sm text-gray-500">Technologies Used: {project.technologies.join(", ")}</p>
              </div>
              <div className="p-6 mt-auto border-t border-gray-200 flex">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-grow inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 mr-2">
                  GitHub
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex-grow inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ml-2">
                  Live Demo
                </a>
              </div>
              <div className="p-6 pt-0 border-t border-gray-200 text-right">
                <Link to={`/project${index + 1}`} className="text-indigo-600 hover:text-indigo-700">See More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
