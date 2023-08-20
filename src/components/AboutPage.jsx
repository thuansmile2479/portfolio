import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../App";
import Resume from "../assets/cvndt.pdf";
import AboutImg from "../assets/aboutimg.png";
import { IoLocationOutline } from "react-icons/io5"
import { PiPhone } from "react-icons/pi"
import { MdOutlineCalendarMonth } from "react-icons/md"
import { LuMail } from "react-icons/lu"
import { FaFacebook } from "react-icons/fa"

const AboutPage = () => {
    const [ref, inView] = useInView();

    return (
        <div
            id="about"
            className="text-center lg:text-start overflow-hidden w-full max-h-fit lg:h-[500px] flex justify-center dark:text-white"
        >
            <div className="flex flex-col-reverse items-center p-6 lg:flex-row gap-6">
                <div className="flex flex-col gap-4 max-w-2xl mt-2 items-center lg:items-start">
                    <h6 className="text-red-500 text-xl uppercase font-semibold">
                        About Me
                    </h6>
                    <h1 className="text-3xl font-semibold">
                        A Passionate Front-End Developer📍
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Although I have no real work experience, working on small projects has also helped me understand the basics: HTML, CSS, Javascript and how to work with the React framework.
                    </p>
                    <a
                        href={Resume}
                        download
                        className="bg-[#242424] text-gray-300 dark:text-gray-300 w-full sm:w-[25%] py-4 mt-4 rounded-full flex justify-center items-center gap-2 shadow-md shadow-gray-300 dark:shadow-red-500 hover:shadow-lg  transition ease-in-out duration-200"
                    >
                        <h1 className="text-sm font-semibold uppercase">Download CV</h1>
                    </a>
                </div>

                <div className="flex flex-col gap-4 max-w-2xl mt-2 items-center lg:items-start">
                    <div className="flex text-gray-600 dark:text-gray-300 text-lg  ">
                        <IoLocationOutline size={30} className="px-1"/>
                        Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội
                    </div>
                    <div className="flex text-gray-600 dark:text-gray-300 text-lg ">
                        <PiPhone size={30} className="px-1"/>
                        0842755626
                    </div>
                    <div className="flex text-gray-600 dark:text-gray-300 text-lg ">
                        <MdOutlineCalendarMonth size={30} className="px-1"/>
                        07/09/2003
                    </div>
                    <div className="flex text-gray-600 dark:text-gray-300 text-lg ">
                        <LuMail size={30} className="px-1"/>
                        duythuan2479@gmail.com
                    </div>
                    <div className="flex text-gray-600 dark:text-gray-300 text-lg ">
                        <FaFacebook size={30} className="px-1"/>
                        https://www.facebook.com/duythuaanj
                    </div>
                </div>
                {/* <motion.img
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 1 }}
                    src={AboutImg}
                    alt="/"
                    className="w-[350px] rounded-full animate-profile__animate"
                /> */}
            </div>
        </div>
    );
};

export default AboutPage;
