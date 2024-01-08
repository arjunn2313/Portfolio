import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";

export default function ContactMe() {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (!contact.email) {
      error.email = "*Enter your email address";
    }
    if (!contact.subject) {
      error.subject = "*Enter Subject";
    }
    if (!contact.message) {
      error.message = "*Enter Message";
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      try {
        axios.post("https://porfolio-server-djqe.onrender.com/contact",contact).then((res)=>{
          console.log(res.data)
          error.message = 'Thanks for the response'
          setMessage(error)
          setContact({
            email : "",
            message : "",
            subject : ""
          })
        })
         
      } catch (error) {
        console.log(error)
        error.ermessage = 'Something went wrong please try again after sometime'
        setMessage(error)
        setContact({
          email : "",
          message : "",
          subject : ""
        })
      }
    }
  };

  return (
    <div className="relative h-full">
      <h3 className="text-center text-2xl font-nunito pt-2 font-semibold">
        Contact Me
      </h3>
      <p className="text-center text-gray-400 font-serif">
        You can directly contact me through arjunnks123@gmail.com
      </p>
      <h3 className="text-center text-4xl font-thin mt-3">OR</h3>
      <div className="w-4/5 mx-auto my-auto md:w-4/6 lg:w-1/2">
       {message.message && <p className="text-center text-green-800 font-bold">{message.message}</p>}
       {message.ermessage && <p className="text-center text-red-800 font-bold">{message.ermessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              className="border-2 outline-none p-2"
              value={contact.email}
              name="email"
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
            {errors.email && (
              <span className="text-red-600">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <label>Subject</label>
            <input
              type="text"
              className="border-2 p-2 outline-none"
              value={contact.subject}
              name="subject"
              onChange={(e) =>
                setContact({ ...contact, subject: e.target.value })
              }
            />
            {errors.subject && (
              <span className="text-red-600">{errors.subject}</span>
            )}
          </div>
          <div className="flex flex-col gap-1  pt-2">
            <label>Message</label>
            <textarea
              className="border-2 h-20 md:h-40 lg:h-32 outline-none p-2"
              value={contact.message}
              name="message"
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
            ></textarea>
            {errors.message && (
              <span className="text-red-600">{errors.message}</span>
            )}
          </div>
          <div className="flex justify-center items-center pt-4">
            <button
              className="py-2 px-10 bg-black rounded-sm text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="bg-black absolute bottom-0 w-full p-1 text-white flex justify-around items-center">
        <h6>Ⓒ Copyright</h6>
        <div className="flex gap-5">
          <a href="https://github.com/arjunn2313">
            <FaGithub className="text-xl" />
          </a>
          <a href="">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="">
            <FaInstagram className="text-xl" />
          </a>
          <a href="">
            <FaFacebook className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
