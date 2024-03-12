import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatArrayString } from "@/utils/format-array-string";
import { formatString } from "@/utils/format-string";

export function getEngineTransmission(
  carReportsData?: CarReportData,
  colors?: PdfColors,
) {
  const allCarInfo = carReportsData?.allCarInfo;
  return [
    {
      text: "Engine & Transmission",
      margin: [0, 20, 0, 5],
      decoration: "underline",
      decorationStyle: "dashed",
      decorationColor: colors?.header,
    },
    {
      style: "carDetailTable",
      table: {
        widths: ["*", "*", "*"],
        dontBreakRows: true,
        body: [
          [
            { text: "Engine" },
            "",
            formatArrayString(allCarInfo?.engine?.condition),
          ],
          [
            { text: "Battery" },
            "",
            formatArrayString(allCarInfo?.battery?.condition),
          ],
          [
            { text: "Engine Oil" },
            "",
            formatArrayString(allCarInfo?.engineOil?.condition),
          ],
          [{ text: "Coolant" }, "", formatString(allCarInfo?.coolant)],
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

export default getEngineTransmission;
