"use client";
import { useEffect, useState } from "react";
import HomePageComponents from "@/components/HomePageComponents/HomePageComponents";
import { BeatLoader } from "react-spinners";
// export const BASE_URL = `https://kostevobck.demo-web.live`;
export default function Home() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 300);
  // }, []);

  return (
    <div className=" ">
      {/* {loading ? ( */}
        {/* <div className="fixed flex justify-center items-center left-0 top-0 bg-white !w-screen !h-screen z-[500]">
          <BeatLoader />
        </div>
      ) : ( */}
        <HomePageComponents />
      {/* )} */}
    </div>
  );
}
