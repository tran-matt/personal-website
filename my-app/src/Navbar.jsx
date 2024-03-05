import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105 transition-transform">
          <img src="NameLogo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Matthew Tran</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {['About', 'Experience', 'Blogs', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase()}`} className="block py-2 px-3 text-gray-900 hover:underline hover:scale-105 transition-transform dark:text-white">
                  {item}
                </Link>
              </li>
            ))}
            <li className="relative">
              <Link to="/projects" className="block py-2 px-3 text-gray-900 hover:underline hover:scale-105 transition-transform dark:text-white">
                Projects
              </Link>
              <ul className="absolute hidden text-sm bg-white shadow-lg rounded-md -left-4 md:left-0 group-hover:block">
                <li><Link to="/project1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Game Launch Page</Link></li>
                <li><Link to="/project2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Fitness Tracker</Link></li>
                <li><Link to="/project3" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Exchange Ease</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
