import React from "react";
 

export default function Hero() {
  const cv= "https://drive.google.com/file/d/1U8_YDVzfl0ssEsRmAXi1DAaIx6AiAbDl/view?usp=drive_link"

  
  return (
    <div
      style={{ height: "92%" }}
      className="text-white flex flex-col justify-between items-center md:flex-row md:justify-around overflow-hidden "
    >
      <div className="flex flex-col gap-2 sm:gap-7 pt-3 md:w-1/2 md:gap-6 lg:p-0 lg:g-5" >
        <div className="flex flex-col px-3 gap-3 sm:gap-7 md:gap-7 ">
          <span style={{ fontFamily: "Popins" }} className="text-2xl text-center md:text-5xl lg:text-6xl lg:text-start">
            Hi, I'm ARJUN,
          </span>
          <span 
          className="text-5xl text-center font-nunito font-bold sm:text-center sm:-tracking-tighter sm:text-6xl md:text-start md:text-7xl lg:text-8xl lg:font-extrabold" >
            Full Stack
          </span>
          <span
           className="text-5xl text-center font-nunito font-bold sm:text-center sm:-tracking-tighter sm:text-6xl md:text-start md:text-7xl lg:text-8xl">
            Developer
          </span>
        </div>
        <p className="text-center  text-gray-200">
          MERN stack developer with a keen interest in exploring new
          technologies and domains
        </p>
        <div className="flex justify-center items-center p-3 sm:p-10">
          <a href={cv}>
          <button className="p-2 bg-red-600 rounded-xl sm:rounded-md md:px-5 lg:px-8 lg:rounded-lg"  
          >Dowload CV</button></a>
        </div>
      </div>
      <div className="lg:w-2/5">
        <img
          src="https://appsembler.com/wp-content/uploads/2023/07/beemarrie_developer_marketing_computer_strategy_deda1786-e5df-4461-957a-01d758880ac0.png"
          className="w-80 rounded-full md:w-96 lg:w-11/12"
        />
      </div>
    </div>
  );
}
