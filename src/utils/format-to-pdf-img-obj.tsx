const formatToPdfImgObj = (str: any[]) => {
  const stringArray = str.map(
    (item: { downloadLink: string; type: string }) => {
      return {
        [item.type]: {
          url: item.downloadLink,
          headers: {
            myheader: item.type,
          },
        },
      };
    },
  );

  return stringArray;
};

export default formatToPdfImgObj;
