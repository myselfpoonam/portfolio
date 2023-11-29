import React from "react";

const About = () => {
  return (
    <div className="xl:mt-20 mt-10 p-8 md:flex justify-center  ">
      <div className="flex flex-col items-center md:flex-row md:gap-8 xl:gap-36">
        <div className="w-44 h-44 border-4 md:w-96 md:h-64 xl:w-[500px] xl:h-[500px]  border-red-300 shadow-2xl  rounded-full">
          <img
            src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="mt-4 xl:text-4xl md:text-2xl text-center md:text-left ">
          <h1 className="font-bold text-cyan-600 md:text-2xl xl:text-3xl ">
            ABOUT ME
          </h1>
          <h1 className="text-xl xl:text-5xl md:mt-6 md:text-3xl font-medium  animate__animated animate__fadeInUp">
            Better Design
          </h1>
          <h1 className="text-xl font-medium xl:text-5xl md:text-3xl xl:mt-6 animate__animated animate__fadeInUp">
            Better Experience
          </h1>
          <p className="text-sm xl:text-2xl xl:mt-6 mt-4 md:text-2xl animate__animated animate__fadeIn">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="text-left p-4 md:p-0 md:mt-8 xl:text-3xl xl:font-medium">
            <h2 className="text-md m animate__animated  animate__fadeIn">
              HTML
            </h2>
            <div className="w-[full] xl:w-[800px] md:mt-4 xl:h-3 bg-gray-500 rounded-xl animate__animated animate__fadeIn">
              <div className=" w-full xl:w-[800px] bg-blue-500 h-2 xl:h-3  rounded-md"></div>
            </div>
            <h2 className="text-md mt-2 md:mt-4 font-mediumanimate__animated animate__fadeIn">
              Tailwind Css
            </h2>
            <div className="w-[full] xl:h-3 bg-gray-500  rounded-xl animate__animated animate__fadeIn">
              <div className=" xl:w-[700px] w-52 bg-blue-500 h-2 md:mt-4 xl:h-3  rounded-md"></div>
            </div>
            <h2 className="text-md mt-2 md:mt-4 animate__animated animate__fadeIn">
              JavaScripts
            </h2>
            <div className="w-[full]  bg-gray-500 md:mt-4 rounded-xl animate__animated animate__fadeIn">
              <div className=" w-44 xl:w-[600px] bg-blue-500 h-2 xl:h-3 rounded-md"></div>
            </div>
            <h2 className="text-md mt-2 md:mt-4 animate__animated animate__fadeIn">
              React
            </h2>
            <div className="w-[full] md:mt-4 bg-gray-500 rounded-xl animate__animated animate__fadeIn">
              <div className=" w-48 xl:w-[700px] bg-blue-500 h-2 xl:h-3 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
