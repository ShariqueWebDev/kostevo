"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
  const [subMenuData, setSubMenuData] = useState<null>(null);
  const [scrollCount, setScrollCount] = useState<number>(0);
  const [headerPosition, setHeaderPosition] = useState("-top-[100%]");
  const [showModal, setShowModal] = useState("-right-[100%]");
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [subMenuBgColor, setSubMenuBgColor] = useState<string>("text-white");
  const [menuColor, setMenuColor] = useState("text-white");

  const pathname = usePathname();

  const controlBgColor = () => {
    if (window.scrollY > 100 && pathname === "/") {
      setMenuColor("text-black");
      setHeaderPosition("top-0");
      setSubMenuBgColor("bg-white");
      // setMenuColor('text-primary')
    } else if (pathname !== "/") {
      setMenuColor("text-black");
    } else {
      setMenuColor("text-white");
      setHeaderPosition("-top-[100%]");
      setSubMenuBgColor("bg-black");
    }
    setScrollCount(window.scrollY);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("scroll", controlBgColor);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", controlBgColor);
    };
  }, [scrollCount, pathname, menuColor]);

  useEffect(() => {
    // Change header background color based on the route
    if (pathname === "/") {
      setBgColor("bg-transparent"); // Transparent for home page
      setMenuColor("text-white");
    } else if (pathname !== "/") {
      setMenuColor("text-black");
      setBgColor("bg-white");
    }
  }, [pathname]);

  function pdfDownload(path: string) {
    window.open(path, "_blank");
  }

  return (
    <div className="">
      <header
        className={` px-3 lg:px-12 h-[90px] bg-white justify-between w-full  ${headerPosition} max-sm:fixed top-0 flex items-center z-[100] transition-transform duration-300 shadow-sm`}
      >
        {/* <div
          className={`absolute w-full h-[90px] bg-white inset-0 -z-10 transition-all duration-300 ${headerPosition}`}
        ></div> */}
        <div className="flex relative z-50 gap-20 items-center">
          <Link href={"/"} className="">
            <Image
              width={120}
              height={120}
              src="/logo/kostevo_logo.png"
              className="w-[110px] object-contain "
              alt="Kostevo"
              onClick={() => setMobileMenu(false)}
            />
          </Link>

          <Menu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            subMenuData={subMenuData}
            setMobileMenu={setMobileMenu}
            setSubMenuBgColor={setSubMenuBgColor}
            subMenuBgColor={subMenuBgColor}
            scrollCount={scrollCount}
            setMenuColor={setMenuColor}
            menuColor={menuColor}
          />
        </div>
        <div className="max-sm:hidden flex items-center gap-5">
          <div className="flex items-center justify-center text-[10px] gap-2">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-white p-1 rounded-full border">
                <img
                  src="/icons/iso1.png"
                  alt="ISO certification"
                  className="size-8"
                />
              </div>
              {/* <div className="mt-0.5 heading-all">ISO Certified</div> */}
            </div>
            <div className="heading-all text-gray-800">
              <img
                src="/icons/iaf_logo.svg"
                alt="IAF certificate"
                className="w-16 "
              />
              {/* <div className="mt-0.5 heading-all">IAF Certified</div> */}
            </div>
          </div>
          <div
            onClick={() => pdfDownload("/pdf/kostevoProfile.pdf")}
            className="cursor-pointer"
          >
            <ButtonPrimary
              title={"Download Profile"}
              className="text-white text-sm !px-5 !py-2 bg-secondary relative rounded-md font-medium hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}

        <div className="flex items-center gap-2 lg:hidden text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </header>
      {/* <SocialMediaModal showModal={showModal} setShowModal={setShowModal} /> */}
    </div>
  );
};

export default NewHeader;
