import { keywords } from "@/app/layout";
import ProductSubCategory from "@/components/ProductSubCategory/ProductSubCategory";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Premium ${keywords} Solutions - Built for Industrial Durability | Kostevo`,
  description: `
  Kostevo offers premium ${keywords}, designed for durability and reliability in various industrial applications. Our precision-engineered products ensure optimal performance and efficiency in demanding environments.`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const SubCategoryProducts = () => {
  return (
    <div>
      <ProductSubCategory />
    </div>
  );
};

export default SubCategoryProducts;
