import { CarDocs } from "@/services/cars/documents/types";
import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatString } from "@/utils/format-string";

const getCarDetails = (
  carReportsData?: CarReportData,
  carDocs?: CarDocs,
  colors?: PdfColors,
) => {
  return [
    {
      text: "Car Details",
      margin: [0, 20, 0, 5],
      decoration: "underline",
      decorationStyle: "dashed",
      decorationColor: colors?.header,
    },
    {
      style: "carDetailTable",
      table: {
        widths: ["*", "*"],
        body: [
          [
            { text: "Registration Number", alignment: "left" },
            {
              text: formatString(carReportsData?.regNumber),
              alignment: "right",
            },
          ],
          [
            { text: "City", alignment: "left" },
            {
              text: formatString(carReportsData?.allCarInfo?.vehicleLocation),
              alignment: "right",
            },
          ],
          [
            { text: "Manufacturing month", alignment: "left" },
            {
              text: formatString(carReportsData?.monthAndYearOfManufacture),
              alignment: "right",
            },
          ],
          [
            { text: "Registration Date", alignment: "left" },
            { text: formatString(carReportsData?.regDate), alignment: "right" },
          ],
          [
            { text: "RC Condition", alignment: "left" },
            {
              text: formatString(carReportsData?.rcAvailability),
              alignment: "right",
            },
          ],
          [
            { text: "RC Mismatch", alignment: "left" },
            { text: formatString(carDocs?.rcMismatch), alignment: "right" },
          ],
          [
            { text: "RTO", alignment: "left" },
            { text: formatString(carReportsData?.rto), alignment: "right" },
          ],
          [
            { text: "Under Hypothecation", alignment: "left" },
            { text: formatString(carDocs?.hypothecation), alignment: "right" },
          ],
          [
            {
              text: "Chassis Number Embossing",
              alignment: "left",
            },
            {
              text: formatString(carReportsData?.chasisNumber),
              alignment: "right",
            },
          ],
        ],
      },
      layout: {
        defaultBorder: true,
        fillColor: function (i: number) {
          return i % 2 === 0 ? "#CCCCCC" : null;
        },
      },
    },
  ];
};

export default getCarDetails;
