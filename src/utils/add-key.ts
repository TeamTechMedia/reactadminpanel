export const addKey = (arr: any[], key: string, valueKey: string) => {
  return (
    arr &&
    arr.length &&
    arr.map((obj) => ({
      ...obj,
      [key]: obj[valueKey],
    }))
  );
};
