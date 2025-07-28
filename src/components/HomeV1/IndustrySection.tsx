import React from "react";
import IndustryCard from "./IndustryCard";
import {
  industriesServedData,
  IndustryServedDataProps,
} from "../OurClient/industriesData";

const IndustrySection = () => {
  return (
    <div className="bg-[#efefef] pb-12 max-sm:px-5">
      <div className="max-w-[1200px] w-full mx-auto ">
        <div className="max-sm:mb-10" data-aos={"fade-up"}>
          <h1 className="heading-all text-4xl max-sm:text-3xl mb-5 mt-10 font-semibold pt-12 sm:text-center text-gray-800 ">
            Industries Served
          </h1>
          <p className="text-gray-600 text-sm content-all max-sm:mb-5 mb-10 sm:text-center">
            Catering to a diverse range of industries with precision-engineered
            products and solutions that meet sector-specific standards and
            challenges. From Oil & Gas to Pharmaceuticals, and from Automotive
            to Power Generation, our expertise ensures that each industry
            receives tailored support to drive efficiency, innovation, and
            growth. Discover how our products and services adapt to unique
            demands, powering advancements and contributing to sustainable
            development across multiple fields.
          </p>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 max-sm:gap-10">
            {industriesServedData
              .slice(0, 3)
              .map((item: IndustryServedDataProps, index: number) => {
                return (
                  <div className="" key={item?.id}>
                    <IndustryCard item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
