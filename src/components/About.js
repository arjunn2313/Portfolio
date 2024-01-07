import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";

export default function Aboutme() {
  return (
    <div className="">
      <h3 className="text-center text-2xl uppercase font-bold pt-2 font-nunito md:text-4xl">
        About me
      </h3>
      <div className="md:flex">
        <div className="flex justify-center items-center md:w-4/5 md:items-center md:pt-3 lg:w-1/2">
          <img
            src="assets\logo512.png"
            className="w-80 h-32 rounded-md sm:w-96 sm:h-44 md:w-4/5 md:h-64  lg:w:5/4 lg:h-fit"
          />
        </div>
        <div className="text-start p-2 flex flex-col gap-2  sm:pt-4 sm:gap-4 md:w-4/5 lg:w-1/2 ">
          <h4 className="font-bold text-lg font-nunito lg:text-center">
            Full Stack Developer
          </h4>
          <span className="text-gray-600 font-serif lg:leading-8 lg:w-4/5 lg:mx-auto">
            Hello there! 👋 I'm Arjun, a passionate MERN (MongoDB, Express.js,
            React.js, Node.js) stack developer currently immersed in a dynamic
            internship. With a keen interest in creating robust and scalable web
            applications, I thrive on turning ideas into fully functional,
            user-friendly experiences.
          </span>
          <span className="text-gray-600 font-serif lg:leading-8 lg:w-4/5 lg:mx-auto">
            In my current internship, I've had the opportunity to dive deep into
            the world of web development. Working on a variety of projects, I've
            honed my skills in the MERN stack, constantly pushing boundaries to
            deliver solutions that meet both user and business needs.
          </span>
        </div>
      </div>
      <div className="md:p-6 lg:flex lg:flex-col lg:gap-2 lg:mt-3 ">
        {/* <h3 className="font-bold text-lg text-center mb-4 font-nunito md:text-4xl md:mb-8">
          Skills
        </h3> */}
        <div className="flex justify-center gap-6 mb-4 md:gap-9 md:mb-8 lg:justify-evenly">
          <FaReact
            className="text-blue-500 text-5xl md:text-7xl lg:text-3xl animate-pulse"
            title="React JS"
          />
          <GrNode className="text-green-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <SiMongodb className="text-green-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <SiExpress className="text-blue-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <SiTailwindcss className="text-blue-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
        </div>

        <div className="flex justify-center gap-6 md:gap-9 lg:justify-evenly">
          <IoLogoJavascript className="text-yellow-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <FaBootstrap className="text-blue-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <FaCss3Alt className="text-blue-700 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <TiHtml5 className="text-gray-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
          <FaGithub className="text-black-500 text-5xl md:text-7xl lg:text-5xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
