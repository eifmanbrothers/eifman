const ListEventsBileter = ({ list = [] }) => {
  console.log(list);
  return (
    <ul>
      {list.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
};

export default ListEventsBileter;
