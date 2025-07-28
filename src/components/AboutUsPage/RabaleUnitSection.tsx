import { Contact, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Link from "next/link";

const RabaleUnitSection = () => {
  return (
    <div className="flex max-sm:gap-7 max-sm:flex-col max-sm:items-center mt-10">
      <div className="w-1/2 max-sm:w-full">
        <img src="/machines/rabale/rabaleMachine.png" alt="machine at rabale" />
      </div>
      <div className="w-1/2 max-sm:w-full">
        <h1 className="heading-all text-[30px] max-sm:text-3xl  font-medium text-gray-800 leading-tight !mb-5">
          <span className="mr-3 text-5xl text-gray-300">1.</span>Rabale
          Manufacturing Unit
        </h1>
        <div className="text-sm content-all text-gray-500 space-y-3 leading-relaxed ">
          <p className="max-sm:!text-justify">
            Our Rabale Manufacturing Unit spans a spacious 1,500 square meters,
            purposefully designed to facilitate efficient and precise assembly
            for specialized applications. Equipped with eight advanced high-tech
            machines—such as CNC lathes, milling machines, drilling machines,
            and grinding machines
          </p>
          <p className="max-sm:!text-justify">
            our facility is well-prepared for complex manufacturing needs.
            Ensuring the utmost accuracy, we employ a comprehensive range of
            precision measurement tools, including calipers, micrometers, and
            gauges, to meet exacting standards in every component we produce.
          </p>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="max-w-[250px] w-full">
            <div className="text-gray-800 font-medium flex items-center gap-3">
              <div className="">
                <MapPin color="#ffa142" />
              </div>
              <h3 className="text-xl">Address</h3>
            </div>
            <div className="text-gray-500 text-sm content-all leading-[26px] mt-2">
              PAP-R-259, Near Golden Garage Rabale MIDC, Navi Mumbai 400701,
              India.
            </div>
          </div>
          <div className="max-w-[250px] w-full">
            <div className="text-gray-800 font-medium flex items-center gap-3">
              <div className="">
                <Contact color="#ffa142" />
              </div>
              <h3 className="text-xl">Contact Us</h3>
            </div>
            <div className="text-gray-500 text-sm content-all mt-2 flex flex-col space-y-1.5">
              <div className="flex gap-4">
                <div className="">
                  <Mail color="#ffa142" size={17} />
                </div>
                <a href="mailto:sales@kostevo.com">sales@kostevo.com</a>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <Mail color="#ffa142" size={17} />
                </div>
                <a href="mailto:info@kostevo.com">info@kostevo.com</a>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <Phone color="#ffa142" size={17} />
                </div>
                <a href="tel:919867219867">+91 9867 21 9867</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link href={"/manufacture-rabale"}>
            <ButtonPrimary
              title={"Explore More"}
              className="text-white bg-primary text-sm rounded-md heading-all hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RabaleUnitSection;
