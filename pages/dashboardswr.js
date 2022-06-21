import useSWR from "swr";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from '../styles/Home.module.css'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data
}

function Dashboardswr() {
  const { status } = useSession()
  const { data, error } = useSWR('dashboard', fetcher)

  if(error) return 'An error has occured!'
  if(!data) return 'Loading...'

  if(status === 'authenticated') {
    return (
      <>
        <Head>
          <title>User Dashboard</title>
        </Head>
        <div className={styles.footer}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <h2>Your Dashboard Credentials</h2>
        <hr />
        <h4>Posts - {data.posts}</h4>
        <h4>Likes - {data.likes}</h4>
        <h4>Followers - {data.followers}</h4>
        <h4>Following - {data.following}</h4>
      </>
    )
  }

  return (
    <>
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <h3>Please sign in to access your dashboard.</h3>
    </>
  )

}

export default Dashboardswr
