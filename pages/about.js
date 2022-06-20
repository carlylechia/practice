import Link from "next/link"
import styles from '../styles/Home.module.css'

function About() {
  return (
    <>
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <h1>About Page</h1>
    </>
  )
}

export default About