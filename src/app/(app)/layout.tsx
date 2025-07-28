import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kostevo, Building a better world through Engineering",
  description:
    "Kostevo has been well-versed in precision machining for the past 15 years. In the designing like the Compression Tubes, Fasteners, Flanges, Gears, Industrial Valves, Pipe Fittings and any kind of precision work. We are capable of manufacturing non-standard parts as per customer requirements for generators, turbines, motors, pumps, compressors and gearboxes.",
  icons: "/logo/kostevo_logo.png",
};

const layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default layout;
