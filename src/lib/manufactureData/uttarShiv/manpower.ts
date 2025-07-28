import { ColumnsType } from "antd/es/table";

interface ManPowerDataProps {
  key: string;
  role: string;
  quantity: string;
  operated: string;
}

export const manPowerShivColumnData: ColumnsType<ManPowerDataProps> = [
  {
    title: "Key",
    dataIndex: "key",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Operated",
    dataIndex: "operated",
  },
];

export const manPowerShivRowData: ManPowerDataProps[] = [
  {
    key: "1",
    role: "Machine Operator",
    quantity: "6",
    operated: "Advanced CNC machinery, precision lathes, milling equipment",
  },
  {
    key: "2",
    role: "Welder",
    quantity: "2",
    operated: "Skilled in various welding techniques (MIG, TIG, ARC)",
  },
  {
    key: "3",
    role: "CNC Cutter",
    quantity: "1",
    operated: "Proficient with CNC plasma and laser cutting technology",
  },
  {
    key: "4",
    role: "CNC Programmer",
    quantity: "2",
    operated: "Experties in Any type of Program at Fanuc Controller",
  },
  {
    key: "5",
    role: "Machinist",
    quantity: "1",
    operated: "Expertise in CNC operations and precision tooling",
  },
];
