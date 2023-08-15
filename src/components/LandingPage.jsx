import React from "react";
import Personal from "../assets/personal.jpg";
import { AiFillGithub, AiFillHtml5, AiFillContacts } from "react-icons/ai";
import { 
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft, fadeIn } from "../App";
import { PiHandWavingFill } from "react-icons/pi";

const LandingPage = () => {
  const [ref, inView] = useInView();

  return (
    <div
      id="home"
      className="overflow-hidden transition ease-in-out w-full max-h-fit md:h-screen py-16 px-4 flex flex-row items-center bg-white dark:bg-[#242424] dark:text-white"
    >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-reverse p-2 md:mt-[-80px]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <img
            className="animate-profile__animate order-first w-[250px] mx-auto my-4 border-white md:w-[350px] dark:border-[#242424]"
            src={Personal}
            alt="/"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center">
            <div className="text-5xl font-semibold flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start items-center gap-1 text-center">
              <h1 className="">Nguyen Duy Thuan</h1>
              <PiHandWavingFill className="text-red-500" />
            </div>
            <div className="flex justify-center lg:justify-start items-center text-gray-600 dark:text-gray-300  gap-6 mt-4">
              <h1 className="text-lg font-semibold">Front-end Developer</h1>
            </div>

            <p className="py-7 text-lg text-gray-600 dark:text-gray-300 text-center lg:text-start">
              I'm a dedicated developer with a keen eye for detail and a passion
              for collaboration, I strive to create seamless digital experiences
              that exceed client expectations.
            </p>
            <div className="flex flex-row gap-4 mb-9 justify-center lg:justify-start items-center">
              <a href="https://github.com/thuansmile2479" target="_blank">
                <AiFillGithub
                  size={40}
                  className="hover:scale-125 transition ease-in-out"
                />
              </a>
              <a
                href="https://static.topcv.vn/cvs/10d2b71a3012e89b6a9fd7c76437e01e.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
              >
                <AiFillContacts
                  size={40}
                  className="hover:scale-125 transition ease-in-out"
                />
              </a>
              
            </div>
            <div className="flex flex-row gap-4 flex-wrap justify-center lg:justify-start items-center">
              <AiFillHtml5
                size={40}
                className="hover:scale-125 transition ease-in-out"
              />
              <BiLogoJavascript
                size={40}
                className="hover:scale-125 transition ease-in-out"
              />
              <BiLogoCss3
                size={40}
                className="hover:scale-125 transition ease-in-out"
              />
              <BiLogoReact
                size={40}
                className="hover:scale-125 transition ease-in-out"
              />
              <BiLogoTailwindCss
                size={40}
                className="hover:scale-125 transition ease-in-out"
              />
              <BiLogoNodejs
                size={40}
                className="hover:scale-125 transition ease-in-out"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
