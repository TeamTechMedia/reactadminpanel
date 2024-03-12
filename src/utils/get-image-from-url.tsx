import axios from "axios";

export async function getImageFromURL(url: string) {
  if (!url) {
    return null;
  }

  const response = await axios(url, {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
    responseType: "blob",
  });

  const reader = new window.FileReader();
  reader.readAsDataURL(response.data);

  return new Promise((resolve) => {
    reader.onload = function () {
      const imageDataUrl = reader.result;
      resolve(imageDataUrl);
    };
  });
}
