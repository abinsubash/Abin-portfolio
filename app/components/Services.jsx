import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">
        I am a MERN stack developer from India. I have completed multiple projects and specialize in creating beautiful, responsive websites with modern features and clean UI/UX designs. My services include full-stack web development using React, Node.js, MongoDB, and Express.js, as well as building custom APIs, integrating Firebase, deploying applications, and designing user-friendly interfaces using Tailwind CSS and Figma.
      </p>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-10">
        {serviceData.map(({icon, title, description, link}, index) => (
          <div 
            className="border border-gray-400 rounded-lg px-6 sm:px-8 py-8 sm:py-12 
              hover:shadow-lg hover:bg-gray-50 cursor-pointer 
              hover:-translate-y-1 duration-500 group" 
            key={index}
          >
            <Image src={icon} alt="" className="w-8 sm:w-10 transition-transform group-hover:scale-110" />
            <h3 className="text-lg my-4 text-gray-700 group-hover:text-black">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 mb-4">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
              Read more
              <Image 
                alt="" 
                src={assets.right_arrow} 
                className="w-3 sm:w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default Services;
