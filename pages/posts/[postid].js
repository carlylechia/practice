import { useRouter } from "next/router";

function PostDetails({ post }) {
  const router = useRouter()

  if(router.isFallback) {
    return <h3>Loading...</h3>
  }
  return(
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <hr />
      <p>{post.body}</p>
    </>
  )
}

export default PostDetails

export async function getStaticPaths() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await response.json()
  //  const paths = data.map(post => {
  //   return {
  //     params: {postid: `${post.id}`},
  //   }
  //  })

  return {
    paths: [
      {
        params: {postid: '1'},
      },
      {
        params: {postid: '2'},
      },
      {
        params: {postid: '3'},
      },
      {
        params: {postid: '4'},
      },
      {
        params: {postid: '5'},
      },
      {
        params: {postid: '6'},
      },
      {
        params: {postid: '7'},
      },
      {
        params: {postid: '8'},
      },
      {
        params: {postid: '9'},
      },
      {
        params: {postid: '10'},
      },
    ],
    // paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
  const data = await response.json()
  console.log(`Generating page for /posts/${params.postid}`)

  if(!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  }
}