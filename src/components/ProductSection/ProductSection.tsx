"use client";
import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

import "./styles.css";

// import required modules
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "./ProductCard";
import EmblaCarousel from "./Embla/EmblaCarouselProd";
import { EmblaOptionsType } from "embla-carousel";
import ProductPageCard from "../ProductsPage/ProductPageCard";

const OurClient = () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="bg-white pt-16">
      <Wrapper>
        <div className=" w-full mb-5">
          {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
            Our Products
          </p> */}
          <div className="space-y-3 text-center ">
            <h1 className="heading-all text-4xl max-sm:text-3xl leading-tight font-medium text-gray-800">
            Our Production Line
            </h1>
            <p className="text-gray-500 text-sm px-36 max-sm:px-0 font-light content-all w- max-sm:w-full">
              Explore our product image catalog: a visual delight showcasing our
              curated collection. Browse through and discover the perfect blend
              of form and function, designed to elevate your experience.
            </p>
          </div>
        </div>
        <div className="flex gap-5 max-sm:flex-col max-sm:gap-10 max-sm:justify-center max-sm:items-center">
          <div className="w-full overflow-hidden relative pb-20">
            <EmblaCarousel
              
              options={OPTIONS}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurClient;
