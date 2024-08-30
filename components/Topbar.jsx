
import React from "react";

const Topbar = () => {
  return (
    <footer className="bg-primary py-4 px-4 sm:px-8 md:px-24 lg:px-36 xl:px-48 border-b-8 border-secondary border-solid">
      <div className="max-container ">
        <div className="">
          <div className="flex gap-x-4 justify-around md:justify-end">
            <div className="flex items-center gap-x-2"><img src="/socials/icon-email-top.png" alt="email" width={32} height={32}></img><div className="text-white">Info@MeekaEng.com</div></div>
            <div className="flex items-center gap-x-2"><img src="/socials/icon-phone-top.png" alt="phone" width={32} height={32}></img><div className="text-white">361-434-0654</div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Topbar;
