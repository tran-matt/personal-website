import React from 'react';

const Project1 = () => {
  const projectDetails = {
    name: "Game Launch Page",
    description: "A Game Launch Page using React, blending dynamic visual effects, interactive forms, and a countdown timer for engaging user experience. This project aims to provide users with a seamless and interactive experience as they explore the game's features before launch. The development process involved tackling challenges such as integrating dynamic visual effects, managing state with React hooks for real-time updates, and implementing a RESTful API using JSON-server.",
    images: [
      "GL1.png",
      "GL2.png",
    ],
    technologies: ["HTML", "CSS", "Javascript", "React"],
    githubLink: "https://github.com/tran-matt/game-launch-page",
    liveDemoLink: "https://www.loom.com/embed/a8142f2d9c7a4dae83cc311dc64429d7?sid=4f87b132-aebd-4626-9b47-ede3383cd62e",
    technicalHighlights: [
      "React SPA with 5+ modular components",
      "Implemented React Router for seamless navigation",
      "Integrated JSON-server for RESTful API, executing GET and POST requests",
      "Mastered state management using React hooks, ensuring real-time UI updates"
    ]
  };

  const loomEmbedHtml = (
    <div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
      <iframe 
        src="https://www.loom.com/embed/a8142f2d9c7a4dae83cc311dc64429d7?sid=4f87b132-aebd-4626-9b47-ede3383cd62e" 
        frameBorder="0" 
        style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} 
        allowFullScreen
        title="Game Launch Page Video" 
      ></iframe>
    </div>
  );

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{projectDetails.name}</h1>
        <p className="mt-4 text-gray-600">{projectDetails.description}</p>

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
            <img key={index} src={image} alt={`Screenshot ${index + 1} of ${projectDetails.name}`} className="w-full mt-4 rounded-lg shadow-md"/>
          ))}
        </div>

        <div className="mt-6">
          {loomEmbedHtml}
        </div>
      </div>
    </div>
  );
};

export default Project1;
