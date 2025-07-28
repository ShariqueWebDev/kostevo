"use client";
import React, { useEffect, useRef, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Table } from "antd";
import Image from "next/image";
import {
  columnsShivData,
  ShivObj,
} from "@/lib/manufactureData/uttarShiv/manufactureData";
import {
  measurementToolShivColumnData,
  measurementToolShivRowData,
} from "@/lib/manufactureData/uttarShiv/MeasurementTools";
import {
  manPowerShivColumnData,
  manPowerShivRowData,
} from "@/lib/manufactureData/uttarShiv/manpower";
import Aos from "aos";
import "aos/dist/aos.css";
import { MapPin } from "lucide-react";

const UttarShivPage = () => {
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
  }, []);

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
    { name: "Client Resources" },
  ];

  return (
    <div>
      <TopBanner title="Uttar Shiv Location" breadCrumb={breadCrumData} bannerImg="/cncBanner.webp" />
      <Wrapper>
        <div
          className="space-y-3 max-sm:space-y-5 mb-10"
          data-aos={"fade-right"}
        >
          <div className="border-l-4 border-primary pl-3 heading-all">
            <h1 className="text-2xl font-medium text-gray-900 mb-1 ">
              <span className="">Uttar Shiv</span> Manufacturing Unit
            </h1>
            <p className="text-gray-500 text-sm">
              Uttar Shiv Village, Thane, Maharashtra 421204, India
            </p>
          </div>
          <div className="">
            <p className="text-sm text-gray-500">
              Assembly in the manufacturing unit is joining multiple parts to
              get the final product, which is intended to be used for specc
              applications.
            </p>
            {/* <p className="">
              From:{" "}
              <Link href={'/'}>
                <span className="">Kostevo</span>
              </Link>
            </p> */}
          </div>
          {/* <div className="flex max-sm:flex-col max-sm:items-center gap-5">
            <Link href={"/about-us"}>
              <ButtonPrimary
                title={"About Kostevo"}
                className="!bg-white !text-gray-900 border rounded-md !border-gray-600 font-medium"
              />
            </Link>
            <Link href={"/specialization-thread"}>
              <ButtonPrimary
                title={"Specialization"}
                className="!bg-white !text-gray-900 border rounded-md !border-gray-600 font-medium"
              />
            </Link>
          </div> */}
        </div>
        <div
          className=" flex items-center justify-center gap-10 max-sm:flex-col"
          data-aos={"fade-up"}
        >
          <div
            className="px-3 flex flex-col justify-center items-center space-y-5 my-5 max-sm:my-10 border !p-10 rounded-md"
            data-aos={"fade-right"}
          >
            <div className="w-20 relative flex justify-center items-center">
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
                <MapPin size={35} color="#ffa142" />
              </div>
            </div>
            <h2 className="text-[25px] font-medium heading-all text-center">
              Area
            </h2>
            <p className="text-center text-sm text-gray-500 content-all ">
              1700 Square Meters
            </p>
          </div>

          <div
            className="px-3 flex flex-col justify-center items-center space-y-5 my-5 max-sm:my-10 border !p-10 rounded-md"
            data-aos={"fade-right"}
          >
            <div className="w-20 relative flex justify-center items-center">
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
                <img src="/machines/machine.svg" alt="" className="size-8" />
              </div>
            </div>
            <h2 className="text-[25px] font-medium heading-all text-center">
              Machine
            </h2>
            <p className="text-center text-sm text-gray-500 content-all ">
              2 HI-Tech Machines
            </p>
          </div>
        </div>
        <div className="flex justify-between my-16">
          {/* SIDEBAR OF FEATURE COMPONENT */}
          <div
            className="w-[30%] sticky top-28  h-full max-sm:hidden"
            // data-aos={"fade-left"}
          >
            <h3 className="!mb-5 font-medium heading-all">Types of Machines</h3>
            <ul className="space-y-4">
              {ShivObj.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`observation cursor-pointer heading-all text-sm text-gray-600 ${
                      activeSection === item?.sid ? "active" : ""
                    }`}
                    onClick={() => {
                      handleSetId(item.sid);
                    }}
                  >
                    {item.machineName}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* MAIN PAGE OF FEATURE COMPONENT */}
          <div className="w-[70%] max-sm:w-full ">
            {ShivObj.map((item, index) => {
              return (
                <div
                  className="mb-16 max-sm:mb-10 "
                  id={item?.sid}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  // style={{ height: "100vh" }}
                  key={index}
                >
                  <h1
                    className="text-gray-800 font-medium text-2xl mb-4"
                    data-aos={"fade-up"}
                  >
                    {item?.machineName}
                  </h1>
                  <div className="flex items-center max-sm:flex-col max-sm:items-center gap-20 max-sm:gap-8">
                    <div className="" data-aos={"fade-up"}>
                      <Image
                        width={400}
                        height={300}
                        src={item?.imgPath}
                        alt=""
                      />
                    </div>
                    <div className="max-w-[400px] w-full" data-aos={"fade-up"}>
                      <Table
                        columns={columnsShivData}
                        dataSource={item?.details}
                        pagination={false}
                        size="small"
                        className="border rounded-md"
                        scroll={{ x: "max-content" }}
                      />
                    </div>
                  </div>
                  <hr className="mt-16" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="" data-aos={"fade-right"}>
          <div className="space-y-3 rounded-md">
            <h3 className="text-2xl text-gray-800 font-medium heading-all">
              Measurement Tools
            </h3>
            <hr />
            <p className="text-sm text-gray-500 ">
              Similar to Unit 1, Unit 2 is equipped with precision measurement
              tools to ensure the accuracy of every component produced. Take a
              look at the below Table.
            </p>
          </div>
          <div className="mt-10">
            <Table
              columns={measurementToolShivColumnData}
              dataSource={measurementToolShivRowData}
              pagination={false}
              size="middle"
              className="border rounded-md"
              scroll={{ x: "max-content" }}
            />
          </div>
        </div>
        <h3
          className="text-2xl text-gray-800 font-medium heading-all mt-16"
          data-aos={"fade-up"}
        >
          Uttar Shiv Unit's Engineering Team
        </h3>
        <div
          className="flex max-sm:flex-col gap-5 my-16"
          data-aos={"fade-right"}
        >
          <div className=" space-y-5">
            <div className="space-y-3 border rounded-md max-sm:h-auto max-w-[600px] p-5">
              <h3 className="text-2xl text-gray-800 font-medium heading-all">
                Production Flow
              </h3>
              <hr />
              <p className="text-sm text-gray-500 ">
                The layout of Unit 2 is designed to accommodate unique
                manufacturing processes, allowing for flexibility and
                customization.
              </p>
            </div>
            <div className="space-y-3 border rounded-md max-sm:h-auto max-w-[600px] p-5">
              <h3 className="text-2xl text-gray-800 font-medium heading-all">
                Workforce
              </h3>
              <hr />
              <p className="text-sm text-gray-500 ">
                The skilled team in Unit 2 brings expertise and innovation to
                the production of specialized components, contributing to the
                success of our diverse product range. Below is the team for Unit
                2.
              </p>
            </div>
          </div>
          <div className="">
            <Table
              columns={manPowerShivColumnData}
              dataSource={manPowerShivRowData}
              pagination={false}
              className="border rounded-md"
              scroll={{ x: "max-content" }}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UttarShivPage;
