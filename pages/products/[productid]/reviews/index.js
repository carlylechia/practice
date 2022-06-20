import { useRouter } from "next/router";

function Reviews() {
  const router = useRouter()
  const { productid } = router.query

  return <h2>These are the reviews for product {productid}.</h2>
}

export default Reviews