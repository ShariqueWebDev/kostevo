import UttarShivPage from "@/components/ManufactureUnitPage/UttarShivPage";
import { Metadata } from "next";
import React from "react";
import { keywords } from "../../layout";
export const metadata: Metadata = {
  title: `Kostevo Uttar Shiv Unit - Precision Engineering & Manufacturing Solutions`,
  description: ` Welcome to Kostevo’s Uttar Shiv unit, where we specialize in precision engineering and high-quality manufacturing solutions. Our dedicated facility focuses on producing durable industrial components, including valves, tube fittings, any kind of precision work. With a commitment to innovation and excellence, we ensure optimal performance for diverse industrial applications. Discover how our Uttar Shiv unit can meet your precision engineering needs.`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};
const UttarShiv = () => {
  return (
    <div>
      <UttarShivPage />
    </div>
  );
};

export default UttarShiv;
