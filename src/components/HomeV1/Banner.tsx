'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: 'url("/homeV1/BannerV3.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="w-full h-screen max-sm:mt-0 max-sm:h-auto"
      data-aos={'fade-down'}
    >
      {/* <div className="absolute bg-black/50 inset-0 w-full h-full "></div> */}
      {/* <div className="absolute w-[450px] h-[200px] z-10 bg-gradient-to-t from-[#fa850e]  bottom-20 right-28  border-primary rounded-lg ">
        <img src="/homev1/BannerMini.png" alt="" className="absolute bottom-8" />
      </div> */}
      <div className="relative">
        <div className="lg:w-1/2 w-full text-gray-950  max-sm:!px-5 pt-28 max-sm:pt-32 pb-20 lg:pl-20 pl-5 pr-5">
          <p className="font-semibold .heading-all  max-sm:">
            Engineering Precision, Delivering Excellence Globally
          </p>
          <h1 className="text- font-medium  text-5xl leading-tight my-5 max-sm:text-5xl">
            Building a <span className="text-">better world</span> through
            Engineering
          </h1>
          <h2 className="text-gray-700 text-sm content-all leading-7">
            We specialize in delivering high-quality industrial components that
            power industries worldwide. From durable tube fittings, flanges, and
            fasteners to precision-engineered pipe fittings, gears, and valves,
            our products are built to meet the most demanding standards.
          </h2>

          <div className="mt-5 cursor-pointer flex max-sm:justify-center gap-3 max-sm:gap-5">
            {/* <Link href={"/about-us"}>
              <ButtonPrimary
                title="About Us"
                className=" font-medium rounded-md hover:scale-105 transition-all duration-300 border max-sm:px-9 "
              />
            </Link> */}
            <Link href={"/contact-us"}>
              <ButtonPrimary
                title="Contact Us"
                className="bg-primary textblack rounded-sm font-medium hover:shadow-lg transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" absolute max-sm:static max-sm:h-full w-full z-20 max-sm:z-auto -bottom-[250px] ">
        <div className="w-fit grid place-item-center lg:grid-cols-6 md:grid-cols-4 max-sm:items-center shadow-md max-sm:shadow-none  gap-3 mx-auto bg-white  p-5">
          <Link href={"/products/compression-tube-fittings"}>
            <div className="w-[180px] max-sm:w-full flex gap-3 max-sm:pb-5 max-sm:border-b">
              <div className="space-y-4">
                <div className="w-10 h-10 ">
                  <img src="/homeV1/icons/plumbing.png" alt="" className="" />
                </div>
                <h2 className="text-xl heading-all">
                  Compression Tube Fittings
                </h2>
                <p className="text-xs text-gray-500 content-all">
                  Reliable and leak-proof compression tube fittings designed for
                  seamless and secure connections in diverse applications.
                </p>
              </div>
              <div className=" h-[200px] w-[1px] bg-gray-200 max-sm:hidden"></div>
            </div>
          </Link>
          <Link href={"/products/flanges"}>
            <div className="w-[180px] max-sm:w-full flex gap-3 max-sm:pb-5 max-sm:border-b">
              <div className="space-y-4">
                <div className="w-10 h-10 ">
                  <img src="/homeV1/icons/flange.png" alt="" className="" />
                </div>
                <h2 className="text-xl heading-all h-[55px] max-sm:h-auto">
                  Flanges
                </h2>
                <p className="text-xs text-gray-500 content-all">
                  Flange fittings by Kostevo deliver precision, durability, and
                  reliability for seamless industrial and pipeline connections.
                </p>
              </div>
              <div className=" h-[200px] w-[1px] bg-gray-200 max-sm:hidden"></div>
            </div>
          </Link>
          <Link href={"/products/gears"}>
            <div className="w-[180px] max-sm:w-full flex gap-3 max-sm:pb-5 max-sm:border-b">
              <div className="space-y-4">
                <div className="w-10 h-10 ">
                  <img src="/homeV1/icons/settings.png" alt="" className="" />
                </div>
                <h2 className="text-xl heading-all h-[55px] max-sm:h-auto">
                  Gears
                </h2>
                <p className="text-xs text-gray-500 content-all">
                  Cutting-edge gear engineered for performance, innovation, and
                  reliability—elevate every experience with Kostevo.
                </p>
              </div>
              <div className=" h-[200px] w-[1px] bg-gray-200 max-sm:hidden"></div>
            </div>
          </Link>
          <Link href={"/products/fastener"}>
            <div className="w-[180px] max-sm:w-full flex gap-3 max-sm:pb-5 max-sm:border-b">
              <div className="space-y-4">
                <div className="w-10 h-10 ">
                  <img src="/homeV1/icons/fastener.png" alt="" className="" />
                </div>
                <h2 className="text-xl heading-all h-[55px] max-sm:h-auto">
                  Fasteners
                </h2>
                <p className="text-xs text-gray-500 content-all">
                  Precision-engineered fasteners by Kostevo ensure strength,
                  durability, and reliability for every application.
                </p>
              </div>
              <div className=" h-[200px] w-[1px] bg-gray-200 max-sm:hidden"></div>
            </div>
          </Link>
          <Link href={"/products/pipe-fittings"}>
            <div className="w-[180px] max-sm:w-full flex gap-3 max-sm:pb-5 max-sm:border-b">
              <div className="space-y-4">
                <div className="w-10 h-10 ">
                  <img src="/homeV1/icons/pipeline.png" alt="" className="" />
                </div>
                <h2 className="text-xl heading-all h-[55px] max-sm:h-auto">
                  Pipe Fittings
                </h2>
                <p className="text-xs text-gray-500 content-all">
                  Pipe fitting solutions from Kostevo ensure precision,
                  durability, and seamless integration for all your piping
                  needs.
                </p>
              </div>
              <div className=" h-[200px] w-[1px] bg-gray-200 max-sm:hidden"></div>
            </div>
          </Link>
          <Link href={"/sub-category-products/industrial-valves"}>
            <div className="w-[180px] max-sm:w-full space-y-4">
              <div className="w-10 space-y-4h-10 ">
                <img src="/homeV1/icons/valve.png" alt="" className="" />
              </div>
              <h2 className="text-xl heading-all h-[55px] max-sm:h-auto">
                Valves
              </h2>
              <p className="text-xs text-gray-500 content-all">
                Precision-engineered industrial valve fittings designed for
                reliability, efficiency, and durability in diverse applications.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
