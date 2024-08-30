import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col text-center bg-white py-8 px-4 sm:px-8 md:px-24 lg:px-48 relative" id="about">
      {/* <div 
        className="absolute -top-2 left-0 w-full h-[10px] bg-repeat"
        style={{
          backgroundImage: "url('/design-blue-top.png')",
          backgroundSize: "auto",
        }}
      ></div> */}
      <div className="max-container relative z-20">
        <div className="flex items-center justify-center mb-8">
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
          </svg>
          <h2 className="text-primary mx-2 font-medium">About US</h2>
          <svg width="18" height="18" viewBox="0 0 16 16" className="ml-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 16 16" className="ml-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
          </svg>
        </div>
        <div className="flex justify-start mb-8">
          <div className="text-black text-left text-xl">
            {/* cspell:disable-next-line */}
            Meeka Engineering Services is a licensed engineering firm; we understand that every client&apos;s process engineering needs are unique and require diverse, robust approaches. As such, we offer a breadth of services, ensuring that we address all your needs, from design to implementation and beyond. We aim to finish the job on time, under budget, and meet or exceed your expectations. 
          </div>
        </div>
      </div>
      {/* <div 
        className="absolute -bottom-2 left-0 w-full h-[11px] bg-repeat"
        style={{
          backgroundImage: "url('/design-blue-bottom.png')",
          backgroundSize: "auto",
        }}
      ></div> */}
      <div className="absolute -bottom-32 -right-24 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div>
      <div className="absolute -bottom-40 right-12 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
        </svg>
      </div>
      <div className="absolute -bottom-32 -left-16 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div>
      <div className="absolute -bottom-40 left-16 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;