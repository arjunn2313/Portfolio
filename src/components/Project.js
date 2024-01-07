import React from "react";

export default function Project() {
  return (
    <div className="text-white">
      <h2 className="text-center pt-2 text-2xl font-nunito">My Projects</h2>
      <div className="flex flex-col gap-5 mt-3 overflow-hidden">
        <div className="w-11/12 h-44 mx-auto bg-gray-900 flex">
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-2"> 
            <h2 className="text-center">Scope India</h2>
            <p className="text-sm text-gray-300 text-start px-3">
              Aim to provide a platform for students to access various courses
              offered by the institute, register, validate their accounts, and
              enroll into the course.
            </p>
          </div>
          <div  className="flex items-center justify-end w-1/2 overflow-hidden">
                <img src="assets\Screenshot (13).png" className="w-4/5 h-3/4"/>
          </div>
        </div>
        <div className="w-11/12 h-44 mx-auto bg-gray-800">uj</div>
        <div className="w-11/12 h-44 mx-auto bg-gray-900">uj</div>
      </div>
    </div>
  );
}
