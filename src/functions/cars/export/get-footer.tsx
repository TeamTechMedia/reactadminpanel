export const getFooter = () => {
  return [
    {
      canvas: [
        {
          type: "rect",
          x: 5,
          y: 0,
          w: 580,
          h: 1,
          color: "#dfdfdf",
        },
      ],
      margin: [10, 10, 10, 10],
    },
    {
      text: [
        {
          text: "TEAMTECH MEDIA PRIVATE LIMITED. \n",
          fontSize: 10,
          bold: true,
        },
        "DOOR NO. 71/232, PUTHIYAMADEM PARAMBIL, ELATHUR VILLAGE, ATHANIKKAL, WESTHILL, KANNUR ROAD",
      ],
      alignment: "center",
      fontSize: 8,
    },
  ];
};
