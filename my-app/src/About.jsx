import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h1>
        <div className="mt-4 text-gray-600 space-y-4">
          <p>
            Hello! I'm Matt Tran, a recent graduate of Flatiron School’s Software Engineering program. My journey into software engineering began after years of exploring the field of medicine. While I have a deep appreciation for medicine, I found myself longing for a career that offered both creative freedom and continual growth opportunities. This led me to discover the world of software engineering through conversations with friends in the industry.
          </p>

          <p>
            My initial foray into this field was through the Odin Project, where I learned the fundamentals of HTML, CSS, and JavaScript. This experience ignited my passion for the creative and logical aspects of coding. Motivated by this newfound interest, I enrolled in Flatiron School’s Software Engineering program to deepen my understanding and skills.
          </p>

          <p>
            During my time at Flatiron School, I gained proficiency in a diverse set of technologies, equipping me to be an effective full-stack developer. Here are some of the key technologies I have worked with recently:
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Python',
              'Flask',
              'SQLAlchemy',
              'TypeScript',
              'TailwindCSS',
            ].map((tech, index) => (
              <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg shadow">
                <div className="ml-3">
                  <p className="font-medium text-blue-800">{tech}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            As a software engineer, I am committed to leveraging my skills to build innovative solutions and continually evolve in this dynamic field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
