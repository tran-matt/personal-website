import React from 'react';

const Project1 = () => {
  const projectDetails = {
    name: "Assisted Living Facility",
    description:
      "An Assisted Living Facility website designed to showcase services, amenities, and values for senior living. Built with React, the project emphasizes accessibility, user-friendly design, and seamless navigation. This website is currently in use by a local assisted living facility to help prospective residents and their families explore their offerings.",
    images: [
      "/AL1.png", 
      "/AL2.png", 
    ],
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
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {projectDetails.name}
        </h1>
        <p className="mt-4 text-gray-600">{projectDetails.description}</p>

        {projectDetails.inUse && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
            <p className="font-semibold">Live Project:</p>
            <p>{projectDetails.facilityNote}</p>
          </div>
        )}

        <div className="mt-6">
          <p className="font-semibold text-gray-700">Technical Highlights:</p>
          <ul className="list-disc pl-5">
            {projectDetails.technicalHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-gray-700">
          <p className="font-semibold">Technologies Used:</p>
          <p>{projectDetails.technologies.join(", ")}</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <a
            href={projectDetails.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500"
          >
            GitHub Repository
          </a>
          <a
            href={projectDetails.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Live Website
          </a>
        </div>

        <div className="mt-6">
          {projectDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1} of ${projectDetails.name}`}
              className="w-full mt-4 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project1;
