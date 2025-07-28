"use client";
import React, { useEffect } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import { ArrowRight, PhoneCall, Timer } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Achievment from "./Achievment";
import PathName from "../PathName/PathName";
import Link from "next/link";
import RabaleUnitSection from "./RabaleUnitSection";
import UttarshivUnitSection from "./UttarShivUnitSection";
import AboutSection from "../AboutSection/AboutSection";
import TeamCard from "./TeamCard";

import Aos from "aos";
import "aos/dist/aos.css";
import FuturePlanCard from "../FuturePlanePage/FuturePlanCard";

const AboutUsPage = () => {
  const futurePlaneData = [
    {
      id: 1,
      title: "ISO Registration",
      description:
        "As part of our commitment to international quality standards, we aim to achieve ISO registration. This reflects our dedication to quality management and process excellence.",
      icon: "/icons/iso1.png",
      imgUrl: "/iso.jpeg",
      aosAnime: "fade-right",
    },
    {
      id: 2,
      title: "PSU Registration",
      description:
        "Pursuing PSU (Public Sector Undertaking) registration is a part of our strategic expansion into government collaborations. This initiative aims to broaden our scope and enhance our presence in the public sector.",
      icon: "/icons/verify.png",
      imgUrl: "/psu.jpeg",
      aosAnime: "fade-right",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const breadCrumData = [{ name: "Home", homePath: "/" }, { name: "About Us" }];

  return (
    <div>
      <TopBanner title="About Us" breadCrumb={breadCrumData} bannerImg="/banner2.png" />
      <div>
        <Wrapper>
          {/* <PathName path="Home / About Us" /> */}
          <div
            className="flex justify-between gap-10  max-sm:flex-col mb-10 max-sm:mb-10"
            data-aos={"fade-up"}
          >
            <div className="w-[45%] max-sm:w-full">
              <div className="space-y-7">
                {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
                  About Us
                </p> */}
                <div className="">
                  <h3 className="uppercase font-semibold text-gray-600 mb-2">
                    what we do
                  </h3>

                  <h1 className="heading-all text-[40px] max-sm:text-3xl font-medium text-gray-800 leading-tight ">
                    Kostevo has been well-versed in precision machining for the
                    past 15 years.
                  </h1>
                </div>
                <div className="space-y-3 !leading-loose">
                  <p className="text-gray-500 font-light text-sm content-all max-sm: ">
                    OuKostevo has been well-versed in precision machining for
                    the past 15 years. In the designing, like the Compression
                    Tubes, Fasteners, Flanges, Gears, Industrial Valves, Pipe
                    Fittings and any kind of precision work. We are capable of
                    manufacturing non-standard parts as per customer
                    requirements for generators, turbines, motors, pumps,
                    compressors and gearboxes.
                  </p>
                  <p className="text-gray-500 font-light text-sm content-all max-sm: ">
                    Our expertise ensures that your projects are executed with
                    precision, reliability and unmatched craftsmanship.
                  </p>
                </div>
                <div className="flex max-sm:flex-col gap-5 items-center">
                  <Link href={"/all-products/compression-tube-fittings"}>
                    <ButtonPrimary
                      title="Our Products"
                      className="!bg-secondary cursor-pointer rounded-mdhover:scale-105 transition-all duration-300 font-semibold h-fit"
                    />
                  </Link>

                  {/* <div className="flex gap-5 justify-center items-center">
                    <div className="border rounded-full w-16 h-16 flex justify-center items-center">
                      <a href="tel:9867219867">
                        <PhoneCall color="#4b5563 " />
                      </a>
                    </div>
                    <div className="text-xl font-medium ">+91 9867 21 9867</div>
                  </div> */}
                </div>
                {/* FOR MOBILE */}
              </div>
            </div>
            <div className="w-[55%] mb-10 max-sm:mb-0 relative flex max-sm:w-full justify-end items-start">
              <div className="rounded-md overflow-hidden sm:hidden">
                <Image
                  src={"/about-us/mobile-aboutus.jpg"}
                  alt=""
                  width={400}
                  height={300}
                />
              </div>
              <div className="max-w-[500px] h-[550px] w-full rounded-md overflow-hidden max-sm:hidden">
                <Image
                  src="/about-us/aboutus2.jpg"
                  width={500}
                  height={550}
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="absolute top-20 left-0  rounded-md max-sm:hidden">
                <Image
                  src={"/about-us/aboutus12.png"}
                  width={370}
                  height={370}
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-16">
            <AboutSection />
          </div>
          {/* <div className="">
            <div className="my-16 ">
              <h3 className="text-4xl font-medium heading-all text-center">
                Our Team
              </h3>
              <div
                className="mt-7 flex justify-between gap-5 max-sm:flex-col items-center "
                data-aos="fade-down"
              >
                <TeamCard
                  imgPath="./profile1.jpg"
                  title="Adwitha Suvarna"
                  position="studeio head"
                />
                <TeamCard
                  imgPath="./profile2.jpg"
                  title="Adwitha Suvarna"
                  position="studeio head"
                />
                <TeamCard
                  imgPath="./profile3.jpg"
                  title="Adwitha Suvarna"
                  position="studeio head"
                />
     
              </div>
            </div>
          </div> */}
          <div className="mb-20">
            <div
              className=" max-sm:px-0 flex max-sm:flex-col max-sm:items-center space-y-3"
              data-aos={"fade-up"}
            >
              <div
                className="w-1/2 max-sm:w-full
              "
              >
                <h3 className="uppercase font-semibold  text-gray-600 mb-3">
                  Facilities
                </h3>
                <h1 className="heading-all text-[40px] max-sm:text-3xl  font-medium text-gray-800 leading-tight !mb-10 ">
                  Rabale and Uttarshiv Units: Kostevo's Dual Pillars of
                  Manufacturing
                </h1>
              </div>
              <p className="content-all text-sm w-1/2 max-sm:w-full  text-gray-500 leading-relaxed !mt-12 max-sm:!mt-0 max-sm: ">
                Kostevo operates state-of-the-art manufacturing units in Rabale
                and Uttarshiv, each equipped to deliver precision machining and
                high-quality fabrication. Together, these facilities support
                diverse industrial needs, maintaining rigorous quality control
                and efficient production processes to ensure top-tier results
                for all manufacturing requirements.
              </p>
            </div>
            <div className="" data-aos={"fade-right"}>
              <RabaleUnitSection />
            </div>
            <div className="" data-aos={"fade-up"}>
              <UttarshivUnitSection />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <h3 className="text-center text-3xl uppercase font-semibold  text-gray-800 mb-3">
                  Our Specialty
                </h3>
                <h1 className="content-all text-sm  text-gray-700  leading-tight !mb-10 ">
                  Our expertise in threading and material selection is designed
                  to meet the high standards of precision machining. With years
                  of experience, we focus on creating threaded components that
                  are durable, reliable, and suited to the specific requirements
                  of diverse industries. Our threading techniques ensure strong,
                  secure fits, while our careful material selection process
                  guarantees longevity and performance, even in the most
                  demanding environments.
                </h1>
              </div>
            </div>
            <div className="mb-16">
              <div
                className="flex justify-between items-center max-sm:flex-col"
                data-aos={"fade-right"}
              >
                <div className="w-1/2 max-sm:w-full">
                  <div className="p-5">
                    <Image
                      src="/threads.png"
                      alt="screw image"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="space-y-5 text-gray-500 text-sm w-1/2 max-sm:w-full">
                  <h1 className="heading-all text-[30px] max-sm:text-3xl  font-medium text-gray-800 leading-tight !mb-5">
                    <span className="mr-3 text-5xl text-gray-300">1.</span>
                    Specialization in Thread
                  </h1>
                  <p className="">
                    We specialize in the precision manufacturing of threaded
                    components that meet the highest industry standards. With a
                    focus on accuracy and durability, our threaded products are
                    designed to endure the most demanding applications.
                  </p>
                  <p className="">
                    From valve fittings to customized threads for various
                    industrial uses, our advanced machinery ensures perfect
                    threading every time, delivering superior performance and a
                    long lifespan.
                  </p>
                  <div className="!mt-5">
                    <Link href={"/specialization-thread"}>
                      <span className="border-gray-400 font-medium text-gray-800 border-b flex items-center w-fit gap-1 heading-all">
                        Explore More <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-7" />
              <div
                className="flex justify-between items-center max-sm:flex-col"
                data-aos={"fade-right"}
              >
                <div className="w-1/2 max-sm:w-full">
                  <Image
                    src="/material1.png"
                    alt="screw image"
                    width={450}
                    height={400}
                  />
                </div>
                <div className="space-y-5 text-gray-500 text-sm w-1/2 max-sm:w-full">
                  <h1 className="heading-all text-[30px] max-sm:text-3xl  font-medium text-gray-800 leading-tight !mb-5">
                    <span className="mr-3 text-5xl text-gray-300">2.</span>
                    Specialization in Material
                  </h1>
                  <p className="">
                    We work with industry-standard materials such as stainless
                    steel, alloys, carbon steel and specialty metals like
                    Hastelloy and Duplex Stainless Steel. Each material
                    undergoes rigorous testing and adheres to globally
                    recognized standards like ASTM, ASME and ISO, ensuring that
                    our clients receive components that offer superior
                    performance, even in the most challenging environments.
                  </p>
                  <p className="">
                    Whether it's corrosion-resistant alloys for chemical
                    industries or high-strength steels for heavy machinery, our
                    deep material knowledge allows us to deliver custom
                    solutions that meet both the functional and regulatory
                    requirements of each project.
                  </p>
                  <div className="!mt-5">
                    <Link href={"/specialization-material"}>
                      <span className="border-gray-400 font-medium text-gray-800 border-b flex items-center w-fit gap-1 heading-all">
                        Explore More <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-48 max-sm:px-0 space-y-3" data-aos={"fade-up"}>
              <h3 className="uppercase font-semibold text-center text-gray-600">
                Our Values
              </h3>
              <h1 className="heading-all text-[40px] max-sm:text-3xl  font-medium text-gray-800 leading-tight text-center !mb-10 ">
                Crafting Perfection with Our Values.
              </h1>
              <h1 className="content-all font-semibold text-gray-800 leading-tight text-center "></h1>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 place-items-center">
              <div
                className="px-3 flex flex-col justify-center items-center space-y-5 my-5 max-sm:my-10"
                data-aos={"fade-right"}
              >
                <div className="w-32 mb-7 relative flex justify-center items-center">
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
                    <img
                      src="/svg-icons/integrity.svg"
                      alt="integrity"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h2 className="text-[25px] font-medium heading-all text-center">
                  Integrity
                </h2>
                <p className="text-center text-sm text-gray-500 content-all ">
                  Conducting business with honesty and transparency in all
                  dealings.
                </p>
              </div>

              <div
                className="px-3 flex flex-col justify-center items-center space-y-5 my-5 max-sm:my-10"
                data-aos={"fade-right"}
              >
                <div className="w-32 mb-7 relative flex justify-center items-center">
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
                    <img
                      src="/svg-icons/innovation.svg"
                      alt="innovation"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h2 className="text-[25px] font-medium heading-all text-center">
                  Innovation
                </h2>
                <p className="text-center text-sm text-gray-500 content-all ">
                  Embracing new technologies and methods to improve efficiency
                  and product offerings.
                </p>
              </div>

              <div
                className="px-3 flex flex-col justify-center items-center space-y-5 my-5 max-sm:my-10"
                data-aos={"fade-right"}
              >
                <div className="w-32 mb-7 relative flex justify-center items-center">
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
                    <img
                      src="/svg-icons/focus.svg"
                      alt="focus"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h2 className="text-[25px] font-medium heading-all text-center">
                  Customer Focus
                </h2>
                <p className="text-center text-sm text-gray-500 content-all ">
                  Prioritizing customer satisfaction by understanding and
                  meeting their needs.
                </p>
              </div>

              <div
                className="px-3 flex flex-col justify-center items-center space-y-5 my-5 max-sm:my-10"
                data-aos={"fade-right"}
              >
                <div className="w-32 mb-7 relative flex justify-center items-center">
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
                    <img
                      src="/svg-icons/respect.svg"
                      alt="Excellence"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h2 className="text-[25px] font-medium heading-all text-center">
                  Excellence
                </h2>
                <p className="text-center text-sm text-gray-500 content-all ">
                  Excellence is at the core of everything we do. We believe that
                  true excellence comes from a commitment to quality, precision,
                  and continuous improvement
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-5 mb-16">
            <h3 className="text-center text-3xl uppercase font-semibold  text-gray-800 mb-3">
              Our Future Plan
            </h3>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 my-10 gap-16 max-sm:gap-10 mb-10">
              {futurePlaneData.map((item, index) => {
                return (
                  <div className="" key={item?.id} data-aos={item?.aosAnime}>
                    <FuturePlanCard
                      title={item?.title}
                      description={item?.description}
                      icon={item?.icon}
                      imgUrl={item?.imgUrl}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <Link href={"/future-plan"}>
                <ButtonPrimary
                  title={"Explore More"}
                  className="bg-primary rounded-md"
                />
              </Link>
            </div>
          </div> */}
          <div className="">
            <h3 className="text-center text-3xl uppercase font-semibold  text-gray-800 mb-3">
              Our Certifications
            </h3>
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

                {/* <div className="mt-8  flex justify-between w-full">
                        <h2 className="w-[270px] text-start">Certificate of Quality Management System</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/KOSTEVO-QMS.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div> */}
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
                {/* <div className="mt-8  flex justify-between w-full">
                        <h2 className="w-[270px] text-start">Certificate of Occupational Health & Safety Management</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/KOSTEVO-OHSMS.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div> */}
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
                {/* <div className="mt-8  flex justify-between w-full">
                        <h2 className="w-[270px] text-start">Certificate of Environmental Management System</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            pdfDownload("/pdf/KOSTEVO-QEMS.pdf");
                          }}
                        >
                          <ArrowDownToLine color="gray" size={15} />
                        </div>
                      </div> */}
              </li>
            </ul>
            <Link href={"/certifications"}>
              <div className="flex justify-center items-center my-10">
                <ButtonPrimary
                  title={"Explore More"}
                  className="bg-primary text-white rounded-md hover:scale-105 transition-all duration-300"
                />
              </div>
            </Link>
          </div>
        </Wrapper>

        <div
          className=""
          style={{
            backgroundImage: "url(/about-us/bg1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          data-aos={"fade-up"}
        >
          <Achievment />
        </div>
        <div
          className="flex max-sm:flex-col gap-10 items-center justify-center px-1.5 bg-[#f7f7f7] mb-16"
          data-aos={"fade-up"}
        >
          <div
            className="w-1/2 max-sm:w-full space-y-5 border p-10"
            style={{
              backgroundImage: "url(/about-us/countsection.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // opacity:0.7,
              position: "relative",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <h4 className="font-medium text-white relative">
              Start Your Deals
            </h4>
            <h2 className="text-5xl max-sm:text-3xl font-semibold text-white relative heading-all">
              Metallurgical products <br /> of the highest class
            </h2>
            <div className="flex max-sm:flex-col-reverse max-sm:items-center gap-3">
              <Link
                href={"/contact-us"}
                className="flex items-center  bg-primary w-fit pr-3 rounded-md relative"
              >
                <ButtonPrimary
                  title="Contact Us"
                  className="!pl-5 pr-3 font-medium hover:scale-105 transition-all duration-300"
                />
                <div className="">
                  <ArrowRight size={20} color="#fff" />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full bg-white my-1">
            <Image
              src={"/about-us/graph.jpg"}
              alt={""}
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
