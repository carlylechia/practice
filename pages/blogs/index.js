import Link from "next/link"
import styles from '../../styles/Home.module.css'

function Blogs() {
  return (
    <>
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <h2>Blogs homepage!</h2>
    </>
  )
}

export default Blogs
