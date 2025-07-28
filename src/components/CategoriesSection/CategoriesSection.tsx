"use client";
import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

// import required modules
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CategoriesCard from "./CategoriesCard";
import EmblaCarousel from "../CategoriesSection/Embla/EmblaCarouselCat";
import { EmblaOptionsType } from "embla-carousel";

const CategoriesSection = () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };

  return (
    <div className="bg-[#f7f7f7] pt-20 pb-3">
      <Wrapper>
        <div className="flex max-sm:flex-col max-sm:gap-10 max-sm:justify-center max-sm:items-center">
          <div className="w-[25%] max-sm:w-full space-y-3">
            <p className="bg-secondary w-fit text-white text-xs p-1.5 font-medium rounded-sm">
              Our Range of Expertise
            </p>
            <h1 className="heading-all text-[37px] max-sm:text-3xl  leading-tight font-medium text-gray-800 ">
              Comprehensive Solutions in Precision Machining
            </h1>
            <p className="text-gray-500 content-all text-sm font-light">
              Kostevo offers a wide range of services, including precision
              machining, valve-tubes fittings and any kind of precision work
            </p>
          </div>
          <div className=" w-[75%] max-sm:w-full overflow-hidden relative pb-20 ">
            <EmblaCarousel options={OPTIONS} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CategoriesSection;
