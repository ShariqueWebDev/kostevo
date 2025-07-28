"use client";
import React, { useEffect, useRef, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";

import gsap from "gsap";

import { Image } from "antd";

import { Tabs, Tab, Box } from "@mui/material";
// import { BACKEND_URL } from "@/app/layout";

interface GalleryItem {
  id: number;
  slug: string;
  name: string;
}

interface Props {
  galleryData: GalleryItem[];
}

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState<any | null>(null);
  const [getImageBySlug, setGetImageBySlug] = useState([]);
  // const [activeTab, setActiveTab] = useState<string | null>("all");

  const imageSectionRef = useRef(null); // Ref for the image section

  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (event: React.SyntheticEvent, newSlug: string) => {
    setActiveTab(newSlug);
    GetSlugHandler(newSlug); // Replace with your function to handle the selected slug
  };

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/gallery-type-terms`
      );
      const data = await response.json();
      setGalleryData(data);

      const allImages = data?.find((item: any) => item.slug === "all");
      if (allImages) {
        setGetImageBySlug([allImages]);
      }
    } catch (error) {
      console.error("Failed to fetch gallery data", error);
    }
  };

  const GetSlugHandler = (slug: string) => {
    setActiveTab(slug);
    const getFilterImage = galleryData?.filter(
      (fil: any) => fil?.slug === slug
    );
    setGetImageBySlug(getFilterImage);
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  // Trigger animation on image section whenever getImageBySlug changes
  useEffect(() => {
    if (imageSectionRef.current) {
      gsap.fromTo(
        imageSectionRef.current,
        { opacity: 0, y: 30 }, // Start from transparent and below
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [getImageBySlug]);

  const breadCrumData = [{ name: "Home", homePath: "/" }, { name: "Gallery" }];

  return (
    <>
      <TopBanner
        title="Products Gallery"
        breadCrumb={breadCrumData}
        bannerImg="/banner2.png"
      />
      <div className="max-w-[1280px] w-full px-3 mx-auto mt-20 mb-10 ">
        <div className="gap-10 mb-20  ">
          <Box sx={{ bgcolor: "#f5f5f5", borderRadius: 1, p: 1 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="gallery tabs"
              // sx={{
              //   minWidth:50
              // }}
              TabIndicatorProps={{
                style: { backgroundColor: "#ffa142" }, // Customize the indicator color
              }}
            >
              {galleryData?.map((item: any) => (
                <Tab
                  key={item.id}
                  value={item.slug}
                  label={item.name}
                  sx={{
                    minWidth: { xs: 80, sm: 120 }, // Responsive min width for mobile
                    mx: { xs: 0.5, sm: 1 }, // Adjust horizontal margin
                    px: { xs: 1, sm: 2 }, // Adjust padding for mobile
                    py: { xs: 1, sm: 1.5 },
                    bgcolor: activeTab === item.slug ? "#ffa142" : "#dddcdc",
                    color: activeTab === item.slug ? "#ffffff" : "gray",
                    textTransform: "none",
                    fontSize: "0.875rem",
                    fontWeight: activeTab === item.slug ? "medium" : "normal",
                    borderRadius: 1,
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </div>

        {/* Image section with GSAP animation applied */}
        <div ref={imageSectionRef}>
          {getImageBySlug?.map((img: any) => (
            <div key={img?.id}>
              {img?.related_posts.map((item: any) => (
                <div
                  key={item?.id}
                  className="grid grid-cols-4 max-sm:grid-cols-1 place-items-center gap-5"
                >
                  {item?.gallery_images?.map((imgV1: any) => (
                    <div className="w-[250px] ">
                      <div
                        key={imgV1?.id}
                        className="w-[260px]  bg-[#efefef] cursor-pointer !h-[320px] flex justify-center items-center overflow-hidden"
                      >
                        <Image
                          preview={{
                            mask: false,
                          }}
                          src={imgV1?.image}
                          alt={imgV1?.title}
                          className=" border-gray-100  object-contain hover:scale-125 transition-all duration-500"
                        />
                      </div>
                      <div
                        className="py-3 text-gray-500 text-sm content-all !capitalize h-[80px]"
                        dangerouslySetInnerHTML={{ __html: imgV1?.title }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
