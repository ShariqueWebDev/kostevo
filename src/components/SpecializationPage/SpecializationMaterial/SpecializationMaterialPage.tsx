'use client'
import React, { useEffect } from "react";
import TopBanner from "../../TopBanner/TopBanner";
import Image from "next/image";
import Wrapper from "../../Wrapper/Wrapper";
import { Table, TableColumnsType } from "antd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

interface DataType {
  key: React.Key;
  name: string;
  barStock: string;
  uns: string;
  code: string;
}

const SpecializationMaterialPage = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Material",
      dataIndex: "name",
    },
    {
      title: "Bar Stock Forging",
      dataIndex: "barStock",
    },
    {
      title: "UNS",
      dataIndex: "uns",
    },
    {
      title: "Specification (Bar Stock)",
      dataIndex: "code",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "316 stainless Steel",
      barStock: "ASTM A-276",
      uns: "S31600",
      code: "ASTM A-276, ASTM A-479 F-316",
    },
    {
      key: "2",
      name: "316 stainless Steel",
      barStock: "ASTM A-276",
      uns: "S31603",
      code: "ASTM A-276, ASTM A-479 F-316L, ASTM A-182 531603",
    },
    {
      key: "3",
      name: "Alloy 20",
      barStock: "ASTM B-473",
      uns: "No8020",
      code: "ASTM B-473, ASTM B-462 No8020",
    },
    {
      key: "4",
      name: "Hastelloy",
      barStock: "ASTM B-574",
      uns: "N10276",
      code: "ASTM B-574, ASTM B-574 N10276",
    },
    {
      key: "5",
      name: "Alloy 400",
      barStock: "ASTM B-164",
      uns: "N04400",
      code: "ASTM B-164, ASTM B-564 N04400 ",
    },
    {
      key: "6",
      name: "Alloy 600",
      barStock: "ASTM B-166",
      uns: "N06600",
      code: "ASTM B-166, ASTM B-564 N06600 ",
    },
    {
      key: "7",
      name: "Duplex Stainless Steel (S31803)",
      barStock: "ASTM A-108",
      uns: "S31600",
      code: "ASTM A-108, ASTM A-105, ASTM A-182 S31600 ",
    },
    {
      key: "8",
      name: "Carbon Steel",
      barStock: "ASTM A-276",
      uns: "-",
      code: "ASTM A-276, ASME SA-479, ASTM A-182, ASME SA-182",
    },
    {
      key: "6",
      name: "304 Stainless Steel",
      barStock: "ASTM A-276",
      uns: "-",
      code: "ASTM A-276, ASME SA-479, ASTM A-182, ASME SA-182 ",
    },
  ];

  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[])

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Specialization Material" },
  ]

  return (
    <div>
      <TopBanner
        title="Precision Machining Work (Material)"
        breadCrumb={breadCrumData}
        bannerImg="/multiBanner.jpg"
      />
      <Wrapper>
        <div className="flex justify-between items-center max-sm:flex-col" data-aos={"fade-right"}>
          <div className="w-1/2 max-sm:w-full">
            <Image
              src="/material1.png"
              alt="screw image"
              width={450}
              height={400}
            />
          </div>
          <div className="space-y-5 text-gray-500 text-sm w-1/2 max-sm:w-full">
            <p className="">
              We work with industry-standard materials such as stainless steel,
              alloys, carbon steel and specialty metals like Hastelloy and
              Duplex Stainless Steel. Each material undergoes rigorous testing
              and adheres to globally recognized standards like ASTM, ASME and
              ISO, ensuring that our clients receive components that offer
              superior performance, even in the most challenging environments.
            </p>
            <p className="">
              Whether it's corrosion-resistant alloys for chemical industries or
              high-strength steels for heavy machinery, our deep material
              knowledge allows us to deliver custom solutions that meet both the
              functional and regulatory requirements of each project.
            </p>
          </div>
        </div>
        <div className="mt-16 " data-aos={"fade-right"}>
          <Table<DataType>
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={false}
            style={{ borderRadius: 10 }}
            className="border rounded-md"
            scroll={{x:"max-content"}}
          />
          <ul className="space-y-6 my-12 " data-aos={"fade-down"}>
            {/* <h1 className="text-gray-800 text-4xl max-sm:text-3xl font-medium text-center leading-tight">
              Range of Threaded Components and Specifications
            </h1> */}
            <li className="space-y-5 text-gray-500 text-sm  ">
              At <span className="font-medium text-gray-800">Kostevo</span>, we
              pride ourselves on delivering components made from the highest
              quality materials. Our range of bar stock and forging materials
              complies with rigorous industry standards, ensuring reliability
              and performance in demanding applications:
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">
                316 Stainless Steel
              </span>
              Available in ASTM A-276, with UNS designations S31600 and S31603,
              meeting specifications such as ASTM A-479 and ASTM A-182.
            </li>
            <li className="text-gray-500 text-sm">
              • <span className="font-medium text-gray-800">Alloy 20</span>
              Compliant with ASTM B-473 standards and No8020 UNS code, suited
              for corrosive environments with specifications like ASTM B-462.
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">
                Hastelloy (N10276)
              </span>
              Manufactured to ASTM B-574, ideal for severe chemical conditions,
              with specifications ensuring durability and resistance.
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">
                Alloy 400 & Alloy 600
              </span>
              Both materials meet ASTM B-164 and ASTM B-166 standards
              respectively, with UNS codes N04400 and N06600, delivering high
              strength and corrosion resistance.
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">
                Duplex Stainless Steel (S31803)
              </span>{" "}
              A high-performance material with standards like ASTM A-108 and
              ASTM A-182, offering superior strength and corrosion resistance.
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">
                Carbon Steel & 304 Stainless Steel
              </span>{" "}
              Manufactured under ASTM A-276, they provide robust, cost-effective
              solutions for general-purpose applications.
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center my-10">
          <div className="">
            <ArrowRight size={18} />
          </div>
          <div className=" font-medium">
            You may check{" "}
            <Link href={"/specialization-thread"}>
              <span className="border-gray-400 text-gray-500 border-b">
                Specialization in Thread
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SpecializationMaterialPage;
