"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScreentoTop = () => {
  const path: string | null = usePathname();

  const [showScreenTop, setShowScreenTop] = useState<boolean>(false);

  useEffect(() => {
    const screenTopShowHandler: () => void = () => {
      if (window.scrollY > 300) {
        setShowScreenTop(true);
      } else {
        setShowScreenTop(false);
      }
    };

    window.addEventListener("scroll", screenTopShowHandler);
    return () => window.removeEventListener("scroll", screenTopShowHandler);
  }, []);

  const scrollTopHandler: () => void = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTopHandler();
  }, [path]);
  return (
    <>
      {showScreenTop && (
        <div
          onClick={scrollTopHandler}
          className=" flex justify-center transition-all duration-300 text-white  bg-primary items-center fixed w-9 h-9 cursor-pointer rounded-md right-7 bottom-6 z-[90] hover:bg-gradient-to-l"
        >
          <FaArrowUp
            size={22}
            color="#fff"
            className="hover:scale-110 transition-all duration-300 "
          />
        </div>
      )}
    </>
  );
};

export default ScreentoTop;
