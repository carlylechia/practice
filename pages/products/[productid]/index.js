import Head from "next/head"
import { useRouter } from "next/router"

function ProductDetails() {
  const router = useRouter()
  const productId = router.query.productid
  return (
    <>
      <Head>
        <title>Product {productId}</title>
      </Head>
      <h2>Details about product {productId}</h2>
    </>
  )
}

export default ProductDetails
