import { useState, useEffect } from "react"

function Dashboard() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [credentials, setCredentials] = useState(null)

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      setIsLoading(false)
      setCredentials(data)
    }
    fetchCredentials()
  }, [])

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Your Dashboard Credentials</h2>
      <hr />
      <h4>Posts - {credentials.posts}</h4>
      <h4>Likes - {credentials.likes}</h4>
      <h4>Followers - {credentials.followers}</h4>
      <h4>Following - {credentials.following}</h4>
    </div>
  )
}

export default Dashboard