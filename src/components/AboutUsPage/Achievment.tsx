'use client'
import React from "react";
import CountUp from "react-countup";
import Wrapper from "../Wrapper/Wrapper";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ArrowRight } from "lucide-react";

const Achievment = () => {
  return (
    <div className="py-10 ">
      <div className="">
        <Wrapper>
          <div className="flex flex-col justify-center items-center">
            {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
              Achievement
            </p> */}
            <h2 className="text-[40px] max-sm:text-3xl font-medium mt-2 mb-12 text-gray-800 heading-all">
              Company Achievements
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10 max-sm:!gap-20 ">
            <div className="space-y-10 max-sm:space-y-3  max-w-[300px] w-full">
              <div className="text-7xl max-sm:text-6xl bg-gradient-to-r from-primary/70 via- to-secondary bg-clip-text text-transparent font-semibold ">
                <CountUp
                  start={0}
                  end={232}
                  duration={2.5}
                  separator=","
                  suffix="+"
                  startOnMount={true}
                />
              </div>
              <hr />
              <div className="text-2xl text-gray-500">Happy Clients</div>
            </div>

            <div className="space-y-10 max-sm:space-y-3 max-w-[300px] w-full">
              <div className="text-7xl max-sm:text-6xl bg-gradient-to-r from-primary/70 via- to-secondary bg-clip-text text-transparent font-semibold ">
                <CountUp
                  start={0}
                  end={521}
                  duration={2.5}
                  separator=","
                  suffix="+"
                  startOnMount={true}
                />
              </div>
              <hr />
              <div className="text-2xl text-gray-500">Projects</div>
            </div>

            <div className="space-y-10 max-sm:space-y-3 max-w-[300px] w-full">
              <div className="text-7xl max-sm:text-6xl bg-gradient-to-r from-primary/70 via- to-secondary bg-clip-text text-transparent font-semibold ">
                <CountUp
                  start={0}
                  end={1663}
                  duration={2.5}
                  separator=","
                  suffix="+"
                  startOnMount={true}
                />
              </div>
              <hr />
              <div className="text-2xl text-gray-500">Hours of Support</div>
            </div>

            <div className="space-y-10 max-sm:space-y-3 max-w-[300px] w-full">
              <div className="text-7xl max-sm:text-6xl bg-gradient-to-r from-primary/70 via- to-secondary bg-clip-text text-transparent font-semibold ">
                <CountUp
                  start={0}
                  end={40}
                  duration={5}
                  separator=","
                  suffix="+"
                  startOnMount={true}
                />
              </div>
              <hr />
              <div className="text-2xl text-gray-500">Hard Workers</div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Achievment;
