import Link from "next/link"
import { useEffect, useState } from "react"

const Users = ({ users }) => {
  // const [users, setUsers] = useState([])

  useEffect(() => {
    // const req = async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const data = await response.json()
    //   setUsers(data)
    // }
    // req()
  }, [])

  console.log(users)

  return (
    <div>
      <h1>
        Страница пользователей
      </h1>
      <Link href="/">
        <a>Главная</a>
      </Link>
      {
        users.map((el) => <p key={el.id}>{el.name}</p>)
      }
    </div>
  )
}

export default Users

export async function getStaticProps(context) {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  // setUsers(data)
  return {
    props: { users }, // will be passed to the page component as props
  }
}

// Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state