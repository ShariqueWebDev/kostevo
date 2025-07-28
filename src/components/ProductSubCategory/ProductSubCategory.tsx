"use client";
import React, { useEffect, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import PathName from "../PathName/PathName";
import ProductPageCard from "../ProductsPage/ProductPageCard";
import Link from "next/link";
// import { BASE_URL } from "@/app/page";
import { useParams } from "next/navigation";
import { Skeleton } from "antd";
import { capitalizeFirstLetter } from "@/lib/capitalizeWord";
import { AllProductsData } from "../AllProducts/listData";

const ProductSubCategory = () => {
  const [subCategoryData, setSubCategoryData] = useState<any | null>([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

   const BannerImg = AllProductsData?.filter((img, index)=>slug === img?.slug)

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getSubCat/${slug}`
      );
      const data = await response.json();

      setSubCategoryData(data?.subcategories);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Sub Category Product" },
    { name: slug },
  ]

  return (
    <div>
      <TopBanner
        slugTitle={slug}
        breadCrumb={breadCrumData}
        bannerImg={BannerImg?.[0]?.bannerImg}
      />
      <Wrapper>
        {/* <div className="space-y-5 my-5 ">
          <h1 className=" heading-all text-4xl  max-sm:text-3xl font-medium leading-tight">
            Precision Machining & Industrial Components -{" "}
            <span className="text-primary">Valves</span>
          </h1>
          <p className="text-gray-600 content-all text-sm ">
            KOSTEVO has been delivering quality products with high precision and
            excellence to its customers to meet industry requirements. It
            produced wide range of valves and accessories with precision using
            technically advanced machineries and manufacturing process. All the
            products are tested in house quality control facility and assure the
            product quality to meet international standards and safety norms
          </p>
        </div> */}
        <div className="pt-5 pb-10 grid grid-cols-4 gap-10 max-sm:grid-cols-1 place-items-center">
          {loading ? (
            <div className="flex flex-col gap-5">
              <Skeleton.Image
                style={{ width: "230px", height: "250px" }}
                active
              />
              <Skeleton paragraph={{ rows: 2, prefixCls: "" }} />
            </div>
          ) : (
            <>
              {subCategoryData?.map((item: any, index: number) => {
                return (
                  <div className="">
                    <Link href={`/products/${item?.slug}`}>
                      <ProductPageCard
                        title={item?.name}
                        imgPath={item?.meta?.["product_type-image"]?.[0]}
                      />
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductSubCategory;
