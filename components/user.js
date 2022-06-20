function User({ user }) {
  return (
    <>
      <p>SN: {user.id}</p>
      <li>Name: {user.name}</li>
      <li>Email: {user.email}</li>
      <li>phone: {user.phone}</li>
      <li>city: {user.address.city}</li>
    </>
  )
}

export default User
