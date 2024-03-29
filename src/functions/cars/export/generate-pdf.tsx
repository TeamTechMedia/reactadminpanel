import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import getPdfColors from "./get-pdf-colors";
import getHeader from "./get-header";
import { getCarBasic } from "./get-car-basic-pdf";
import getCarDetails from "./get-car-details";
import getCarExteriorTyre from "./get-car-exterior-tyre";
import getCarExteriorTyreMore from "./get-car-exterior-more-pdf";
import { getFooter } from "./get-footer";
import getEngineTransmission from "./get-engine-transmission-pdf";
import getSteeringBrakesAC from "./get-steering-brakes-ac-pdf";
import { CarReportData } from "@/services/cars/report/types";
import { CarData } from "@/services/cars/list/types";
import { CarDocs } from "@/services/cars/documents/types";
import getAllPdfImages from "./get-all-pdf-images";
import getCarsImagesPdf from "./get-cars-images-pdf";
import getCarElectricalInterior from "./get-car-electrical-and-interior";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  Roboto: {
    normal: "Roboto-Regular.ttf",
    bold: "Roboto-Medium.ttf",
    italics: "Roboto-Italic.ttf",
    bolditalics: "Roboto-Italic.ttf",
  },
};

const generateCarPdf = async (
  action: "download" | "print",
  carReportsData?: CarReportData,
  carData?: CarData,
  carDocs?: CarDocs,
  headerLogo?: string,
) => {
  const colors = getPdfColors();
  const header = getHeader(colors, carData, headerLogo);
  const footer = getFooter();
  const basicCar = getCarBasic(colors, carData, carReportsData, carDocs);
  const carDetails = getCarDetails(carReportsData, carDocs, colors, carData);
  const carExterior = getCarExteriorTyre(carReportsData, colors);
  const carExteriorMore = getCarExteriorTyreMore(carReportsData, colors);
  const carElectricalInterior = getCarElectricalInterior(
    carReportsData,
    colors,
  );
  const engineTransmission = getEngineTransmission(carReportsData, colors);
  const steeringBrakesAC = getSteeringBrakesAC(carReportsData, colors);
  // For Images
  const { engineImgs, exteriorImgs, interiorImgs } =
    getCarsImagesPdf(carReportsData);
  const images = { ...engineImgs, ...exteriorImgs, ...interiorImgs };

  const pdfImagesExt = getAllPdfImages(
    "Images - Exterior & Tyre",
    carReportsData,
    exteriorImgs,
  );

  const pdfImagesEng = getAllPdfImages(
    "Images - Engine + Transmission",
    carReportsData,
    engineImgs,
  );

  const pdfImagesInt = getAllPdfImages(
    "Images - Steering/Suspension + Brakes + AC",
    carReportsData,
    interiorImgs,
  );

  const dd = {
    pageSize: "LEGAL",
    pageMargins: [40, 80, 40, 60],
    header: [...header],
    content: [
      ...basicCar,
      ...carDetails,
      ...carExterior,
      ...carExteriorMore,
      ...carElectricalInterior,
      ...engineTransmission,
      ...steeringBrakesAC,
      ...pdfImagesExt,
      ...pdfImagesEng,
      ...pdfImagesInt,
    ],
    footer: [...footer],
    styles: {
      header: {
        color: colors.header,
      },
      tableExample: {
        margin: [0, 5, 0, 0],
      },
      carDetailTable: {
        margin: [0, 5, 0, 0],
        fontSize: 12,
      },
    },
    images: images,
    defaultStyle: {
      fontSize: 15,
      bold: true,
    },
  };

  if (carData) {
    if (action === "download") {
      return pdfMake
        .createPdf(dd as any)
        .download(`MeraCars - ${carData?.make + carData?.model}`);
    }

    return pdfMake.createPdf(dd as any).open();
  }
};
export default generateCarPdf;
