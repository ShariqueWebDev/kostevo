"use client";
import React, { useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useRouter } from "next/router";
import Link from "next/link";
// import Aos from "aos"; "aos";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    window.scrollTo({
      top: 600, // Scrolls 700px vertically
      behavior: "smooth", // Smooth scrolling
    });
  };
  // const styling:React.CSSProperties = {
  //     backgroundImage: `url(${'/banner.png'})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "",
  //     backgroundSize: "cover",
  //     // opacity: 0.7,
  //     position: "relative",
  //   };
  // const router = useRouter();
  // const { isReady } = router;

  // useEffect(() => {
  //   if (isReady) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [isReady]);

  return (
    <div className="flex lg:flex-row flex-col" data-aos={"fade-right"}>
      <div className="lg:w-1/2 w-full  max-sm:!px-5 pt-40 max-sm:pt-32 pb-20 lg:pl-20 pl-5 pr-5 bg-black">
        <p className="font-semibold .heading-all text-primary max-sm:">
          Engineering Precision, Delivering Excellence Globally
        </p>
        <h1 className="text-white font-bold  text-5xl leading-tight my-5 max-sm:text-5xl">
          Building a <span className="text-primary">better world</span> through
          Engineering
        </h1>
        <h2 className="text-white text-sm content-all leading-7">
          We specialize in delivering high-quality industrial components that
          power industries worldwide. From durable tube fittings, flanges, and
          fasteners to precision-engineered pipe fittings, gears, and valves,
          our products are built to meet the most demanding standards. Whether
          you need industrial valves, check valves, needle valves, manifold
          valves, or ball valves, we ensure unmatched reliability and
          performance in every piece.
        </h2>

        <div className="mt-5 cursor-pointer flex max-sm:justify-center gap-3 max-sm:gap-5">
          <Link href={"/about-us"}>
            <ButtonPrimary
              title="About Us"
              className=" font-medium rounded-md hover:scale-105 transition-all duration-300 border max-sm:px-9 "
            />
          </Link>
          <Link href={"/contact-us"}>
            <div className="">
              <div className="relative group">
                <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-100 shadow-2xl cursor-pointer rounded-md shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-md bg-gradient-to-r from-primary via-primary to-secondary p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-6 py-3 rounded-md bg-black">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        Contact Us
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 relative w-full max-sm:p-5 ">
        <img
          src="/bannerImg.webp"
          className="object-cover w-full h-full max-sm:object-cover max-sm:rounded-md"
          alt="Gear Casting"
          title="CNC Kostevo"
        />
        <div className="absolute inset-0 top-0 left-0 bg-black bg-opacity-40 max-sm:hidden"></div>
      </div>
    </div>
  );
};

export default Banner;
