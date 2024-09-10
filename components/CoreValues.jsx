import { COMMUNITY_CARDS_INFO } from "@/constants";
import React from "react";

const CoreValues = () => {
  return (
    <section className="bg-white py-12">
      {/* Container */}
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10">
        {/* Title and Description */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
            Our Core Values
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Our core principles that guide every action we take.
          </p>
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {COMMUNITY_CARDS_INFO.map((card) => (
            <div
              key={card.id}
              className="flex-col flex gap-4 border border-gray-300 rounded-xl transition-transform duration-300 hover:scale-105 transform ease-out shadow-[0_3px_8px]_[rgba(var(--gray-9), 1)]"
            >
              <div className="flex-col flex items-center gap-6 p-10">
                <img
                  src={card.icon}
                  alt={card.alt}
                  className="inline-block h-16 w-16 object-cover rounded-full"
                />
                <h5 className="text-xl font-bold md:text-2xl">{card.title}</h5>
              </div>
              <div className="bg-blue-50 p-10 border-gray-300 border-t rounded-b-xl ">
                <p className="text-gray-500 text-sm md:text-base md:text-lg lg:text-xl">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
