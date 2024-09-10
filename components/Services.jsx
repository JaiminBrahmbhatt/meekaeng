"use client";
import React from "react";
import { SERVICES_INFO } from "@/constants";

const Services = () => {
  return (
    <section className="bg-white py-12" id="services">
      {/* Container */}
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10">
        {/* Title and Description */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
            Services
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg lg:text-xl">
            Our custom solutions are crafted to address your unique business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 md:gap-10">
          {SERVICES_INFO.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col bg-white border border-gray-300 rounded-xl p-6 shadow-lg hover:border-green-500 transition-all
              ${index === 0 ? "md:row-span-2" : ""}`} // The first card spans 2 rows
              style={{ minHeight: "300px" }} // Ensures consistent height
            >
              {/* Service Title */}
              <h2 className="text-xl font-semibold mb-4 md:text-2xl">
                {service.name}
              </h2>
              {/* Description */}
              <div className="text-gray-600 text-sm md:text-base lg:text-lg">
                {service.text.description.map((desc, index) => (
                  <div key={index} className="flex items-baseline mb-2">
                    <span className="mr-2 text-green-500">✓</span>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
