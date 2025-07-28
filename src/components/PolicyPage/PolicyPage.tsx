"use client";
import React, { useEffect, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import PathName from "../PathName/PathName";
import Aos from "aos";
import "aos/dist/aos.css";

interface FilterDataProps {
  id: number;
  title: string;
  desc1: string;
  desc2?: string | string[];
  imgPath: string;
}

const PolicyPage = () => {
  const [filterData, setFilterData] = useState<FilterDataProps[]>([
    {
      id: 1,
      title: "Quality Policy",
      desc1: `Kostevo, we are dedicated to maintaining the highest
            standards of quality in every aspect of our operations.
            our commitment is to deliver products that not only
            meet but exceed customer expectations.`,
      desc2: ` To achieve this,
            we adhere to stringent quality control measures,
            continuously monitor and improve our processes and
            foster a culture of excellence among our team members.`,
      imgPath: "/policyImg/qualityPol.jpg",
    },
  ]);

  const policyDetails = [
    {
      id: 1,
      title: "Quality Policy",
      desc1: `Kostevo, we are dedicated to maintaining the highest
              standards of quality in every aspect of our operations.
              our commitment is to deliver products that not only
              meet but exceed customer expectations.`,
      desc2: [
        ,
        "we adhere to stringent quality control measures",
        "continuously monitor and improve our processes and foster ",
        "culture of excellence among our team members.",
      ],
      imgPath: "/policyImg/qualityPol.jpg",
    },

    {
      id: 2,
      title: "Client/Customer Relation Policy",
      desc1: `Our clients are our most valuable partners and we
              prioritize building long-term relationships based on
              trust, transparency and mutual respect.`,
      desc2: [
        "we believe in Open communication",
        " prompt issue resolution and a client-centric approach to ensure the highest level of customer satisfaction",
        " at kostevo, your success is our success and we are dedicated to supporting              you every step of the way.",
      ],
      imgPath: "/policyImg/relationPol.jpg",
    },
    {
      id: 3,
      title: "After Sales Feedback",
      desc1: `Your feedback is crucial to our continuous improvement
              efforts. we highly value your thoughts and experiences
              with our products and services and we encourage you
              to share your feedback through our dedicated after-sales
              feedback channels.`,
      desc2: [
        "Your insights help us identify areas",
        "enhancement and ensure that we continue to meet and exceed your expectations.",
      ],
      imgPath: "/policyImg/salesFeed.jpg",
    },
    {
      id: 4,
      title: "Improvement Policy",
      desc1: `Continuous improvement is ingrained in our company's dna.
              we are committed to ongoing innovation, optimization and
              refinement of our products, processes and services. we
              actively seek feedback from customers, stakeholders and
              team members, analyze data to identify opportunities for
              improvement and implement strategic initiatives to enhance
              product quality, efficiency and overall customer satisfaction. 
`,
      imgPath: "/policyImg/improvPol.jpg",
    },
    {
      id: 5,
      title: "Environment, Safety & Health Policy For Employees & Workers",
      desc1: `Kostevo, we are dedicated to maintaining the highest
              standards of quality in every aspect of our operations.
              our commitment is to deliver products that not only
              meet but exceed customer expectations. to achieve this,
              we adhere to stringent quality control measures,
              continuously monitor and improve our processes and
              foster a culture of excellence among our team members.`,
      imgPath: "/policyImg/safetyPol.jpg",
    },
  ];

  const idHandler = (id: number) => {
    let dataOnId = policyDetails.filter((item) => item?.id === id);
    setFilterData(dataOnId);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const scrollHandler = (name: string) => {
    if (typeof window !== "undefined") {
      document.getElementById(name)?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Policies" },
  ]

  return (
    <div>
      <TopBanner title="Kostevo Policies" breadCrumb={breadCrumData} bannerImg="/policyBanner.jpg" />
      <Wrapper>
        <div className=" rounded-md mb-10">
          {/* <ReactLenis root> */}
          <div
            className="grid grid-cols-1 place-items-center w-full py-16 px-2 text-center bg-gray-100"
            data-aos={"fade-up"}
          >
            {/* <h2 className="text-5xl font-semibold my-5">
               Kostevo Policy
            </h2> */}
            <h4 className="font-medium">Last updated Oct 04, 2024</h4>
            <div className="mt-5">
              <a
                href=""
                className="border border-gray-900 text-gray-800  transition-all duration-300 px-3 py-2 rounded-md"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </div>
          </div>
          <div className="max-w-[1280px] px-4 w-full mx-auto ">
            <div className=" py-20 max-sm:pb-0 space-y-2">
              <div className="flex gap-5 ">
                <div
                  className="w-[30%] max-sm:hidden h-full sticky top-32 "
                  // data-aos={"fade-right"}
                >
                  {/* <TableContent /> */}
                  <div>
                    <h1 className="text-xl font-semibold">
                      Kostevo Policies Content
                    </h1>
                    <ul>
                      {policyDetails.map((item) => {
                        return (
                          <>
                            <div
                              key={item.id}
                              className="cursor-pointer flex gap-5 mb-5 mt-5 mr-5 text-red-500"
                              onClick={() => {
                                scrollHandler(item.title);
                                idHandler(item?.id);
                              }}
                            >
                              <span className="no-underline">{item.id}.</span>
                              <h1 className=" text-primary underline">
                                {" "}
                                {item.title}
                              </h1>
                            </div>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="w-[70%] max-sm:hidden" data-aos={"fade-up"}>
                  {/* <PrivacyInfo/> */}
                  <div className="">
                    {filterData?.map((item: FilterDataProps) => {
                      return (
                        <div className="">
                          <div className="rounded-md overflow-hidden mb-5">
                            <img src={item?.imgPath} alt="" />
                          </div>
                          <div className="">
                            <div
                              className="space-y-3 mb-6"
                              key={item.id}
                              id={item.title}
                            >
                              <h3 className="text-2xl mb-3 font-semibold text-gray-800">
                                {item.id}
                                {". "}
                                {item.title}
                              </h3>
                              <div className="text-gray-500">{item.desc1}</div>
                              {item?.desc2 && (
                                <div className="text-gray-500">
                                  {Array.isArray(item.desc2)
                                    ? item.desc2.join(" ")
                                    : item.desc2}
                                </div>
                              )}
                            </div>
                          </div>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* FOR MOBILE VERSION */}
                <div className="w-full hidden max-sm:flex">
                  <div className="">
                    {policyDetails?.map((item: any) => {
                      return (
                        <div data-aos={"fade-up"}>
                          <div className="rounded-md overflow-hidden mb-5">
                            <img src={item?.imgPath} alt="" />
                          </div>
                          <div className="">
                            <div
                              className="space-y-3 mb-6"
                              key={item.id}
                              id={item.title}
                            >
                              <h3 className="text-2xl mb-3 font-semibold text-gray-800">
                                {item.id}
                                {". "}
                                {item.title}
                              </h3>
                              <div className="text-gray-500">{item.desc1}</div>
                              {item?.desc2 && (
                                <div className="text-gray-500 !mb-3 ">
                                  {item?.desc2}
                                </div>
                              )}
                            </div>
                          </div>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </ReactLenis> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default PolicyPage;
