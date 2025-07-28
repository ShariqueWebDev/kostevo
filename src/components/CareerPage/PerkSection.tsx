import React from "react";
import PerkCard from "./PerkCard";

const PerkSection = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col">
        <p className="font-medium text-gray-600 my-2 uppercase">Benefits </p>
        <h1 className="text-4xl max-sm:text-3xl font-semibold text-gray-800 !leading-[70px] max-sm:!leading-[40px] heading-all">
          <span className="text-primary">Main Reasons</span> Why You Should Work Here
        </h1>
        <p className="text-gray-600">
          Being a part of Kostevo means enjoying every working day!
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-5 items-center lg:grid-cols-4 md:grid-cols-3">
        <PerkCard
          icon={"/icons/team.png"}
          title="Teamwork"
          description="Our employees work in teams and share even the boldest ideas."
        />
        <PerkCard
          icon="/icons/idea.png"
          title="Room for New Ideas"
          description="We’re always ready to listen and discuss new initiatives."
        />
        <PerkCard
          icon="/icons/salary.png"
          title="Competitive Salary"
          description="Get paid well for your skills! We offer competitive salary + benefits."
        />
        <PerkCard
          icon="/icons/personal-growth.png"
          title="Personal Development"
          description="We support your skill development while emphasizing the growth of your personality."
        />
      </div>
    </div>
  );
};

export default PerkSection;
