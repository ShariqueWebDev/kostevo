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

export const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Features",
    dataIndex: "feature",
  },
];

export const rabaleObj: MachineInfo[] = [
  {
    machineName: "CNC Lathe Machine",
    sid: "machine1",
    imgPath: "/machines/rabale/rabaleMachine.png",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "Global",
      },
      {
        key: "3",
        name: "Model",
        feature: "Sinewy 1635",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
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
    imgPath: "/machines/rabale/cnc-lathe-machine2.png",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "ace",
      },
      {
        key: "3",
        name: "Model",
        feature: "LT 20 C Classic",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
      },
      {
        key: "5",
        name: "Chuck Size",
        feature: "250mm",
      },
      {
        key: "6",
        name: "Tools Setup",
        feature: "12 Nos",
      },
      {
        key: "7",
        name: "Bed Length",
        feature: "700mm",
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
    machineName: "Hobbing Machine",
    sid: "machine3",
    imgPath: "/machines/rabale/hobbing-machine.png",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "WMW",
      },
      {
        key: "3",
        name: "Model",
        feature: "ZFWZ",
      },
      {
        key: "4",
        name: "Size",
        feature: "500 * 5",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "Lathe Machine",
    sid: "machine4",
    imgPath: "/machines/rabale/lathe-machine.webp",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "Marshal",
      },
      {
        key: "3",
        name: "Chuck Size",
        feature: "600mm",
      },
      {
        key: "4",
        name: "Bed Lenght",
        feature: "4267mm",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "Radial Drill Machine",
    sid: "machine5",
    imgPath: "/machines/rabale/radial-drill-machine.jpg",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "HMT",
      },
      {
        key: "3",
        name: "Model",
        feature: "RM62",
      },
      {
        key: "4",
        name: "Chuck Size",
        feature: "250mm",
      },
      {
        key: "5",
        name: "Bed Lenght",
        feature: "700mm",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "CNC VMC",
    sid: "machine6",
    imgPath: "/machines/rabale/cnc-vmc.webp",
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
        feature: "J6",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
      },
      {
        key: "5",
        name: "Table Size",
        feature: "1200mm * 600mm",
      },
      {
        key: "6",
        name: "Tools Setup",
        feature: "08 Nos",
      },
      {
        key: "7",
        name: "X/Y/Z Axis",
        feature: "1000 * 600 * 600",
      },
      {
        key: "8",
        name: "Spindle Speed",
        feature: "0 - 8000RPM",
      },
    ],
    aosAnime: "fade-up",
  },

  {
    machineName: "CNC VTL",
    sid: "machine7",
    imgPath: "/machines/rabale/cnc-vtl.jpg",
    details: [
      {
        key: "1",
        name: "Quantity",
        feature: "01 Nos",
      },
      {
        key: "2",
        name: "Brand",
        feature: "TOS",
      },
      {
        key: "3",
        name: "Model",
        feature: "SK 14",
      },
      {
        key: "4",
        name: "Controller",
        feature: "Fanuc",
      },
      {
        key: "5",
        name: "Swing",
        feature: "1600mm",
      },
      {
        key: "6",
        name: "Height",
        feature: "1450mm",
      },
      {
        key: "7",
        name: "Chuck",
        feature: "1400mm",
      },
      {
        key: "8",
        name: "Spindle Speed",
        feature: "0 - 8000RPM",
      },
    ],
    aosAnime: "fade-up",
  },
];
