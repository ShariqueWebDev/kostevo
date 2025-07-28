"use client";
import React, { useEffect } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Link from "next/link";
import { ReactLenis } from "@studio-freight/react-lenis";
import Aos from "aos";
import "aos/dist/aos.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import { ResourceData, ResourceDataProps } from "./resource";

const ResourcesPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Resources" },
  ];

  function pdfDownload(path: string) {
    window.open(path, "_blank");
  }

  return (
    <ReactLenis root className="">
      <div>
        <TopBanner title={"Client Resources"} breadCrumb={breadCrumData} bannerImg="/resourceBanner.jpg"/>
        <div className="">
          <div className="max-w-[1280px] mx-auto px-5 mb-16">
            <h2 className="text-lg font-bold heading-all text-center my-5">
              Downloadable Content
            </h2>

            <h2 className="text-sm content-all mb-3" data-aos={"fade-right"}>
              {" "}
              we’re committed to providing our clients with all the resources
              they need for informed decisions and efficient operations. Access
              our library of detailed product specifications, maintenance
              guides, and application notes. These downloadable resources are
              designed to help you understand our precision machining solutions,
              optimize product use, and gain insights into best practices across
              industries.
            </h2>
            <h2 className="text-sm content-all mb-8" data-aos={"fade-right"}>
              From valve and tube fittings and any kind of precision work, each
              guide supports quality assurance, safety, and operational
              efficiency.
            </h2>

            <div
              className=" flex max-sm:flex-col justify-center max-sm:items-center gap-16 mt-5 "
              data-aos={"fade-up"}
            >
              <div className="downloadable-content space-y-6 ">
                <div className="content-item">
                  <h3 className="text-3xl mb-2 font-medium text-gray-800 heading-all text-center">
                    Product Catalogs
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    Download product catalogs for each category:
                  </p>
                  <ul className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-center mt-10 max-sm:px-5 max-sm:gap-14 gap-10 ">
                    {ResourceData.map((item: ResourceDataProps) => {
                      return (
                        <li className="text-center flex justify-center items-center flex-col w-fit">
                          <div
                            data-aos="fade-right"
                            className="w-full lg:w-[300px] flex items-center justify-start"
                          >
                            <Image
                              src={item?.imgPath}
                              alt={"Catalogue"}
                              width={600}
                              height={600}
                              className="shadow-[8px_8px_0px_0px_#2E496B] border w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="mt-8  flex justify-between w-full">
                            <h2 className="">{item?.name}</h2>
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                pdfDownload(item?.downloadPdfFile);
                              }}
                            >
                              <ArrowDownToLine color="gray" size={15} />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* <hr className="w-full" /> */}

                <div className="content-item">
                  <h3 className="text-3xl mb-2 mt-16 font-medium text-gray-800 heading-all text-center">
                    Company Profile
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    Download company profile to explore more
                  </p>
                  <ul className=" mt-10 flex max-sm:flex-col max-sm:px-5 max-sm:gap-14 max-sm:items-center gap-10 justify-center">
                    <li className="text-center flex justify-center items-center flex-col w-fit">
                      <div
                        data-aos="fade-right"
                        className="w-full lg:w-[300px] flex items-center justify-start"
                      >
                        <Image
                          src={"/kostevoProfileImg.webp"}
                          alt={"certificate"}
                          width={600}
                          height={600}
                          className="shadow-[8px_8px_0px_0px_#2E496B] border w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-8  flex justify-between w-full">
                        <h2 className="">Kostevo Profile</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/kostevoProfile.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="content-item">
                  <h3 className="text-3xl mb-2 mt-16 font-medium text-gray-800 heading-all text-center">
                    Certification Documents
                  </h3>
                  {/* <p className="text-sm text-gray-600">
                    Download company profile to explore more
                  </p> */}
                  <ul className=" mt-10 flex max-sm:flex-col max-sm:px-5 max-sm:gap-14 max-sm:items-center gap-10 justify-center">
                    <li className="text-center flex justify-center items-center flex-col w-fit">
                      <div
                        data-aos="fade-right"
                        className="w-full lg:w-[300px] flex items-center justify-start"
                      >
                        <Image
                          src={"/pdf/qms.png"}
                          alt={"certificate"}
                          width={600}
                          height={600}
                          className="shadow-[8px_8px_0px_0px_#2E496B] border w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                     
                      <div className="mt-8  flex justify-between w-full">
                        <h2 className="w-[270px] text-start">Certificate of Quality Management System</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/KOSTEVO-QMS.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div>
                    </li>

                    <li className="text-center flex justify-center items-center flex-col w-fit">
                      <div
                        data-aos="fade-right"
                        className="w-full lg:w-[300px] flex items-center justify-start"
                      >
                        <Image
                          src={"/pdf/ohsms.png"}
                          alt={"certificate"}
                          width={600}
                          height={600}
                          className="shadow-[8px_8px_0px_0px_#2E496B] border w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-8  flex justify-between w-full">
                        <h2 className="w-[270px] text-start">Certificate of Occupational Health & Safety Management</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/KOSTEVO-OHSMS.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div>
                    </li>
                    <li className="text-center flex justify-center items-center flex-col w-fit">
                      <div
                        data-aos="fade-right"
                        className="w-full lg:w-[300px] flex items-center justify-start"
                      >
                        <Image
                          src={"/pdf/qems.png"}
                          alt={"certificate"}
                          width={600}
                          height={600}
                          className="shadow-[8px_8px_0px_0px_#2E496B] border w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-8  flex justify-between w-full">
                        <h2 className="w-[270px] text-start">Certificate of Environmental Management System</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/KOSTEVO-QEMS.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default ResourcesPage;
