import React from "react";
// import Banner from "../Banner/Banner";
// import CategoriesSection from "../CategoriesSection/CategoriesSection";
// import ProductSection from "../ProductSection/ProductSection";
// import AboutSection from "../AboutSection/AboutSection";
// import ManufactureSection from "../ManufactureSection/ManufactureSection";
// import OurClient from "../OurClient/OurClient";
// import IndustriesServedSection from "../IndustriesServedSection/IndustriesServedSection";
// import Achievment from "../AboutUsPage/Achievment";
import Achievment from "@/components/AboutUsPage/Achievment";
import AboutSection from "@/components/HomeV1/AboutSection";
import Banner from "@/components/HomeV1/Banner";
import IndustrySection from "@/components/HomeV1/IndustrySection";
import VideoSection from "@/components/HomeV1/VideoSection";
import OurClient from "@/components/OurClient/OurClient";

const HomePageComponents = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <IndustrySection />
      <VideoSection />
      <div
        className=""
        style={{
          backgroundImage: "url(/about-us/bg1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        data-aos={"fade-down"}
      >
        <Achievment />
      </div>
      <OurClient />
      {/* <Banner />
      <AboutSection />
      <CategoriesSection />
      <ProductSection />
      <IndustriesServedSection />
      <ManufactureSection />
      <div
        className=""
        style={{
          backgroundImage: "url(/about-us/bg1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        data-aos={"fade-down"}
      >
        <Achievment />
      </div>
      <OurClient /> */}
    </div>
  );
};

export default HomePageComponents;
