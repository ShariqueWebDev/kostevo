'use client'
import React, { useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Tabs } from "../Tabs/Tabs";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
      });
    }, []);
  return (
    <div className="bg-[#f7f7f7] pt-16 pb-10" >
      <Wrapper className="flex justify-between gap-5 max-sm:flex-col items-center">
        <div className="w-[55%] max-sm:w-full" data-aos={"fade-right"}>
          <div className="space-y-5">
        
        <p className="font-medium text-gray-600 my-2 uppercase">What we beleive </p>
            {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
              About Us
            </p> */}
            <h1 className="heading-all text-4xl max-sm:text-3xl font-semibold text-gray-800 ">
              Kostevo has been well-versed in precision machining for the past
              15 years.
            </h1>
            <p className="text-gray-600 font-medium content-all">
              A leading industry innovator with a rich
              history of excellence.
            </p>
            {/* FOR MOBILE */}
            <div className="sm:hidden">
              <img
                src="/swdswds.png"
                alt="About"
              />
            </div>
            <div className="">
              <Tabs />
            </div>
            <div className="cursor-pointer w-fit ml-5 rounded-md">
              <Link href={"/about-us"}>
                <ButtonPrimary
                  title="Explore More"
                  className="bg-white !text-secondary border border-secondary hover:scale-105 transition-all duration-300  rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[40%] max-sm:hidden" data-aos={"fade-down"}>
          <div className="">
            <img
              src="/swdswds.png"
              alt="About"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutSection;
