import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  make: string;
  size: string;
  quantity: string;
}

export const measurementToolShivColumnData: ColumnsType<DataType> = [
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

export const measurementToolShivRowData: DataType[] = [
  {
    key: "1",
    name: "Mechanical Vernier",
    make: "Mitutoyo",
    size: "150, 300, 600 mm",
    quantity: "1",
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
    name: "Micrometer",
    make: "Mitutoyo",
    size: "0-500 mm",
    quantity: "1",
  },
  {
    key: "4",
    name: "Dial Gauge",
    make: "Mitutoyo",
    size: "18-250 mm",
    quantity: "3",
  },
  {
    key: "5",
    name: "Dial Magnetic Stand",
    make: "-",
    size: "0-600 mm",
    quantity: "3",
  },
  {
    key: "6",
    name: "Slip Gauge Box",
    make: "Insize",
    size: "50-400 mm",
    quantity: "1",
  },
  {
    key: "7",
    name: "Pipe Gauge well",
    make: "Mitutoyo",
    size: "0-300 mm",
    quantity: "1",
  },
  {
    key: "8",
    name: "Inside Micrometer",
    make: "Mitutoyo",
    size: "0-50 mm",
    quantity: "1",
  },
];
