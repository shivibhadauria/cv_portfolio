import React, { useState } from 'react';
import { FaLinkedin, FaGithubSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className=" m-5 lg:m-20 p-5 rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">CONTACT ME</h2>
        <p className="text-white">I'd love to hear from you! Your feedback matters. Feel free to drop a message.</p>
      </div>

      <div className="max-w-lg mx-auto bg-[url('./assets/navbg.jpeg')] p-8 rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit} >
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500 bg-white bg-opacity-20 text-white"
              placeholder="Your Name"
              
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 bg-white bg-opacity-20 text-white"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 bg-white bg-opacity-20 text-white"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="flex mt-5 space-x-4 cursor-pointer justify-center">
            <a href="https://www.linkedin.com/in/shivi-b-42606b226/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="border-4 border-transparent rounded-lg hover:border-gray-800 text-white hover:text-gray-400 transition duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/shivibhadauria" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={40} className="border-4 border-transparent rounded-lg hover:border-gray-800 text-white hover:text-gray-400 transition duration-300 ease-in-out" />
          </a>
          <a href="mailto:shivi.singh.bhadauria@gmail.com">
            <MdMarkEmailUnread size={40} className="border-4 border-transparent rounded-lg hover:border-gray-800 text-white hover:text-gray-400 transition duration-300 ease-in-out" />
          </a>
                <FaPhoneSquareAlt size={40} className="border-4 border-transparent rounded-lg hover:border-gray-800 text-white hover:text-gray-400 transition duration-300 ease-in-out"/>
            </div>
      </div>
    </div>
  );
}

export default Contact;
