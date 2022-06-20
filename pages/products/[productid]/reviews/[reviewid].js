import { useRouter } from "next/router";

function Review() {
  const router = useRouter()
  const { productid, reviewid } = router.query

  return <h2>This is review {reviewid} for product {productid}.</h2>
}

export default Review
