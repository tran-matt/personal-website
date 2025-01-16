import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-gray-800 text-5xl font-bold">Matthew Tran</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Full-stack Software Engineer | Bridging Technology and Healthcare | Lifelong Learner
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex justify-center items-center w-full">
        <main className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 p-8">
          {/* Profile Picture */}
          <div className="flex-1 flex justify-center lg:justify-start lg:items-start mb-8 lg:mb-0">
            <img
              src="PP1.jpeg"
              alt="Matthew Tran"
              className="w-48 h-48 lg:w-96 lg:h-96 object-cover shadow-lg rounded-full"
            />
          </div>

          {/* About Me Section */}
          <div className="flex-1 max-w-xl flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
              <p className="text-gray-600 mt-4">
                Hi, I’m Matt Tran! I started my career in healthcare, where I developed skills in problem-solving, adaptability, and working in high-pressure environments. While I valued the meaningful impact I made in medicine, I was drawn to the limitless possibilities of technology and its potential to drive innovation in healthcare.
              </p>
              <p className="text-gray-600 mt-4">
                Since completing <span className="font-semibold">Flatiron School’s Software Engineering program</span>, I’ve been focused on building full-stack projects that combine technical functionality with sleek design. My goal is to create tools and applications that improve lives, especially by bridging the gap between technology and healthcare.
              </p>
              <p className="text-gray-600 mt-4">
                I’m constantly learning, exploring modern technologies like <span className="font-semibold">React</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">TailwindCSS</span>, and applying my skills to solve real-world problems. Let’s connect and build something impactful together!
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4">
                {[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'TypeScript',
                  'TailwindCSS',
                  'Python',
                  'Flask',
                  'SQLAlchemy',
                  'PostgreSQL',
                  'Git',
                  'Redux',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
