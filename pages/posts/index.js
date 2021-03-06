import Link from 'next/link'
import styles from '../../styles/Home.module.css'

function PostList({ posts }) {

  return (
    <>
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <h1>List of Posts</h1>
      <hr />
      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id}. {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  console.log('Generating / Regenerating posts')
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  }
}