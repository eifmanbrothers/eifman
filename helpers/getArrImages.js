import { API_URL } from "configs/variables";

export const getLinks = (arr = []) => {
  const newArr = [];
  arr.forEach((element) => {
    const { attributes } = element;
    const path = API_URL + attributes.url;
    newArr.push(path);
  });
  return newArr;
};
