import Image from "next/image";
import React from "react";

interface IndustriesServeCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const IndustriesServeCard: React.FC<IndustriesServeCardProps> = ({
  title,
  description,
  image,
  icon,
}) => {
  return (
    <div>
      <div className="max-w-[270px] max-sm:max-w-[350px] w-full relative p-5 border-t  border-gray-100 space-y-4 rounded-md shadow-lg">
        <div className="flex flex-col justify-center">
          <div className="h-[150px] w-full overflow-hidden rounded-md">
            <Image
              src={image}
              width={350}
              height={200}
              alt=""
              className="rounded-md"
            />
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-12 h-12 bg-primary p-2 absolute top-[120px] max-sm:top-[140px] left-10  rounded-full">
              <img src={icon} alt={title} />
            </div>
            <h2 className="lg:text-2xl md:text-xl  heading-all font-medium mt-5">{title}</h2>
          </div>
          <div className="text-xs text-gray-500 content-all line-clamp-5">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServeCard;
