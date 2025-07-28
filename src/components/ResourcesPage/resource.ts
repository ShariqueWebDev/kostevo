export interface ResourceDataProps {
  id: number;
  name: string;
  imgPath: string;
  downloadPdfFile: string;
}

export const ResourceData: ResourceDataProps[] = [
  {
    id: 1,
    name: "Flanges Catalogue",
    imgPath: "/pdf/img/flangeCata.webp",
    downloadPdfFile: "/pdf/Kostevo-Flanges-Catelogue.pdf",
  },
  {
    id: 2,
    name: "Fastener Catalogue",
    imgPath: "/pdf/img/fastenerCata.webp",
    downloadPdfFile: "/pdf/catalogue/fastener-catalogue.pdf",
  },
  {
    id: 3,
    name: "Pipe Fitting Catalogue",
    imgPath: "/pdf/img/pipe-catalogue.webp",
    downloadPdfFile: "/pdf/catalogue/pipe-fitting-catalogue.pdf",
  },
  {
    id: 4,
    name: "Industrial Valves Catalogue",
    imgPath: "/pdf/img/industrialCata.webp",
    downloadPdfFile: "/pdf/catalogue/industrial-valve-catalogue.pdf",
  },
  {
    id: 5,
    name: "Compression Tube Fitting Catalogue",
    imgPath: "/pdf/img/compressionCata.webp",
    downloadPdfFile: "/pdf/catalogue/compression-tube-fittings.pdf",
  },
];
