import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CategoriesCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({
  title,
  description,
  imgUrl,
}) => {
  return (
    <div className="max-w-[260px] w-full overflow-hidden rounded-md bg-white max-sm:mt-5 cursor-pointer border ">
      <div className="h-[260px] w-[260px]  flex justify-center items-center bg-[#efefef]">
        <Image
          src={imgUrl}
          className="object-center object-cover"
          alt=""
          width={260}
          height={260}
        />
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-medium text-start heading-all text-gray-800 line-clamp-2  h-[65px] ">
          {title}
        </h1>
        <p className="content-all mt-3 text-start font-light text-sm text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="px-5 flex justify-between items-center mb-5">
        <div className="text-secondary text-base font-light">View Details</div>
        <div className="w-fit ">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
