import { useRouter } from "next/router"

function ProductDetails() {
  const router = useRouter()
  const productId = router.query.productid
  return <h2>Details about product {productId}</h2>
}

export default ProductDetails
