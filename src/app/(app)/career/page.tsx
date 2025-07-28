import CareerPage from "@/components/CareerPage/CareerPage";
import React from "react";
import { keywords } from "../../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Careers at Kostevo - Join Our Team of Engineering Experts`,
  description: `
  Explore exciting career opportunities at Kostevo, a leader in precision machining and industrial solutions. Join our team of skilled professionals and build a rewarding career in engineering, manufacturing and innovation.`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const Career = () => {
  return (
    <div>
      <CareerPage />
    </div>
  );
};

export default Career;
