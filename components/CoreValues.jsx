import { COMMUNITY_CARDS_INFO } from "@/constants";
import React from "react";
import CommunityCard from "./CommunityCard";

const CoreValues = () => {
  return (
    <section className="flex flex-col justify-center text-center mb-8 bg-gray-100 px-4 sm:px-8 md:px-24 lg:px-48 py-8 relative" id="feature">
      {/* <div 
        className="absolute -top-2 left-0 w-full h-[12px] bg-repeat"
        style={{
          backgroundImage: "url('/design-green-top.png')",
          backgroundSize: "auto",
        }}
      ></div> */}
      <div className="flex items-center justify-center mb-8">
        <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
        <h2 className="text-primary mb-2 mx-2 font-medium">
          Core Values
        </h2>
        <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
        </svg>
      </div>
      <div className="max-container">
        <div className="grid grid-cols-1 justify-between mx-auto xl:grid-cols-3 ">
          {COMMUNITY_CARDS_INFO.map((card) => (
            <CommunityCard key={card.id}>
              <div className="relative mb-8">
                <img src={card.icon} alt={card.alt} width={72} height={72} />
                <div className="w-[50px] h-[50px] bg-primary absolute -top-1 -right-4 -z-10 rounded-lg rounded-br-2xl"></div>
              </div>
              <p className="regular_3 text-black text-left text-xl font-medium"><b>{card.title}</b>{card.text}</p>
            </CommunityCard>
          ))}
        </div>
      </div>
      {/* <div 
        className="absolute -bottom-2 left-0 w-full h-[12px] bg-repeat"
        style={{
          backgroundImage: "url('/design-green-bottom.png')",
          backgroundSize: "auto",
        }}></div> */}
      <div className="absolute -bottom-32 -right-24 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194"/>
        </svg>
      </div>
      <div className="absolute -bottom-40 right-12 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div>
      <div className="absolute -bottom-32 -left-16 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
        </svg>
      </div>
      <div className="absolute -bottom-40 left-16 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div>
    </section>
  );
};

export default CoreValues;
