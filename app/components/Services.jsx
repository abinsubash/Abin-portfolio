import Image from "next/image";
import React from "react";
import { assets, serviceData } from "../../assets/assets";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-background"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-primary">
        What I Offer
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-foreground">
        My Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base text-muted-foreground">
        I'm Abin Subash, a passionate MERN stack developer from Kozhikode,
        Kerala. With hands-on experience from Brototype's intensive training,
        I've built projects like an OLX Clone and Netflix Clone, specializing in
        responsive web applications, real-time features, and clean UI/UX
        designs. I use React, Node.js, MongoDB, Express.js, Firebase, and
        Tailwind CSS to create modern, efficient solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            className="border border-border rounded-lg px-6 sm:px-8 py-8 sm:py-12 
              hover:shadow-xl hover:bg-accent cursor-pointer 
              hover:-translate-y-1 duration-500 group"
            key={index}
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              width={40}
              height={40}
              unoptimized
              className="w-10 sm:w-12 transition-transform group-hover:scale-110 dark:invert"
            />

            <h3 className="text-lg my-4 text-foreground group-hover:text-primary font-semibold">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-5 mb-4">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
