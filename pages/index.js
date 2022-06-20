import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'

function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('Placing your order...')
    router.push('products')
  }
  return (
    <>
      <div className={styles.footer}>
        <Link href='about'>
          <a>About</a>
        </Link>
        <Link href='profile'>
          <a>Profile</a>
        </Link>
        <Link href='blogs'>
          <a>Blogs</a>
        </Link>
        <Link href='docs'>
          <a>Docs</a>
        </Link>
        <Link href='products'>
          <a>Products</a>
        </Link>
        <Link href='users'>
          <a>Users</a>
        </Link>
        <Link href='posts'>
          <a>Posts</a>
        </Link>
        <Link href='news'>
          <a>News</a>
        </Link>
        <Link href='dashboardswr'>
          <a>Dashboard</a>
        </Link>
        <Link href='events'>
          <a>Events</a>
        </Link>
      </div>  
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.description}>This is a project I, Carlyle, used to study, and practice Next.js. It is also my very first Next.js application. So... <br /><i><b>Hello  Next.js World!</b></i></p>
      <p className={styles.description}>This is a project I, Carlyle, used to study, and practice Next.js. It is also my very first Next.js application. So... <br /><i><b>Hello  Next.js World!</b></i></p>
      <p className={styles.description}>This is a project I, Carlyle, used to study, and practice Next.js. It is also my very first Next.js application. So... <br /><i><b>Hello  Next.js World!</b></i></p>
      <p className={styles.description}>This is a project I, Carlyle, used to study, and practice Next.js. It is also my very first Next.js application. So... <br /><i><b>Hello  Next.js World!</b></i></p>
      <p className={styles.description}>This is a project I, Carlyle, used to study, and practice Next.js. It is also my very first Next.js application. So... <br /><i><b>Hello  Next.js World!</b></i></p>
      <p className={styles.description}>This is a project I, Carlyle, used to study, and practice Next.js. It is also my very first Next.js application. So... <br /><i><b>Hello  Next.js World!</b></i></p>
      <button onClick={handleClick} className={styles.btn}>Place Order</button>
    </>
  )
}

export default Home