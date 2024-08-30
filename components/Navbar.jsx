"use client";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -0; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-36 xl:px-48 flex flex-col z-50 shadow-md relative">
      <div className="w-full">
        <nav className="max-container bg-white flex justify-between items-center py-4">
          <Image src="/logo.jpg" alt="Logo" width={400} height={300} className="hidden sm:block"/>
          <ul
            className={`lg:flex ${
              isOpen
                ? "flex flex-col absolute top-full left-0 right-0 items-center justify-center w-full bg-white shadow-md z-40 transition-all"
                : "hidden lg:flex lg:flex-row"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="py-2 lg:py-0">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className={`text-black text-lg font-semibold hover:text-secondary transition-colors ${
                    link.id !== 'about' ? 'border-l-0 border-black px-2 lg:border-l-2' : 'border-l-0 px-2'
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle button */}
          <button
            className="lg:hidden text-black p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;