import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

const Navbar = ({ toggleDark, isDark }) => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f0efeb] dark:bg-[#111] px-8 py-4 flex items-center justify-between">
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link} className="list-none">
            <a
              href={"#" + link.toLowerCase()}
              className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
        <span className="text-white dark:text-black text-sm font-semibold">
          VP
        </span>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/vijaypatil2003"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            size={20}
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://linkedin.com/in/vijaypatil0106"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            size={20}
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          />
        </a>
        <button onClick={toggleDark} className="cursor-pointer">
          {isDark ? (
            <MdLightMode size={20} className="text-gray-300" />
          ) : (
            <MdDarkMode size={20} className="text-gray-700" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
