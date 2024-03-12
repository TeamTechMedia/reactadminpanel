import { CarData } from "@/services/cars/list/types";
import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatDate } from "@/utils/format-date";

const getHeader = (
  colors: PdfColors,
  carReportsData?: CarReportData,
  carData?: CarData,
) => {
  return [
    {
      canvas: [
        {
          type: "rect",
          x: 0,
          y: 0,
          w: 592,
          h: 45,
          color: colors.header,
        },
      ],
      margin: [10, 10, 10, 10],
    },
    {
      text: "Mera Cars",
      absolutePosition: { x: 25, y: 24 },
      color: colors.white,
    },
    {
      text: `INSPECTION REPORT \n 16772759784/5539022`,
      absolutePosition: { x: 340, y: 21 },
      fontSize: 10,
      color: colors.white,
      bold: true,
    },
    {
      canvas: [
        {
          type: "line",
          x1: 0,
          y1: 33,
          x2: 0,
          y2: 10,
          lineWidth: 1,
          color: colors.white,
        },
      ],
      absolutePosition: { x: 463, y: 12 },
    },
    {
      text: `By ${carReportsData?.evaluatorName}`,
      absolutePosition: { x: 480, y: 23 },
      fontSize: 8,
      color: colors.white,
      align: "right",
    },
    {
      text: `On ${formatDate(carData?.createdAt as any)}`,
      absolutePosition: { x: 480, y: 35 },
      fontSize: 8,
      color: colors.white,
      align: "right",
    },
  ];
};

export default getHeader;
