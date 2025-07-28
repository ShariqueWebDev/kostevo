"use client";
import React, { useEffect, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import PathName from "../PathName/PathName";
import Link from "next/link";
import ProductPageCard from "../ProductsPage/ProductPageCard";
// import { BACKEND_URL } from "@/app/layout";

const CategoriesPage = () => {
  const [categoryData, setCategoryData] = useState<any | null>(null);

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getAllMainCat`
      );
      const data = await response.json();
      setCategoryData(data);
    } catch (error) {}
  };

  
  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Products" },
  ]

  return (
    <div>
      <TopBanner title="Our Categories" breadCrumb={breadCrumData} bannerImg="/banner2.png"/>
      <Wrapper>
      
        <div className="pt-5 pb-10 grid grid-cols-4 gap-10 max-sm:grid-cols-1 place-items-center">
          {categoryData?.map((item: any, index: number) => {
            return (
              <Link href={item?.subcategories?`/sub-category-products/${item?.slug}`:`/products/${item?.slug}`} key={index}>
                <ProductPageCard title={item?.name} imgPath={item?.image} />
              </Link>
            );
          })}
         
        </div>
      </Wrapper>
    </div>
  );
};

export default CategoriesPage;
