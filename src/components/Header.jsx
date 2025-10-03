import React from "react";
import { RESUME_PATH } from "../root.link";

const Header = () => {
  return (
    <nav className="space-x-10 fixed top-0  right-0  backdrop-blur-md z-50  shadow-sm h-16 flex items-center px-5 md:px-20  ">
      <ul className="flex flex-row space-x-2 md:space-x-4 md:text-lg justify-center md:justify-end">
        <li>
          <a
            href="#experience"
            className="py-1 px-5 hover:text-orange-300 focus:text-orange-300 rounded-lg"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="py-1 px-5 hover:text-orange-300 focus:text-orange-300 rounded-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="py-1 px-5 hover:text-orange-300 focus:text-orange-300 rounded-lg"
          >
            Skills
          </a>
        </li>
        {/* <li>
          <a href='#contact' className='py-1 px-5 hover:text-orange-300 focus:text-orange-300 rounded-lg'>
            Contact
          </a>
        </li> */}

        <li>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="py-1 px-5 hover:text-orange-300 focus:text-orange-300 rounded-lg"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
