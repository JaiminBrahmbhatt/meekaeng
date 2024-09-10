import React from "react";

const Customer = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-8 md:px-24 lg:px-48">
      <div className="max-container">
        <div className="flex flex-col justify-between gap-4 xl:flex-row xl:m-0 items-center">
          <div className="w-full">
          <h3 className="text-black mb-2 font-bold">Vishal Brahmbhatt, P.E -  President & Founder</h3>
          <div className="regular_2 text-black text-xl">
          <p className="mb-4">Vishal is a seasoned Professional Engineer with over two decades of expertise in the oil & gas and petrochemical sectors. His impressive career includes leadership roles at industry giants such as ExxonMobil, Wood, Foster Wheeler, and Richard EPC.</p>
          <p>Vishal has excelled in contracting and plant operations, bringing deep knowledge and hands-on experience to every project life cycle phase. His technical understanding spans diverse cutting-edge technologies, including Refining, Gasification, Syngas, Gas to Liquid, Olefins Ethylene Cracking, and Polyethylene.</p>
          </div>
          </div>
          <div className="lg:mt-0 lg:ml-8 w-full">
            <img
                src="/customer.jpeg"
                alt="Vishal Brahmbhatt"
                width={600}
                height={600}
                className="rounded-xl w-[100%] h-auto object-cover"
              />
          </div>
        </div>
      </div>
      {/* <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b03aedf8d5a0_Microsoft%20Logo.svg"
              alt="Microsoft Logo"
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0620ef8d5a5_PayPal%20Logo.svg"
              alt="PayPal Logo"
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b00612f8d5a4_Google%20Logo.svg"
              alt="Google Logo"
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0582cf8d599_Chase%20Logo.svg"
              alt="Chase Logo"
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0484ef8d59a_Walmart%20Logo.svg"
              alt="Walmart Logo"
              className="inline-block"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Customer;
