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
      "Seamless client-server integration via fetch for real-time data updates."
    ],
    images: [
      "EE1.png",
      "EE2.png",
    ],
    technologies: ["HTML", "CSS", "React", "Python", "SQLAlchemy", "Flask"],
    githubLink: "https://github.com/tran-matt/exchange-ease",
    liveDemoLink: "https://project3.example.com",
    technicalHighlights: [
      "Flask API backend with React frontend",
      "Three models with complex relational structures",
      "Complete CRUD actions for resources",
      "Formik for forms and validations",
      "React Router for client-side routing",
      "Fetch API for server communication"
    ]
  };

  const loomEmbedHtml = (
    <div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
      <iframe 
        src="https://www.loom.com/embed/2b7c1757f9ad4e80a9fc1f4eb3d41693?sid=d19886ce-1b66-4cf8-93ce-077e2518826c" 
        frameBorder="0" 
        style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} 
        allowFullScreen
        title="Exchange Ease Demo Video" 
      ></iframe>
    </div>
  );

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{projectDetails.name}</h1>
        <p className="mt-4 text-gray-600">{projectDetails.description}</p>
        <ul className="list-disc pl-5 mt-4 text-gray-600">
          {projectDetails.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

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
          <a href={projectDetails.githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">GitHub Repository</a>
          <a href={projectDetails.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Live Demo</a>
        </div>

        <div className="mt-6">
          {projectDetails.images.map((image, index) => (
            <img key={index} src={image} alt={`Screenshot ${index + 1}`} className="w-full mt-4 rounded-lg shadow-md"/>
          ))}
        </div>

        <div className="mt-6">
          {loomEmbedHtml}
        </div>
      </div>
    </div>
  );
};

export default Project3;
