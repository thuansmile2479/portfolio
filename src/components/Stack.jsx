import React from "react"; 
import HtmlIcn from "../assets/SVGs/html-5-svgrepo-com.svg";
import JavascriptIcn from "../assets/SVGs/js-svgrepo-com.svg"; 
import MySqlIcn from "../assets/SVGs/mysql-logo-svgrepo-com.svg"; 
import ReactIcn from "../assets/SVGs/react-javascript-js-framework-facebook-svgrepo-com.svg";
import TailwindIcn from "../assets/SVGs/tailwind-svgrepo-com.svg";
import TypescriptIcn from "../assets/SVGs/typescript-logo-svgrepo-com.svg";
import CssIcn from "../assets/SVGs/css-3-svgrepo-com.svg";
import NodejsIcn from "../assets/SVGs/nodejs-svgrepo-com.svg"
import MongodbIcn from "../assets/SVGs/mongodb-logo-svgrepo-com.svg"

const Stack = () => {
  const techStack = [
    {
      name: "HTML",
      path: HtmlIcn,
    },
    {
      name: "CSS",
      path: CssIcn,
    },
    {
      name: "Javascript",
      path: JavascriptIcn,
    },
    {
      name: "Typescript",
      path: TypescriptIcn,
    },
    {
      name: "React",
      path: ReactIcn,
    },
    {
      name: "NodeJS",
      path: NodejsIcn,
    },
    {
      name: "Tailwind",
      path: TailwindIcn,
    }, 
    {
      name: "MySql",
      path: MySqlIcn,
    },
    {
      name: "Mongodb",
      path: MongodbIcn,
    },
  ]; 
  return (
    <div className="w-full max-h-fit overflow-hidden flex justify-center py-6">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-red-500 text-xl uppercase font-semibold">
          Current Tech Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16">
          {techStack.map(({ name, path }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-gray-600 dark:text-gray-300 gap-6 shadow-md dark:shadow-red-500 p-6 rounded-xl hover:scale-[1.1] transition ease-in-out"
              >
                <img
                  src={path}
                  alt="/"
                  className="max-w-[60px] hover:scale-[1.1] transition ease-in-out"
                />
                <h1 className="text-lg">{name}</h1>
              </div>
            );
          })}
        </div>
        {/* <h1 className="text-red-500 text-xl uppercase font-semibold">
          Currently Learning
        </h1>
        <div className="grid grid-cols-2 gap-10 lg:gap-16">
          {learning.map(({ name, path }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-gray-600 dark:text-gray-300 gap-6 shadow-md dark:shadow-red-500  py-6 px-9 rounded-xl hover:scale-[1.1] transition ease-in-out"
              >
                <img
                  src={path}
                  alt="/"
                  className="max-w-[60px] hover:scale-[1.1] transition ease-in-out"
                />
                <h1 className="text-lg">{name}</h1>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Stack;
