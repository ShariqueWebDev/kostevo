import { Contact, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Link from "next/link";

const UttarshivUnitSection = () => {
  return (
    <div className="flex max-sm:gap-7 max-sm:flex-col-reverse max-sm:items-center mt-10">
      <div className="w-1/2 max-sm:w-full">
        <h1 className="heading-all text-[30px] max-sm:text-3xl  font-medium text-gray-800 leading-tight !mb-5">
          <span className="mr-3 text-5xl text-gray-300">2.</span>Uttar Shiv
          Manufacturing Unit
        </h1>
        <div className="text-sm content-all text-gray-500 space-y-3 !leading-relaxed ">
          <p className="max-sm:!text-justify">
            The Uttar Shiv Manufacturing Unit spans an area of 1,700 square
            meters, providing a dedicated space for specialized manufacturing
            processes. This facility focuses on the assembly of multiple parts
            to create final products tailored for specific applications.
          </p>
          <p className="max-sm:!text-justify">
            Equipped with up to 10 cutting-edge machines, including specialized
            equipment, the unit is designed to enhance efficiency and precision
            in production. The layout accommodates unique manufacturing
            processes, allowing for flexibility and customization to meet
            diverse client needs.
          </p>
        </div>
        <div className="flex gap-10 mt-7">
          <div className="max-w-[250px] w-full">
            <div className="text-gray-800 font-medium flex items-center gap-3">
              <div className="">
                <MapPin color="#ffa142" />
              </div>
              <h3 className="text-xl">Address</h3>
            </div>
            <div className="text-gray-500 text-sm content-all leading-[26px] mt-2">
              Uttar Shiv, Thane, Maharashtra 421204, India
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
                  <Mail color="#ffa142" size={17}/>
                </div>
                <a href="mailto:sales@kostevo.com">sales@kostevo.com</a>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <Mail color="#ffa142" size={17}/>
                </div>
                <a href="mailto:info@kostevo.com">info@kostevo.com</a>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <Phone color="#ffa142" size={17}/>
                </div>
                <a href="tel:919867219867">+91 9867 21 9867</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link href={"/manufacture-uttar-shiv"}>
            <ButtonPrimary
              title={"Explore More"}
              className="text-white bg-primary text-sm rounded-md heading-all hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <img src="/machines/uttar-shiv-img/cnc-lathe-machine3.jpg" alt="Machine at rabale" />
      </div>
    </div>
  );
};

export default UttarshivUnitSection;
