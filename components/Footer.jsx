import { FOOTER_SOCIALS_ICONS } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container bg-white text-sm py-8 px-4 sm:px-8 md:px-24 lg:px-48 overflow-hidden">
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="flex flex-col gap-4 justify-between md:flex-row">
          {FOOTER_SOCIALS_ICONS.map((icon) => (
            <div key={icon.id} className="flex items-center gap-x-2 ">
              <img src={icon.icon} alt={icon.alt} width={32} height={32} />
              <div>{icon.title}</div>
            </div>
          ))}
        </div>
        <div>
          <p><b> Registration Number: </b> F - 26660</p>
        </div>
        <div>
          <p>@ 2024 Meeka Engineering. All rights reserved</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
