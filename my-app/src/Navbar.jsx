import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105 transition-transform"
        >
          <img src="NameLogo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Matthew Tran
          </span>
        </Link>
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {["About", "Experience", "Blogs", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block py-2 px-3 text-gray-900 hover:underline hover:scale-105 transition-transform dark:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="relative group">
              <Link
                to="/projects"
                className="block py-2 px-3 text-gray-900 hover:underline hover:scale-105 transition-transform dark:text-white"
              >
                Projects
              </Link>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md text-sm -left-4 md:left-0 w-max z-50">
                <li>
                  <Link
                    to="/project1"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Assisted Living Facility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project2"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Fitness Tracker
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project3"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Exchange Ease
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
