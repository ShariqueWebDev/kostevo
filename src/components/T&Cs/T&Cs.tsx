import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import { termsConditionData } from "./TCsData";

const TermsConditionsPage = () => {

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Terms & Conditions" },
  ]
  return (
    <div>
      <TopBanner
        title="Terms & Conditions"
        breadCrumb={breadCrumData}
        bannerImg="/tcBanner.jpg"
      />
      <div className="max-w-[1280px] mx-auto px-20 max-sm:px-5 mb-10">
        <h1 className="text-4xl font-medium text-center max-sm:text-3xl mb-10">Terms of Use</h1>
        {termsConditionData.map((item: any) => {
          return (
            <div className="" key={item?.id}>
              <div className="text-2xl font-medium mb-2 heading-all text-gray-800">
                {item?.id}. {item?.title}
              </div>
              <div className="content-all mb-10 text-sm text-gray-600"><span className="">&#8226;</span> {item?.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsConditionsPage;
