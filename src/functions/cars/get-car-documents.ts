import { CarDocs } from "@/services/cars/documents/types";

type DocTypes =
  | "rcFront"
  | "rcBack"
  | "chassisImage"
  | "nocImage"
  | "form35Image";

export function getCarDocuments(docData?: CarDocs) {
  if (!docData) return [];

  const documents = [];

  const documentTypes: Record<DocTypes, string> = {
    rcFront: "RC Front",
    rcBack: "RC Back",
    chassisImage: "Chassis Impression Image",
    nocImage: "Loan NOC",
    form35Image: "Form 35",
  };

  for (const [key, type] of Object.entries(documentTypes)) {
    if (docData[key as DocTypes]) {
      documents.push({
        type,
        thumbnail: docData[key as DocTypes].url,
        downloadLink: docData[key as DocTypes].url,
      });
    }
  }

  return documents;
}
