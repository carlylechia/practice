import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data
}

function Dashboardswr() {
  const { data, error } = useSWR('dashboard', fetcher)

  if(error) return 'An error has occured!'
  if(!data) return 'Loading...'

  return (
    <>
      <h2>Your Dashboard Credentials</h2>
      <hr />
      <h4>Posts - {data.posts}</h4>
      <h4>Likes - {data.likes}</h4>
      <h4>Followers - {data.followers}</h4>
      <h4>Following - {data.following}</h4>
    </>
  )
}

export default Dashboardswr
