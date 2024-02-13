export const filterObjects = (arr: any[]) => {
  if (arr && arr.length) {
    return arr.filter((item) => {
      return typeof item === "object";
    });
  } else return [];
};
