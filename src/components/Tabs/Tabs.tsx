"use client";
import {
  Tabs as ShadcnTab,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function Tabs() {
  const compGsap = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from(["#content1", "#content2", "#content3"], {
  //       opacity: 0,
  //       y: "+=30",
  //       stagger: 0.5,
  //     });
  //   }, compGsap);

  //   return () => ctx.revert();
  // }, []);

  const animateContent = (contentId: any) => {
    gsap.fromTo(
      contentId,
      { opacity: 0.3, y: 20 }, // Start from transparent and below
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  useEffect(() => {
    const defaultContentId = "#content1"; // Initially animate the default tab content
    animateContent(defaultContentId);

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <ShadcnTab
      defaultValue="history"
      className=""
      onValueChange={(value) => {
        // Trigger animation whenever the tab changes
        const contentId = `#content${
          value === "history" ? "1" : value === "mission" ? "2" : "3"
        }`;
        animateContent(contentId);
      }}
    >
      <TabsList className="grid w-full gap-1 grid-cols-3">
        <TabsTrigger
          value="history"
          className="bg-[#dddcdc] p-3 text-base max-sm:text-sm"
        >
          Our History
        </TabsTrigger>
        <TabsTrigger
          value="mission"
          className="bg-[#dddcdc] p-3 text-base max-sm:text-sm"
        >
          Our Mission
        </TabsTrigger>
        <TabsTrigger
          value="vision"
          className="bg-[#dddcdc] p-3 text-base max-sm:text-sm"
        >
          Our Vision
        </TabsTrigger>
      </TabsList>
      <div className="mt-10 h-48 max-sm:h-auto" id="">
        <TabsContent
          value="history"
          className=" leading-relaxed content-all text-gray-500 text-sm font-light italic"
          ref={compGsap}
          id="content1"
        >
          <span className="flex gap-1 ml-1">
            <img
              src="/double-comma.png"
              alt="quote"
              className="size-3.5 pb-1 opacity-50"
            />
            Kostevo has been well-versed in precision machining for the past 15
            years. In the designing like the Compression Tubes, Fasteners,
            Flanges, Gears, Industrial Valves, Pipe Fittings and any kind of
            precision work. We are capable of manufacturing non-standard parts
            as per customer requirements for generators, turbines, motors,
            pumps, compressors and gearboxes.
          </span>{" "}
        </TabsContent>
        <TabsContent
          value="mission"
          className=" leading-relaxed content-all text-gray-500 text-sm font-light italic"
          ref={compGsap}
          id="content2"
        >
          <span className="flex gap-1 ml-1">
            <img
              src="/double-comma.png"
              alt="quote"
              className="size-3.5 pb-1 opacity-50"
            />
            <div className="">
              <div className="mb-3">
                To provide precision engineering solutions that meet global
                standards and exceed client expectations.
              </div>
              Our mission is to constantly push the boundaries of what is
              possible, using innovation and creativity to develop cutting-edge
              solutions that shape the future. We believe that every part, no
              matter how small, plays a crucial role in driving progress and we
              are committed to innovating each and every part to make a
              meaningful impact on the world. Join us as we revolutionize the
              future, one part at a time.
            </div>
          </span>
        </TabsContent>
        <TabsContent
          value="vision"
          className=" leading-relaxed content-all text-gray-500 text-sm font-light italic"
          ref={compGsap}
          id="content3"
        >
          <span className="flex gap-1 ml-1">
            <img
              src="/double-comma.png"
              alt="quote"
              className="size-3.5 pb-1 opacity-50"
            />
            <div className="">
              <div className="mb-3">
                To be a trusted international partner in engineering, known for
                quality and innovation.
              </div>
              Our vision is to be a global leader in creating innovative
              solutions that have a positive impact on the world. We strive to
              be at the forefront of technological advancements, constantly
              pushing the boundaries of what is possible. Through our commitment
              to innovation and creativity, we aim to revolutionize industries
              and improve the lives of people around the world. Join us on this
              journey as we continue to shape the future, one groundbreaking
              solution at a time.{" "}
            </div>
          </span>
        </TabsContent>
      </div>
    </ShadcnTab>
  );
}
