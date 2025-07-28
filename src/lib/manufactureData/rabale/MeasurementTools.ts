import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  make: string;
  size: string;
  quantity: string;
}

export const measurementToolColumnData: ColumnsType<DataType> = [
  {
    title: "Instrument Name",
    dataIndex: "name",
  },
  {
    title: "Make",
    dataIndex: "make",
  },
  {
    title: "Size",
    dataIndex: "size",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
];

export const measurementToolRowData: DataType[] = [
  {
    key: "1",
    name: "Mechanical Vernier",
    make: "Mitutoyo",
    size: "150, 300, 600 mm",
    quantity: "2",
  },
  {
    key: "2",
    name: "Digital Vernier",
    make: "Mitutoyo",
    size: "150, 300, 600 mm",
    quantity: "1",
  },
  {
    key: "3",
    name: "Digital Depth Vernier",
    make: "Mitutoyo",
    size: "150, 300 mm",
    quantity: "1",
  },
  {
    key: "4",
    name: "Micrometer",
    make: "Mitutoyo",
    size: "0-500 mm",
    quantity: "1",
  },
  {
    key: "5",
    name: "Height Gauge",
    make: "Mitutoyo",
    size: "0.1-300 mm",
    quantity: "1",
  },
  {
    key: "6",
    name: "Pipe Gauge well",
    make: "Mitutoyo",
    size: "0-300 mm",
    quantity: "1",
  },
  {
    key: "7",
    name: "Inside Caliper",
    make: "Insize",
    size: "0-300 mm",
    quantity: "2",
  },
  {
    key: "8",
    name: "Outside Caliper",
    make: "Insize",
    size: "50-600 mm",
    quantity: "1",
  },
  {
    key: "9",
    name: "Inside Micrometer",
    make: "Mitutoyo",
    size: "0-50 mm",
    quantity: "2",
  },
];
