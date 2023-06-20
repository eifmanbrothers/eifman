export default (inputData, arr, locale) => {
  const neededName = arr.find((el) => el.inputData === inputData);
  return neededName ? neededName[locale] : inputData;
};
