import { FOOTER_SOCIALS_ICONS } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-sm py-6 px-4 sm:px-8 md:px-24 lg:px-48">
      <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-gray-600">
          <b>Registration Number:</b> F - 26660
        </p>
        <p className="text-gray-600">© 2024 Meeka Engineering. All rights reserved.</p>
        <div className="flex space-x-4">
          {FOOTER_SOCIALS_ICONS.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              aria-label={icon.title}
            >
              <img src={icon.icon} alt={icon.alt} width={32} height={32} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
