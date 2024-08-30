import React, { useState, useEffect } from "react";

import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/banners/header-banner-01.jpg", title: "Slide 1" },
    { image: "/banners/header-banner-02.jpg", title: "Slide 2" },
    { image: "/banners/header-banner-03.jpg", title: "Slide 3" },
    { image: "/banners/header-banner-04.jpg", title: "Slide 4" },
    { image: "/banners/header-banner-05.jpg", title: "Slide 5" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <section className="main-container flex justify-center">
      <div className="relative w-full h-[840px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        <div className="absolute bg-secondary bottom-[100px] left-1/2 transform -translate-x-1/2 flex space-x-2 rounded-full py-3 px-7">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-8-9 8-9"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;