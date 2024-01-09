import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='w-full text-white' style={{height:'8%'}}>
            <div className='w-11/12 mx-auto flex justify-between h-full items-center'>
              <span style={{fontFamily:'Popins'}} className='lg:text-3xl font-bold'></span>
              {/* <ul className='flex gap-4 list-none text-blue-500'>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
              </ul> */}
               <div className='flex gap-5'>
              <a href='https://github.com/arjunn2313'><FaGithub className='text-2xl'/></a> 
              <a href='https://www.linkedin.com/in/arjun-k-s-86aa59222'><FaLinkedin className='text-2xl'/></a> 
              <a href='https://www.instagram.com/ar_j__un/'><FaInstagram className='text-2xl'/></a> 
              <a href=''><FaFacebook className='text-2xl'/></a> 
               </div>
            </div>
    </div>
  )
}
