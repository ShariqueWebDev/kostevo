"use client";
import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import PathName from "../PathName/PathName";
import Wrapper from "../Wrapper/Wrapper";
import { EmblaOptionsType } from "embla-carousel";
import "../TestimonialPage/Embla/emblaTesti.css";
import EmblaCarousel from "./Embla/EmblaCarouselTesti";
import TestimonialCard from "./TestimonialCard";

const TestimonialPage = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Testimonial" },
  ];

  return (
    <div>
      <TopBanner title="Testimonial" className="" breadCrumb={breadCrumData} bannerImg="/testiBanner.png"/>
      <Wrapper>
        <div className="flex max-sm:flex-col items-center gap-10 my-10">
          <div className="w-1/2 space-y-3 max-sm:w-full max-sm:text-center">
            <div className="max-sm:flex max-sm:justify-center">
              <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
                Our Customers
              </p>
            </div>
            <div className="">
              <p className="font-medium text-gray-600 my-2 uppercase">
                Authentic Voices, Genuine Experiences
              </p>
              <h1 className="text-6xl max-sm:text-3xl max-sm:hidden font-semibold text-gray-900 !leading-[70px] heading-all">
                Real people, really great reviews.
              </h1>
              <h1 className="text-6xl max-sm:text-3xl sm:hidden font-semibold text-gray-900 leading-[65px] heading-all">
                Real people, really great reviews.
              </h1>
            </div>
            <p className="content-all text-gray-600 max-sm:hidden">
              See what the individuals who visited{" "}
              <span className="text-primary font-medium "> Kostevo</span> <br />{" "}
              really think about us.
            </p>
            {/* FOR MOBILE */}
            <p className="content-all text-gray-600 sm:hidden">
              See what the individuals who visited{" "}
              <span className="text-primary font-medium "> Kostevo</span> really
              think about us.
            </p>
          </div>
          <div className="w-1/2 max-sm:">
            <img
              src="/testimonial-banner.jpg"
              alt="Testimonial Banner"
              className="bg-white"
            />
          </div>
        </div>
        <div className="mt-16 mb-5 flex flex-col justify-center items-center">
          <p className="font-medium text-gray-600 my-2 uppercase">
            Testimonials
          </p>
          <h1 className="text-6xl font-semibold heading-all max-sm:text-[32px]">
            Our customer reviews
          </h1>
          <div className="w-12 mt-5">
            <img src="/comma.svg" alt="Testimonial Banner" className="" />
          </div>
        </div>
        <div className="">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            components={<TestimonialCard />}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default TestimonialPage;
