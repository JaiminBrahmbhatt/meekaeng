
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="max-container flex flex-col items-center gap-7 px-4 bg-silver pb-5">
      <h1 className="text-dark_grey">Whoops!</h1>
      <p className="text-grey">404 Page Not Found</p>
      <div className="bg-white p-2 w-fit rounded-sm border shadow-md">
      </div>
      <h2 className="text-dark_grey text-center">
        Looks like this page went on vacation.
      </h2>
      <p className="text-grey">
        Try our{" "}
        <Link href={"/"} className="underline text-amber-700">
          homepage
        </Link>{" "}
        instead.
      </p>
    </section>
  );
};

export default NotFound;
