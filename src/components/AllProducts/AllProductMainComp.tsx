"use client";
import AllProductsDetails from "@/components/AllProducts/AllProductDetails";
import AllProductsClient from "@/components/AllProducts/AllProducts";
import { AllProductsData } from "@/components/AllProducts/listData";
import TopBanner from "@/components/TopBanner/TopBanner";
import { ArrowRight, PanelRightClose, SquareX } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AllProductsMainComp = ({ slug }: { slug: string }) => {
  const [toggleSidebar, setToggleSidebar] = useState<string>("-left-full");
  let Pathname = usePathname();

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

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: capitalizeFirstLetter(slug) },
  ];

  const ToggleSidebarHandler = () => {
    setToggleSidebar((prev: any) =>
      prev === "left-0" ? "-left-full" : "left-0"
    );
  };

  const BannerImg = AllProductsData.filter((img, index)=>slug === img.slug)
  
  

  return (
    <>
      <div className="">
        <TopBanner slugTitle={slug} breadCrumb={breadCrumData} bannerImg={BannerImg?.[0]?.bannerImg}/>
        <div className="flex max-sm:flex-col max-w-[1280px] w-full gap-5 mx-auto px-5 ">
          <div className=" hidden lg:block w-[30%] sticky max-sm:w-full max-sm:static max-sm: mt-5 top-40 h-full mb-10 max-sm:mb-0 bg-[#efefef] p-5 ">
            <AllProductsClient listMenuData={AllProductsData} />
          </div>
          <AllProductsDetails />
        </div>
      </div>
      <div className="fixed h-[50px] lg:hidden  bottom-4 flex justify-center z-[80] w-full">
        <div
          className="bg-secondary  py-3 px-10 w-fit text-white z-[80]  font-medium rounded-md flex gap-2"
          onClick={ToggleSidebarHandler}
        >
          <span className="">Products Menu</span>
          <span className="">
            <PanelRightClose />
          </span>
        </div>
        {
          <div
            className={`fixed ${toggleSidebar} transition-all duration-300 top-0 bg-gray-50 w-[300px] pl-3 pt-36 h-full`}
          >
            {AllProductsData?.map((item: any, index: number) => {
              // let isActive = pathname === `/all-products/${item.slug}`;
              return (
                <div className="" key={item?.id}>
                  <ul className="space-y-3">
                    <Link href={`/all-products/${item?.slug}`}>
                      <li
                        className={`heading-all mb-3 ${
                          Pathname === `/all-products/${item.slug}` ? "bg-gray-200" : ""
                        } hover:bg-white text-sm p-2  font-medium  flex items-center gap-2 mr-2 `}
                      >
                        {item?.title}
                        <ArrowRight size={15} />
                      </li>
                    </Link>
                    {/* </Link> */}
                  </ul>
                </div>
              );
            })}
            <div
              className="absolute top-[100px] right-3"
              onClick={() => {
                setToggleSidebar("-left-full");
              }}
            >
              <SquareX />
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default AllProductsMainComp;
