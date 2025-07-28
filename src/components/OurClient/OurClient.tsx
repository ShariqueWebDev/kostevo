"use client";
import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import { EmblaOptionsType } from "embla-carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "./Embla/EmblaCarouselClient";
import { slides } from "@/lib/ourClient";

import Aos from "aos";
import "aos/dist/aos.css";

const OurClient = () => {
  const nextButtonRef = useRef<HTMLDivElement | null>(null);
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[])

  return (
    <div className="mt-10" data-aos={"fade-right"}>
      <div className=" pt-10  pb-3">
        <Wrapper>
          <p className="text-gray-600 mb-10 max-sm:mb-5 text-sm content-all font-light">
            Our clients, a diverse community of tastemakers, luxury enthusiasts,
            and global sophisticates, embody the essence of our brand. From
            those with discerning styles to timeless elegance enthusiasts, we
            are honored to serve a clientele that appreciates the artistry and
            sophistication embedded in every fragrance we offer.
          </p>

          <div className="flex gap-5 max-sm:flex-col max-sm:gap-10 max-sm:justify-center max-sm:items-center">
            <div className="w-full max-sm:flex-col-reverse md:flex-col-reverse flex lg:flex-row gap-10 max-sm:gap-5 overflow-hidden items-center relative pb-20">
              <div className="w-[80%] max-sm:w-full">
                <EmblaCarousel
                  slides={slides}
                  options={OPTIONS}
                ></EmblaCarousel>
              </div>
              <div className="w-[22%] max-sm:w-full uppercase text-nowrap h-full flex items-center justify-center p-3  mb-5 font-semibold text-[28px] max-sm:text-3xl text-gray-800 max-sm:mb-0">
                Our Clients
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <hr className="max-w-[1200px] w-full mx-auto" />
    </div>
  );
};

export default OurClient;
