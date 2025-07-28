import React from "react";

interface FuturePlaneCardProps {
  imgUrl: string;
  icon: string;
  title: string;
  description: string;
}

const FuturePlanCard: React.FC<FuturePlaneCardProps> = ({
  imgUrl,
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="  w-full 
     overflow-hidden "
    >
      <div className="flex items-center gap-5">
        <div className="w-14">
          <img src={icon} alt={title} className="-primary" />
        </div>
        <div className="text-[40px] max-sm:text-3xl font-medium heading-all">
          {title}
        </div>
      </div>
      <hr className="my-8 " />
      <div className="border flex w-full rounded-md overflow-hidden max-sm:flex-col">
        <div className="w-[40%] max-sm:w-full">
          <img src={imgUrl} alt={title} className="object-cover h-full w-full" />
        </div>
        <div className="w-[60%] max-sm:w-full p-5  text-gray-500 content-all">{description}</div>
      </div>
    </div>
  );
};

export default FuturePlanCard;
