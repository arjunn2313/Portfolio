import React from "react";

export default function Project() {
  return (
    <div className="text-white">
      <h2 className="text-center pt-2 text-2xl font-nunito">My Projects</h2>
      <div className="flex flex-col gap-5 mt-3 md:flex-row md:flex-wrap md:gap-4">
        {/* PROJECT 1 */}
        <div className="w-11/12 h-48 mx-auto bg-gray-900 md:w-1/3 flex md:h-64">
          <div className="w-full  h-full flex flex-col justify-center items-center gap-2 md:gap-7 ">
            <h2 className="text-center text-2xl">Scope India</h2>
            <p className="text-md text-gray-300 text-start px-3 font-serif">
              Aim to provide a platform for students to access various courses
              offered by the institute, register, validate their accounts, and
              enroll into the course.
            </p>
            <div className="flex gap-3">
              <span className="px-3 bg-gray-500 rounded-full">React</span>
              <span className="px-3 bg-gray-500 rounded-full">MongoDB</span>
              <span className="px-3 bg-gray-500 rounded-full">Express</span>
              <span className="px-3 bg-gray-500 rounded-full">Redux</span>
            </div>
          </div>
           
        </div>
        {/* PROJECT 2 */}
        <div className="w-11/12 h-48 mx-auto bg-gray-800 md:w-1/3 md:h-64">
          <div className="w-full   h-full flex flex-col justify-center items-center gap-2 md:gap-7">
            <h2 className="text-center text-2xl">Hospital Manager</h2>
            <p className="text-md text-gray-300 text-start px-3 font-serif">
              Aim to provide a platform for students to access various courses
              offered by the institute, register, validate their accounts, and
              enroll into the course.
            </p>
            <div className="flex gap-3">
              <span className="px-3 bg-gray-500 rounded-full">React</span>
              <span className="px-3 bg-gray-500 rounded-full">MongoDB</span>
              <span className="px-3 bg-gray-500 rounded-full">Express</span>
              <span className="px-3 bg-gray-500 rounded-full">Redux</span>
            </div>
          </div>
        </div>
        {/* PROJECt 3 */}
        <div className="w-11/12 h-44 mx-auto bg-gray-900 md:h-64 md:w-1/3">
        <div className="w-full   h-full flex flex-col justify-center items-center gap-2 md:gap-7"> 
            <h2 className="text-center text-2xl">Booking.Com</h2>
            <p className="text-md text-gray-300 text-start px-3 font-serif">
              Aim to provide a platform for students to access various courses
              offered by the institute, register, validate their accounts, and
              enroll into the course.
            </p>
            <div className="flex gap-3">
            <span className="px-3 bg-gray-500 rounded-full">React</span>
            <span className="px-3 bg-gray-500 rounded-full">MongoDB</span>
            <span className="px-3 bg-gray-500 rounded-full">Express</span>
            <span className="px-3 bg-gray-500 rounded-full">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
