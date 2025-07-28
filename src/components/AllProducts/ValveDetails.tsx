"use client";
import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import EmblaCarousel from "../ProductDetailsPage/Embla/EmblaCarouselProd";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { EmblaOptionsType } from "embla-carousel";
import AllProductsClient from "./AllProducts";
import ProductAndServiceTop from "./ProductAndServiceTop/ProductAndServiceTop";

const ValveDetails = () => {
  const productSlideImages = [
    "/allProductsImg/valves/valve1.webp",
    "/allProductsImg/valves/valve2.webp",
    "/allProductsImg/valves/valve3.webp",
    // "/allProductsImg/valves/valve4.webp",
    // "/allProductsImg/valves/valve5.webp",
  ];

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 3;
  const SLIDES = productSlideImages;

  return (
    <div>
      <Wrapper>
        <ProductAndServiceTop/>
        <div className="">
          {/* <div className="w-[25%] h-full max-sm:h-auto max-sm:static max-sm:w-full  sidebarMenu overflow-y-auto overflow-x-hidden sticky top-32 ">
            <div className="">
              <AllProductsClient data={data} />
            </div>
          </div> */}

          <div className="flex max-sm:flex-col max-sm:gap-10  mb-16">
            <div className="w-1/2 max-sm:w-full" data-aos="fade-up">
              <EmblaCarousel slides={productSlideImages} options={OPTIONS} />
            </div>
            <div
              className="w-1/2 max-sm:w-full p-5 ml-5 max-sm:ml-0 bg-[#f7f7f7] rounded-md"
              data-aos={"fade-down"}
            >
              <div className=" leading-[1.05] max-lg:w-full max-lg:mt-8 ">
                <div className="">
                  <h4 className="text-3xl font-medium pb-1 text-primary mb-5">
                    Industrial Valves
                  </h4>
                  <p className="text-gray-600 content-all text-sm">
                    Manufactured in accordance with international standards like
                    API 602, ASME B16.34, and BS EN ISO 17292, our Valves offer
                    precise control over fluid flow in various industrial
                    processes. Available in sizes from 1/8 inch to 2 inches (up
                    to 4 inches for flanged valves), they are constructed from
                    materials such as stainless steel, alloy steel, and duplex
                    stainless steel conforming to ASTM A182 and ASTM A351. Our
                    range includes manifold valves, ball valves, needle valves,
                    and check valves, suitable for regulating flow in oil and
                    gas production, process control systems, and high-pressure
                    applications.{" "}
                  </p>
                </div>
                <div className="mt-7 flex max-sm:flex-col gap-5 items-center">
                  <Link href={"/sub-category-products/industrial-valves"}>
                    <ButtonPrimary
                      title="Explore More"
                      className="!text-gray-600 !bg-white border hover:scale-105 transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-" data-aos={"fade-up"}>
          {filterTable?.length > 0 && (
            <h2 className="mb-10 mt-20 text-3xl uppercase font-medium">
              Product Details
            </h2>
          )}

          <div className="nutriTable">
            {productsDetails?.meta?.table.map((tab: any, index: number) => {
              return (
                <div className="" key={index}>
                  <div dangerouslySetInnerHTML={{ __html: tab }} />
                </div>
              );
            })}
          </div> */}
        {/* <Table className="max-w-[700px] mb-16 w-full">
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column} className="w-[100px]">
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              Render rows dynamically
              {Array.from({ length: maxRows }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column} className="w-[100px]">
                      {groupedData[column][rowIndex] || "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        {/* </div> */}
        {/* <div className="my-10">
          <h1 className="heading-all font-medium text-3xl">Related Products</h1>
          <div className="">
            <RelatedProducts data={relatedProducts} ID={productsDetails?.id} />
          </div>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default ValveDetails;
