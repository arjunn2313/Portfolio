import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  const project = [
    {
      id: 1,
      name: "Scope India",
      image: "assets/Screenshot (13).png",
      description:
        "Aim to provide a platform for students to access various course  offered by the institute, register, validate their accounts, and enroll into the course.",
      link: "https://github.com/arjunn2313/SCOPE-INDIA-Client.git",
      style:'CSS'
    },
    {
      id: 2,
      name: "Hospital Manager",
      image: "assets/Screenshot (20).png",
      description:
        "The Hospital Manager is an admin application designed to efficiently manage employees, department heads, and departments within a hospital setting.",
      link: "https://github.com/arjunn2313/HospitalManager.git",
      style:'BootStrap'
    },
    {
      id: 3,
      name: "Booking.com",
      image: "assets/Screenshot (21).png",
      description:
        "Developed a hotel booking platform from scratch using the MERN stack, enabling users to search for hotels, view room details, and make reservations. Implemented features fo userauthentication, real-time updates, and seamless communication with the backend.",
      link: "https://github.com/arjunn2313/Reservation-UI.git",
      style:'CSS'
    },
  ];

  return (
    <div className="text-white h-full flex flex-col gap-3 mb-2">
      <h3 className="text-center text-2xl font-nunito pt-2 font-semibold">
        Projects
      </h3>
      {/* PROJECT - 1 */}
      {project.map((p) => (
        <div className="w-11/12 mx-auto pt-5 bg-gray-800 rounded-xl pb-5">
          <img
            src={p.image}
            alt="scope"
            className="w-3/4 mx-auto rounded-md"
          />
          <div className="flex flex-col justify-center items-start w-3/4 mx-auto">
            <h5 className="text-lg pt-2 lg:4xl">{p.name}</h5>
            <p className="text-sm text-gray-300 font-sans text-start pt-2 lg:text-lg">
              {p.description}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center items-center pt-2">
            <span className="px-1 bg-gray-500 rounded-full">React</span>
            <span className="px-1 bg-gray-500 rounded-full">Node</span>
            <span className="px-1 bg-gray-500 rounded-full">Express</span>
            <span className="px-1 bg-gray-500 rounded-full">MongoDB</span>
            <span className="px-1 bg-gray-500 rounded-full">{p.style}</span>
            <span className="px-1 bg-gray-500 rounded-full">Redux</span>
          </div>
          <div className="flex justify-center pt-3">
            <a href={p.link}>
            <button className="py-2 flex items-center justify-center gap-2 px-3 bg-black border-1 rounded-md">
              View Code <FaGithub />
            </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
