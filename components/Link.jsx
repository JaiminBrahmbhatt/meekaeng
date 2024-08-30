import React from "react";
import Link from "next/link";

const CustomLink = ({ children, to, variant, isDisabled }) => {
  return (
    <Link
      className={`${
        isDisabled ? "text-silver cursor-default pointer-events-none" : variant
      } group transition duration-300`}
      href={to}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : undefined}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px]"></span>
    </Link>
  );
};

export default CustomLink;
