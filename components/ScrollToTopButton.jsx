"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scroll = { image: "/icons/up-arrow.png", title: "Slide 1" }
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50"
          aria-label="Scroll to top"
        >
            <Image src={scroll.image} alt="Scroll to top" width={40} height={40}/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;