import React from "react";
import Typewriter from "typewriter-effect";
import image from "../src/assets/Banner.jpg";
import Social from "./Social";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:p-6 justify-center  items-center">
        <div className="md:flex md:justify-center md:gap-24  md:items-center md:gap-10">
          <div className="text-gray-600 md:text-3xl xl:text-5xl tracking-wide font-bold text-sm">
            I am{" "}
            <span className="text-lg md:text-4xl xl:text-6xl animate__animated animate__fadeIn text-cyan-600 p-2 ring-2 flex flex-col mt-2 items-center ring-blue-500 rounded-xl laptop:text-6xl ">
              POONAM BHANDARI
            </span>
            <div className="text-black  md:text-4xl mt-2 xl:text-8xl tracking-wide text-2xl laptop:text-8xl ">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <img
              src={image}
              className=" w-44 h-46 md:w-[400px] md:h-[500px] xl:w-[600px] xl:h-[800px] shadow-2xl rounded-xl transform hover:scale-110 transition-transform duration-500 ease-in-out"
              alt="Banner Image"
            />
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Banner;
