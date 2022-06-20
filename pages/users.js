import User from "../components/user"

function UsersList({ users }) {
  return (
    <>
      <h2>List of Users</h2>
      <hr />
      {users.map((user) => {
        return (
        <>
          <ul key={user.id}>
            <User user={user} />
          </ul>
          <hr />
        </>
      )})}
    </>
  )
}

export default UsersList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  // console.log(data)
  return {
    props: {
      users: data,
    },
  }
}