import ContactUsPage from "@/components/ContactUsPage/ContactUsPage";
import { Metadata } from "next";
import React from "react";
import { keywords } from "../../layout";

export const metadata: Metadata = {
  title: `Contact Kostevo - Get in Touch for Industrial Solutions and Support`,
  description: `
 Reach out to Kostevo for inquiries about precision machining, valve fittings, any kind of precision work and custom industrial solutions. Our team is ready to assist with your needs and provide expert support.`,
  keywords: keywords,
  alternates: {
    canonical: `http://localhost:3000`,
  },
};

const ContactUs = () => {
  return (
    <div>
       {/* '/',
//     '/about-us',
//     '/contact-us',
//     '/all-products',  
//     '/career',  
//     '/certifications',  
//     '/future-plan',  
//     '/gallery',  
//     '/industries-serve',  
//     '/manufacture-rabale',  
//     '/manufacture-uttar-shiv',  
//     '/policies',  
//     '/rfq',  
//     '/specialization-material',  
//     '/specialization-thread',  
//     '/terms-and-conditions',  
//     '/testimonial',   */}
      <ContactUsPage />
    </div>
  );
};

export default ContactUs;
