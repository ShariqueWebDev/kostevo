"use client";
import { Image } from "antd";
import React, { useEffect } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowDownToLine } from "lucide-react";
// import { certificatesData } from "@/utils/contants";
import { ReactLenis } from "@studio-freight/react-lenis";

const downloadPdf = (path: string) => {
  window.open(path, "_blank");
};

const CertificationsPage = () => {
  const qualityAssuranceObj = [
    {
      title: "Certificate of Quality Management System",
      content:
        "Certifies that Kostevo has been assessed by Assurance Quality Certification LLC. and found to be in conformance with the requirements set forth by: ISO 9001:2015",
      content1:
        "The Quality Management System is applicable to Design, Development, Manufacture, Marketing and Supply of Instrumentation Fittings Ball Valves, Needle Valves, Manifold Valves, Compression Tubes, Gears, Pipe Fittings & Fastener etc.",
      certificateNo: "24EOOE09",
      expDate: "11/11/2027",
      imgPath: "/pdf/qms.png",
      pdfPath: "/pdf/KOSTEVO-QMS.pdf",
    },
    {
      title: "Certificate of Occupational Health & Safety Management System",
      content:
        "The Certificate of Occupational Health & Safety Management System (OHSMS) awarded to Kostevo signifies its commitment to providing a safe and healthy working environment for its employees and visitors",
      content1:
        "Typically aligned with the ISO 45001 standard, this certification reflects Kostevo's proactive approach to managing and minimizing workplace risks, ensuring compliance with health and safety regulations, and prioritizing employee well-being.",
      certificateNo: "24EOOE09",
      expDate: "11/11/2027",
      imgPath: "/pdf/ohsms.png",
      pdfPath: "/pdf/KOSTEVO-OHSMS.pdf",
    },
    {
      title: "Certificate of Environmental Management System",
      content:
        "The Certificate of Environmental Management System (EMS) is an essential certification for Kostevo, as it demonstrates the company’s commitment to minimizing its environmental impact through structured and proactive management practices.",
      content1:
        " This certification, commonly based on ISO 14001 standards, establishes that Kostevo has an effective system in place for identifying, monitoring, and controlling the environmental aspects of its operations.",
      certificateNo: "24EOH10",
      expDate: "11/11/2027",
      imgPath: "/pdf/qems.png",
      pdfPath: "/pdf/KOSTEVO-QEMS.pdf",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Certifications" },
  ];

  const CertificateSection = ({
    title,
    content,
    content1,
    certificateNo,
    expDate,
    imgPath,
    pdfPath,
    bgColor,
  }: {
    title: string;
    content: string;
    content1: string;
    certificateNo: string;
    expDate: string;
    imgPath: string;
    pdfPath: string;
    bgColor?: string;
  }) => (
    <div
      className={`${bgColor} py-8 lg:py-16 max-w-[1100px] w-full mx-auto px-5`}
    >
      <div className="templateContainer flex flex-col max-sm:items-center lg:flex-row gap-12 justify-center">
        <div
          data-aos="fade-right"
          className="w-full lg:w-[30%]  flex items-center justify-start"
        >
          <Image
            src={imgPath}
            alt={title}
            width={600}
            height={450}
            className="shadow-[8px_8px_0px_0px_#2E496B] border w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div
          data-aos="fade-left"
          className="w-full lg:w-[70%] space-y-4 lg:space-y-6 my-auto"
        >
          <h2 className="font-light heading-all text-gray-800 uppercase lg:text-left lg:!leading-tight tracking-wider text-xl lg:text-3xl text-templatePrimary">
            {title}
          </h2>

          <p className="text-left content-all text-gray-500 font-light text-sm lg:text-sm leading-relaxed tracking-wider">
            {content}
          </p>
          <p className="text-left content-all text-gray-500 font-light text-sm lg:text-sm leading-relaxed tracking-wider">
            {content1}
          </p>
          <div className="space-y-3 heading-all text-gray-600">
            <p className="">Certificate No: {certificateNo}</p>
            <p className="">This certificate is valid until: {expDate}</p>
          </div>
          <div>
            <button
              className="bg-templatePrimary text-gray-700 rounded-md py-3 lg:py-2 hover:lg:border lg:bg-white hover:lg:text-templatePrimary hover:border-gray-400 transition-all ease lg:border px-5 font-normal capitalize tracking-wider flex items-center gap-1 text-[1rem] lg:text-[0.85rem]"
              onClick={() => downloadPdf(pdfPath)}
            >
              <ArrowDownToLine size={15} className="mb-0.5" strokeWidth={1.5} />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ReactLenis root className="">
      <TopBanner
        title={"Quality Assurance & Control"}
        breadCrumb={breadCrumData}
        bannerImg="/qaBanner.jpg"
      />
      <div className=" bg-white ">
        {/* <Wrapper> */}
        <div className="">
          {/* <CustomBreadcrumb breadCrumb={["Home", "Quality"]} heading="Quality" /> */}
          <div className="w-full h-full ">
            {qualityAssuranceObj.map((certificate, index) => (
              <div
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#efefef]"}`}
              >
                <CertificateSection
                  key={index}
                  {...certificate}
                  // bgColor={index % 2 === 1 ? "bg-gray-100" : "bg-white"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default CertificationsPage;
