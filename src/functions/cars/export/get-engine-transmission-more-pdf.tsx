import { CarReportData } from "@/services/cars/report/types";
import { formatArrayString } from "@/utils/format-array-string";
import { formatString } from "@/utils/format-string";

export function getEngineTransmissionMore(carReportsData?: CarReportData) {
  const allCarInfo = carReportsData?.allCarInfo;
  return [
    {
      text: "Engine & Transmission",
      margin: [0, 20, 0, 5],
    },
    {
      style: "carDetailTable",
      table: {
        widths: ["*", "*", "*"],
        dontBreakRows: true,
        body: [
          [
            { text: "Engine Mounting" },
            "",
            formatArrayString(allCarInfo?.mount?.condition),
          ],
          [{ text: "Engine Sound" }, "", formatString(allCarInfo?.engineSound)],
          [
            { text: "Engine Permissible Blow by" },
            "",
            formatArrayString(allCarInfo?.blowBy?.condition),
          ],
          [
            { text: "Clutch" },
            "",
            formatArrayString(allCarInfo?.clutch?.condition),
          ],
          [
            { text: "Gear Shifting" },
            "",
            formatString(allCarInfo?.transmission),
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

export default getEngineTransmissionMore;
