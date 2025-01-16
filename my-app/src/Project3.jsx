import React from 'react';

const Project3 = () => {
  const projectDetails = {
    name: "Exchange Ease",
    description:
      "Exchange Ease revolutionizes the way collectors trade collectibles online. This platform enables secure account management, item listing, and item exchange with ease. Built on a Flask API and React, it offers a seamless user experience with robust features:",
    features: [
      "Secure account login/logout and personal collection management.",
      "Sophisticated data modeling supporting complex relationships.",
      "Full CRUD capabilities for user-controlled data management.",
      "Form handling with Formik for validation and error messaging.",
      "Efficient navigation with React Router for optimized user flow.",
      "Seamless client-server integration via fetch for real-time data updates.",
    ],
    images: ["EE1.png", "EE2.png"],
    technologies: ["HTML", "CSS", "React", "Python", "SQLAlchemy", "Flask"],
    githubLink: "https://github.com/tran-matt/exchange-ease",
    liveDemoLink:
      "https://www.loom.com/embed/2b7c1757f9ad4e80a9fc1f4eb3d41693?sid=d19886ce-1b66-4cf8-93ce-077e2518826c",
    technicalHighlights: [
      "Flask API backend with React frontend",
      "Three models with complex relational structures",
      "Complete CRUD actions for resources",
      "Formik for forms and validations",
      "React Router for client-side routing",
      "Fetch API for server communication",
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

        {/* Features */}
        <div className="mt-6">
          <p className="font-semibold text-gray-700 text-lg">Features:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
            {projectDetails.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

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
          <p className="font-semibold text-gray-700 text-lg">
            Technologies Used:
          </p>
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

        {/* Images */}
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

        {/* Demo Video */}
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
              title="Exchange Ease Demo Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
