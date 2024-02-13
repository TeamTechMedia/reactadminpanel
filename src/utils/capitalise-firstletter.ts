export const capitaliseFirstLetter = (text: string) => {
  return text ? text?.charAt(0).toUpperCase() + text?.slice(1) : "";
};
