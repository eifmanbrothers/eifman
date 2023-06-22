export default (inputData, arr, locale) => {
  const neededTheatre = arr.find((el) => el.inputData === inputData);
  return neededTheatre ? neededTheatre[locale] : "add address to config file";
};
