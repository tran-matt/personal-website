import React from 'react';

const Project1 = () => {
  const projectDetails = {
    name: "Assisted Living Facility",
    description:
      "An Assisted Living Facility website designed to showcase services, amenities, and values for senior living. Built with React, the project emphasizes accessibility, user-friendly design, and seamless navigation. This website is currently in use by a local assisted living facility to help prospective residents and their families explore their offerings.",
    images: ["/AL1.png", "/AL2.png"],
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "PostCSS",
      "JavaScript",
      "HTML",
      "CSS",
      "EmailJS",
    ],
    githubLink: "https://github.com/tran-matt/assisted-living-facility",
    liveDemoLink: "https://wellbeingal.netlify.app/",
    technicalHighlights: [
      "Responsive design for desktop and mobile views",
      "React SPA with modular components for maintainability",
      "Emphasis on accessibility with semantic HTML and ARIA roles",
      "Integration of flexible grid layout for dynamic content display",
      "Translation functionality to support multiple languages",
      "Email functionality powered by EmailJS for user communication",
    ],
    inUse: true,
    facilityNote:
      "This website is actively used by a local assisted living facility to showcase their services and connect with prospective residents and their families.",
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Name and Description */}
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {projectDetails.name}
        </h1>
        <p className="mt-4 text-gray-600">{projectDetails.description}</p>

        {/* Live Project Notice */}
        {projectDetails.inUse && (
          <div className="mt-4 p-4 bg-green-100 border border-green-200 text-green-800 rounded-lg">
            <p className="font-semibold text-lg">Live Project:</p>
            <p className="mt-2">{projectDetails.facilityNote}</p>
          </div>
        )}

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
            Live Website
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
      </div>
    </div>
  );
};

export default Project1;
