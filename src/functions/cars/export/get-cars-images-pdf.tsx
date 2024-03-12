import { CarReportData } from "@/services/cars/report/types";
import getExteriorImagePdf from "./get-exterior-images-pdf";
import getCarEngine from "../get-car-engine";
import getPdfImages from "./get-pdf-image";
import getCarInterior from "../get-car-interior";
import { videoFormats } from "@/components/ui/utility/FileTile";

function filterArrayUrlWithExt(arr: any[], ext: string[]) {
  return arr
    .map((item) => {
      if (!ext.includes(item?.url?.slice(-3))) {
        return { ...item };
      }
    })
    .filter(Boolean);
}

const getCarsImagesPdf = (carReportsData?: CarReportData) => {
  // Exterior & Tyre Images
  const exteriorImgs = getExteriorImagePdf(carReportsData) || [];
  // Engine & Transmission Images
  const { engine } = getCarEngine(carReportsData as CarReportData);
  // To filter Video Files Here
  const engineFiltered = filterArrayUrlWithExt(engine, videoFormats);
  const engineImgs = getPdfImages(engineFiltered) || [];
  // Steering/Suspension + AC + Brakes
  const { interior } = getCarInterior(carReportsData as CarReportData);
  const interiorImgs = getPdfImages(interior) || [];
  return {
    exteriorImgs,
    engineImgs,
    interiorImgs,
  };
};

export default getCarsImagesPdf;
