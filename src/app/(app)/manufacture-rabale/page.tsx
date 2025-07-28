import RabalePage from "@/components/ManufactureUnitPage/RabalePage";
import { Metadata } from "next";
import React from "react";
import { keywords } from "../../layout";

export const metadata: Metadata = {
  title: `Kostevo Rabale Unit - Precision Engineering and Manufacturing Solutions`,
  description: `Discover Kostevo's Rabale unit, where precision engineering meets innovation. Specializing in high-quality machining, valve manufacturing, any kind of precision work our Rabale facility is equipped with state-of-the-art technology to deliver reliable solutions for diverse industrial applications. Learn more about our commitment to quality and efficiency at Kostevo Rabale`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const Rabale = () => {
  return (
    <div>
      <RabalePage />
    </div>
  );
};

export default Rabale;
