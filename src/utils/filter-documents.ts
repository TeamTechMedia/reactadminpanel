export function filterDocuments(arr: any[]) {
  return arr
    ?.map((obj) => {
      if (obj.url) {
        return { type: obj.label, thumbnail: obj.url, downloadLink: obj.url };
      } else return;
    })
    ?.filter(Boolean);
}

export default filterDocuments;
