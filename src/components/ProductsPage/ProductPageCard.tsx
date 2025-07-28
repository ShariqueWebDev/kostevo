import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface ProudctPageCardProps {
  title: string;
  imgPath: string;
  slug?: string;
}

const ProductPageCard: React.FC<ProudctPageCardProps> = ({
  title,
  imgPath,
  slug,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos={""}>
      <div className="max-w-[300px] w-full group transition-all max-sm:max-w-max flex flex-col space-y-3 relative left-0">
        {/* <div className="bg-gray-800 w-fit text-white text-sm px-1.5 rounded-full absolute top-6 left-[81%]">
          New
        </div> */}
        <div className="bg-white shadow-md  h-[350px] max-sm:h-[250px] flex justify-center items-center overflow-hidden">
          <Image
            src={imgPath}
            width={250}
            height={150}
            alt=""
            className="hover:scale-125 transition-all duration-500 "
          />
        </div>
        {/* <Link href={`/sub-category-products`}> */}
        <div className="flex flex-col justify-between space-y-1.5 ">
          <h1 className="heading-all  text-gray-500 h-[48px] line-clamp-2">
            {title}
          </h1>
          <div className="overflow-hidden">
            <div className="-translate-x-20 group-hover:translate-x-0 cursor-pointer  transition-all duration-300">
              <div className=" font-light heading-all text-sm  ">Show more</div>
              <div className="w-[75px] h-[1px] bg-gray-300"></div>
            </div>
          </div>
          {/* <div className="">
            <Heart color="#ffa142" size={20} />
            </div> */}
        </div>
        {/* </Link> */}
        {/* <div className="">&#8377; 208.00</div> */}
      </div>
    </div>
  );
};

export default ProductPageCard;
