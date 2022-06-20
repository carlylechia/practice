import Link from "next/link"
import styles from '../../styles/Home.module.css'

function NewsList({ articles }) {
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

export default NewsList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()
  console.log('Pre-rendering List of News Articles')

  return {
    props: {
      articles: data,
    }
  }
}