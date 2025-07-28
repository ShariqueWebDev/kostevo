import { ArrowRight, Timer } from "lucide-react";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="px-3 flex flex-col justify-center items-center space-y-5 my-16 max-sm:my-10">
      <div className="w-32 mb-7 relative flex justify-center items-center">
        <svg
          className="decor-svg "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 112.77 111.59"
        >
          <path
            d="M-15315.315-17576.43c31.781-22.219,100.99,5.348,96.1,41.223s-33.781,69.844-71.955,60.957S-15347.095-17554.211-15315.315-17576.43Z"
            transform="translate(15331.737 17584.408)"
            fill="#f6f6f6"
          />
        </svg>
        <div className="absolute">
          <Timer className="text-4xl text-primary" size={50} />
        </div>
      </div>
      <h2 className="text-[25px] font-medium heading-all">Business Planning</h2>
      <p className="text-center text-sm text-gray-500 content-all ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis!
      </p>
      <div className="group flex justify-between cursor-pointer">
        <div className="group-hover:w-24 w-0 text-nowrap  overflow-hidden group-hover:overflow-clip transition-all duration-500">
          Read more
        </div>
        <div className="z-10 bg-white px-2">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
