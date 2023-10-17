import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex lg:text-3xl xl:text-4xl backdrop-blur z-10 bg-white/10 fixed lg:p-8 shadow-2xl md:pr-6 w-full justify-between items-center p-4 gap-4 text-black font-bold ">
      <h1 className="font-mono">Portfolio</h1>
      <div className="">
        <ul className="hidden  md:flex lg:flex lg:gap-20 gap-4">
          <li className="hover:underline hover:underline-offset-8  hover: decoration-4  cursor-pointer hover:decoration-indigo-500">
            Home
          </li>
          <li className="hover:underline hover:underline-offset-4 hover: decoration-4 cursor-pointer hover:decoration-indigo-500">
            About
          </li>
          <li className="hover:underline hover:underline-offset-8 hover: decoration-4 cursor-pointer hover:decoration-indigo-500">
            Projects
          </li>
          <li className="hover:underline hover:underline-offset-8 hover: decoration-4 cursor-pointer hover:decoration-indigo-500">
            Contact
          </li>
        </ul>
        <div
          onClick={toggleNav}
          className=" cursor-pointer md:hidden z-10 right-4 top-5 fixed "
        >
          {nav ? <ImCross className="" /> : <GiHamburgerMenu />}
        </div>
        {nav && (
          <ul className="flex flex-col bg-gray-200 text-black  w-full h-[170px] justify-center items-center absolute top-0 left-0">
            <li onClick={toggleNav}>Home</li>
            <li onClick={toggleNav}>About</li>
            <li onClick={toggleNav}>Projects</li>
            <li onClick={toggleNav}>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
