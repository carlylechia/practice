import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('Placing your order...')
    router.push('products')
  }
  return (
    <>
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
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home