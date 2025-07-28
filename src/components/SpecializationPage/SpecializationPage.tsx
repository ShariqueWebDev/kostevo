"use client";
import React, { useEffect } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import { Table, TableColumnsType } from "antd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

interface DataType {
  key: React.Key;
  name: string;
  size: string;
  material: string;
  code: string;
}

const SpecializationPage = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Size",
      dataIndex: "size",
    },
    {
      title: "Material",
      dataIndex: "material",
    },
    {
      title: "Specification Code",
      dataIndex: "code",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "316 Stainless Steel",
      size: '1/8"-1"',
      material: "Stainless Steel, Carbon Steel, Alloy, Brass Steel",
      code: "ANSI/ASME B1.20.1",
    },
    {
      key: "2",
      name: "API",
      size: '1/8"-2"',
      material: "Stainless Steel, Carbon Steel, Alloy, Brass Steel",
      code: "API B5",
    },
    {
      key: "3",
      name: "BSPT",
      size: '1/8"-3"',
      material: "Stainless Steel, Carbon Steel, Alloy, Brass Steel",
      code: "ISO 7-1",
    },
    {
      key: "4",
      name: "UNC",
      size: '1/8"-2"',
      material: "Stainless Steel, Carbon Steel, Alloy, Brass Steel",
      code: "ANSI/ASME B1.1",
    },
    {
      key: "5",
      name: "UNF",
      size: '1/8"-2"',
      material: "Stainless Steel, Carbon Steel, Alloy, Brass Steel",
      code: "ANSI/ASME B1.1",
    },
    {
      key: "6",
      name: "Metric",
      size: 'Upto 50mm"',
      material: "Stainless Steel, Carbon Steel, Alloy, Brass Steel",
      code: "ISO 68-1",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Specialization Thread" },
  ];

  return (
    <div>
      <TopBanner
        title="Precision Machining Work (Thread)"
        breadCrumb={breadCrumData}
        bannerImg="/threadBanner.jpg"
      />
      <Wrapper>
        <div
          className="flex justify-between items-center max-sm:flex-col"
          data-aos={"fade-right"}
        >
          <div className="w-1/2 max-sm:w-full">
            <Image
              src="/threads.png"
              alt="screw image"
              width={450}
              height={400}
            />
          </div>
          <div className="space-y-5 text-gray-500 text-sm w-1/2 max-sm:w-full">
            <p className="">
              We specialize in the precision manufacturing of threaded
              components that meet the highest industry standards. With a focus
              on accuracy and durability, our threaded products are designed to
              endure the most demanding applications.
            </p>
            <p className="">
              From valve fittings to customized threads for various industrial
              uses, our advanced machinery ensures perfect threading every time,
              delivering superior performance and a long lifespan.
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
            scroll={{ x: "max-content" }}
          />
          <ul className="space-y-6 mt-12 " data-aos={"fade-down"}>
            {/* <h1 className="text-gray-800 text-4xl max-sm:text-3xl font-medium text-center leading-tight">
              Range of Threaded Components and Specifications
            </h1> */}
            <li className="space-y-5 text-gray-500 text-sm  ">
              At <span className="font-medium text-gray-800">Kostevo</span>, we
              offer a wide range of threaded components that adhere to
              international standards, ensuring precision and reliability across
              various industries. Our product range includes different thread
              types, each available in multiple sizes and materials to suit
              diverse applications:
            </li>
            <li className="text-gray-500 text-sm">
              • <span className="font-medium text-gray-800">NPT threads</span>
              (1/8"-1") manufactured in stainless steel, carbon steel, alloy,
              and brass steel, compliant with ANSI/ASME B1.20.1 standards.
            </li>
            <li className="text-gray-500 text-sm">
              • <span className="font-medium text-gray-800">API threads</span>
              (1/8"-2"), conforming to API B5 specifications.
            </li>
            <li className="text-gray-500 text-sm">
              • <span className="font-medium text-gray-800">BSPT threads</span>
              (1/8"-3"), built to meet ISO 7-1 standards.
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">
                UNC and UNF threads
              </span>
              (1/8"-2"), adhering to ANSI/ASME B1.1 standards.
            </li>
            <li className="text-gray-500 text-sm">
              •{" "}
              <span className="font-medium text-gray-800">Metric threads</span>{" "}
              (up to 50mm) in line with ISO 68-1 specifications.
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center my-10">
          <div className="">
            <ArrowRight size={18} />
          </div>
          <div className=" font-medium">
            You may check{" "}
            <Link href={"/specialization-material"}>
              <span className="border-gray-400 text-gray-500 border-b">
                Specialization in Material
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SpecializationPage;
