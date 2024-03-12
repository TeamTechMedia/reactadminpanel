export function combineArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((combinedArray: T[], currentArray: T[]) => {
    if (Object.keys(combineArrays).length && Object.keys(currentArray).length) {
      return [...combinedArray, ...currentArray];
    } else return [];
  }, []);
}
