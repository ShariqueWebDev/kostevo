"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import PathName from "../PathName/PathName";
import Wrapper from "../Wrapper/Wrapper";
import ProductPageCard from "./ProductPageCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Skeleton } from "antd";
import { capitalizeFirstLetter } from "@/lib/capitalizeWord";
import { AllProductsData } from "../AllProducts/listData";

const ProductsPage = () => {
  const [productsData, setProductData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getProductBySubCat/${slug}`
      );
      const data = await response.json();
      setProductData(data?.products);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);
  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Products" },
    { name: slug },
  ];

    const BannerImg = AllProductsData?.filter((img, index)=>slug === img?.slug)
    console.log(BannerImg);
      
  return (
    <div>
      <TopBanner
        // title={slug || "Products"}
        bannerImg={BannerImg?.[0]?.bannerImg || '/banner/newBanImg/2.png'}
        slugTitle={slug}
        breadCrumb={breadCrumData}
      />
      <Wrapper>
        <div className="pt-5 pb-10">
          {loading ? (
            <div className="flex flex-col gap-5">
              <Skeleton.Image
                style={{ width: "230px", height: "250px" }}
                active
              />
              <Skeleton paragraph={{ rows: 2, prefixCls: "2" }} />
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-10 max-sm:gap-5  place-items-center">
              {!productsData?.length <= 0 ? (
                productsData?.map((item: any, index: number) => {
                  return (
                    <Link href={`/product-details/${item?.slug}`}>
                      <ProductPageCard
                        title={item?.title}
                        imgPath={item?.meta?.image?.[0]}
                        index={item?.index}
                      />
                    </Link>
                  );
                })
              ) : (
                <div className="text-2xl font-medium ">
                  No products available
                </div>
              )}{" "}
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductsPage;
