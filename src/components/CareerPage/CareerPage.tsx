"use client";
import React, { useEffect } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import PerkSection from "./PerkSection";
import CareerForm from "./CareerForm";
import Aos from "aos";
import "aos/dist/aos.css";

const CareerPage = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 900, // Scrolls 700px vertically
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const breadCrumData = [{ name: "Home", homePath: "/" }, { name: "Career" }];

  return (
    <div>
      <TopBanner
        title="Career"
        breadCrumb={breadCrumData}
        bannerImg="/cncBanner.webp"
        className="max-sm:hidden !mb-0"
      />
      <div className="flex flex-col lg:flex-row gap-10 mb-10 py-14  bg-[#112a28]">
        <div
          className="lg:w-1/2 lg:pl-[90px] px-5 max-sm:pt-10  space-y-3 max-sm:w-full"
          data-aos={"fade-right"}
        >
          <div className="">
            <p className="font-medium text-gray-100 my-2 uppercase">
              Authentic Voices, Genuine Experiences
            </p>
            <h1 className="text-6xl max-sm:text-3xl max-sm:hidden font-semibold text-gray-100 !leading-[70px] heading-all">
              <span className="text-primary">Careers at Kostevo</span> <br /> Be
              Part of Our Growth Story
            </h1>
            <h1 className="text-6xl max-sm:text-3xl sm:hidden font-semibold text-gray-100 leading-[65px] heading-all">
              Careers at Kostevo | Be Part of Our Growth Story
            </h1>
          </div>
          <div className="h-1 bg-primary w-32 !my-5"></div>
          <p className="content-all text-sm text-gray-400">
            our company culture is built on a foundation of innovation and a
            commitment to excellence. We encourage creativity and
            forward-thinking, empowering our team to push boundaries and achieve
            remarkable results. We prioritize professional growth, offering
            abundant opportunities for skill development, career advancement,
            and continuous learning. Additionally, we recognize the importance
            of employee well-being, which is why we provide comprehensive
            benefits designed to support our team’s personal and professional
            lives.
            <span className="text-primary font-medium "> Kostevo</span>
          </p>
          <p className="content-all text-sm text-gray-400">
            At Kostevo, each team member is valued, motivated, and inspired to
            thrive in a culture that champions progress and excellence.
          </p>
          <div className="!mt-7">
            <div onClick={handleScroll} className="cursor-pointer">
              <ButtonPrimary
                title={"About Us"}
                className="border rounded-md hover:scale-105 transition-all duration-300 font-medium"
              />
            </div>
            {/* <Link href={'/'}>
            <ButtonPrimary title={'About Us'}  />
            </Link> */}
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full   px-5 max-sm:flex max-sm:justify-center h-[500px] max-sm:h-auto overflow-hidden"
          data-aos={"fade-up"}
        >
          <div className="flex gap-5">
            <div className="h-[500px] ">
              <img
                src="/career-bannerV1.jpg"
                alt="kostevo banner"
                className="bg-white rounded-md w-full h-full object-cover  max-sm:w-full "
              />
            </div>
            <div className="flex flex-col gap-5 max-md:block max-sm:hidden">
              <img
                src="/career-bannerV2.jpg"
                alt="kostevo banner"
                className="bg-white rounded-md"
              />
              <img
                src="/career-bannerV3.jpg"
                alt="kostevo banner"
                className="bg-white rounded-md object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <div className="pb-14" data-aos={"fade-right"}>
          <PerkSection />
        </div>
      </Wrapper>
      <div
        className="flex lg:flex-row h-[550px] max-sm:h-auto flex-col-reverse sm:mb-16"
        data-aos={"fade-right"}
      >
        <div className="lg:w-1/2 w-full lg:p-10  p-5  bg-[#f7f7f7]">
          {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
            Benefits
          </p> */}
          <div className="space-y-5">
            <h2 className="text-4xl font-medium heading-all text-primary">
              Feel and Do Your Best
            </h2>
            <p className="text-gray-600 font-medium">
              We really care about our employees.
            </p>
            <p className="text-gray-500">
              Working at Kostevo, you gain access to a variety of benefits,
              resources and professional guidance to help you prioritize your
              well-being and maintain a healthy work-life balance.
            </p>
          </div>
          <div className="space-y-3 my-5">
            <div className="flex items-center gap-3">
              <img
                src="/icons/correct.png"
                className="w-4 "
                alt="correct sign"
              />
              <p className="font-medium text-sm">
                Vacation days, sick leave and personal days.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/icons/correct.png"
                className="w-4 "
                alt="correct sign"
              />
              <p className="font-medium text-sm">
                Performance-based or annual bonuses.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/icons/correct.png"
                className="w-4 "
                alt="correct sign"
              />
              <p className="font-medium text-sm">
                Options for varied work schedules or shifts.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/icons/correct.png"
                className="w-4 "
                alt="correct sign"
              />
              <p className="font-medium text-sm">
                Support services for personal and work-related issues.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full max-sm:mb-5 overflow-hidden">
          <img
            src="/careerSectionV3.jpg"
            className="object-cover object-top max-sm:p-5 w-full max-sm:rounded-md h-full"
            alt="career image"
          />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-5 lg:mt-0 px-5" data-aos={"fade-down"}>
        <h2 className="text-4xl font-medium heading-all">
          Today Job Vaccancy list
        </h2>
        <div className="flex justify-center items-center h-[200px]">
          <p className="size-fit content-all">No Jobs Available</p>
        </div>
      </div>
      <div className="" data-aos={"fade-right"}>
        <CareerForm />
      </div>
    </div>
  );
};

export default CareerPage;
