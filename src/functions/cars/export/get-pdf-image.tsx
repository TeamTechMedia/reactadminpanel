import filterDocuments from "@/utils/filter-documents";
import formatToPdfImgObj from "@/utils/format-to-pdf-img-obj";
import { arrayToObject } from "@/utils/convert-array-to-object";

function getPdfImages(data: any) {
  if (data) {
    const filteredImgs = filterDocuments(data);
    const formattedImgs = formatToPdfImgObj(filteredImgs);
    return arrayToObject(formattedImgs);
  }
}

export default getPdfImages;
