import React from "react";

const ProjectCard = ({ cover, type, title }) => {
  return (
    <div>
      <div className="group mt-4 relative cursor-pointer overflow-hidden rounded-2xl xl:w-[450px] xl:h-[450px] w-52 h-52 border-4 border-cyan-400">
        <div className="group-hover:bg-black/70 transition-all duration-300">
          <img
            src={cover}
            className=" group-hover:scale-125 transition-all duration-500"
          />
          <div className="">
            <div className="absolute xl:text-2xl text-sm -bottom-full left-10 group-hover:bottom-24 transtion-all duratiom-500 z-0">
              {type}
            </div>
            <div className="absolute xl:text-2xl font-bold text-sm -bottom-full left-12 group-hover:bottom-14 transtion-all duratiom-00 z-0">
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
