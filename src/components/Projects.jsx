import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import Zingmp3 from "../assets/zingmp3.png";
import Portfolio from "../assets/portfolio.png";
import Anime from "../assets/anime.png";
import Fourtour from "../assets/fourtour.png";

const Projects = () => {
  const projects = [
    {
      projectName: "Zing mp3",
      description:
        "Personal website helps users listen and search for many different genres of music.",
      sourceCode: "https://github.com/thuansmile2479/TODOLIST_MP3.git",
      liveDemo: "https://todolist-mp-3-wheat.vercel.app/",
      localSrc: `${Zingmp3}`,
      stack: ["React", "tailwind" ],
    },
   
    {
      projectName: "Anime Naruto",
      description:
        "Provide information and services related to anime genre,users can search, read favorite genres and characters.",
      sourceCode: "https://github.com/thuansmile2479/ass2_react_nodejs.git",
      liveDemo: "",
      localSrc: `${Anime}`,
      stack: ["React", "NodeJS", "tailwind"],
    },
    {
      projectName: "Fourtour",
      description:
        "Help customers book tours conveniently, efficiently and quickly.",
      sourceCode: "https://github.com/thuansmile2479/BOOKTOUR.git",
      // liveDemo: "",
      localSrc: `${Fourtour}`,
      stack: ["Angular", "NodeJS", "tailwind"],
    },
    {
      projectName: "Portfolio",
      description:
        "It shows my personal information such as skills, qualifications previous education and other projects.",
      sourceCode: "https://github.com/thuansmile2479/portfolio.git",
      liveDemo: "https://portfolio-dun-eta-73.vercel.app/",
      localSrc: `${Portfolio}`,
      stack: ["React", "tailwind"],
    },
  ];

  return (
    <div
      id="projects"
      className="overflow-hidden transition ease-in-out w-full max-h-fit flex justify-center bg-white dark:bg-[#242424] dark:text-white"
    >
      <div className="flex flex-col p-6 gap-6 justify-center items-center lg:items-start">
        <h6 className="text-red-500 font-semibold text-xl uppercase">
          Projects
        </h6>
        <div className="flex flex-col items-center gap-10">
          {projects.map(
            (
              {
                projectName,
                description,
                sourceCode,
                liveDemo,
                localSrc,
                stack,
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-md flex flex-col lg:flex-row text-center lg:text-start items-center gap-3 shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-red-500"
                >
                  <img src={localSrc} alt="/" className="w-full md:max-w-2xl" />
                  <div className="flex flex-col md:max-w-sm gap-6 overflow-hidden p-2">
                    <h6 className="text-red-500 font-semibold text-2xl">
                      {projectName}
                    </h6>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                      {description}
                    </p>
                    <div className="flex justify-center flex-wrap lg:justify-start gap-2 capitalize dark:text-gray-300">
                      {stack.map((item, index) => {
                        return (
                          <h1
                            key={index}
                            className="border-2 border-gray-600 text-xs text-gray-600 dark:text-gray-300 dark:border-gray-300 py-1 px-2 rounded-full"
                          >
                            {item}
                          </h1>
                        );
                      })}
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
                      <a href={sourceCode} target="_blank">
                        <BiLogoGithub size={30} />
                      </a>
                      <a href={liveDemo} target="_blank">
                        <AiOutlineLink size={25} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
