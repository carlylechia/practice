import { useRouter } from "next/router"
import Link from "next/link"
import styles from '../../styles/Home.module.css'

function Docs() {
  const router = useRouter()
  const { params = [] } = router.query

  if(params.length === 2) {
    return <h2>Viewing docs for {params[0]} and {params[1]}.</h2>
  } else if(params.length === 1) {
    return <h2>Viewing docs for {params[0]}.</h2>
  }
  return (
    <>
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <h2>Docs Home Page</h2>
    </>
  )
}

export default Docs
