"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface ProudctCardProps {
  title: string;
  description?: string | TrustedHTML;
  imgPath: string;
}

const ProductCard: React.FC<ProudctCardProps> = ({
  title,
  description = "",
  imgPath,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="" data-aos={""}>
      <div className=" max-w-[300px]">
        {/* <Link href={`#`}> */}
        <div className="product_img bg-white shadow-md  h-[330px] max-sm:h-[250px] flex justify-center items-center group overflow-hidden">
          <Image
            width={250}
            height={250}
            src={imgPath}
            alt={""}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className=" py-2">
          <p
            className="my-1 text-base font-semibold text-start text-gray-800 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {description && (
            <p
              className="text-[12px] text-black/[0.7] text-start !line-clamp-2 h-[40px] font-normal"
              dangerouslySetInnerHTML={{
                __html: description || "No description available",
              }}
            ></p>
          )}
          <div className="price_details flex justify-between">
            <div className="price flex gap-5 text-black/[0.6] font-semibold ">
              {/* <p>&#8377;{p.price}</p> */}
              {/* {p.original_price && (
                <p className="line-through">&#8377;{p.original_price}</p>
              )} */}
            </div>
            {/* {p.original_price && <p className="text-[#45df82]">{getDiscountPricePercentage(p.price, p.original_price)}%</p>} */}
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
