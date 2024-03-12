import getCarExterior from "../get-car-exterior";
import { CarReportData } from "@/services/cars/report/types";
import getPdfImages from "./get-pdf-image";

const getExteriorImagePdf = (carReportsData?: CarReportData) => {
  const { exterior }: any = getCarExterior(carReportsData as CarReportData);
  if (exterior) {
    const exteriorImgs = getPdfImages(exterior);

    return exteriorImgs;
  }
};

export default getExteriorImagePdf;
