import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h1>
        <div className="mt-4 text-gray-600 space-y-4">
          <p>
            Hi, I’m Matt Tran! I bring a unique blend of experience from the healthcare industry and software engineering. My professional journey began in healthcare, where I honed my skills in problem-solving, adaptability, and working under pressure. I found immense fulfillment in helping others, but I craved a career where I could combine creativity, technology, and problem-solving on a larger scale. That’s when I discovered the world of software engineering.
          </p>

          <p>
            My transition into tech started with <span className="font-semibold">The Odin Project</span>, where I learned the fundamentals of HTML, CSS, and JavaScript. Captivated by the creativity and logic involved in coding, I took the leap and enrolled in <span className="font-semibold">Flatiron School’s Software Engineering program</span>, where I gained hands-on experience building full-stack applications using modern technologies like React, Python, Flask, and SQLAlchemy.
          </p>

          <p>
            Since graduating, I’ve been dedicated to furthering my skills by working on projects that merge my background in healthcare with technology. I’m passionate about creating tools and applications that solve real-world problems, especially at the intersection of healthcare and software. My goal is to leverage technology to improve lives and make impactful contributions to the industry.
          </p>

          <p>
            Here are some of the key technologies I’ve been working with recently:
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
              'PostgreSQL',
              'Git',
              'Redux',
            ].map((tech, index) => (
              <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg shadow">
                <div className="ml-3">
                  <p className="font-medium text-blue-800">{tech}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            As a software engineer, I’m committed to lifelong learning and building innovative, user-centric solutions that leave a lasting impact. I’m excited to collaborate with like-minded individuals and contribute to meaningful projects that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
