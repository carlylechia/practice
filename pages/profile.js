import Link from "next/link"
import styles from '../styles/Home.module.css'


function Profile() {
  return (
    <>
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <h1>Profile Page</h1>
    </>
  )
}

export default Profile
