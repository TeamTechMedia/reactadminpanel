import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatArrayString } from "@/utils/format-array-string";
import { formatString } from "@/utils/format-string";

export function getSteeringBrakesAC(
  carReportsData?: CarReportData,
  colors?: PdfColors,
) {
  const allCarInfo = carReportsData?.allCarInfo;
  return [
    {
      text: "Steering/Suspension + Brakes + AC",
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
            { text: "Steering" },
            "",
            formatArrayString(allCarInfo?.steeringWheel),
          ],
          [
            { text: "Suspension" },
            "",
            formatArrayString(allCarInfo?.suspension),
          ],
          [{ text: "Brake" }, "", formatString(allCarInfo?.brakes)],
          [
            { text: "AC Cooling" },
            "",
            formatArrayString(allCarInfo?.airCooling),
          ],
          [{ text: "Heater" }, "", formatString(allCarInfo?.heater)],
          [
            { text: "Climate Control AC" },
            "",
            formatString(allCarInfo?.climateControl),
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

export default getSteeringBrakesAC;
