'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {

    useEffect(() => {
      Aos.init({
        duration: 1000,
      });
    }, []);

  return (
    <div className="relative mt-[380px] mb-16 max-sm:mt-12 max-sm:mx-5  max-w-[1200px] lg:flex gap-16 justify-between mx-auto  " data-aos={'fade-up'}>
      <div className="w-[40%] max-sm:w-full relative overflow-hidden rounded-md">
        <div className="w-[450px] h-[450px] rounded-md overflow-hidden">
          <img src="/homeV1/Aboutus.png" alt="" className="" />
        </div>
        <div className="bg-primary/80 absolute -bottom-28 -left-28   w-[250px] h-[250px] rounded-full"></div>
      </div>
      <div
        className="absolute w-[200px] top-60 left-80 rounded-md bg-white h-[150px] flex justify-center items-center max-sm:hidden "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <img src="/homeV1/About2.png" alt="" className=" w-full" />
      </div>
      <div className="w-[50%] max-sm:w-full max-sm:mt-5">
        <div className="absolute right-0 -top-28 -z-10 max-sm:hidden">
          <img src="/homeV1/bgImg/deco-1.svg" alt="" className="" />
        </div>
        <div className="space-y-4">
          <p className="font-medium text-gray-600  uppercase">
            What we beleive{" "}
          </p>
          {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
              About Us
              </p> */}
          <h1 className="heading-all text-4xl max-sm:text-3xl font-semibold text-gray-800 ">
            Kostevo has been well-versed in precision machining for the past 15
            years.
          </h1>
          <p className="text-gray-600 font-medium content-all">
            A leading industry innovator with a rich history of excellence.
          </p>
        </div>
        <div className="">
          <p className=" mt-5 content-all text-sm text-gray-500">
            Kostevo has been well-versed in precision machining for the past 15
            years. In the designing like the Compression Tubes, Fasteners,
            Flanges, Gears, Industrial Valves, Pipe Fittings and any kind of
            precision work. We are capable of manufacturing non-standard parts
            as per customer requirements for generators, turbines, motors,
            pumps, compressors and gearboxes.
          </p>
          <div className="mt-5">

          <Link href={"/about-us"}>
            <ButtonPrimary
              title="About Us"
              className="bg-primary textblack rounded-sm font-medium hover:shadow-lg transition-all duration-300"
              />
          </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
