"use client";
import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper/Wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const ManufactureSection = () => {
  const videoRef = useRef(null);
  const textSectionRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  // useEffect(() => {
  //   const videoElement = videoRef.current;
  //   const textSectionElement = textSectionRef.current;
  //   let ctx = gsap.context(() => {
  //     // Animation for the video section
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: videoElement,
  //           start: "top top", // Starts when the top of the video hits the top of the viewport
  //           end: "+=500", // Ends after 500px of scrolling
  //           scrub: true, // Smooth transition based on scroll
  //           pin: true, // Pins the video section
  //           markers: false, // Set to true for debugging
  //         },
  //       })
  //       .from(videoElement, {
  //         width: "50%", // Fullscreen
  //         height: "50%",
  //         ease: "power2.inOut",
  //       })
  //       .to(videoElement, {
  //         width: "50vw", // Shrink to 50% after full screen
  //         height: "50vh",
  //         ease: "power2.inOut",
  //       });

  //     // Animation for the text section
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: textSectionElement,
  //           start: "top 80%", // When the text section reaches 80% down the viewport
  //           end: "+=300", // 300px of scrolling for the effect
  //           scrub: true,
  //           markers: false, // Set to true for debugging
  //         },
  //       })
  //       .fromTo(
  //         textSectionElement,
  //         { opacity: 0, x: "100%", width: "0%" }, // Start hidden and offscreen to the right
  //         { opacity: 1, x: "0%", width: "50%", ease: "power2.inOut" } // Fade in and move to 50% width
  //       );
  //   });

  //   return () => ctx.revert(); // Cleanup on unmount
  // }, []);

  return (
    <div className="" data-aos={"fade-down"}>
      <Wrapper>
        <div className="lg:flex lg:flex-row flex-col my-20 gap-10 max-sm:items-center">
          <div className="lg:w-1/2 w-full " ref={videoRef}>
            <video
              className="w-full rounded-md  overflow-x-hidden"
              autoPlay
              loop
              muted
            >
              <source
                // src="/sectionVideo.mp4"
                src="/video/kostevo-web.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:w-1/2 w-full mt-5 lg:mt-0" ref={textSectionRef}>
            <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
              Manufacture
            </p>
            <div className="">
              <h1 className="text-4xl max-sm:text-3xl heading-all mb-5 text-gray-800">
                <span className="text-primary  font-medium">
                  Innovating Precision:
                </span>{" "}
                <span className="!font-semibold">
                  Inside Kostevo's Advanced Manufacturing Process
                </span>
              </h1>
              <p className=" text-gray-600 content-all text-sm font-light">
                Step inside the world of Kostevo, where cutting-edge technology
                meets unparalleled expertise in precision machining. Kostevo has
                been a leader in designing, including hydrodynamic bearings,
                valve-tube fittings and specialized seals and any kind of
                precision work.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ManufactureSection;
