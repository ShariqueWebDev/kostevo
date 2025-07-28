import { TableColumnsType } from "antd";
interface DataType {
  key: string;
  name: string;
  feature: string;
}

// Define a type for the machine info
interface MachineInfo {
  machineName: string;
  sid: string;
  imgPath: string;
  details: DataType[];
  aosAnime: string;
}

export const columnsShivData: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Features",
    dataIndex: "feature",
  },
];

export const ShivObj: MachineInfo[] = [
  {
    machineName: "CNC Lathe Machine",
    sid: "machine1",
    imgPath: "/machines/uttar-shiv-img/cnc-lathe-machine.webp",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "LMW",
      },
      {
        key: "3",
        name: "Model",
        feature: "LL15T L3",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
      },
      {
        key: "5",
        name: "Chuck Size",
        feature: "200mm",
      },
      {
        key: "6",
        name: "Tools Setup",
        feature: "08 Nos",
      },
      {
        key: "7",
        name: "Bed Length",
        feature: "350mm",
      },
      {
        key: "8",
        name: "Spindle Speeds",
        feature: "0-4000RPM",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "CNC Lathe Machine",
    sid: "machine2",
    imgPath: "/machines/uttar-shiv-img/cnc-lathe-machine2.webp",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "LMW Smart Ultra",
      },
      {
        key: "3",
        name: "Model",
        feature: "LL15T L3",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
      },
      {
        key: "5",
        name: "Chuck Size",
        feature: "200mm",
      },
      {
        key: "6",
        name: "Tools Setup",
        feature: "08 Nos",
      },
      {
        key: "7",
        name: "Bed Length",
        feature: "250mm",
      },
      {
        key: "8",
        name: "Spindle Speeds",
        feature: "0-4000RPM",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "CNC Lathe Machine",
    sid: "machine3",
    imgPath: "/machines/uttar-shiv-img/cnc-lathe-machine3.jpg",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "02 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "Tsugami",
      },
      {
        key: "3",
        name: "Model",
        feature: "mi-08Jc",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
      },
      {
        key: "5",
        name: "Chuck Size",
        feature: "200mm",
      },
      {
        key: "6",
        name: "Tools Setup",
        feature: "08 Nos",
      },
      {
        key: "7",
        name: "Bed Length",
        feature: "300mm",
      },
      {
        key: "8",
        name: "Spinder Speed",
        feature: "0-4000RPM",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "CNC Lathe Machine",
    sid: "machine4",
    imgPath: "/machines/uttar-shiv-img/Uttarshivmachine4.webp",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "02 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "Tsugami",
      },
      {
        key: "3",
        name: "Model",
        feature: "mi-06Jc",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Mistubishi",
      },
      {
        key: "5",
        name: "Chuck Size",
        feature: "165mm",
      },
      {
        key: "6",
        name: "Tools Setup",
        feature: "08 Nos",
      },
      {
        key: "7",
        name: "Bed Length",
        feature: "200mm",
      },
      {
        key: "8",
        name: "Spinder Speed",
        feature: "0-3000RPM",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "LASER ENGRAVING MACHINE",
    sid: "machine5",
    imgPath: "/machines/uttar-shiv-img/laser-machine.png",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "02 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "MEHTA",
      },
      {
        key: "3",
        name: "Model",
        feature: "EVAN",
      },
      {
        key: "4",
        name: "Working Area",
        feature: "300 * 300",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "VIBRATION TEST BENCH",
    sid: "machine6",
    imgPath: "/machines/uttar-shiv-img/vibration-test-bench.png",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Make",
        feature: "Ray Engineering",
      },
      {
        key: "3",
        name: "Pressure",
        feature: "0-400 BAR",
      },
      {
        key: "4",
        name: "Vibration",
        feature: "23-47 Hz",
      },
      {
        key: "5",
        name: "Pnumatic",
        feature: "0-150 BAR",
      },
      {
        key: "6",
        name: "Vaccum",
        feature: "0-760mmhg",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "BENCH SAW",
    sid: "machine7",
    imgPath: "/machines/uttar-shiv-img/bench-saw.png",
    details: [
      {
        key: "1",
        name: "LAXON",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Model",
        feature: "SMR200",
      },
      {
        key: "3",
        name: "Cutting Capacity",
        feature: "200 dia",
      },
    ],
    aosAnime: "fade-up",
  },
  {
    machineName: "SHOT BLASTING MACHINE",
    sid: "machine8",
    imgPath: "/machines/uttar-shiv-img/shot-blasting-machine.jpg",
    details: [
      {
        key: "1",
        name: "Make",
        feature: "TUMBLAST",
      },
      {
        key: "2",
        name: "Wheel Size",
        feature: "27 INCH",
      },
      {
        key: "3",
        name: "Capacity",
        feature: "350 KG",
      },
    ],
    aosAnime: "fade-up",
  },
];
