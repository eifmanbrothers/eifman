export default () => {
  const date = new Date();
  return (
    date.getFullYear() + 1 + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};
