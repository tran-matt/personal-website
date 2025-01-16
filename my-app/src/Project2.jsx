import React from 'react';

const Project2 = () => {
  const projectDetails = {
    name: "Fitness Tracker",
    description:
      "A Fitness Tracker CLI application that allows users to create, manage workouts, and track exercises with a robust set of commands. The project leverages Python ORM for a dynamic database with one-to-many relationships, features user-friendly CLI menus, and includes input validation and error messaging for a seamless user experience. Object-oriented programming (OOP) best practices and comprehensive testing were applied throughout the development process.",
    images: ["FA1.png", "FA2.png"],
    technologies: ["Python", "Flask", "SQLAlchemy"],
    githubLink: "https://github.com/tran-matt/fitness-tracker",
    liveDemoLink:
      "https://www.loom.com/embed/0eaf8a55179d4bbab78eac7ff996b4cb?sid=f248c9bb-8f84-476b-9246-04286a8a6fde",
    technicalHighlights: [
      "Utilized Python ORM for a dynamic database with one-to-many relationships",
      "Structured user-friendly CLI menus for seamless interaction",
      "Ensured input validation and error messaging for a robust user experience",
      "Implemented OOP best practices and comprehensive testing throughout the CLI application",
    ],
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Title and Description */}
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {projectDetails.name}
        </h1>
        <p className="mt-4 text-gray-600">{projectDetails.description}</p>

        {/* Technical Highlights */}
        <div className="mt-6">
          <p className="font-semibold text-gray-700 text-lg">
            Technical Highlights:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
            {projectDetails.technicalHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mt-6">
          <p className="font-semibold text-gray-700 text-lg">Technologies Used:</p>
          <div className="flex flex-wrap mt-2 gap-2">
            {projectDetails.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex space-x-4">
          <a
            href={projectDetails.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            GitHub Repository
          </a>
          <a
            href={projectDetails.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Live Demo
          </a>
        </div>

        {/* Project Images */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1} of ${projectDetails.name}`}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Loom Video Embed */}
        <div className="mt-8">
          <p className="font-semibold text-gray-700 text-lg">Demo Video:</p>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: "0",
              marginTop: "1rem",
            }}
          >
            <iframe
              src={projectDetails.liveDemoLink}
              frameBorder="0"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              allowFullScreen
              title="Fitness Tracker Demo Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
