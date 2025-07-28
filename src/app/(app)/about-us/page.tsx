import AboutUsPage from "@/components/AboutUsPage/AboutUsPage";
import { Metadata } from "next";
import React from "react";
import { keywords } from "../../layout";

export const metadata: Metadata = {
  title: `About Us | Kostevo - Precision Engineering and Manufacturing Solutions, Kostevo has been a trusted name in precision machining, valve-tube fittings and the manufacturing for over 15 years. Based in Mumbai, Maharashtra, India, `,
  description: `
  we prioritize quality and efficiency in every project, from the production of heavy-duty valves and fittings complex machinery components. Our expert engineering team utilizes advanced technology to ensure our products meet the highest industry standards, providing durability and optimal performance in even the most demanding environments.`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const AboutUs = () => {
  return (
    <div>
      <AboutUsPage />
    </div>
  );
};

export default AboutUs;
