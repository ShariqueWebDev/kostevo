'use client';
import React, { useEffect } from "react";
import FuturePlanCard from "./FuturePlanCard";
import TopBanner from "../TopBanner/TopBanner";
import PathName from "../PathName/PathName";
import Wrapper from "../Wrapper/Wrapper";
import Aos from "aos";
import 'aos/dist/aos.css'

const FuturePlanePage = () => {
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
    {
      id: 3,
      title: "Tool Improvement",
      description:
        "Continuous improvement in our tooling capabilities is a priority. The Tool Improvement plan outlines our efforts to invest in and enhance our tooling technologies, ensuring cutting-edge precision in our manufacturing processes.",
      icon: "/icons/repair.png",
      imgUrl: "/tools.jpeg",
      aosAnime: "fade-right",
    },
    {
      id: 4,
      title: "New Technology",
      description:
        "Embracing emerging technologies is a key component of our future plans. The New Technology initiative focuses on staying at the forefront of innovation, adopting new methodologies and integrating advanced technologies into our manufacturing processes.",
      icon: "/icons/modernization.png",
      imgUrl: "/technology.jpeg",
      aosAnime: "fade-right",
    },
  ];

  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[]);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Future Plan" },
  ]
  
  return (
    <div>
      <TopBanner title="Future Plan" breadCrumb={breadCrumData} />
      <Wrapper>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-16 max-sm:gap-10 mb-16">
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
      </Wrapper>
    </div>
  );
};

export default FuturePlanePage;
