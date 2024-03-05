import React from 'react';

const Project2 = () => {
  const projectDetails = {
    name: "Fitness Tracker",
    description: "A Fitness Tracker CLI application, allowing users to create, manage workouts, and track exercises with a robust set of commands. Utilized Python ORM for a dynamic database with one-to-many relationships. Structured user-friendly CLI menus for seamless interaction. Ensured input validation and error messaging for a robust user experience. Implemented OOP best practices and comprehensive testing throughout the CLI application.",
    images: [
      "FA1.png",
      "FA2.png",
    ],
    technologies: ["Python", "Flask", "SQLAlchemy"],
    githubLink: "https://github.com/tran-matt/fitness-tracker",
    liveDemoLink: "https://project2.example.com",
    technicalHighlights: [
      "Utilized Python ORM for a dynamic database with one-to-many relationships",
      "Structured user-friendly CLI menus for seamless interaction",
      "Ensured input validation and error messaging for a robust user experience",
      "Implemented OOP best practices and comprehensive testing throughout the CLI application"
    ]
  };

  const loomEmbedHtml = (
    <div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
      <iframe 
        src="https://www.loom.com/embed/0eaf8a55179d4bbab78eac7ff996b4cb?sid=f248c9bb-8f84-476b-9246-04286a8a6fde" 
        frameBorder="0" 
        style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} 
        allowFullScreen
        title="Fitness Tracker Demo Video"
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

export default Project2;
