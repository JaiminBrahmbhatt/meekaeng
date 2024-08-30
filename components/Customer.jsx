import React from "react";
const Customer = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-8 md:px-24 lg:px-48">
      <div className="max-container">
        <div className="flex flex-col justify-between gap-4 xl:flex-row xl:m-0 items-center">
          <div className="w-full">
          <h3 className="text-black mb-2 font-bold">Vishal Brahmbhatt -  President & Founder</h3>
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
    </section>
  );
};

export default Customer;
