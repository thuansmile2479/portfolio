import React from "react";
import { BiCopyright } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="transition ease-in-out w-full text-black dark:text-white bg-gray-100 dark:bg-black p-6 flex flex-col gap-2 text-sm">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={Logo} alt="/" className="w-[50px]" />
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <h1 className="flex items-center font-semibold gap-1">
              <BiCopyright size={15} />
              Nguyen Duy Thuan
            </h1>
          </div>
         
          <div className="flex justify-center items-center gap-2">
            <a href="https://github.com/thuansmile2479" target="_blank">
              <BiLogoGithub size={20} />
            </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
