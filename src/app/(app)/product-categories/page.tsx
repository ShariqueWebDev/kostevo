import CategoriesPage from "@/components/CategoriesPage/CategoriesPage";
import { Metadata } from "next";
import React from "react";
import { keywords } from "../../layout";

export const metadata: Metadata = {
  title:
    "Precision Machining Services - High-Quality Custom Components | Kostevo",
  description:
    " Discover Kostevo’s range of high-performance valves designed for durability and reliability in various industrial applications. Precision-engineered for optimal performance.",
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const ProductCategory = () => {
  return (
    <div>
      <CategoriesPage />
    </div>
  );
};

export default ProductCategory;
