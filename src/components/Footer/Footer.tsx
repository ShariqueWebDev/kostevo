"use client";
import {
  ChevronDown,
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Mail,
  MapPinned,
  Phone,
  Twitter,
  TwitterIcon,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [hoveredItemId2, setHoveredItemId2] = useState<number | null>(null);
  const [subMenu2, setSubMenu2] = useState<boolean>(false);
  // const [subMenuHeight2, setSubMenuHeight2] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const currentYear = new Date().getFullYear();

  const toggleSubMenu = () => setMobileMenu(!mobileMenu);
  const toggleSubMenu2 = () => setSubMenu2(!subMenu2);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const aboutData = [
    {
      id: 7,
      name: "About Us",

      subMenu: true,
      subMenuV1: [
        {
          id: 17,
          name: "Company",
          url: "/about-us",
        },
        {
          id: 3,
          name: "Specialization",

          subMenu: true,
          subMenuV2: [
            {
              id: 13,
              name: "Thread",
              url: "/specialization-thread",
            },
            {
              id: 14,
              name: "Material",
              url: "/specialization-material",
            },
          ],
        },
        {
          id: 18,
          name: "Policy",
          url: "/policies",
        },
        {
          id: 19,
          name: "Future Plan",
          url: "/future-plan",
        },
        {
          id: 20,
          name: "QA / QC",
          url: "/certifications",
        },
      ],
    },
  ];

  return (
    <footer
      className=" bg-white text-gray-800 "
      style={{
        backgroundImage: "url(/footer_bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // opacity:0.7,
        position: "relative",
      }}
    >
      <div className=" px-2 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="relative grid grid-cols-1  gap-8 lg:grid-cols-3">
          <div className=" px-3" data-aos={"fade-right"}>
            <div className=" justify-center max-sm:flex-col">
              <div className="w-full">
                <h3 className="text-[28px] font-semibold mb-5 text-gray-300 heading-all">
                  About Kostevo{" "}
                </h3>
                <p className="relative text-sm text-gray-300 heading-all ">
                  Kostevo has been well-versed in precision machining for the
                  past 15 years. In the designing, like the Compression Tubes, Fasteners,
                  Flanges, Gears, Industrial Valves, Pipe Fittings and any kind of precision work.
                </p>
                <p className="heading-all text-3xl font-bold mt-5 bg-gradient-to-r from-primary/70 via- to-secondary bg-clip-text text-transparent">
                  Since 15 Years
                </p>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 gap-7 px-3 lg:col-span-2 sm:grid-cols-4 lg:grid-cols-4"
            data-aos={"fade-up"}
          >
            <div className="space-y-3">
              <p className="font-medium text-xl text-gray-300 heading-all">
                Links
              </p>
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
              <div className=" flex flex-col mt-4 space-y-2 text-sm w-fit">
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/product-categories"}
                >
                  Categories
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/gallery"}
                >
                  Products Gallery
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/about-us"}
                >
                  About Us
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/specialization-thread"}
                >
                  Specialization in Thread
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/specialization-material"}
                >
                  Specialization in Material
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/manufacture-rabale"}
                >
                  Rabale Unit
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/manufacture-uttar-shiv"}
                >
                  Uttar Shiv Unit
                </Link>
                {/* <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/future-plan"}
                >
                  Future Plan
                </Link> */}
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/career"}
                >
                  Career
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/policies"}
                >
                  Policy
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/certifications"}
                >
                  QA & QC
                </Link>
                {/* <div className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary ">
                  {aboutData?.map((item: any, index: number) => {
                    return (
                      <ul className="" key={item?.id}>
                        <li
                          className=" heading-all flex gap-2 cursor-pointer    text-gray-300  "
                          onClick={() => {
                            setMobileMenu(!mobileMenu);
                          }}
                        >
                          {item?.name}
                          {item?.subMenu && (
                            <div className={"mt-0.5"}>
                              <ChevronDown size={15} />
                            </div>
                          )}
                        </li>

                        {mobileMenu && (
                          <ul className="">
                            {aboutData[0].subMenuV1.map((itemV1) => (
                              <li key={itemV1.id} className="my-2">
                                {itemV1.subMenuV2 ? (
                                  <div
                                    className="cursor-pointer flex items-center "
                                    onClick={toggleSubMenu2}
                                  >
                                    <span>{itemV1.name}</span>
                                    {itemV1.subMenuV2 && (
                                      <ChevronDown size={15} className="ml-1" />
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    href={itemV1.url || "#"}
                                    className="text-gray-300 "
                                  >
                                    {itemV1.name}
                                  </Link>
                                )}

                                {itemV1.subMenuV2 && subMenu2 && (
                                  <ul className="">
                                    {itemV1.subMenuV2.map((itemV2) => (
                                      <li key={itemV2.id} className="my-2">
                                        <Link
                                          href={itemV2.url || "#"}
                                          className="text-gray-300 "
                                        >
                                          {itemV2.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </ul>
                    );
                  })}
                </div> */}
                <Link
                  className="  text-gray-300 heading-all hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/testimonial"}
                >
                  Testimonial
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/contact-us"}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-medium text-xl text-gray-300 heading-all">
                Quick Links
              </p>
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
              <div className=" flex flex-col mt-4 space-y-2 text-sm w-fit">
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/sitemap.xml"}
                >
                  Sitemap
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/policies"}
                >
                  Privacy Policy
                </Link>
                <Link
                  className=" heading-all   text-gray-300 hover:translate-x-2 transition-all duration-300 hover:text-primary "
                  href={"/terms-and-conditions"}
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-5 ">
                <div className="h-[150px] max-sm:h-auto">
                  <p className="font-medium text-xl text-gray-300 heading-all">
                    Office Address
                  </p>
                  <div className="w-16 h-0.5 bg-primary rounded-full my-3"></div>
                  <div className="flex text-sm items-center gap-2">
                    {/* <div>
                      <MapPinned size={20} color="#72a8dc" />
                      </div> */}
                    <h2 className=" text-gray-300 heading-all ">
                      PAP-R-259, Near Golden Garage Rabale MIDC, Navi Mumbai
                      400701, India.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="max-sm:!mt-5">
                <p className="font-medium text-xl text-gray-300 heading-all">
                  Email Address
                </p>
                <div className="w-16 h-0.5 bg-primary rounded-full my-3"></div>
                <div className="flex text-sm items-center gap-2">
                  {/* <div>
                      <MapPinned size={20} color="#72a8dc" />
                    </div> */}
                  <h2 className=" ">
                    <div className="flex flex-col gap-2 text-gray-300">
                      {/* <Mail size={20} color="#72a8dc" /> */}
                      <div className="heading-all">
                        <a href="mailto:sales@kostevo.com">sales@kostevo.com</a>
                      </div>
                      <div className="heading-all">
                        <a href="mailto:info@kostevo.com">info@kostevo.com</a>
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
            <div className="">
              <div className="h-[150px] max-sm:h-auto">
                <p className="font-medium text-xl text-gray-300 heading-all">
                  Phone Number
                </p>
                <div className="w-16 h-0.5 bg-primary rounded-full my-3"></div>
                <div className="flex text-sm items-center gap-2">
                  <h2 className=" ">
                    <a
                      href="tel:+91 9867 21 9867"
                      className="  text-gray-300 heading-all"
                    >
                      {" "}
                      +91 9867 21 9867
                    </a>
                  </h2>
                </div>
              </div>
              <div className="mt-3 max-sm:mt-5">
                <p className="font-medium text-xl text-gray-300 heading-all">
                  Follow Us
                </p>
                <div className="w-16 h-0.5 bg-primary rounded-full my-3"></div>
                <div className="flex text-sm items-center gap-4 mt-3">
                  {/* <div className="">
                    <FacebookIcon size={22} color="#d1d5db" />
                  </div>
                  <div className="">
                    <InstagramIcon size={22} color="#d1d5db" />
                  </div> */}
                  <div className="">
                    <a href="#" className="">
                      <TwitterIcon size={22} color="#d1d5db" />
                    </a>
                  </div>
                  <div className="">
                    <a href="#">
                      <YoutubeIcon size={22} color="#d1d5db" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="mt- text-sm text-center heading-all  text-gray-300">
          © {currentYear} All Rights Reserved{" "}
          <a href="/" className="text-primary " target="_blank">
            Kostevo
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
