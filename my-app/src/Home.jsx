import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-gray-800 text-5xl font-bold">Matthew Tran</h1>
        <p className="mt-4 text-gray-600 text-lg">Full-stack Software Engineer | Minimal Design Enthusiast | Passionate about Medicine, Fitness, and Food</p>
      </header>

      <div className="flex justify-center items-center w-full">
        <main className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 p-8">
          <div className="flex-1 flex justify-center lg:justify-start lg:items-start mb-8 lg:mb-0">
            <img src="PP1.jpeg" alt="Matthew Tran" className="w-48 h-48 lg:w-96 lg:h-96 object-cover shadow-lg" />
          </div>

          <div className="flex-1 max-w-xl flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-xl font-semibold">About Me</h2>
              <p className="text-gray-600 mt-4">I'm a dedicated full-stack software engineer with a passion for creating sleek and functional applications. With a keen eye for design and a strong foundation in both front-end and back-end technologies, I aim to bridge the gap between aesthetic appeal and technical functionality.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Skills</h2>
              <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">HTML</span>
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">CSS</span>
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">JavaScript</span>
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">React</span>
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">Python</span>
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">Flask</span>
                <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">SQLAlchemy</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
