"use client";
import { Facebook, Play, Twitter, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoSection = () => {
  const [popUpScale, setPopUpScale] = useState<string>("scale-0");

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/homeV1/BannerV5.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className=" w-full flex max-sm:flex-col "
        data-aos={"fade-up"}
      >
        <div className="lg:w-[55%] bg-primary/90 h-full lg:px-20 lg:py-20 max-sm:px-5 pb-5">
          <div className=" w-full mt-5 lg:mt-0">
            {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
              Manufacture
            </p> */}
            <div className="text-white">
              <h1 className="text-4xl max-sm:text-3xl heading-all mb-5">
                <span className="  font-medium">Innovating Precision:</span>{" "}
                <span className="!font-semibold">
                  Inside Kostevo's Advanced Manufacturing Process
                </span>
              </h1>
              <p className="content-all text-sm ">
                Step inside the world of Kostevo, where cutting-edge technology
                meets unparalleled expertise in precision machining. Kostevo has
                been a leader in designing, including hydrodynamic bearings,
                valve-tube fittings and specialized seals and any kind of
                precision work.
              </p>
            </div>
            {/* <div className="flex items-center gap-5 text-white mt-5">
              <p className="font-medium">GET CONNECTED WITH US :</p>
              <div className="flex  gap-3">
                <div className="w-7 h-7 rounded-sm flex justify-center items-center bg-primary border">
                  <Link href={"#"}>
                    <Twitter size={18} />
                  </Link>
                </div>
                <div className="w-7 h-7 rounded-sm flex justify-center items-center bg-primary border">
                  <Link href={"#"}>
                    <Youtube size={18} />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-[40%] max-sm:h-[200px]">
          <div
            className="flex justify-center items-center gap-2 w-fit cursor-pointer "
            onClick={() => {
              setPopUpScale("scale-100");
            }}
          >
            <div className="bg-primary w-7 h-7 flex justify-center items-center rounded-full">
              <Image
                src={"/homeV1/icons/play.png"}
                width={10}
                height={10}
                alt="play"
              />
            </div>
            <span className="text-white heading-all">Play Video</span>
          </div>
        </div>
      </div>

      <div
        className={`${popUpScale} bg-black/70 flex justify-center items-center h-[100svh] transition-all duration-300 w-full rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 max-sm:px-2 `}
        onClick={() => {
          setPopUpScale("scale-0");
        }}
      >
        <div className="max-w-[700px] w-full">
          <video
            className="w-full rounded-md  overflow-x-hidden"
            autoPlay
            loop
            muted
            controls={true}
          >
            <source
              // src="/sectionVideo.mp4"
              src="/video/kostevo-web.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute top-16 z-[60] right-3 bg-primary rounded-sm cursor-pointer"
            onClick={() => {
              setPopUpScale("scale-0");
            }}
          >
            <X size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
