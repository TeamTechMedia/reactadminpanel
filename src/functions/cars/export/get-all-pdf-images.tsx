import { CarReportData } from "@/services/cars/report/types";

function getAllPdfImages(
  title: string,
  carReportsData?: CarReportData,
  images?: { [key: string]: any },
) {
  const mappedImages = Object.keys(images || {}).map((element) => {
    return {
      image: images?.[element]?.headers?.myheader,
      text: images?.[element]?.headers?.myheader,
      width: 250,
      height: 250,
      margin: [0, 10, 0, 10],
    };
  });

  const hasImages = images ? Boolean(Object.keys(images).length) : false;

  if (carReportsData && hasImages) {
    const groupedImages = [];
    for (let i = 0; i < mappedImages.length; i += 2) {
      const pair = mappedImages.slice(i, i + 2);
      groupedImages.push(pair);
    }
    return [
      {
        text: title,
        margin: [0, 10, 0, 10],
      },
      ...groupedImages.map((pair) => ({
        columns: pair.map((img) => [
          {
            text: img.text,
            alignment: "left",
            margin: [0, 10, 0, 10],
            fontSize: 12,
          },
          {
            image: img.image,
            width: img.width,
            height: img.height,
          },
        ]),
        margin: [0, 5, 0, 5],
      })),
    ];
  }
  return [];
}

export default getAllPdfImages;
