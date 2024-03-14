import { CarDocs } from "@/services/cars/documents/types";
import { CarData } from "@/services/cars/list/types";
import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatString } from "@/utils/format-string";

export const getCarBasic = (
  colors: PdfColors,
  carData?: CarData,
  carReportsData?: CarReportData,
  carDocs?: CarDocs,
) => {
  const basicData = [
    {
      label: "Month & Year of Manufacturing",
      value: carReportsData?.monthAndYearOfManufacture,
    },
    { label: "No. Of Owner(S)", value: carData?.ownershipNumber },
    { label: "Duplicate Key", value: carReportsData?.duplicateKey },
    { label: "KM", value: String(carReportsData?.odometerReading) },
    { label: "Fuel Type", value: carData?.fuelType },
    { label: "Reg. State", value: carReportsData?.regState },
    { label: "RTO", value: carReportsData?.rto },
    { label: "Insurance Type", value: carReportsData?.insurance },
    { label: "Insurance Expiry", value: carDocs?.insuranceValidity },
    { label: "RC Availability", value: carReportsData?.rcAvailability },
  ];

  const carName = carData?.make + " " + carData?.model;

  return [
    {
      stack: [
        {
          columns: [
            {
              image: "Front Image",
              cover: {
                width: 255,
                height: 300,
                valign: "center",
                align: "center",
              },
              error: function (error: string) {
                console.error("Error loading image:", error);
                return { text: "No IMAGE", alignment: "center" };
              },
            },
            {
              stack: [
                {
                  text: formatString(carName),
                  opacity: 0.7,
                },
                {
                  text: formatString(carData?.variant),
                  fontSize: 10,
                  margin: [0, 3, 0, 0],
                  color: colors.labelGrey,
                },
                {
                  stack: [
                    basicData.map((data) => {
                      const columns = [
                        {
                          text: data.label,
                          color: colors.labelGrey,
                          margin: [0, 10, 0, 0],
                          fontSize: 9,
                          width: 150,
                        },
                        {
                          text: ":",
                          fontSize: 8,
                          alignment: "left",
                          margin: [0, 10, 0, 0],
                          width: 10,
                        },
                        {
                          text: formatString(data.value),
                          margin: [0, 10, 0, 0],
                          fontSize: 10,
                          width: "*",
                        },
                      ];
                      return { columns };
                    }),
                  ],
                },
              ],
              margin: [0, 10, 0, 0],
            },
          ],
        },
      ],
    },
  ];
};
