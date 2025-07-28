"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import PathName from "../PathName/PathName";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

interface BreadcrumbProps {
  name: string | string[];
  homePath?: string;
}

interface TopBannerProps {
  title?: string;
  slugTitle?: string | string[];
  className?: string;
  bannerImg:string;
  breadCrumb: BreadcrumbProps[];
}

const TopBanner: React.FC<TopBannerProps> = ({
  title,
  slugTitle,
  className,
  bannerImg,
  breadCrumb,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  function capitalizeFirstLetter(words: string) {
    let splitstr = words?.split("-");
    return splitstr
      ?.map((word: any) => {
        word = word.toLowerCase();
        word = word?.charAt(0)?.toUpperCase() + word?.slice(1);
        return word;
      })
      .join(" ");
  }

  return (
    <div
      className={`max-sm:mt-[90px] overflow-hidden relative h-[190px] flex flex-col gap-7 mb-10 justify-center items-center ${className} `}
      data-aos={"fade-down"}
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <h1
        className={`text-5xl font-medium max-sm:text-4xl heading-all text-white relative text-center max-sm:leading-tight`}
      >
        {title ? title : capitalizeFirstLetter(slugTitle)}
        {/* {slugTitle && slugTitle} */}
      </h1>
      <div className="flex flex-wrap justify-center items-center px-5">
        {breadCrumb.map((item, index) => (
          
          <div
            className="flex items-center text-sm gap-2 max-sm:gap-1 relative"
            key={index}
          >
            {item.homePath ? (
              <Link href={item.homePath}>
                <p className="capitalize text-white">{item.name}</p>
              </Link>
            ) : (
              <span className={`capitalize text-white`}>{item.name}</span>
            )}
            {index < breadCrumb.length - 1 && (
              <ChevronRight size={18} color="#fff" strokeWidth={1} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
