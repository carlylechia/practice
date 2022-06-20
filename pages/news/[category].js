import styles from '../../styles/Home.module.css'

function CategoryDisplay({ articles, category }) {
  return (
    <>
      <h2>News Articles Under {category} Category</h2>
      <hr />
      {articles.map(article => {
        return (
          <div key={article.id}>
            <h3>
              {article.id} {article.title} | <i>{article.category}</i>
            </h3>
            <p className={styles.description}>{article.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )

}

export default CategoryDisplay

export async function getServerSideProps(context) {
  const { params } = context
  const { category } = params

  const response = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json()
  console.log(`Pre-rendering News Articles For ${category} Category`)

  return {
    props: {
      articles: data,
      category
    }
  }
}