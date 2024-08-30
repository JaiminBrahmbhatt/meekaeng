
import React from "react";

const Topbar = () => {
  return (
    <footer className="bg-primary py-4 px-4 sm:px-8 md:px-24 lg:px-36 xl:px-48 border-b-8 border-secondary border-solid">
      <div className="max-container ">
        <div className="">
          <div className="flex gap-x-4 justify-around md:justify-end">
          <div className="flex items-center gap-x-2">
            <img src="/socials/icon-email-top.png" alt="email" width={32} height={32}></img>
            <a href="mailto:Info@MeekaEng.com" className="text-white">Info@MeekaEng.com</a>
          </div>
          <div className="flex items-center gap-x-2">
            <img src="/socials/icon-phone-top.png" alt="phone" width={32} height={32}></img>
            <a href="tel:+13614340654" className="text-white">361-434-0654</a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Topbar;
