"use client";
import React, { useEffect } from "react";
import IndustriesServeCard from "../OurClient/IndustriesServeCard";
import Wrapper from "../Wrapper/Wrapper";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const IndustriesServedSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className="mt-10 !mb-20">
        <Wrapper className="">
          <div className="" data-aos={"fade-up"}>
            <h1 className="heading-all text-4xl max-sm:text-3xl my-5 font-semibold sm:text-center text-gray-800 ">
              Industries Served
            </h1>
            <p className="text-gray-600 text-sm content-all max-sm:mb-5 mb-10 sm:text-center">
              Catering to a diverse range of industries with
              precision-engineered products and solutions that meet
              sector-specific standards and challenges. From Oil & Gas to
              Pharmaceuticals, and from Automotive to Power Generation, our
              expertise ensures that each industry receives tailored support to
              drive efficiency, innovation, and growth. Discover how our
              products and services adapt to unique demands, powering
              advancements and contributing to sustainable development across
              multiple fields.
            </p>
          </div>
          <div
            className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 max-sm:place-items-center max-sm:gap-10 "
            data-aos={"fade-down"}
          >
            <IndustriesServeCard
              title="Oil & Gas"
              description="Supporting exploration, extraction, processing, and distribution with innovative and reliable solutions tailored for the oil and gas industry."
              image="/client/serve-indus/oil.jpg"
              icon="/client/serve-indus/indus-icons/oil-pump.png"
            />
            <IndustriesServeCard
              title="Pharmaceutical"
              description="Supplying precision-engineered components and solutions that meet stringent regulatory standards, supporting drug manufacturing, research, and development to ensure safety, quality, and efficacy in pharmaceutical production."
              image="/client/serve-indus/pharma.jpg"
              icon="/client/serve-indus/indus-icons/pharma.png"
            />
            <IndustriesServeCard
              title="Power Generation"
              description="Providing high-quality, durable components and solutions designed to optimize efficiency and reliability across power generation systems, including thermal, hydroelectric, nuclear, and renewable energy sources. "
              image="/client/serve-indus/power.jpg"
              icon="/client/serve-indus/indus-icons/energy.png"
            />
            <IndustriesServeCard
              title="Agrochemicals"
              description="Delivering specialized products and components for the agrochemical industry, supporting the formulation, production, and safe application of fertilizers, pesticides, and herbicides. "
              image="/client/serve-indus/agro.jpg"
              icon="/client/serve-indus/indus-icons/agro.png"
            />
          </div>
          {/* <IndustriesServeCard/> */}
          <Link href={"/industries-serve"}>
            <div className="mt-10 flex justify-center items-center px-10">
              <ButtonPrimary
                title={"Explore More"}
                className="border border-secondary  rounded-md !text-secondary hover:scale-105 transition-all duration-300"
              />
            </div>
          </Link>
        </Wrapper>
      </div>
    </div>
  );
};

export default IndustriesServedSection;
