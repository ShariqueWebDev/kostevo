export type IndustryServedDataProps = {
  id: number;
  title: string;
  sid: string;
  icon: string;
  imgPath: string;
  description: string;
  aosAnime: string;
};

export const industriesServedData: IndustryServedDataProps[] = [
  {
    id: 1,
    title: "Oil & Gas",
    sid: "oil",
    icon: "/client/serve-indus/indus-icons/oil-rig.png",
    imgPath: "/client/serve-indus/oil.jpg",
    description:
      "Kostevo delivers robust, high-performance components designed to withstand the challenging conditions of the oil and gas industry. From exploration to refining, our solutions support each stage of the process with precision-engineered parts that enhance operational efficiency, reliability, and safety. Our expertise enables oil and gas companies to tackle complex projects with confidence, ensuring consistent performance in critical applications and harsh environments.",
    aosAnime: "fade-up",
  },
  {
    id: 2,
    title: "Pharmaceuticals",
    sid: "pharmaceuticals",
    icon: "/client/serve-indus/indus-icons/pharm.png",
    imgPath: "/client/serve-indus/pharma.jpg",
    description:
      "Kostevo is dedicated to supporting the pharmaceutical industry with precision-engineered components and assemblies that meet the highest standards of safety, quality, and reliability. Our products play a crucial role in ensuring the safe, effective production and handling of medicines, from drug manufacturing to packaging and distribution. We provide specialized solutions designed to withstand rigorous processes, support stringent compliance requirements, and enhance efficiency in pharmaceutical operations.",
    aosAnime: "fade-up",
  },
  {
    id: 3,
    title: "Power Generation",
    sid: "power",
    icon: "/client/serve-indus/indus-icons/light.png",
    imgPath: "/client/serve-indus/power.jpg",
    description:
      "Kostevo delivers high-performance components and solutions tailored to the demands of the power generation industry, including renewable energy, fossil fuels, and nuclear power. Our precision-engineered products are designed to enhance efficiency, reliability, and durability in power systems, helping to support uninterrupted energy production. From turbine components to critical fittings, we provide solutions that withstand extreme conditions and support sustainable power generation processes, ensuring consistent output and long operational lifespans.",
    aosAnime: "fade-up",
  },
  {
    id: 4,
    title: "Agrochemicals",
    sid: "agrochemicals",
    icon: "/client/serve-indus/indus-icons/agro.png",
    imgPath: "/client/serve-indus/agro.jpg",
    description:
      "Kostevo supplies the agrochemical industry with precision components that ensure reliable performance in the manufacturing and handling of fertilizers, pesticides, and other essential agricultural chemicals. Our solutions are engineered to meet the high standards of safety and durability required in agrochemical production, enabling efficient operations while minimizing risks. By providing robust, corrosion-resistant components, Kostevo supports the continuous development and distribution of agrochemicals that help enhance crop yield and promote sustainable agriculture.",
    aosAnime: "fade-up",
  },
  {
    id: 5,
    title: "Chemical and Petrochemicals",
    sid: "chemical",
    icon: "/client/serve-indus/indus-icons/petrochemical.png",
    imgPath: "/client/serve-indus/petro.jpg",
    description:
      "Kostevo partners with the chemical and petrochemical industry by providing advanced, precision-engineered components that are essential in high-demand environments. Our products are designed to withstand extreme temperatures, pressures, and corrosive substances, ensuring safe and efficient operation across production, refining, and distribution processes. With a commitment to reliability and compliance, Kostevo's solutions support the industry's goals for sustainable production and operational excellence, enhancing productivity and safety in chemical and petrochemical applications.",
    aosAnime: "fade-up",
  },
  {
    id: 6,
    title: "Vaccum Applications",
    sid: "vaccum",
    icon: "/client/serve-indus/indus-icons/vaccum.png",
    imgPath: "/client/serve-indus/vaccum.jpg",
    description:
      "Kostevo serves the vacuum applications industry with precision components and assemblies designed for high-performance in ultra-clean, high-vacuum environments. Our solutions are crafted to ensure airtight seals, low outgassing, and reliable performance under extreme vacuum conditions, making them ideal for industries such as semiconductor manufacturing, scientific research, and high-tech equipment. By providing components that meet stringent standards for vacuum integrity and durability, Kostevo supports advancements in technology and research where absolute control over the environment is essential.",
    aosAnime: "fade-up",
  },
];
