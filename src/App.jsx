import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="bg-hero-pattern bg-cover w-full h-full">
      <div className=" flex justify-center">
        <NavBar />
      </div>
      <div className="mt-24 md:mt-44 ">
        <Banner />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default App;
