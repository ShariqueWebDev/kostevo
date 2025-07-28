"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { IndustryServedDataProps } from "../OurClient/industriesData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const IndustryCard = ({ item }: { item: IndustryServedDataProps }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="max-w-[380px] w-full" data-aos={"fade-up"}>
      <div className="">
        <div className="w-full h-[210px]  rounded-md overflow-hidden">
          <Image src={item?.imgPath} width={500} height={350} alt="" />
        </div>
        <div className="flex justify-between items-center my-3">
          <div className="">
            <h1 className="text-2xl heading-all">{item?.title}</h1>
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-primary">
            <Image src={item?.icon} width={30} height={30} alt="" />
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-10 h-[1.5px] bg-primary rounded-full"></div>
          <div className="w-full h-[1.5px] bg-gray-300 rounded-full"></div>
        </div>
        <div className="my-5">
          <p className="content-all text-sm text-gray-600 line-clamp-4">
            {item?.description}
          </p>
          <div className="group w-fit">
            <div className="flex items-center gap-2 mt-5">
              <Link href={"/industries-serve"} className="heading-all text-sm">
                <ButtonPrimary
                  title="See More"
                  className="bg-primary textblack rounded-sm font-medium hover:shadow-lg transition-all duration-300"
                />
              </Link>
              {/* <div className="">
                <ArrowRight size={14} />
              </div> */}
            </div>
            {/* <div className="mt-1 overflow-hidden w-fit">
              <div className="w-20 h-[2px] bg-primary -translate-x-24 group-hover:translate-x-0 transition-all duration-300"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
