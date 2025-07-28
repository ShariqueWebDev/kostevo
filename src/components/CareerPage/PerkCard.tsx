import React from "react";

interface PerkCardProps {
  icon: string;
  title: string;
  description: string;
}

const PerkCard: React.FC<PerkCardProps> = ({ icon, title, description }) => {
  return (
    <div className="max-w-[350px] w-full ">
      <div className="mb-5 w-14">
        <img src={icon} alt={title} />
      </div>
      <div className="space-y-3">
        <div className=" text-xl font-medium text-gray-800">{title}</div>
        <div className="bg-[#112a28] h-1 w-10"></div>
        <div className="text-gray-500">{description}</div>
      </div>
    </div>
  );
};

export default PerkCard;
