const ListEventsBileter = ({ list = [] }) => {
  console.log(1, list);
  const arr = list.reduce((obj,el)=> {
  console.log(2,el)
  return obj 
  },[])
  console.log(3, arr)
  // console.log(1, list[0][1][0]);
  return (
    <ul>
      {/* {list.map((el, index) => (
        <li key={index}>{el}</li>
      ))} */}
    </ul>
  );
};

export default ListEventsBileter;
