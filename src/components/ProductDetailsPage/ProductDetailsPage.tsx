"use client";
import React, { useContext, useEffect, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import { EmblaOptionsType } from "embla-carousel";
import "../ProductDetailsPage/Embla/emblaProd.css";
import EmblaCarousel from "./Embla/EmblaCarouselProd";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Link from "next/link";
import { productSlideImages } from "@/lib/productDetailsImg";
import { Skeleton } from "antd";
// import ProductEnquiryForm from "./ProductEnquiryForm";
import { useParams } from "next/navigation";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/lib/capitalizeWord";
import Aos from "aos";
import "aos/dist/aos.css";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { AppContexts } from "../context";
// import { BACKEND_URL } from "@/app/layout";

// import DOMPurify from 'dompurify';

interface DataType {
  key: React.Key;
  name: string;
  featureDetails: string;
}

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = productSlideImages;

const ProductDetailsPage = () => {
  const [loading, setLoading] = useState(true);

  const [productsDetails, setProductDetails] = useState<any | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<any | null>(null);
  const [isFetched, setIsFetched] = useState(false);
  const [tableData, setTableData] = useState(null);
  const [bannerImage, setBannerImage] = useState("");

  const {
    inputValue,
    setInputValue,
  }: {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(AppContexts);

  const { slug } = useParams();

  const fetchSingleProductDetails = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getproductbyslug?slug=${slug}`
      );
      const data = await response.json();
      setProductDetails(data);
      setTableData(productsDetails);
      setLoading(false);
      setIsFetched(true);
    } catch (error) {
      console.log("single Product details could not fetch");
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getProductBySubCat/${
          productsDetails?.categories?.[1]
            ? productsDetails?.categories?.[1]?.slug
            : productsDetails?.categories?.[0]?.slug
        }`
      );
      const data = await response.json();
      setRelatedProducts(data);
      setTableData(productsDetails);
      setLoading(false);
    } catch (error) {
      console.log("single Product details could not fetch");
    }
  };

  useEffect(() => {
    fetchSingleProductDetails();
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    fetchRelatedProducts();
  }, [isFetched]);

  const filterTable = productsDetails?.meta?.table.filter(
    (item: any) => item.trim() !== ""
  );

  // let TableData = productsDetails?.meta?.table[0];

  // const cleanHtml = DOMPurify.sanitize(TableData);

  const groupedData = productsDetails?.meta?.table_data?.reduce(
    (acc: any, { column, data }: { column: any; data: any }) => {
      if (!acc[column]) {
        acc[column] = [];
      }
      acc[column].push(data);
      return acc;
    },
    {} as Record<string, string[]>
  );

  const columns = groupedData ? Object.keys(groupedData) : [];
  const maxRows = groupedData
    ? Math.max(...Object.values(groupedData).map((col: any) => col.length))
    : 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  type BreadcrumbProps = {
    name: string | string[];
    homePath?: string;
  };

  const breadCrumData: BreadcrumbProps[] = [
    { name: "Home", homePath: "/" },
    { name: "Products" },
    { name: slug },
  ];

  const downloadPdfHandler = (file: any) => {
    if (file && file.length > 0) {
      window.open(file, "_blank");
    } else {
      console.error("No file available for download.");
      // Optionally, show a user-friendly message or handle the case here.
    }
  };

  useEffect(() => {
    if (productsDetails?.categories?.[0]?.slug) {
      const categorySlug = productsDetails.categories[0].slug;

      // Map slugs to banner images
      const bannerImages = {
        "compression-tube-fittings": "/banner/newBanImg/compBanner.jpg",
        "fastener": "/banner/newBanImg/4.png",
        "flanges": "/banner/newBanImg/flangeBanner.jpg", // Default fallback
        "gears": "/banner/newBanImg/3.png", // Default fallback
        "pipe-fittings": "/banner/newBanImg/1.png", // Default fallback
        "ball-valves": "/banner/newBanImg/2.png", // Default fallback
        "check-valves": "/banner/newBanImg/2.png", // Default fallback
        "industrial-valves": "/banner/newBanImg/2.png", // Default fallback
        "needle-valves": "/banner/newBanImg/2.png", // Default fallback
      };

      // Dynamically set the banner image
      setBannerImage(bannerImages[categorySlug] || bannerImages["/banner2.png"]);
    }
  }, [productsDetails]);

  return (
    <div className="">
      <TopBanner
        slugTitle={
          productsDetails?.main_category ||
          productsDetails?.categories?.[0]?.slug
        }
        className=""
        breadCrumb={breadCrumData}
        bannerImg={bannerImage}
      />
      <Wrapper>
        {/* <PathName path="" /> */}
        {loading ? (
          <div className="mb-10 flex gap-5 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-col gap-3">
              <Skeleton.Image active />
              <Skeleton.Image active />
              <Skeleton.Image active />
              <Skeleton.Image active />
            </div>
            <div className="">
              <Skeleton.Image
                active
                className="!w-[450px] !h-[500px] max-sm:!w-[300px] max-sm:!h-[300px] "
              />
            </div>
            <div className="flex-grow space-y-5">
              <Skeleton paragraph={{ rows: 1 }} active />
              <Skeleton active className="" />
              <Skeleton.Button
                active
                className="!w-[450px] !h-[220px] max-sm:!w-[300px] "
              />
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex max-sm:flex-col max-sm:gap-10  mb-16">
              <div className="w-1/2 max-sm:w-full" data-aos="fade-up">
                <EmblaCarousel
                  slides={productsDetails?.meta?.image_gallery}
                  options={OPTIONS}
                />
              </div>
              <div
                className="w-1/2 max-sm:w-full p-5 ml-5 max-sm:ml-0 bg-[#f7f7f7] rounded-md"
                data-aos={"fade-down"}
              >
                <div className=" leading-[1.05] max-lg:w-full max-lg:mt-8 ">
                  <div className="">
                    <h4
                      className="text-3xl font-medium pb-1 text-primary mb-5"
                      dangerouslySetInnerHTML={{
                        __html: productsDetails?.meta?.title?.[0],
                      }}
                    ></h4>

                    <p
                      className="text-gray-600 content-all text-sm"
                      dangerouslySetInnerHTML={{
                        __html:
                          productsDetails?.meta?._description?.[0] ||
                          "No description available",
                      }}
                    ></p>
                    {}
                  </div>
                  <div
                    className="mt-7 text-sm flex max-sm:flex-col gap-2 max-sm:gap-5 items-center"
                    onClick={() => {
                      setInputValue(productsDetails?.meta?.title?.[0]);
                    }}
                  >
                    <Link href={"/rfq"}>
                      <ButtonPrimary
                        title="Enquiry Now"
                        className="!text-gray-600  !bg-white border hover:border-gray-400 hover:scale-105 transition-all duration-300 "
                      />
                    </Link>
                    {productsDetails?.categories?.[1]?.name ===
                    "Industrial Valves" ? (
                      <div
                        className={`${
                          productsDetails?.categories?.[1]?.meta?.brochure
                            ? "cursor-pointer"
                            : "cursor-not-allowed"
                        }`}
                        onClick={() =>
                          downloadPdfHandler(
                            productsDetails?.categories?.[1]?.meta?.brochure
                          )
                        }
                      >
                        <ButtonPrimary
                          title="Download Brochure"
                          className={`!text-gray-600 !bg-white border hover:border-gray-400 hover:scale-105 transition-all duration-300`}
                        />
                      </div>
                    ) : (
                      <div
                        className={`${
                          productsDetails?.categories?.[0]?.meta?.brochure
                            ? "cursor-pointer"
                            : "cursor-not-allowed"
                        }`}
                        onClick={() =>
                          downloadPdfHandler(
                            productsDetails?.categories?.[0]?.meta?.brochure
                          )
                        }
                      >
                        <ButtonPrimary
                          title="Download Brochure"
                          className={`!text-gray-600 !bg-white border hover:border-gray-400 hover:scale-105 transition-all duration-300`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mx-" data-aos={"fade-up"}>
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
          </div>

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
        </div>

        <div className="my-10">
          <h1 className="heading-all font-medium text-3xl">Related Products</h1>
          <div className="">
            <RelatedProducts data={relatedProducts} ID={productsDetails?.id} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetailsPage;
