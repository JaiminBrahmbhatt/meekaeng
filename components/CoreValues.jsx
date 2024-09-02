import { COMMUNITY_CARDS_INFO } from "@/constants";
import React from "react";
import CommunityCard from "./CommunityCard";

const CoreValues = () => {
  return (
    <section className="bg-white" id="feature">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-center mb-8">
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path
              d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
              fill="#224194"
            />
          </svg>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path
              d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
              fill="#88c64b"
            />
          </svg>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mx-2">
            Core Values
          </h1>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path
              d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
              fill="#88c64b"
            />
          </svg>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path
              d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
              fill="#224194"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {COMMUNITY_CARDS_INFO.map((card) => (
            <CommunityCard key={card.id}>
              <div className="space-y-3 text-center">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <img src={card.icon} alt={card.alt} width={72} height={72} />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {card.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  {card.text}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </CommunityCard>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-32 -right-24 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path
            d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
            fill="#224194"
          />
        </svg>
      </div>
      <div className="absolute -bottom-40 right-12 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path
            d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
            fill="#88c64b"
          />
        </svg>
      </div>
      <div className="absolute -bottom-32 -left-16 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path
            d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
            fill="#224194"
          />
        </svg>
      </div>
      <div className="absolute -bottom-40 left-16 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path
            d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z"
            fill="#88c64b"
          />
        </svg>
      </div>
    </section>
  );
};

export default CoreValues;
