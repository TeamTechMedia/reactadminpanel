import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatArrayString } from "@/utils/format-array-string";

export function getCarExteriorTyre(
  carReportsData?: CarReportData,
  colors?: PdfColors,
) {
  const allCarInfo = carReportsData?.allCarInfo;
  return [
    {
      text: "Exterior & Tyre",
      margin: [0, 20, 0, 5],
      decoration: "underline",
      decorationStyle: "dashed",
      decorationColor: colors?.header,
    },
    {
      style: "carDetailTable",
      table: {
        widths: [166, 166, 170],
        dontBreakRows: true,
        body: [
          [
            { text: "Part", alignment: "left", fontSize: 14 },
            { text: "Subpart", alignment: "left", fontSize: 14 },
            { text: "Condition", alignment: "left", fontSize: 14 },
          ],
          [
            { rowSpan: 2, text: "Bumper", alignment: "left" },
            { text: "Front Bumber" },
            {
              text: formatArrayString(allCarInfo?.bumperFront?.condition),
            },
          ],
          [
            "",
            "Back Bumber",
            formatArrayString(allCarInfo?.bumperRear?.condition),
          ],
          [
            { text: "Roof", alignment: "left" },
            { text: "" },
            { text: formatArrayString(allCarInfo?.roof?.condition) },
          ],
          [
            { rowSpan: 2, text: "Fender", alignment: "left" },
            { text: "LHS" },
            { text: formatArrayString(allCarInfo?.fenderLeft?.condition) },
          ],
          [
            "",
            { text: "RHS" },
            { text: formatArrayString(allCarInfo?.fenderRight?.condition) },
          ],
          [
            { rowSpan: 4, text: "Door", alignment: "left" },
            { text: "LHS Front" },
            {
              text: formatArrayString(allCarInfo?.doorFrontLeft?.condition),
            },
          ],
          [
            "",
            "LHS Rear",
            formatArrayString(allCarInfo?.doorRearLeft?.condition),
          ],
          [
            "",
            "RHS Rear",
            formatArrayString(allCarInfo?.doorRearRight?.condition),
          ],
          [
            "",
            "RHS Front",
            formatArrayString(allCarInfo?.doorFrontRight?.condition),
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
}

export default getCarExteriorTyre;
