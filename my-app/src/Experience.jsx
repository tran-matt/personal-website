import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Student",
      company: "Flatiron School",
      duration: "October 2023 - January 2024",
      description: [
        "Completed an intensive full-time program focused on full-stack development.",
        "Gained hands-on experience in building and deploying projects using JavaScript, React, Python, Flask, and SQLAlchemy.",
        "Developed a strong foundation in software engineering principles and agile development methodologies.",
      ],
    },
  ];

  const certificates = [
    {
      title: "Flatiron Software Engineering Graduate",
      fileName: "Flatiron Certificate.pdf",
    },
    {
      title: "Six Sigma Green Belt Certification",
      fileName: "SixSigmaGreenBelt.pdf",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Experience</h1>
        <p className="mt-4 text-gray-600">
          I bring a strong foundation in software engineering, a background in healthcare, and a drive to solve complex problems with technology. Here’s a look at my journey so far:
        </p>

        {/* Experience Section */}
        <div className="mt-6 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {exp.role} - <span className="text-indigo-600">{exp.company}</span>
              </h2>
              <p className="text-sm font-medium text-gray-500">{exp.duration}</p>
              <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Certificates</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-4 flex items-center justify-between"
              >
                <p className="text-gray-800 font-medium">{cert.title}</p>
                <a
                  href={`${process.env.PUBLIC_URL}/${cert.fileName}`}
                  download={cert.fileName}
                  className="text-indigo-600 hover:text-indigo-500 flex items-center space-x-2"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mt-12 bg-indigo-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Download My Resume</h2>
          <p className="mt-2 text-gray-600">
            Interested in learning more about my skills and experience? Download my resume below:
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/TechResume.pdf`}
            download="TechResume.pdf"
            className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
