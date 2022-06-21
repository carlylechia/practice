import Link from "next/link"
import styles from '../../styles/Home.module.css'
import { getSession, useSession } from "next-auth/react"

function NewsList({ articles }) {
  const { status } = useSession()

  if(status === 'authenticated') {
    return (
      <>
        <div className={styles.footer}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href={`news/${articles.category='Sports'}`}>
            <a>Sports</a>
          </Link>
          <Link href={`news/${articles.category='Politics'}`}>
            <a>Politics</a>
          </Link>
          <Link href={`news/${articles.category='Entertainment'}`}>
            <a>Entertainment</a>
          </Link>
        </div>
        <h2>List of News Articles</h2>
        <hr />
        {articles.map(article => {
          return (
            <div key={article.id}>
              <h3>
                {article.id} {article.title} | {article.category}
              </h3>
            </div>
          )
        })}
      </>
    )
  }
  return (
  <>
    <div className={styles.footer}>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
    <h2>List of News Articles</h2>
    <hr />
    {articles.map(article => {
      return (
        <div key={article.id}>
          <h3>
            {article.id}, {article.title}
          </h3>
          <p className={styles.description}>{article.description}</p>
          <h4>{article.category}</h4>
        </div>
      )
    })}
    </>
  )
}

export default NewsList

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(session) {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    console.log('Pre-rendering List of News Articles')
  
    return {
      props: {
        articles: data,
      }
    }
  }
  
  return {
    redirect: {
      destination: '/api/auth/signin?callbackUrl=http://localhost:3000/news',
      permanent: false
    }
  }

}