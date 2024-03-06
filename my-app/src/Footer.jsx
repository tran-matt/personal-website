import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 p-4">
    <div className="flex justify-end">
        <a href="https://www.linkedin.com/in/matthew-d-tran" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaLinkedin size="2em" />
        </a>
        <a href="https://github.com/tran-matt" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaGithub size="2em" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
