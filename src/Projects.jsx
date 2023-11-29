import React from "react";
import image from "../src/assets/food.jpg";
import app from "../src/assets/app.jpg";
import quiz from "../src/assets/quiz.png";
import movie from "../src/assets/movie.jpg";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <div className="p-8 xl:flex justify-center ">
      <div className="xl:p-20 xl:pl-36 ">
        <div className="">
          <h1 className="font-bold md:text-4xl xl:text-5xl text-cyan-700 text-center">
            My Latest Works
          </h1>
          <p className="mt-2 md:text-md xl:text-3xl xl:mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            voluptatem commodi magnam in. Animi voluptates quasi, consequatur
            nam placeat, distinctio ut earum sint nulla perspiciatis amet,
            impedit sequi beatae perferendis.
          </p>
        </div>
        <div className="mt-4 flex xl:mt-10 flex-col items-center xl:flex">
          <div className="md:flex md:flex-wrap md:gap-20 justify-center">
            <ProjectCard
              cover={movie}
              type="Machine Learning Project"
              title="Movie Recommendation System"
            />

            <ProjectCard
              cover={image}
              type="React Project"
              title="Food Ordering System"
            />

            <ProjectCard
              cover={app}
              type="Simple Project"
              title="Movies Recommendation App"
            />
            <ProjectCard cover={quiz} type="React Project" title="Quiz" />
            <ProjectCard
              cover={image}
              type="Machine Learning Project"
              title="Movie Recommendation System"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
