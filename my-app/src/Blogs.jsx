import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Navigating the Power of React.js: A Phase-2 Discovery",
    summary: "My journey in learning React.js during Phase 2 of the Flatiron program, highlighting its declarative syntax, component reusability, and virtual DOM benefits.",
    link: "https://dev.to/tranmatt/navigating-the-power-of-reactjs-a-phase-2-discovery-1cio"
  },
  {
    id: 2,
    title: "How to Create a CLI App in 5 Steps",
    summary: "A five-step process used by a group at Flatiron School to create a Fitness Tracker CLI app, including planning, data modeling, using SQLAlchemy for ORM, creating a CLI with Click, and implementing CLI commands with enhancements like PrettyTable and animations.",
    link: "https://dev.to/tranmatt/how-to-create-a-cli-app-in-5-steps-2d2"
  },
  {
    id: 3,
    title: "Using Flask-SQLAlchemy Validations",
    summary: "A tutorial that explains how to implement data validations in Flask-SQLAlchemy models to ensure data integrity in a Python web application, covering prerequisites, model definitions, adding validations, applying migrations, and testing the validations.",
    link: "https://dev.to/tranmatt/using-flask-sqlalchemy-validations-31bi"
  },
  
];

const Blogs = () => {
    return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">My Blogs</h1>
          <div className="mt-6 space-y-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                  <p className="mt-2 text-gray-600">{blog.summary}</p>
                </div>
                <a href={blog.link} className="mt-4 self-end text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Blogs;