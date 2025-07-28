"use client";
import React, { useEffect, useRef, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { industriesServedData } from "./industriesData";
import Aos from "aos";
import "aos/dist/aos.css";

const IndustriesServePage = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // null means the viewport
      rootMargin: "-50% 0px -50% 0px", // Trigger when 50% of the section is visible
      threshold: 0,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const handleSetId = (sid: string) => {
    if (typeof window !== "undefined") {
      document.getElementById(sid)?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Industries Serve" },
  ]

  return (
    <div>
      <TopBanner
        title="Industries Served"
        breadCrumb={breadCrumData}
      />
      <div className="mt-10 mb-16">
        <Wrapper className="">
          <div className="flex ">
            <div className="w-[22%] sticky top-36  h-full max-sm:hidden">
              <h2 className="text-xl font-medium heading-all mb-5" data-aos={"fade-down"}>
                Vital Industries
              </h2>
              {/* SIDEBAR OF FEATURE COMPONENT */}
              <ul className="space-y-4" data-aos={"fade-left"}>
                {industriesServedData.map((item: any, index) => {
                  return (
                    <li
                      key={index}
                      className={`observation cursor-pointer heading-all text-sm text-gray-600 ${
                        activeSection === item?.sid
                          ? "text-gray-900 border-b-2 pb-1 w-fit border-primary text-[16px]"
                          : ""
                      }`}
                      onClick={() => {
                        handleSetId(item.sid);
                      }}
                    >
                      {item?.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-[78%] max-sm:w-full"  >
              {industriesServedData?.map((item: any, index: number) => {
                return (
                  // className={`flex ${index%2===0 ? "flex-row-reverse":"" } `}
                  <div
                    className={`flex ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }  gap-10 max-sm:flex-col items-center mb-16`}
                    key={item?.id}
                    id={item?.sid}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    data-aos={item?.aosAnime}
                  >
                    <div className="w-1/2 max-sm:w-full  overflow-hidden">
                      <Image
                        src={item?.imgPath}
                        width={500}
                        height={300}
                        alt={item?.title}
                        className="rounded-md"
                      />
                    </div>
                    <div className="w-1/2 max-sm:w-full space-y-5">
                      <div className="">
                        <h1 className="text-3xl font-medium heading-all">
                          {item?.title}
                        </h1>
                      </div>
                      <div className="text-sm text-gray-500 content-all">
                        {item?.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default IndustriesServePage;
