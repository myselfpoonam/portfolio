import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div>
      <div className="hidden  xl:flex flex-col top-[35%] md:left-0 fixed p-4">
        <ul className="text-black text-3xl  ">
          <li className="flex justify-center p-10 ml-[-170px] items-center w-60 h-12 px-4  hover:ml-[-10px hover:ml-[-10px] hover:rounded-xl duration-300 backdrop-blur-xl bg-white/30 shadow-2xl ">
            <a href="" className="flex justify-between items-center w-full ">
              FackBook
              <FaFacebookSquare className=" text-blue-600 text-5xl " />
            </a>
          </li>
          <li className="flex justify-center p-10  ml-[-170px] items-center w-60 h-12 px-4  hover:ml-[-10px hover:ml-[-10px] hover:rounded-xl duration-300 backdrop-blur-xl bg-white/30 shadow-2xl">
            <a href="" className="flex justify-between items-center w-full ">
              LinkedIn
              <AiFillLinkedin className="ml-8 text-5xl text-blue-600" />
            </a>
          </li>
          <li className="flex justify-center p-10  ml-[-170px] items-center w-60 h-12 px-4  hover:ml-[-10px hover:ml-[-10px] hover:rounded-xl duration-300 backdrop-blur-xl bg-white/30 shadow-2xl">
            <a href=" " className="flex justify-between items-center w-full">
              Instagram
              <AiFillInstagram className="text-5xl  text-orange-400" />
            </a>
          </li>
          <li className="flex justify-center  p-10 items-center ml-[-170px] w-60 h-12 px-4  hover:ml-[-10px hover:ml-[-10px] hover:rounded-xl duration-300 backdrop-blur-xl bg-white/30 shadow-2xl">
            <a href="" className="flex justify-between items-center w-full ">
              Github
              <AiOutlineGithub className="ml-12 text-5xl text-black" />
            </a>
          </li>
          <li className="flex justify-center  p-10 items-center ml-[-170px] w-60 h-12 px-4  hover:ml-[-10px hover:ml-[-10px] hover:rounded-xl duration-300 backdrop-blur-xl bg-white/30 shadow-2xl">
            <a
              href="/Resume.pdf"
              className="flex justify-between items-center w-full "
              download={true}
            >
              Resume
              <BsFillPersonLinesFill className="ml-12 text-5xl text-black" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
