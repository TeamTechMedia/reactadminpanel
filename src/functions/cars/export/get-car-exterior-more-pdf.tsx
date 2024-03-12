import { CarReportData } from "@/services/cars/report/types";
import { PdfColors } from "@/types/cars/pdf";
import { formatArrayString } from "@/utils/format-array-string";
import { formatString } from "@/utils/format-string";

export function getCarExteriorTyreMore(
  carReportsData?: CarReportData,
  colors?: PdfColors,
) {
  const allCarInfo = carReportsData?.allCarInfo;
  return [
    {
      text: "Exterior & Tyre",
      margin: [0, 90, 0, 5],
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
            { rowSpan: 6, text: "Pillar", alignment: "left" },
            "LH-A Pillar",
            formatArrayString(allCarInfo?.leftApillar?.condition),
          ],
          [
            "",
            "LH-B Pillar",
            formatArrayString(allCarInfo?.leftBpillar?.condition),
          ],
          [
            "",
            "LH-C Pillar",
            formatArrayString(allCarInfo?.leftCpillar?.condition),
          ],
          [
            "",
            "RH-A Pillar",
            formatArrayString(allCarInfo?.rightApillar?.condition),
          ],
          [
            "",
            "RH-B Pillar",
            formatArrayString(allCarInfo?.rightBpillar?.condition),
          ],
          [
            "",
            "RH-C Pillar",
            formatArrayString(allCarInfo?.rightCpillar?.condition),
          ],
          [
            { rowSpan: 2, text: "Running Border", alignment: "left" },
            "LHS",
            formatArrayString(allCarInfo?.runnningBorderLeft?.condition),
          ],
          [
            "",
            "RHS",
            formatArrayString(allCarInfo?.runnningBorderRight?.condition),
          ],
          [
            { rowSpan: 2, text: "Quarter Panel", alignment: "left" },
            "LHS",
            formatArrayString(allCarInfo?.quarterPanelLeft?.condition),
          ],
          [
            "",
            "RHS",
            formatArrayString(allCarInfo?.quarterPanelRight?.condition),
          ],
          [
            { text: "Dicky Door" },
            "",
            formatArrayString(allCarInfo?.dickyDoor?.condition),
          ],
          [
            { rowSpan: 2, text: "Apron", alignment: "left" },
            "LH",
            formatArrayString(allCarInfo?.apronLeft?.condition),
          ],
          ["", "RH", formatArrayString(allCarInfo?.apronRight?.condition)],
          [
            { text: "Firewall" },
            "",
            formatArrayString(allCarInfo?.firewall?.condition),
          ],
          [
            { text: "Cowl Top" },
            "",
            formatArrayString(allCarInfo?.cowlTop?.condition),
          ],
          [
            { text: "Lower Cross Member" },
            "",
            formatArrayString(allCarInfo?.lowerCrossMember?.condition),
          ],
          [
            { text: "Upper Cross Member" },
            "",
            formatArrayString(allCarInfo?.upperCrossMember?.condition),
          ],
          [
            { text: "HeadLight Support" },
            "",
            formatArrayString(allCarInfo?.headLightSupport?.condition),
          ],
          [
            { rowSpan: 2, text: "Windshield" },
            "Front",
            formatArrayString(allCarInfo?.frontWindShield?.condition),
          ],
          [
            "",
            "Rear",
            formatArrayString(allCarInfo?.rearWindShield?.condition),
          ],
          [
            { text: "Side mirror" },
            "",
            formatArrayString(allCarInfo?.rearViewMirror?.condition),
          ],
          [
            { rowSpan: 2, text: "Rear View Mirror", alignment: "left" },
            "LH",
            formatArrayString(allCarInfo?.rearViewMirrorLeft?.condition),
          ],
          [
            "",
            "RH",
            formatArrayString(allCarInfo?.rearViewMirrorRight?.condition),
          ],
          [
            { rowSpan: 2, text: "Headlights", alignment: "left" },
            "LH",
            formatArrayString(allCarInfo?.headLightLeft?.condition),
          ],
          ["", "RH", formatArrayString(allCarInfo?.headLightRight?.condition)],
          [
            { rowSpan: 2, text: "Fog light", alignment: "left" },
            "LH",
            formatString(allCarInfo?.fogLamps),
          ],
          ["", "RH", "Good"],
          [
            { rowSpan: 2, text: "Tail light", alignment: "left" },
            "LH",
            formatArrayString(allCarInfo?.tailLightLeft?.condition),
          ],
          ["", "RH", formatArrayString(allCarInfo?.tailLightRight?.condition)],
          [
            { text: "Alloy Wheel" },
            "",
            formatArrayString(allCarInfo?.alloyWheels),
          ],
          [
            { text: "LHS front" },
            "",
            formatArrayString(allCarInfo?.frontLeft?.condition),
          ],
          [
            { text: "RHS front" },
            "",
            formatArrayString(allCarInfo?.frontRight?.condition),
          ],
          [
            { text: "LHS rear" },
            "",
            formatArrayString(allCarInfo?.rearLeft?.condition),
          ],
          [
            { text: "RHS rear" },
            "",
            formatArrayString(allCarInfo?.rearRight?.condition),
          ],
          [
            { text: "Spare tyre" },
            "",
            formatArrayString(allCarInfo?.spareWheel?.condition),
          ],
          [
            { text: "Front Grill" },
            "",
            formatArrayString(allCarInfo?.grill?.condition),
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

export default getCarExteriorTyreMore;
