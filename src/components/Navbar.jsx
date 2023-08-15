import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        setNav(nav);
        return;
      }
    };
    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="transition ease-in-out shadow-md sticky top-0 flex justify-between md:justify-between lg:justify-evenly items-center h-20 w-full mx-auto px-4 text-black  bg-white dark:bg-[#242424] dark:text-white z-30">
      <Link
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className="group text-3xl font-bold cursor-pointer"
      >
        <span className="text-red-500 group-hover:text-black dark:group-hover:text-white transition ease-in-out">
          &lt;
        </span>
        <span className="group-hover:text-red-500 transition ease-in-out">
          ndt
        </span>
        <span className="text-red-500 group-hover:text-black dark:group-hover:text-white transition ease-in-out">
          {" "}
          /&gt;
        </span>
      </Link>
      <ul className="hidden md:flex justify-end md:w-[30%] uppercase">
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="p-3 hover:text-red-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
        >
          Contact
        </Link>
        <div
          onClick={toggleTheme}
          className="flex justify-center items-center cursor-pointer"
        >
          <CgDarkMode size={30} className="m-2" />
        </div>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      {/* <div
        className={
          nav
            ? "flex flex-col items-center py-6 fixed left-0 top-0 h-full w-[75%] border-r bg-white dark:bg-[#242424] dark:text-white dark:border-r-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="group text-3xl font-bold cursor-pointer "
        >
          <span className="text-red-500 group-hover:text-black dark:group-hover:text-white transition ease-in-out">
            &lt;
          </span>
          <span className="group-hover:text-red-500 transition ease-in-out">
            bnb
          </span>
          <span className="text-red-500 group-hover:text-black dark:group-hover:text-white transition ease-in-out">
            {" "}
            /&gt;
          </span>
        </Link>
        <ul className="uppercase p-4 flex flex-col text-center">
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-red-500 rounded-xl font-semibold cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-red-500 rounded-xl font-semibold cursor-pointer "
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-red-500 rounded-xl font-semibold cursor-pointer "
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleNav}
            className="p-3 hover:text-red-500 rounded-xl font-semibold cursor-pointer "
          >
            Contact
          </Link>
          <div
            onClick={toggleTheme}
            className="flex justify-center items-center cursor-pointer"
          >
            <CgDarkMode size={30} className="m-2" />
          </div>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
