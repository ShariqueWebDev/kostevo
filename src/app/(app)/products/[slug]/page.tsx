import { keywords } from "@/app/layout";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Kostevo - Premium Precision Machining and Industrial Products`,
  description: ` Explore Kostevo's extensive range of premium precision machining services and industrial products, including valves, tube fittings, any kind of precision work. Our expertly engineered solutions ensure optimal performance and reliability for various industrial applications. Discover how Kostevo can enhance your operations with high-quality, durable components tailored to your specific needs.`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const page = () => {
  return (
    <div className="">
      <ProductsPage />
    </div>
  );
};

export default page;
