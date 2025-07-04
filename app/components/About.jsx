import { assets, infoList, toolsData } from "@/assets/assets.js";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Interduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-29 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m a self-taught full-stack web developer with a strong foundation
            in the MERN stack (MongoDB, Express.js, React, Node.js) and hands-on
            experience working with modern frameworks like Next.js. Since
            completing my higher secondary education, I’ve built and deployed
            various real-world projects including e-commerce websites, social
            media clones, and course platforms. I follow best practices such as
            the MVC and repository architecture for clean, scalable code and
            maintainability. I'm also experienced with Firebase, Tailwind CSS,
            and Git. I'm passionate about continuous learning, improving my
            problem-solving skills, and strengthening my communication abilities
            to grow as a confident and effective developer.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {infoList.map(({icon, iconDark, title, description}, index) => (
                <li 
                    key={index} 
                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                    transition-all duration-300 hover:shadow-lg hover:border-gray-600 
                    hover:-translate-y-1 hover:bg-gray-50 group"
                >
                    <Image 
                        className="w-7 mt-3 transition-transform group-hover:scale-110" 
                        src={icon} 
                        alt={title}
                    />
                    <h3 className="my-4 font-semibold text-gray-700 group-hover:text-black">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-800">
                        {description}
                    </p>
                </li>
            ))}
          </ul><h4 className="my-6 text-gray-700 font-Ovo">Tool I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool,index)=>(
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500" key={index}>
                    <Image src={tool} alt="Tool" className="w-5 sm:w-7"/>
                </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
};

export default About; 
