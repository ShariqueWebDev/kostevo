import React from "react";

const TeamCard = ({
  imgPath,
  title,
  position,
}: {
  imgPath: string;
  title: string;
  position: string;
}) => {
  return (
    <div className="max-w-[350px] w-full">
      <div className=" h-[400px]">
        <img src={imgPath} alt="Members" className="object-cover object-center w-full h-full" />
      </div>
      <div className="text-center mt-5">
        <div className=" font-quicksand text-xl font-semibold text-gray-800">{title}</div>
        <div className="text-sm font-medium font-quicksand text-gray-500">{position}</div>
      </div>
    </div>
  );
};

export default TeamCard;
