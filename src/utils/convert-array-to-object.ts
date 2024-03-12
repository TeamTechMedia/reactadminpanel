export function arrayToObject(array: any[]) {
  const result: any = {};

  array.forEach((obj) => {
    const key = Object.keys(obj)[0];
    result[key] = obj[key];
  });

  return result;
}
