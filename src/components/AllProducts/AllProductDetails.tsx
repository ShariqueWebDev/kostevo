"use client";
import React, { useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

import ProductAndServiceTop from "./ProductAndServiceTop/ProductAndServiceTop";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AllProductsData } from "./listData";
import Aos from "aos";

const AllProductsDetails = () => {
  const { slug } = useParams();

  const filterDataBySlug = AllProductsData.filter(
    (item) => item?.slug === slug
  );

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full">
      <Wrapper className="max-sm:px-0" >
        <div className="">
          {filterDataBySlug.map((item: any, index: number) => {
            return (
              <div className="w-full" id={item?.id} key={item?.id}>
                {item?.title !== "Precision Work" && (
                  <div data-aos={"fade-up"}>
                    <ProductAndServiceTop />
                  </div>
                )}
                {item?.title !== "Precision Work" ? (
                  <div className="flex max-sm:flex-col max-sm:gap-10   mb-16">
                    <div className="w-1/2 max-sm:w-full" data-aos="fade-up">
                      <Image
                        src={item?.imgPath}
                        height={700}
                        width={700}
                        alt={item?.title}
                      />
                    </div>
                    <div
                      className="w-1/2 max-sm:w-full p-5 ml-5 max-sm:ml-0 bg-[#f7f7f7] rounded-md"
                      data-aos={"fade-down"}
                    >
                      <div className=" leading-[1.05] max-lg:w-full max-lg:mt-8 ">
                        <div className="">
                          <h4 className="text-3xl font-medium pb-1 text-primary mb-5">
                            {item?.title}
                          </h4>
                          <p className="text-gray-600 content-all text-sm">
                            {item?.description}{" "}
                          </p>
                        </div>
                        <div className="mt-7 flex max-sm:flex-col gap-5 items-center">
                          <Link
                            href={`${
                              item?.products
                                ? `/products/${slug}`
                                : `/sub-category-products/${slug}`
                            }`}
                          >
                            <ButtonPrimary
                              title="Explore More"
                              className="!text-gray-600 !bg-white border hover:scale-105 transition-all duration-300 "
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl heading-all flex justify-center items-center h-[300px] ">
                    No Products Available
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default AllProductsDetails;
