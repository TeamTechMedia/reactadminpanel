const filterArray = (arr: string[]) => {
  if (Array.isArray(arr)) {
    return arr.filter((item) => item !== "");
  } else return [];
};

export default filterArray;
