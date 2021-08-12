import Api from "./api";
export const API = Api;

export const filterCharacterByName = (data = [], text = "") => {
  if (text === "") {
    return data;
  }
  return data.filter((item) => {
    let pattren1 = text.slice(0, 1).toLowerCase() + text.slice(1, text.length);
    let pattren2 = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
    let pattren3 = text.toUpperCase();
    let pattren4 = text.toLowerCase();
    return (
      item.name.includes(text) ||
      item.name.includes(pattren1) ||
      item.name.includes(pattren2) ||
      item.name.includes(pattren3) ||
      item.name.includes(pattren4)
    );
  });
};
