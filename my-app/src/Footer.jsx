import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 p-4">
    <div className="flex justify-end">
        <a href="https://www.linkedin.com/in/matthew-d-tran" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <img src="linkedin.png" alt="LinkedIn" style={{width: "2em", height: "2em" }}/>
        </a>
        <a href="https://github.com/tran-matt" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <img src="path-to-your-github-image.png" alt="GitHub" style={{ width: '2em', height: '2em' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
