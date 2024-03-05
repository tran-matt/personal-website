import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Student",
      company: "Flatiron School",
      duration: "October 2023 - January 2024",
      description: "I joined Flatiron School to learn how to become a full-stack developer. After an intensive 3-month program experience, I am now certified for the JavaScript, React, Python, Flask, and SQLAlchemy."
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Experience</h1>
        <div className="mt-6 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-gray-800">{exp.role} - {exp.company}</h2>
              <p className="text-sm font-medium text-indigo-600">{exp.duration}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
  <h2 className="text-2xl font-semibold text-gray-800">Download My Resume</h2>
  <p className="mt-2">
  <a href={`${process.env.PUBLIC_URL}/TechResume.pdf`} download="TechResume.pdf" className="text-indigo-600 hover:text-indigo-500">Download Resume</a>
  </p>
</div>
      </div>
    </div>
  );
};

export default Experience;
